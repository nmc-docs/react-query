---
sidebar_position: 4
---

# getQueryData()

- Phương thức `getQueryData()` là một phương thức đồng bộ giúp lấy ra dữ liệu tương ứng với query đã được lưu ở trong cache. Nếu query không tồn tại ở trong cache, đồng nghĩa với việc chưa có dữ liệu, phương thức sẽ trả về `undefined`
- Ví dụ:

```ts
const queryClient = useQueryClient();
//Lấy ra dữ liệu của query có queryKey = ['todos', 1]
queryClient.getQueryData(["todos"], 1);
```
