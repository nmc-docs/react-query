---
sidebar_position: 1
slug: /
---

# Tổng quan về React Query

## React query là gì?

- Thông thường chúng ta dùng `useEffect` để xử lý việc gửi một request đến server để lấy dữ liệu trong từng component. Khi component bị **unmounted** (tức chúng ta chuyển sang trang khác), dữ liệu sẽ bị xóa đi, và sau đó component được **mounted** lại (chúng ta quay trở lại trang ban nãy), việc gửi request lại tiếp tục diễn ra. Nếu lặp đi lặp lại hành động này, khiến hiệu năng của app giảm. Vậy làm thế nào có thể đồng bộ hóa và cập nhật trạng thái dữ liệu giữa server và client?
- **react-query** là thư viện có thể xử lý việc tìm nạp (`fetching`), lưu vào bộ nhớ đệm (`caching`), đồng bộ hóa và cập nhật trạng thái dữ liệu giữa server và client.

## Cài đặt

```bash
npm install @tanstack/react-query
```

- Tạo component `<TanstackQueryProvider />` xong bọc component này ở App.tsx:

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { PropsWithChildren } from "react";

const TanstackQueryProvider = ({ children }: PropsWithChildren) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default TanstackQueryProvider;
```

## Vòng đời của một query trong react query

- Một query do ta định nghĩa sẽ làm nhiệm vụ fetching và caching data cho app của chúng ta. Vòng đời của nó được mô tả như sau:
- Sau khi fetching, query và dữ liệu tương ứng sẽ được lưu vào cache
- Có một từ khóa gọi là `staleTime`. Đây là thời gian mà data sẽ được cho là mới.
  - Nếu `staleTime = 0`, dữ liệu sau khi được fetch xong sẽ luôn được coi là cũ và khi query được gọi, dữ liệu sẽ được lấy từ cache ra đồng thời gửi đi một [refetch request network](#phân-biệt-hai-loại-request-trong-react-query) để làm mới data.
  - Nếu `staleTime > 0`, trong khoảng thời gian này, dữ liệu sẽ luôn được coi là mới và nếu ta gọi query, nó sẽ không gửi đi [refetch request network](#phân-biệt-hai-loại-request-trong-react-query), khi nào hết khoảng `staleTime` này, dữ liệu sẽ được coi là cũ. Khi đó nếu gọi query, nó mới gửi [refetch request network](#phân-biệt-hai-loại-request-trong-react-query) để làm mới dữ liệu (cập nhật dữ liệu mới nhất).
- Khi các component có chứa lời gọi query bị **unmounted** hoặc không có component nào dùng query đó nữa, lúc này, query sẽ ở trạng thái **inactive** và `cacheTime` sẽ đếm ngược. `cacheTime` là khoảng thời gian mà dữ liệu trong cache sẽ bị xóa. Sau khoảng thời gian này, khi gọi query, sẽ buộc phải gửi lại [cache request network](#phân-biệt-hai-loại-request-trong-react-query) để tiếp tục lưu dữ liệu vào cache. Thời gian mặc định của `cacheTime` là 5 phút và ta có thể tùy chỉnh thời gian này. Lưu ý rằng **staleTime \<= cacheTime**

## Phân biệt hai loại request trong react query

| Cache request network                                                                                        | Refetch request network                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Khi gọi một query mà query đó chưa có trong cache, loại request này sẽ được gọi để đưa query vào trong cache | Khi gọi một query mà query đó đã có trong cache, loại request này sẽ được gọi. Loại request này có nhiệm vụ làm mới dữ liệu của query tương ứng |
