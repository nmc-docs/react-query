---
sidebar_position: 8
---

# Một số ví dụ

## Parallel Queries

- Sử dụng hook [useQueries()](./useQueries) để thực hiện song song các query với nhau trong cùng một component:

```tsx
function App({ users }) {
  const userQueries = useQueries({
    queries: users.map((user) => {
      return {
        queryKey: ["user", user.id],
        queryFn: () => fetchUserById(user.id),
      };
    }),
  });
}
```

## Dependent Queries

- Query phụ thuộc vào các query trước đó phải được hoàn thành trước khi chúng có thể thực thi. Ta sử dụng cầu hình `enabled` trong [useQuery()](./useQuery) để chỉ định khi nào query mới bắt đầu được thực hiện:

```tsx
// Get the user
const { data: user } = useQuery({
  queryKey: ["user", email],
  queryFn: getUserByEmail,
});

const userId = user?.id;

// Then get the user's projects
const {
  status,
  fetchStatus,
  data: projects,
} = useQuery({
  queryKey: ["projects", userId],
  queryFn: getProjectsByUser,
  // Query sẽ không được thực hiện khi userId có giá trị undefined
  enabled: !!userId,
});
```

## Paginated Queries

- Sau đây là ví dụ về phân trang (thường áp dụng đối với render dữ liệu dưới dạng bảng):

```tsx
import { keepPreviousData, useQuery } from "@tanstack/react-query";

function Todos() {
  const [page, setPage] = React.useState(0);

  const fetchProjects = (page = 0) =>
    fetch("/api/projects?page=" + page).then((res) => res.json());

  const { isLoading, isError, error, data, isFetching } = useQuery({
    queryKey: ["projects", page],
    queryFn: () => fetchProjects(page),
    placeholderData: keepPreviousData,
  });

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          {data.projects.map((project) => (
            <p key={project.id}>{project.name}</p>
          ))}
        </div>
      )}
      <span>Current Page: {page + 1}</span>
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 0}
      >
        Previous Page
      </button>{" "}
      <button
        onClick={() => {
          if (data.hasMore) {
            setPage((old) => old + 1);
          }
        }}
        // Disable the Next Page button until we know a next page is available
        disabled={!data?.hasMore}
      >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}{" "}
    </div>
  );
}
```

:::tip

- Trong ví dụ trên, ta sử dụng `placeholderData: keepPreviousData` ở cấu hình của useQuery() để:
  - Dữ liệu từ query trước vẫn sẽ được giữ cho đến khi data của query mới được fetch thành công, tránh tình trạng UI khi hiển thị bị nhảy
  - Khi data của query mới được fetch thành công, nó sẽ được ghi đè lên data của query trước đó

:::
