---
sidebar_position: 7
---

# removeQueries()

:::info

- Phương thức `removeQueries()` dùng để xóa query ra khỏi cache.

:::

## Cú pháp

```ts
queryClient.removeQueries(filter?: QueryFilter): void
```

- Xem chi tiết QueryFilter [tại đây](../query-filter)

## Ví dụ

```ts
const queryClient = useQueryClient();
//Xóa query có queryKey = ['todos', 1] ra khỏi cache
queryClient.removeQueries({ queryKey: ["todos", 1] });
```
