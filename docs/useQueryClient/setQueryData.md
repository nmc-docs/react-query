---
sidebar_position: 5
---

# setQueryData()

:::info

- `setQueryData()` là một hàm đồng bộ dùng để cập nhật giá trị cho query keys được chỉ định. Nếu query key không có trong cache, nó sẽ được tự động tạo.

:::

## Cú pháp

```ts
queryClient.setQueryData(queryKey, updater);
```

- Trong đó:

  - **queryKey**: là mảng query key cần set dữ liệu trong cache
  - **updater**: có thể là một giá trị hoặc một hàm

- Khi **updater** là một giá trị:

  ```ts
  setQueryData(queryKey, newData);
  ```

  Nếu `newData` là `undefined`, query data sẽ không cập nhật

- Khi **updater** là một function:

  ```ts
  setQueryData(queryKey, (oldData) => newData);
  ```

  Tham số `oldData` là giá trị hiện tại của query key trong cache. `newData` là giá trị mới để cập nhật (tương tự như trên, nếu nó có giá trị `undefined`, query data sẽ không cập nhật)
