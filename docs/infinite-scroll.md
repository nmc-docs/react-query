---
sidebar_position: 6
---

# Infinite scroll với useInfiniteQuery()

## Infinite scroll là gì?

- **Infinite scroll** là tính năng cuộn vô hạn. Tức là cuộn trang web đến đâu sẽ hiển thị dữ liệu đến đó chứ không hiển thị một lúc hết dữ liệu. Và trong react query hỗ trợ xử lý tính năng này với `useInfiniteQuery()`
- `useInfiniteQuery()` là một hook được mở rộng từ `useQuery()`

## Cú pháp của useInfiniteQuery()

```ts
const myInfiniteQuery = useInfiniteQuery({
  /* Cấu hình cho useInfiniteQuery() */
});
```

## Các thuộc tính, phương thức trả về từ useInfiniteQuery()

- Vì `useInfiniteQuery()` là một hook được mở rộng từ `useQuery()` nên nó sẽ có tất cả các thuộc tính / phương thức trả về từ `useQuery()` . Nhưng có một số khác biệt sau:

| Property                 | Return value                                                                                                                                                                                                                                                                                                           |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                   | Vì `useInfiniteQuery()` không fetch hết toàn bộ dữ liệu một lúc mà nó fetch từng bộ dữ liệu một (một bộ có thể có 5, 10 phần tử tùy ta chỉ định).<br />Thuộc tính `data.pages` trả về một mảng chứa tất cả các bộ đã fetch được cho đến hiện tại, mỗi phần tử (bộ) lại là một mảng chứa các item là dữ liệu cần render |
| `hasNextPage`            | Trả về `true` nếu còn fetch xuôi thêm được nữa các bộ dữ liệu                                                                                                                                                                                                                                                          |
| `hasPreviousPage`        | Trả về `true` nếu còn fetch ngược thêm được nữa các bộ dữ liệu                                                                                                                                                                                                                                                         |
| `isFetchingNextPage`     | Trả về `true` nếu đang thực hiện việc fetch xuôi bộ dữ liệu mới                                                                                                                                                                                                                                                        |
| `isFetchingPreviousPage` | Trả về `true` nếu đang thực hiện việc fetch ngược bộ dữ liệu mới                                                                                                                                                                                                                                                       |

| Method                | Description                                 |
| --------------------- | ------------------------------------------- |
| `fetchNextPage()`     | Dùng để trigger fetch xuôi thêm bộ dữ liệu  |
| `fetchPreviousPage()` | Dùng để trigger fetch ngược thêm bộ dữ liệu |

## Cấu hình cho useInfiniteQuery()

Vì `useInfiniteQuery()` là một hook được mở rộng từ `useQuery()` nên nó sẽ có cấu hình tương tự như `useQuery()` . Nhưng có một số khác biệt sau:

| Config                 | Value    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `queryFn`              | Function | Nhận một function**return Promise**: `queryFn: ({ pageParam = 1 }) => {…}`<br />Ngoài các parameter detsructuring như `queryKey`, `signal` như ở `queryFn` trong `useQuery()`, còn có thêm `pageParams` là số thứ tự của page (bộ) để fetch                                                                                                                                                                                                           |
| `getNextPageParam`     | Function | `getNextPageParam: (lastPage, allPages) => {}`<br />- `lastPage`: là bộ cuối cùng đã được fetch, là một mảng chứa dữ liệu.<br />- `allPages`: là một mảng chứa tất cả các bộ đã fetch được.<br />Là một hàm return về một `number` là số thứ tự page (bộ) tiếp theo cần fetch theo thứ tự xuôi. <br />Nếu trả về `undefined`, sẽ không fetch thêm bộ nào nữa, và lúc đó thuộc tính `hasNextPage` sẽ trả về `false`                                    |
| `getPreviousPageParam` | Function | `getPreviousPageParam: (firstPage, allPages) => {}`<br />- `firstPage`: là bộ cuối cùng đã được fetch theo chiều ngược lại, là một mảng chứa dữ liệu.<br />- `allPages`: là một mảng chứa tất cả các bộ đã fetch được.<br />Là một hàm return về một `number` là số thứ tự page (bộ) tiếp theo cần fetch theo thứ tự ngược lại.<br />Nếu trả về `undefined`, sẽ không fetch thêm bộ nào nữa, và lúc đó thuộc tính `hasPreviousPage` sẽ trả về `false` |

## Ví dụ:

```tsx
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface Task {
  name: string;
}

const http = axios.create({
  baseURL: "https://6404cc9280d9c5c7bad0e2f2.mockapi.io/api/v1/",
});

const httpGetByPage = async (page: number) => {
  //Giới hạn mỗi bộ chứa 5 item cần render
  const { data } = await http.get<Task[]>(`tasks?page=${page}&limit=5`);
  return data;
};

export default function App() {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["tasks"],
    queryFn: ({ pageParam = 1 }) => httpGetByPage(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      //Nếu bộ cuối cùng đã được fetch không có item thì trả về undefined, dừng việc fetch bộ tiếp theo
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });

  return (
    <div>
      {data?.pages.map((page) => (
        <React.Fragment>
          {page.map((task, index) => (
            <p key={index}>{task.name}</p>
          ))}
        </React.Fragment>
      ))}
      <button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
        Load more
      </button>
    </div>
  );
}
```
