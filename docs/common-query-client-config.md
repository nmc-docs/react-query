---
sidebar_position: 10
---

# Cấu hình chung cho QueryClient

- Khi ta sử dụng nhiều **useQuery()** hay **useMutation()** trong project mà có những cấu hình chung (lặp đi lặp lại nhiều lần) thì ta nên cấu hình những cấu hình chung đó khi ta khởi tạo một QueryClient như ở [bài đầu](./#cài-đặt)
- Cú pháp:

```tsx
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { PropsWithChildren } from "react";

const TanstackQueryProvider = ({ children }: PropsWithChildren) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          mutations: {
            /* Mutation configuration */
          },
          queries: {
            /* Queries configuration */
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default TanstackQueryProvider;
```

- Cấu hình cho **queries**: [Xem tại đây](./useQuery#cấu-hình-cho-usequery)
- Cấu hình cho **mutations**: [Xem tại đây](./useMutation#cấu-hình-cho-usemutation)
