"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[818],{7736:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>h,default:()=>a,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=n(4848),c=n(8453);const s={sidebar_position:3},h="useQuery()",i={id:"useQuery",title:"useQuery()",description:"useQuery() l\xe0 g\xec?",source:"@site/docs/useQuery.md",sourceDirName:".",slug:"/useQuery",permalink:"/react-query/useQuery",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Query Keys v\xe0 Query Function",permalink:"/react-query/querykeys-queryfunction"},next:{title:"useQueries()",permalink:"/react-query/useQueries"}},d={},l=[{value:"useQuery() l\xe0 g\xec?",id:"usequery-l\xe0-g\xec",level:2},{value:"C\xfa ph\xe1p c\u1ee7a useQuery()",id:"c\xfa-ph\xe1p-c\u1ee7a-usequery",level:2},{value:"C\xe1c thu\u1ed9c t\xednh, ph\u01b0\u01a1ng th\u1ee9c tr\u1ea3 v\u1ec1 t\u1eeb useQuery()",id:"c\xe1c-thu\u1ed9c-t\xednh-ph\u01b0\u01a1ng-th\u1ee9c-tr\u1ea3-v\u1ec1-t\u1eeb-usequery",level:2},{value:"C\u1ea5u h\xecnh cho useQuery()",id:"c\u1ea5u-h\xecnh-cho-usequery",level:2},{value:"V\xed d\u1ee5 v\u1ec1 useQuery()",id:"v\xed-d\u1ee5-v\u1ec1-usequery",level:2}];function u(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"usequery",children:"useQuery()"}),"\n",(0,t.jsx)(r.h2,{id:"usequery-l\xe0-g\xec",children:"useQuery() l\xe0 g\xec?"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"useQuery()"})," l\xe0 m\u1ed9t hook ph\u1ee5c v\u1ee5 cho vi\u1ec7c ",(0,t.jsx)(r.strong,{children:"GET"})," v\xe0 cache d\u1eef li\u1ec7u t\u1eeb server tr\u1ea3 v\u1ec1"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"c\xfa-ph\xe1p-c\u1ee7a-usequery",children:"C\xfa ph\xe1p c\u1ee7a useQuery()"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:'import { useQuery } from "@tanstack/react-query";\n\nconst myQuery = useQuery({\n  /* C\u1ea5u h\xecnh cho useQuery() */\n});\n'})}),"\n",(0,t.jsx)(r.h2,{id:"c\xe1c-thu\u1ed9c-t\xednh-ph\u01b0\u01a1ng-th\u1ee9c-tr\u1ea3-v\u1ec1-t\u1eeb-usequery",children:"C\xe1c thu\u1ed9c t\xednh, ph\u01b0\u01a1ng th\u1ee9c tr\u1ea3 v\u1ec1 t\u1eeb useQuery()"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Property"}),(0,t.jsx)(r.th,{children:"Return value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"isLoading"})}),(0,t.jsxs)(r.td,{children:["Tr\u1ea3 v\u1ec1 ",(0,t.jsx)(r.code,{children:"true"})," n\u1ebfu \u0111ang th\u1ef1c hi\u1ec7n ",(0,t.jsx)(r.a,{href:"./#ph%C3%A2n-bi%E1%BB%87t-hai-lo%E1%BA%A1i-request-trong-react-query",children:"cache request network"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"isSuccess"})}),(0,t.jsxs)(r.td,{children:["Tr\u1ea3 v\u1ec1 ",(0,t.jsx)(r.code,{children:"true"})," n\u1ebfu th\u1ef1c hi\u1ec7n ",(0,t.jsx)(r.a,{href:"./#ph%C3%A2n-bi%E1%BB%87t-hai-lo%E1%BA%A1i-request-trong-react-query",children:"cache request network"}),"\xa0ho\u1eb7c\xa0",(0,t.jsx)(r.a,{href:"./#ph%C3%A2n-bi%E1%BB%87t-hai-lo%E1%BA%A1i-request-trong-react-query",children:"refetch request network"}),"\xa0th\xe0nh c\xf4ng\xa0"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"isError"})}),(0,t.jsxs)(r.td,{children:["Tr\u1ea3 v\u1ec1 ",(0,t.jsx)(r.code,{children:"true"})," n\u1ebfu c\xf3 l\u1ed7i x\u1ea3y ra khi th\u1ef1c hi\u1ec7n ",(0,t.jsx)(r.a,{href:"./#ph%C3%A2n-bi%E1%BB%87t-hai-lo%E1%BA%A1i-request-trong-react-query",children:"cache request network"}),"\xa0ho\u1eb7c\xa0",(0,t.jsx)(r.a,{href:"./#ph%C3%A2n-bi%E1%BB%87t-hai-lo%E1%BA%A1i-request-trong-react-query",children:"refetch request network"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"isFetching"})}),(0,t.jsxs)(r.td,{children:["Tr\u1ea3 v\u1ec1 ",(0,t.jsx)(r.code,{children:"true"})," n\u1ebfu query \u0111ang th\u1ef1c hi\u1ec7n refetch (g\u1eedi ",(0,t.jsx)(r.a,{href:"./#ph%C3%A2n-bi%E1%BB%87t-hai-lo%E1%BA%A1i-request-trong-react-query",children:"refetch request network"})," \u0111\u1ec3 l\u1ea5y data m\u1edbi nh\u1ea5t). L\xfac n\xe0y data c\u1ee7a query v\u1eabn c\xf3 nh\u01b0ng l\xe0 data c\u0169 v\xe0 query v\u1eabn \u0111ang \u0111\u01b0\u1ee3c l\u01b0u \u1edf trong cache"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"data"})}),(0,t.jsx)(r.td,{children:"Tr\u1ea3 v\u1ec1 d\u1eef li\u1ec7u l\u1ea5y \u0111\u01b0\u1ee3c t\u1eeb server"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"error"})}),(0,t.jsx)(r.td,{children:"Tr\u1ea3 v\u1ec1 l\u1ed7i m\xe0 server ph\u1ea3n h\u1ed3i trong qu\xe1 tr\xecnh th\u1ef1c hi\u1ec7n query"})]})]})]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Method"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"refetch()"})}),(0,t.jsxs)(r.td,{children:["L\xe0 m\u1ed9t h\xe0m \u0111\u1ec3 y\xeau c\u1ea7u l\xe0m m\u1edbi d\u1eef li\u1ec7u (g\u1eedi \u0111i",(0,t.jsx)(r.a,{href:"./#ph%C3%A2n-bi%E1%BB%87t-hai-lo%E1%BA%A1i-request-trong-react-query",children:"refetch request network"}),").",(0,t.jsx)("br",{}),"Ph\u01b0\u01a1ng th\u1ee9c n\xe0y tr\u1ea3 v\u1ec1 m\u1ed9t Promise resolve\xa0d\u1eef li\u1ec7u m\u1edbi nh\u1ea5t"]})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"c\u1ea5u-h\xecnh-cho-usequery",children:"C\u1ea5u h\xecnh cho useQuery()"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Ta c\u0169ng c\xf3 th\u1ec3 t\xf9y ch\u1ecdn c\u1ea5u h\xecnh cho query, d\u01b0\u1edbi \u0111\xe2y l\xe0 c\xe1c c\u1ea5u h\xecnh c\u01a1 b\u1ea3n:"}),"\n"]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Config"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"queryKey"})}),(0,t.jsx)(r.td,{children:"Array"}),(0,t.jsxs)(r.td,{children:["L\xe0 m\u1ed9t m\u1ea3ng",(0,t.jsx)(r.a,{href:"./querykeys-queryfunction#query-keys",children:"Query Keys"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"queryFn"})}),(0,t.jsx)(r.td,{children:"Function"}),(0,t.jsxs)(r.td,{children:["L\xe0 m\u1ed9t",(0,t.jsx)(r.a,{href:"./querykeys-queryfunction#query-function",children:"Query function"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"staleTime"})}),(0,t.jsx)(r.td,{children:"Number"}),(0,t.jsxs)(r.td,{children:["Thi\u1ebft l\u1eadp th\u1eddi gian m\xe0 data s\u1ebd \u0111\u01b0\u1ee3c coi l\xe0 m\u1edbi v\xe0 trong th\u1eddi gian n\xe0y n\u1ebfu query \u0111\u01b0\u1ee3c g\u1ecdi th\xec s\u1ebd kh\xf4ng g\u1eedi",(0,t.jsx)(r.a,{href:"./#ph%C3%A2n-bi%E1%BB%87t-hai-lo%E1%BA%A1i-request-trong-react-query",children:"refetch request network"})," \u0111\u1ec3 l\xe0m m\u1edbi d\u1eef li\u1ec7u"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"gcTime"})}),(0,t.jsx)(r.td,{children:"Number"}),(0,t.jsx)(r.td,{children:"Thi\u1ebft l\u1eadp th\u1eddi gian m\xe0 query s\u1ebd b\u1ecb x\xf3a kh\u1ecfi cache sau khi kh\xf4ng c\xf2n component n\xe0o subscribe query n\xe0y"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"enabled"})}),(0,t.jsx)(r.td,{children:"Boolean"}),(0,t.jsxs)(r.td,{children:["N\u1ebfu \u0111\u1eb7t l\xe0 ",(0,t.jsx)(r.code,{children:"false"}),", s\u1ebd ng\u0103n query th\u1ef1c hi\u1ec7n g\u1eedi request",(0,t.jsx)("br",{}),"Th\xedch h\u1ee3p \u0111\u1ec3 cho ph\xe9p query \u0111\u01b0\u1ee3c ch\u1ea1y khi m\u1ed9t bi\u1ebfn n\xe0o \u0111\xf3 nh\u1eadn c\xf3 gi\xe1 tr\u1ecb ",(0,t.jsx)(r.code,{children:"true"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"placeholderData"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"keepPreviousData"}),' imported from\xa0"@tanstack/react-query"']}),(0,t.jsxs)(r.td,{children:["Khi",(0,t.jsx)(r.a,{href:"./querykeys-queryfunction#query-keys",children:"query keys"})," thay \u0111\u1ed5i s\u1ebd t\u1ea1o ra m\u1ed9t query m\u1edbi v\xe0 s\u1ebd th\u1ef1c hi\u1ec7n ",(0,t.jsx)(r.a,{href:"./#ph%C3%A2n-bi%E1%BB%87t-hai-lo%E1%BA%A1i-request-trong-react-query",children:"cache request network"})," \u0111\u1ec3 \u0111\u01b0a query m\u1edbi n\xe0y v\xe0o cache.\xa0L\xfac n\xe0y n\u1ebfu \u0111\u1eb7t ",(0,t.jsx)(r.code,{children:"keepPreviousData"})," th\xe0nh ",(0,t.jsx)(r.code,{children:"true"}),", d\u1eef li\u1ec7u c\u1ee7a query c\u0169 v\u1eabn s\u1ebd \u0111\u01b0\u1ee3c gi\u1eef ch\u1edd \u0111\u1ebfn khi query m\u1edbi \u0111\u01b0\u1ee3c \u0111\u01b0a v\xe0o cache v\xe0 khi \u0111\u01b0\u1ee3c \u0111\u01b0a xong, d\u1eef li\u1ec7u query m\u1edbi s\u1ebd ghi \u0111\xe8 d\u1eef li\u1ec7u c\u0169.",(0,t.jsx)("br",{}),"\ud83d\udc8eTh\xedch h\u1ee3p khi d\xf9ng cho ph\xe2n trang"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"refetchInterval"})}),(0,t.jsx)(r.td,{children:"Number"}),(0,t.jsxs)(r.td,{children:["Thi\u1ebft l\u1eadp kho\u1ea3ng th\u1eddi gian (t\xednh b\u1eb1ng ms) gi\u1eefa c\xe1c l\u1ea7n query t\u1ef1 \u0111\u1ed9ng th\u1ef1c hi\u1ec7n vi\u1ec7c g\u1eedi",(0,t.jsx)(r.a,{href:"./#ph%C3%A2n-bi%E1%BB%87t-hai-lo%E1%BA%A1i-request-trong-react-query",children:"refetch request network"})," \u0111\u1ec3 l\xe0m m\u1edbi d\u1eef li\u1ec7u"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"refetchIntervalInBackground"})}),(0,t.jsx)(r.td,{children:"Boolean"}),(0,t.jsxs)(r.td,{children:["N\u1ebfu \u0111\u1eb7t l\xe0 ",(0,t.jsx)(r.code,{children:"true"}),", n\xf3 s\u1ebd refetch ngay c\u1ea3 khi trang web \u0111ang \u1edf ch\u1ebf \u0111\u1ed9 n\u1ec1n. Th\u01b0\u1eddng \u0111i c\xf9ng v\u1edbi ",(0,t.jsx)(r.code,{children:"refetchInterval"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"refetchOnWindowFocus"})}),(0,t.jsxs)(r.td,{children:["Boolean ,",(0,t.jsx)(r.code,{children:"always"})]}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"true"}),": query s\u1ebd refetch khi ta focus v\xe0o tr\xecnh duy\u1ec7t n\u1ebfu data stale",(0,t.jsx)("br",{}),(0,t.jsx)(r.code,{children:"false"}),": query s\u1ebd kh\xf4ng refetch khi ta focus v\xe0o tr\xecnh duy\u1ec7t",(0,t.jsx)("br",{}),(0,t.jsx)(r.code,{children:"always"}),": query s\u1ebd refetch khi ta focus v\xe0o tr\xecnh duy\u1ec7t k\u1ec3 c\u1ea3 khi data fresh ho\u1eb7c stale"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"retry"})}),(0,t.jsx)(r.td,{children:"Number"}),(0,t.jsx)(r.td,{children:"Query s\u1ebd th\u1ef1c hi\u1ec7n l\u1ea1i vi\u1ec7c g\u1eedi request t\u1ed1i \u0111a s\u1ed1 l\u1ea7n ta ch\u1ec9 \u0111\u1ecbnh khi server ph\u1ea3n h\u1ed3i c\xf3 l\u1ed7i x\u1ea3y ra. Sau s\u1ed1 l\u1ea7n retry n\xe0y n\u1ebfu server v\u1eabn ph\u1ea3n h\u1ed3i l\u1ea1i l\u1ed7i th\xec l\xfac \u0111\xf3 m\u1edbi th\u1ef1c s\u1ef1 g\u1eedi l\u1ed7i v\u1ec1 client"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"retryDelay"})}),(0,t.jsx)(r.td,{children:"Number"}),(0,t.jsx)(r.td,{children:"Th\u1eddi gian tr\xec ho\xe3n gi\u1eefa c\xe1c l\u1ea7n retry"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"v\xed-d\u1ee5-v\u1ec1-usequery",children:"V\xed d\u1ee5 v\u1ec1 useQuery()"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:'import axios, { AxiosError } from "axios";\nimport { useQuery } from "@tanstack/react-query";\n\nconst http = axios.create({\n  baseURL: "https://6404cc9280d9c5c7bad0e2f2.mockapi.io/api/v1/",\n});\n\ninterface Task {\n  name: string;\n}\n\nconst httpGet = async () => {\n  const { data } = await http.get<Task[]>("tasks");\n  return data;\n};\n\nexport default function App() {\n  const { data, error, isError, isLoading } = useQuery({\n    queryKey: ["tasks"],\n    queryFn: httpGet,\n  });\n\n  return (\n    <ul>\n      {data?.map((item, index) => (\n        <li key={index}>{item.name}</li>\n      ))}\n    </ul>\n  );\n}\n'})})]})}function a(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>h,x:()=>i});var t=n(6540);const c={},s=t.createContext(c);function h(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:h(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);