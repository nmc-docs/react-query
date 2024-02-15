---
sidebar_position: 2
---

# invalidateQueries()

:::info

- Phương thức `invalidateQueries()` sẽ refetch (gửi [refetch request network](../#phân-biệt-hai-loại-request-trong-react-query)) cho những queries mà có `queryKey` tương ứng do ta chỉ định hoặc refetch tất cả các queries đang có trong cache.
- Phương này `return Promise` cho nên có thể đi kèm với `await`

:::

## Cú pháp

```ts
queryClient.invalidateQueries(filter?: QueryFilter): Promise<void>
```

- Xem chi tiết QueryFilter [tại đây](../query-filter)

## Ví dụ

```ts
// Refetch lại tất cả các query đang có trong cache
queryClient.invalidateQueries();
// Refetch lại tất cả các query mà có phần tử đầu tiên trong mảng queryKey là 'todos'
queryClient.invalidateQueries({ queryKey: ["todos"] });
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
