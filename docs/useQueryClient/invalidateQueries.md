---
sidebar_position: 2
---

# invalidateQueries()

- Phương thức `invalidateQueries()` sẽ refetch (gửi [refetch request network](../#phân-biệt-hai-loại-request-trong-react-query)) cho những queries mà có `queryKey` tương ứng do ta chỉ định hoặc refetch tất cả các queries đang có trong cache.
- Phương này `return Promise` cho nên có thể đi kèm với `await`

## Cấu hình

| Config      | Type     | Description                                                                                                                                      |
| ----------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `queryKey`  | Array    | Chỉ định những queries có `queryKey` tương đối khớp với `queryKey` ta chỉ định mới bị refetch                                                    |
| `exact`     | Boolean  | `true`: chỉ refetch những queries có `queryKey` khớp chính xác tuyệt đối với `queryKey` ta chỉ định                                              |
| `predicate` | Function | Là một hàm `return Boolean` chỉ định những queries nào thỏa mãn điều kiện mới được refetch. Dùng hàm này rồi thì thôi không dùng `queryKey` nữa. |

- Ví dụ:

```ts
// Refetch lại tất cả các query đang có trong cache
queryClient.invalidateQueries();
// Refetch lại tất cả các query mà có phần tử đầu tiên trong mảng queryKey là 'todos'
queryClient.invalidateQueries({ queryKey: ["todos"] });
```

- Về **query matching** . Xem ví dụ sau đây:

```ts
import { useQuery, useQueryClient } from "@tanstack/react-query";

// Lấy instance QueryClient từ context
const queryClient = useQueryClient();

queryClient.invalidateQueries({ queryKey: ["todos"] });

// Tất cả 2 query sau sẽ bị refetch do đều có phần tử đầu tiên của mảng queryKey là 'todos'
const todoListQuery = useQuery({
  queryKey: ["todos"],
  queryFn: fetchTodoList,
});
const todoListQuery = useQuery({
  queryKey: ["todos", { page: 1 }],
  queryFn: fetchTodoList,
});
```

> Để khắc phục vấn đề này, ta thêm `exact: true` trong cấu hình `invalidateQueries()`:

```ts
queryClient.invalidateQueries({
  queryKey: ["todos"],
  exact: true,
});

// Query dưới đây sẽ được refetch
const todoListQuery = useQuery({
  queryKey: ["todos"],
  queryFn: fetchTodoList,
});

// Tuy nhiên, query dưới đây sẽ không bị refetch
const todoListQuery = useQuery({
  queryKey: ["todos", { type: "done" }],
  queryFn: fetchTodoList,
});
```

- Thay vì chỉ định một `queryKey` cụ thể để refetch, ta có thể sử dụng `predicate` trong cấu hình `invalidateQueries()` để chỉ định những query nào thỏa mãn điều kiện mới được refetch. Ví dụ:

```ts
queryClient.invalidateQueries({
  predicate: (query) =>
    query.queryKey[0] === "todos" && query.queryKey[1]?.version >= 10,
});

// Hai query sau sẽ được refetch
const todoListQuery = useQuery({
  queryKey: ["todos", { version: 20 }],
  queryFn: fetchTodoList,
});
const todoListQuery = useQuery({
  queryKey: ["todos", { version: 10 }],
  queryFn: fetchTodoList,
});

// Tuy nhiên, query này sẽ không được refetch do version < 10
const todoListQuery = useQuery({
  queryKey: ["todos", { version: 5 }],
  queryFn: fetchTodoList,
});
```

- Phương thức `invalidateQueries()` phù hợp khi sử dụng với `useMutation()`, nó sẽ tự động cập nhật dữ liệu hiển thị ở UI ngay lập tức khi mutation thực thi thành công. Ví dụ:

```ts
const postTaskMutation = useMutation({
  mutationFn: httpPost,
});

const queryClient = useQueryClient();

const handlePostTask = () => {
  updateTaskMutation.mutate(
    { name: "X", deadline: new Date() },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["tasks"] });
      },
    }
  );
};
```
