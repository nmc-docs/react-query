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

| Property     | Return value                                                                                                                                                                                                                                                           |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`     | `loading`: nếu query đang được nạp vào cache. Lúc này data của query chưa có và (đang thực hiện [cache request network](./#phân-biệt-hai-loại-request-trong-react-query))<br />`success`: nếu query phản hồi thành công<br />`error`: nếu query phản hồi có lỗi xảy ra |
| `isFetching` | Trả về `true` nếu query đang thực hiện refetch (gửi [refetch request network](./#phân-biệt-hai-loại-request-trong-react-query) để lấy data mới nhất). Lúc này data của query vẫn có nhưng là data cũ và query vẫn đang được lưu ở trong cache                          |
| `data`       | Trả về dữ liệu lấy được từ server                                                                                                                                                                                                                                      |
| `error`      | Trả về lỗi mà server phản hồi trong quá trình thực hiện query                                                                                                                                                                                                          |

| Method      | Description                                                                                                                                                                             |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `refetch()` | Là một hàm để yêu cầu làm mới dữ liệu (gửi đi[refetch request network](./#phân-biệt-hai-loại-request-trong-react-query)).<br />Phương thức này trả về một Promise chứa dữ liệu mới nhất |
| `remove()`  | Là một hàm để xóa query ra khỏi cache. Phương thức này trả về kiểu void                                                                                                                 |

## Cấu hình cho useQuery()

- Ta cũng có thể tùy chọn cấu hình cho query, dưới đây là các cấu hình cơ bản:

| Config                 | Type              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `queryKey`             | Array             | Là một mảng[Query Keys](./querykeys-queryfunction#query-keys)                                                                                                                                                                                                                                                                                                                                                                                         |
| `queryFn`              | Function          | Là một[Query function](./querykeys-queryfunction#query-function)                                                                                                                                                                                                                                                                                                                                                                                      |
| `staleTime`            | Number            | Thiết lập thời gian mà data sẽ được coi là mới và trong thời gian này nếu query được gọi thì sẽ không gửi[refetch request network](./#phân-biệt-hai-loại-request-trong-react-query) để làm mới dữ liệu                                                                                                                                                                                                                                                |
| `cacheTime`            | Number            | Thiết lập thời gian mà query sẽ bị xóa khỏi cache sau khi không còn component nào subscribe query này                                                                                                                                                                                                                                                                                                                                                 |
| `onSuccess`            | Function          | Là một function nhận `data` làm parameter: `onSuccess: (data) => {}`<br />Parameter `data` cũng chính là thuộc tính `data` được trả về từ `useQuery()`<br />Hàm sẽ chạy sau khi query thực hiện thành công [cache/refetch request network](./#phân-biệt-hai-loại-request-trong-react-query).<br />Hàm này trả về kiểu void                                                                                                                            |
| `onError`              | Function          | Là một function nhận `error` (có thể là `AxiosError`) làm parameter: `onError: (error) => {}`<br />Parameter `error` cũng chính là thuộc tính `error` được trả về từ `useQuery()`.<br />Hàm sẽ chạy ngay sau khi có lỗi phát sinh khi thực hiện [cache/refetch request network](./#phân-biệt-hai-loại-request-trong-react-query).<br />Hàm này trả về kiểu void                                                                                       |
| `enabled`              | Boolean           | Nếu đặt là `false`, sẽ ngăn query thực hiện gửi request<br />Thích hợp để cho phép query được chạy khi một biến nào đó nhận có giá trị `true`                                                                                                                                                                                                                                                                                                         |
| `keepPreviousData`     | Boolean           | Khi[query keys](./querykeys-queryfunction#query-keys) thay đổi sẽ tạo ra một query mới và sẽ thực hiện [cache request network](./#phân-biệt-hai-loại-request-trong-react-query) để đưa query mới này vào cache. Lúc này nếu đặt `keepPreviousData` thành `true`, dữ liệu của query cũ vẫn sẽ được giữ chờ đến khi query mới được đưa vào cache và khi được đưa xong, dữ liệu query mới sẽ ghi đè dữ liệu cũ.<br />💎Thích hợp khi dùng cho phân trang |
| `refetchInterval`      | Number            | Thiết lập khoảng thời gian (tính bằng ms) giữa các lần query tự động thực hiện việc gửi[refetch request network](./#phân-biệt-hai-loại-request-trong-react-query) để làm mới dữ liệu                                                                                                                                                                                                                                                                  |
| `refetchOnWindowFocus` | Boolean ,`always` | `true`: query sẽ refetch khi ta focus vào trình duyệt nếu data stale<br />`false`: query sẽ không refetch khi ta focus vào trình duyệt<br />`always`: query sẽ refetch khi ta focus vào trình duyệt kể cả khi data fresh hoặc stale                                                                                                                                                                                                                   |
| `retry`                | Number            | Query sẽ thực hiện lại việc gửi request tối đa số lần ta chỉ định khi server phản hồi có lỗi xảy ra. Sau số lần retry này nếu server vẫn phản hồi lại lỗi thì lúc đó mới thực sự gửi lỗi về client                                                                                                                                                                                                                                                    |
| `retryDelay`           | Number            | Thời gian trì hoãn giữa các lần retry                                                                                                                                                                                                                                                                                                                                                                                                                 |

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
    onError: (error: AxiosError) => {
      console.log(error?.response?.status);
    },
    onSuccess: (data) => {
      console.log(data);
    },
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
