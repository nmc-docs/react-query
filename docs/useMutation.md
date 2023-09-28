---
sidebar_position: 5
---

# useMutation()

## useMutation() là gì?

- `useMutation()` là một hook phục vụ cho việc gửi yêu cầu **POST** , **PUT** , **DELETE** dữ liệu lên trên server

## Cú pháp của useMutation()

```ts
const myMutation = useMutation({
  /* Cấu hình cho useMutation() */
});
```

## Các thuộc tính, phương thức trả về từ useMutation()

| Property | Return value                                                                                                                        |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `status` | `loading`: nếu mutation đang thực thi<br />`success`: nếu mutation thực thi thành công<br />`error`: nếu mutation thực thi thất bại |
| `data`   | Trả về dữ liệu nhân được về từ server sau khi mutation thực thi thành công                                                          |
| `error`  | Trả về lỗi mà server phản hồi khi mutation thực thi thất bại                                                                        |

| Method          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mutate()`      | Dùng để trigger request (**POST** , **PUT** , **DELETE** ): Cú pháp: `mutate(variables, { onSuccess: (data) => {}, onError: (error) => {} });`<br />`variables`: parameter để truyền vào mutation function (đây có thể là dữ liệu phần body của request). Nếu có nhiều parameter muốn truyền vào mutation function, phải gói lại trong một object vì đây là biến đơn<br />`data`: dữ liệu nhận được từ server sau khi mutation thực thi thành công, nó chính là thuộc tính `data` trả về từ `useMutation()`<br />`error`: lỗi mà server trả về sau khi mutation thực thi thất bại, nó chính là thuộc tính `error` trả về từ `useMutation()` |
| `mutateAsync()` | Cấu hình giống như `mutate()`. Chỉ khác `mutate()` trả về kiểu void nên không thể dùng `await`, còn `mutateAsync()` trả về một **Promise** nên có thể sử dụng kèm với từ khóa `await` để chờ đợi mutation thực thi xong                                                                                                                                                                                                                                                                                                                                                                                                                     |

## Cấu hình cho useMutation()

| Config       | Type     | Description                                                                                                                                                                                                                                                                                                                   |
| ------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mutationFn` | Function | Nhận vào một function `return Promise` để thực hiện việc gửi request lên server                                                                                                                                                                                                                                               |
| `onSuccess`  | Function | Nhận vào một function có parameter là `data`: `onSuccess: (data) => {}`<br />Parameter `data` cũng chính là thuộc tính `data` được trả về từ `useMutation()`<br />Hàm được gọi ngay sau khi mutation thực thi thành công.<br />Hàm này trả về `Promise` nên có thể đi kèm với `await`                                         |
| `onError`    | Function | Là một function nhận `error` (có thể là `AxiosError`) làm parameter: `onError: (error) => {}`<br />Parameter `error` cũng chính là thuộc tính `error` được trả về từ `useMutation()`.<br />Hàm sẽ chạy ngay sau khi có lỗi phát sinh trong khi mutation thực thi.<br />Hàm này trả về `Promise` nên có thể đi kèm với `await` |
| `retry`      | Number   | Mutation sẽ thực thi lại tối đa số lần ta chỉ định nếu server phản hồi lỗi. Sau số lần retry này nếu server vẫn phản hồi lại lỗi thì lúc đó mới thực sự gửi lỗi về client                                                                                                                                                     |

## Ví dụ về useMutation()

```tsx
import axios, { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";

const http = axios.create({
  baseURL: "https://6404cc9280d9c5c7bad0e2f2.mockapi.io/api/v1/",
});

interface Task {
  name: string;
}

const httpPost = async (body: Task) => {
  const { data } = await http.post<Task>("tasks", body);
  return data;
};

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const postTaskMutation = useMutation({
    mutationFn: httpPost,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error: AxiosError) => {
      console.log(error);
    },
  });
  return (
    <>
      <input ref={inputRef} />
      <button
        onClick={() =>
          postTaskMutation.mutate({ name: inputRef.current?.value as string })
        }
      >
        Add new task
      </button>
    </>
  );
}
```

## 🆘🆘🆘Lưu ý:

- Nếu ta truyền trực tiếp đối tượng function vào `mutationFn` thì function đó chỉ nhận **MỘT** parameter duy nhất và đối số được truyền cho parameter duy nhất đó chính là giá trị của `variables` ở phương thức `mutate()`. Ví dụ:

```tsx
interface Task {
  name: string;
  deadline: Date;
}

const http = axios.create({
  baseURL: "https://6404cc9280d9c5c7bad0e2f2.mockapi.io/api/v1/",
});

const httpPost = async (body: Task) => {
  const { data } = await http.post<Task>("tasks", body);
  return data;
};

const postTaskMutation = useMutation({
  mutationFn: httpPost, //Truyền trực tiếp đối tượng function, thì function này chỉ có MỘT parameter duy nhất
});

const handlePostTask = () => {
  updateTaskMutation.mutate(
    { name: "X", deadline: new Date() },
    {
      onSuccess: (data) => {},
      onError: (error: AxiosError) => {
        console.log(error);
      },
    }
  );
};
```

- Nếu muốn đối tượng function của `mutationFn` có từ hai parameter trở lên (như phương thức **PUT** cần `id` và `body`), thì ta phải truyền function đó dưới dạng callback. Lúc này cho `variables` ở phương thức `mutate()` bằng `undefined`. Ví dụ:

```tsx
const http = axios.create({
  baseURL: "https://6404cc9280d9c5c7bad0e2f2.mockapi.io/api/v1/",
});

const httpPut = async (id: number, body: Task) => {
  const { data } = await http.put<Task>(`tasks/${id}`, body);
  return data;
};

const updateTaskMutation = useMutation({
  mutationFn: () => httpPut(reqId, reqData), // Truyền mutation function dưới dạng callback
});
const handleUpdateTask = () => {
  //Chỉ định giá trị của variables thành "undefined" do không dùng đến
  updateTaskMutation.mutate(undefined, {
    onSuccess: (data) => {},
    onError: (error: AxiosError) => {
      console.log(error);
    },
  });
};
```
