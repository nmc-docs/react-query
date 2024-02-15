---
sidebar_position: 3
---

# prefetchQuery() / fetchQuery()

:::info

- Cả 2 phương thức `prefetchQuery()` và `fetchQuery()` giúp ta có thể thực hiện trước việc nạp query cùng với dữ liệu vào cache ([cache request network](../#phân-biệt-hai-loại-request-trong-react-query)). Lưu ý rằng query này phải chưa có trong cache.
- Việc nạp trước query vào trong cache sẽ giúp ích trong một số trường hợp ta biết trước sau gì cũng cần dữ liệu đó nên nạp trước vào cache, lúc sau chỉ cần lấy ra, khỏi phải chờ đợi việc nạp query vào cache.
- Cấu hình của cả 2 phương thức `prefetchQuery()` và `fetchQuery()` cũng giống như `useQuery()`, chỉ khác là:
  - `prefetchQuery()` không trả về dữ liệu hay lỗi, nó chỉ đơn giản là thực hiện việc nạp trước query vào cache.
  - `fetchQuery()` trả về dữ liệu, hoặc lỗi khi get dữ liệu từ server về.

:::

## Cú pháp

```ts
await queryClient.prefetchQuery({ queryKey, queryFn });
```

```ts
await queryClient.fetchQuery({ queryKey, queryFn });
```

## Ví dụ

```ts
const queryClient = useQueryClient();
await queryClient.prefetchQuery({
  queryKey: ["todos", page],
  queryFn: () => httpGetByPage(page),
  staleTime: 10 * 1000,
});
```

```ts
try {
  const data = await queryClient.fetchQuery({ queryKey, queryFn });
} catch (error) {
  console.log(error);
}
```
