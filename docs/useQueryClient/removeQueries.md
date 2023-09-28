---
sidebar_position: 6
---

# removeQueries()

- Phương thức `removeQueries()` dùng để xóa query ra khỏi cache.

## Cấu hình

| Config      | Type     | Description                                                                                                                                                |
| ----------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `queryKey`  | Array    | Chỉ định những queries có `queryKey` tương đối khớp với `queryKey` ta chỉ định mới bị remove khỏi cache                                                    |
| `exact`     | Boolean  | `true`: chỉ remove khỏi cache những queries có `queryKey` khớp chính xác tuyệt đối với `queryKey` ta chỉ định                                              |
| `predicate` | Function | Là một hàm `return Boolean` chỉ định những queries nào thỏa mãn điều kiện mới được remove khỏi cache. Dùng hàm này rồi thì thôi không dùng `queryKey` nữa. |

- Ví dụ:

```ts
const queryClient = useQueryClient();
//Xóa query có queryKey = ['todos', 1] ra khỏi cache
queryClient.removeQueries(["todos"], 1);
```
