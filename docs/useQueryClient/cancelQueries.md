---
sidebar_position: 5
---

# cancelQueries()

- Phương thức `cancelQueries()` dùng để hủy bỏ khi đang thực hiện dở query. Được dùng khi component unmounted (tức khi người dùng chuyển trang khác trong khi query đang thực hiện dở thì hủy bỏ không thực hiện query đó nữa, giúp tối ưu hiệu năng).
- Phương thức này được dùng chủ yếu ở **cleanup function** trong `useEffect()`

## Cấu hình

| Config      | Type     | Description                                                                                                                                     |
| ----------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `queryKey`  | Array    | Chỉ định những queries có `queryKey` tương đối khớp với `queryKey` ta chỉ định mới bị cancel                                                    |
| `exact`     | Boolean  | `true`: chỉ cancel những queries có `queryKey` khớp chính xác tuyệt đối với `queryKey` ta chỉ định                                              |
| `predicate` | Function | Là một hàm `return Boolean `chỉ định những queries nào thỏa mãn điều kiện mới được cancel. Dùng hàm này rồi thì thôi không dùng `queryKey` nữa. |

- Ví dụ:

```tsx
import { useQuery, useQueryClient } from "@tanstack/react-query";
import "./styles.css";
import axios from "axios";
import { useEffect } from "react";

interface Task {
  name: string;
}

const api = axios.create({
  baseURL: "https://6404cc9280d9c5c7bad0e2f2.mockapi.io/api/v1/",
});

const getAllTasks = async (querySignal?: AbortSignal) => {
  const { data } = await api.get<Task[]>("tasks", { signal: querySignal });
  return data;
};

export default function App() {
  const queryClient = useQueryClient();
  const { data: taskList } = useQuery({
    queryKey: ["todos"],
    queryFn: ({ signal }) => getAllTasks(signal),
  });

  useEffect(() => {
    return () => {
      queryClient.cancelQueries({ queryKey: ["todos"] });
    };
  }, [queryClient]);

  return (
    <div>
      {taskList?.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
    </div>
  );
}
```
