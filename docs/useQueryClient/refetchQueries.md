---
sidebar_position: 7
---

# refetchQueries()

- Phương thức `refetchQueries()` dùng để refetch những query đang có trong cache.

## Cấu hình

| Config      | Type                                  | Description                                                                                                                                                                             |
| ----------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `queryKey`  | Array                                 | Chỉ định những queries có `queryKey` tương đối khớp với `queryKey` ta chỉ định mới bị refetch                                                                                           |
| `exact`     | Boolean                               | `true`: chỉ refetch những queries có `queryKey` khớp chính xác tuyệt đối với `queryKey` ta chỉ định                                                                                     |
| `predicate` | Function                              | Là một hàm `return Boolean `chỉ định những queries nào thỏa mãn điều kiện mới được refetch. Dùng hàm này rồi thì thôi không dùng `queryKey` nữa.                                        |
| `type`      | `'active'` \| `'inactive'` \| `'all'` | Giá trị mặc định là `'all'`<br />Khi có giá trị là `'active'`, chỉ những active queries sẽ được refetch<br />Khi có giá trị là `'inactive'`, chỉ những inactive queries sẽ được refetch |
| `stale`     | Boolean                               | `true`: Chỉ những stale queries mới được refetch<br />`false`: Chỉ những fresh queries mới được refetch                                                                                 |

- Ví dụ:

```ts
// Refetch all queries
await queryClient.refetchQueries();

// Refetch all inactive queries that begin with `posts` in the key
queryClient.refetchQueries({ queryKey: ["posts"], type: "inactive" });

// Refetch all active queries
await queryClient.refetchQueries({ type: "active" });

// Refetch all active queries that begin with `posts` in the key
await queryClient.refetchQueries({ queryKey: ["posts"], type: "active" });
```
