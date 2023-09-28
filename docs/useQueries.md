---
sidebar_position: 4
---

# useQueries()

## useQueries() để làm gì?

- Trong một component, muốn sử dụng nhiều [useQuery()](./useQuery) cùng một lúc để đưa các [Query Keys](./querykeys-queryfunction#query-keys) khác nhau vào trong cache, ta dùng hook `useQueries()`

## Cú pháp

```ts
import { useQueries } from "@tanstack/react-query";

const myQueries = useQueries({
  /* Cấu hình cho useQueries() */
});
```

| Config    | Type     | Description                                                                                                         |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------- |
| `queries` | Array    | Là một mảng chứa các phần tử cấu hình giống hệt useQuery(). Xem chi tiết[tại đây](./useQuery#cấu-hình-cho-usequery) |
| `combine` | Function | Là một hàm để gộp dữ liệu lại thành 1 object (tùy chọn)<br />`(results: UseQueriesResults) => TCombinedResult`      |

- **useQueries()** trả về một mảng, mỗi phần tử của mảng là một object giống như useQuery() trả về. Xem chi tiết các thuộc tính, phương thức mà useQuery() trả về [tại đây](./useQuery#các-thuộc-tính-phương-thức-trả-về-từ-usequery)

## Ví dụ

```ts
const ids = [1,2,3]
const results = useQueries({
  queries: ids.map(id => (
    { queryKey: ['post', id], queryFn: () => fetchPost(id), staleTime: Infinity },
  )),
})
```

- Sử dụng `combine` để gộp dữ liệu lại thành 1 object:

```ts
const ids = [1,2,3]
const combinedQueries = useQueries({
  queries: ids.map(id => (
    { queryKey: ['post', id], queryFn: () => fetchPost(id) },
  )),
  combine: (results) => {
    return ({
      data: results.map(result => result.data),
      pending: results.some(result => result.isPending),
    })
  }
})
```

- Một ví dụ khác về việc sử dụng `useQueries()`:

```tsx
import React from "react";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";

export default function Example() {
  const [postsQuery, usersQuery] = useQueries({
    queries: [
      {
        queryKey: ["posts"],
        queryFn: () =>
          axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.data),
      },

      {
        queryKey: ["users"],
        queryFn: () =>
          axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.data),
      },
    ],
  });

  if (postsQuery.isLoading) return "Loading Posts...";
  if (usersQuery.isLoading) return "Loading Users...";

  if (postsQuery.error)
    return "An error has occurred: " + postsQuery.error.message;

  if (usersQuery.error)
    return "An error has occurred: " + usersQuery.error.message;

  return (
    <div>
      <h2>Posts</h2>
      {postsQuery.data?.slice(10).map((post) => {
        return (
          <div key={post.id} style={{ display: "flex" }}>
            <span>{post.id}- </span>
            <div>{post.title}</div>
          </div>
        );
      })}

      <h2>Users</h2>
      {usersQuery.data?.map((user) => {
        return (
          <div key={user.id} style={{ display: "flex" }}>
            <span>{user.id}- </span>
            <div>{user.name}</div>
          </div>
        );
      })}
    </div>
  );
}
```

:::info

- Trong ví dụ trên, ta định nghĩa 2 queries, **posts** và **users**
- Với mỗi query, ta định nghĩa cho nó hai **queryKey** và **queryFunction** tương ứng
- Sau đó chúng ta destruct kết quả trả về từ `useQueries()` thông qua: `const [postsQuery, usersQuery]`
- Cuối cùng, chúng ta có thể truy cập bất kỳ thuộc tính nào từ truy vấn như `data`, `error`,... (tương tự như các thuộc tính được trả về từ `useQuery`)

:::
