---
sidebar_position: 9
---

# Query Filters

:::info

- Query filters là một object để lọc những query đang có trong cache theo những điều kiện nhất định.
- Thường được sử dụng trong các hàm queryClient, hooks,...

:::

## Cú pháp

```ts
{queryKey?: QueryKey, exact?: boolean, predicate?: (query: Query) => boolean, type?: 'active' | 'inactive' | 'all', stale?: boolean}
```

| Config      | Type                                  | Description                                                                                                                                                                                     |
| ----------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `queryKey`  | Array                                 | Chỉ định những queries có `queryKey` tương đối khớp với `queryKey` ta chỉ định                                                                                                                  |
| `exact`     | Boolean                               | `true`: lọc những queries có `queryKey` khớp chính xác tuyệt đối với `queryKey` ta chỉ định                                                                                                     |
| `predicate` | Function                              | Là một hàm `return Boolean  `chỉ định những queries nào thỏa mãn điều kiện.                                                                                                                     |
| `type`      | `'active'` \| `'inactive'` \| `'all'` | Giá trị mặc định là `'all'`<br />Khi có giá trị là `'active'`, chỉ những active queries sẽ được chọn<br />Khi có giá trị là `'inactive'`, chỉ những inactive queries sẽ được chọn               |
| `stale`     | Boolean                               | `true`: Chỉ những [stale queries](./#vòng-đời-của-một-query-trong-react-query) mới được chọn<br />`false`: Chỉ những [fresh queries](./#vòng-đời-của-một-query-trong-react-query) mới được chọn |

## Ví dụ

```tsx
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
