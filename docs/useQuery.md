---
sidebar_position: 3
---

# useQuery()

## useQuery() là gì?

- `useQuery()` là một hook phục vụ cho việc **GET** và cache dữ liệu từ server trả về

## Cú pháp của useQuery()

```ts
import { useQuery } from "@tanstack/react-query";

const myQuery = useQuery({
  /* Cấu hình cho useQuery() */
});
```

## Các thuộc tính, phương thức trả về từ useQuery()

| Property     | Return value                                                                                                                                                                                                                                  |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isLoading`  | Trả về `true` nếu đang thực hiện [cache request network](./#phân-biệt-hai-loại-request-trong-react-query)                                                                                                                                     |
| `isSuccess`  | Trả về `true` nếu thực hiện [cache request network](./#phân-biệt-hai-loại-request-trong-react-query) hoặc [refetch request network](./#phân-biệt-hai-loại-request-trong-react-query) thành công                                               |
| `isError`    | Trả về `true` nếu có lỗi xảy ra khi thực hiện [cache request network](./#phân-biệt-hai-loại-request-trong-react-query) hoặc [refetch request network](./#phân-biệt-hai-loại-request-trong-react-query)                                        |
| `isFetching` | Trả về `true` nếu query đang thực hiện refetch (gửi [refetch request network](./#phân-biệt-hai-loại-request-trong-react-query) để lấy data mới nhất). Lúc này data của query vẫn có nhưng là data cũ và query vẫn đang được lưu ở trong cache |
| `data`       | Trả về dữ liệu lấy được từ server                                                                                                                                                                                                             |
| `error`      | Trả về lỗi mà server phản hồi trong quá trình thực hiện query                                                                                                                                                                                 |

| Method      | Description                                                                                                                                                                                |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `refetch()` | Là một hàm để yêu cầu làm mới dữ liệu (gửi đi[refetch request network](./#phân-biệt-hai-loại-request-trong-react-query)).<br />Phương thức này trả về một Promise resolve dữ liệu mới nhất |

## Cấu hình cho useQuery()

- Ta cũng có thể tùy chọn cấu hình cho query, dưới đây là các cấu hình cơ bản:

| Config                        | Type                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `queryKey`                    | Array                                                    | Là một mảng[Query Keys](./querykeys-queryfunction#query-keys)                                                                                                                                                                                                                                                                                                                                                                                         |
| `queryFn`                     | Function                                                 | Là một[Query function](./querykeys-queryfunction#query-function)                                                                                                                                                                                                                                                                                                                                                                                      |
| `staleTime`                   | Number                                                   | Thiết lập thời gian mà data sẽ được coi là mới và trong thời gian này nếu query được gọi thì sẽ không gửi[refetch request network](./#phân-biệt-hai-loại-request-trong-react-query) để làm mới dữ liệu                                                                                                                                                                                                                                                |
| `gcTime`                      | Number                                                   | Thiết lập thời gian mà query sẽ bị xóa khỏi cache sau khi không còn component nào subscribe query này                                                                                                                                                                                                                                                                                                                                                 |
| `enabled`                     | Boolean                                                  | Nếu đặt là `false`, sẽ ngăn query thực hiện gửi request<br />Thích hợp để cho phép query được chạy khi một biến nào đó nhận có giá trị `true`                                                                                                                                                                                                                                                                                                         |
| `placeholderData`             | `keepPreviousData` imported from "@tanstack/react-query" | Khi[query keys](./querykeys-queryfunction#query-keys) thay đổi sẽ tạo ra một query mới và sẽ thực hiện [cache request network](./#phân-biệt-hai-loại-request-trong-react-query) để đưa query mới này vào cache. Lúc này nếu đặt `keepPreviousData` thành `true`, dữ liệu của query cũ vẫn sẽ được giữ chờ đến khi query mới được đưa vào cache và khi được đưa xong, dữ liệu query mới sẽ ghi đè dữ liệu cũ.<br />💎Thích hợp khi dùng cho phân trang |
| `refetchInterval`             | Number                                                   | Thiết lập khoảng thời gian (tính bằng ms) giữa các lần query tự động thực hiện việc gửi[refetch request network](./#phân-biệt-hai-loại-request-trong-react-query) để làm mới dữ liệu                                                                                                                                                                                                                                                                  |
| `refetchIntervalInBackground` | Boolean                                                  | Nếu đặt là `true`, nó sẽ refetch ngay cả khi trang web đang ở chế độ nền. Thường đi cùng với `refetchInterval`                                                                                                                                                                                                                                                                                                                                        |
| `refetchOnWindowFocus`        | Boolean ,`always`                                        | `true`: query sẽ refetch khi ta focus vào trình duyệt nếu data stale<br />`false`: query sẽ không refetch khi ta focus vào trình duyệt<br />`always`: query sẽ refetch khi ta focus vào trình duyệt kể cả khi data fresh hoặc stale                                                                                                                                                                                                                   |
| `retry`                       | Number                                                   | Query sẽ thực hiện lại việc gửi request tối đa số lần ta chỉ định khi server phản hồi có lỗi xảy ra. Sau số lần retry này nếu server vẫn phản hồi lại lỗi thì lúc đó mới thực sự gửi lỗi về client                                                                                                                                                                                                                                                    |
| `retryDelay`                  | Number                                                   | Thời gian trì hoãn giữa các lần retry                                                                                                                                                                                                                                                                                                                                                                                                                 |

## Ví dụ về useQuery()

```tsx
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";

const http = axios.create({
  baseURL: "https://6404cc9280d9c5c7bad0e2f2.mockapi.io/api/v1/",
});

interface Task {
  name: string;
}

const httpGet = async () => {
  const { data } = await http.get<Task[]>("tasks");
  return data;
};

export default function App() {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: httpGet,
  });

  return (
    <ul>
      {data?.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
}
```
