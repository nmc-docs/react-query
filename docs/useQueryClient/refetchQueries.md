---
sidebar_position: 8
---

# refetchQueries()

:::info

- Phương thức `refetchQueries()` dùng để refetch những query đang có trong cache.

:::

## Cú pháp

```ts
queryClient.refetchQueries(filter?: QueryFilter): Promise<void>
```

- Xem chi tiết QueryFilter [tại đây](../query-filter)

## Ví dụ

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
