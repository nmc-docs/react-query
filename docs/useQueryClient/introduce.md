---
sidebar_position: 1
---

# Giới thiệu

- Trong react query, `useQueryClient()` là một hook cho phép ta truy cập đến instance **QueryClient** .
- **QueryClient** là một instance quản lý toàn bộ queries và dữ liệu trong caches của app.

## Khai báo:

```ts
import { useQueryClient } from "@tanstack/react-query";

// Lấy instance QueryClient từ context
const queryClient = useQueryClient();
```

## Các thuộc tính, phương thức của useQueryClient()

- [invalidateQueries()](./invalidateQueries)
- [prefetchQuery()](./prefetchQuery)
- [getQueryData()](./getQueryData)
- [cancelQueries()](./cancelQueries)
- [removeQueries()](./removeQueries)
- [refetchQueries()](./refetchQueries)
- [isFetching / isMutating](./isFetching-isMutating)
