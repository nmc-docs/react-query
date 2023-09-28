---
sidebar_position: 2
---

# Query Keys và Query Function

## Query Keys

- **Query Keys** là sẽ "khóa" để react query phân biệt các loại query với nhau.
- **Query Keys** là một mảng, ta có thể tự định nghĩa các phần tử trong mảng (có thể là một `string`, `object`) và react query sẽ dựa vào đó để phân biệt các query với nhau.
- Ví dụ đơn giản về Query Keys:

```ts
queryKey: ["todos"];
queryKey: ["users"];
```

- Ta có thể thêm các phần tử vào mảng để phân biệt sâu hơn các query với nhau:

```ts
//Thứ tự các key trong object là không quan trọng, ví dụ 3 query sau sẽ được tính là cùng một loại
queryKey: ["todos", { status: "done", page }];
queryKey: ["todos", { page, status: "done" }];
queryKey: ["todos", { page, status: "done", other: undefined }];
```

```ts
//Thứ tự các phần tử trong mảng Query Keys lại khác, nếu thứ tự bị đảo lộn, sẽ tính thành một query riêng biệt khác
queryKey: ['todos', status: 'done', page]
queryKey: ['todos', page, status: 'done']
queryKey: ['todos', undefined, page, status: 'done']
```

:::caution

Nếu ít nhất một giá trị của phần tử trong mảng **Query Keys** thay đổi thì sẽ tạo ra một query mới. Query cũ vẫn sẽ được lưu trong cache chờ hết `cacheTime` mới bị xóa khỏi cache.

:::

- Ví dụ:

```ts
useQuery({
  queryKey: ["todos", todoId], //Giả sử lúc này todoId = 1
  queryFn: () => fetchTodoById(todoId),
});

//Thực hiện thay đổi todoId = 2, query mới sẽ được tạo ra và thực hiện việc gửi “cache request network” để lưu query mới này vào cache. Dữ liệu tương ứng với queryKey: ['todos', 1] ở trên vẫn sẽ được lưu trong cache và lúc này cacheTime đếm ngược, khi hết thời gian cacheTime, dữ liệu đó mới bị xóa khỏi cache
useQuery({
  queryKey: ["todos", todoId], //Lúc này todoId = 2
  queryFn: () => fetchTodoById(todoId),
});
```

## Query function

- **Query function** là hàm thực hiện fetching data. Hàm này là hàm phải `return Promise`.
- Cú pháp:

```ts
queryFn: ({ queryKey, signal }) => {};
```

:::info

Trong đó:

- `queryKey`: là mảng chứa query keys như đã nêu ở trên.
- `signal`: dùng để hủy bỏ query.

:::

- Một số ví dụ về Query function:

```ts
const http = axios.create({
  baseURL: "https://6404cc9280d9c5c7bad0e2f2.mockapi.io/api/v1/",
});

const getAllUsers = async () => {
  const { data } = await http.get<User[]>("users");
  return data;
};

const getUserById = async (id: number) => {
  const { data } = await http.get<User>(`users/${id}`);
};

useQuery({ queryKey: ["users"], queryFn: getAllUsers });

useQuery({
  queryKey: ["users", id],
  queryFn: () => getUserById(id),
});

useQuery({
  queryKey: ["users", id],
  queryFn: ({ queryKey }) => getUserById(queryKey[1]),
});
```
