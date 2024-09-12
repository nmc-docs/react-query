"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[413],{3022:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var r=t(4848),i=t(8453);const c={sidebar_position:1,slug:"/"},l="T\u1ed5ng quan v\u1ec1 React Query",a={id:"overview",title:"T\u1ed5ng quan v\u1ec1 React Query",description:"React query l\xe0 g\xec?",source:"@site/docs/overview.md",sourceDirName:".",slug:"/",permalink:"/react-query/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Query Keys v\xe0 Query Function",permalink:"/react-query/querykeys-queryfunction"}},h={},s=[{value:"React query l\xe0 g\xec?",id:"react-query-l\xe0-g\xec",level:2},{value:"C\xe0i \u0111\u1eb7t",id:"c\xe0i-\u0111\u1eb7t",level:2},{value:"V\xf2ng \u0111\u1eddi c\u1ee7a m\u1ed9t query trong react query",id:"v\xf2ng-\u0111\u1eddi-c\u1ee7a-m\u1ed9t-query-trong-react-query",level:2},{value:"Ph\xe2n bi\u1ec7t hai lo\u1ea1i request trong react query",id:"ph\xe2n-bi\u1ec7t-hai-lo\u1ea1i-request-trong-react-query",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"t\u1ed5ng-quan-v\u1ec1-react-query",children:"T\u1ed5ng quan v\u1ec1 React Query"})}),"\n",(0,r.jsx)(n.h2,{id:"react-query-l\xe0-g\xec",children:"React query l\xe0 g\xec?"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Th\xf4ng th\u01b0\u1eddng ch\xfang ta d\xf9ng ",(0,r.jsx)(n.code,{children:"useEffect"})," \u0111\u1ec3 x\u1eed l\xfd vi\u1ec7c g\u1eedi m\u1ed9t request \u0111\u1ebfn server \u0111\u1ec3 l\u1ea5y d\u1eef li\u1ec7u trong t\u1eebng component. Khi component b\u1ecb ",(0,r.jsx)(n.strong,{children:"unmounted"})," (t\u1ee9c ch\xfang ta chuy\u1ec3n sang trang kh\xe1c), d\u1eef li\u1ec7u s\u1ebd b\u1ecb x\xf3a \u0111i, v\xe0 sau \u0111\xf3 component \u0111\u01b0\u1ee3c ",(0,r.jsx)(n.strong,{children:"mounted"})," l\u1ea1i (ch\xfang ta quay tr\u1edf l\u1ea1i trang ban n\xe3y), vi\u1ec7c g\u1eedi request l\u1ea1i ti\u1ebfp t\u1ee5c di\u1ec5n ra. N\u1ebfu l\u1eb7p \u0111i l\u1eb7p l\u1ea1i h\xe0nh \u0111\u1ed9ng n\xe0y, khi\u1ebfn hi\u1ec7u n\u0103ng c\u1ee7a app gi\u1ea3m. V\u1eady l\xe0m th\u1ebf n\xe0o c\xf3 th\u1ec3 \u0111\u1ed3ng b\u1ed9 h\xf3a v\xe0 c\u1eadp nh\u1eadt tr\u1ea1ng th\xe1i d\u1eef li\u1ec7u gi\u1eefa server v\xe0 client?"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"react-query"})," l\xe0 th\u01b0 vi\u1ec7n c\xf3 th\u1ec3 x\u1eed l\xfd vi\u1ec7c t\xecm n\u1ea1p (",(0,r.jsx)(n.code,{children:"fetching"}),"), l\u01b0u v\xe0o b\u1ed9 nh\u1edb \u0111\u1ec7m (",(0,r.jsx)(n.code,{children:"caching"}),"), \u0111\u1ed3ng b\u1ed9 h\xf3a v\xe0 c\u1eadp nh\u1eadt tr\u1ea1ng th\xe1i d\u1eef li\u1ec7u gi\u1eefa server v\xe0 client."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"c\xe0i-\u0111\u1eb7t",children:"C\xe0i \u0111\u1eb7t"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install @tanstack/react-query\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["T\u1ea1o component ",(0,r.jsx)(n.code,{children:"<TanstackQueryProvider />"})," xong b\u1ecdc component n\xe0y \u1edf App.tsx:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { QueryClient, QueryClientProvider } from "@tanstack/react-query";\nimport { ReactQueryDevtools } from "@tanstack/react-query-devtools";\nimport React, { PropsWithChildren } from "react";\n\nconst TanstackQueryProvider = ({ children }: PropsWithChildren) => {\n  const [queryClient] = React.useState(() => new QueryClient());\n  return (\n    <QueryClientProvider client={queryClient}>\n      {children}\n      <ReactQueryDevtools initialIsOpen={false} />\n    </QueryClientProvider>\n  );\n};\n\nexport default TanstackQueryProvider;\n'})}),"\n",(0,r.jsx)(n.h2,{id:"v\xf2ng-\u0111\u1eddi-c\u1ee7a-m\u1ed9t-query-trong-react-query",children:"V\xf2ng \u0111\u1eddi c\u1ee7a m\u1ed9t query trong react query"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"M\u1ed9t query do ta \u0111\u1ecbnh ngh\u0129a s\u1ebd l\xe0m nhi\u1ec7m v\u1ee5 fetching v\xe0 caching data cho app c\u1ee7a ch\xfang ta. V\xf2ng \u0111\u1eddi c\u1ee7a n\xf3 \u0111\u01b0\u1ee3c m\xf4 t\u1ea3 nh\u01b0 sau:"}),"\n",(0,r.jsx)(n.li,{children:"Sau khi fetching, query v\xe0 d\u1eef li\u1ec7u t\u01b0\u01a1ng \u1ee9ng s\u1ebd \u0111\u01b0\u1ee3c l\u01b0u v\xe0o cache"}),"\n",(0,r.jsxs)(n.li,{children:["C\xf3 m\u1ed9t t\u1eeb kh\xf3a g\u1ecdi l\xe0 ",(0,r.jsx)(n.code,{children:"staleTime"}),". \u0110\xe2y l\xe0 th\u1eddi gian m\xe0 data s\u1ebd \u0111\u01b0\u1ee3c cho l\xe0 m\u1edbi.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["N\u1ebfu ",(0,r.jsx)(n.code,{children:"staleTime = 0"}),", d\u1eef li\u1ec7u sau khi \u0111\u01b0\u1ee3c fetch xong s\u1ebd lu\xf4n \u0111\u01b0\u1ee3c coi l\xe0 c\u0169 v\xe0 khi query \u0111\u01b0\u1ee3c g\u1ecdi, d\u1eef li\u1ec7u s\u1ebd \u0111\u01b0\u1ee3c l\u1ea5y t\u1eeb cache ra \u0111\u1ed3ng th\u1eddi g\u1eedi \u0111i m\u1ed9t ",(0,r.jsx)(n.a,{href:"#ph%C3%A2n-bi%E1%BB%87t-hai-lo%E1%BA%A1i-request-trong-react-query",children:"refetch request network"})," \u0111\u1ec3 l\xe0m m\u1edbi data."]}),"\n",(0,r.jsxs)(n.li,{children:["N\u1ebfu ",(0,r.jsx)(n.code,{children:"staleTime > 0"}),", trong kho\u1ea3ng th\u1eddi gian n\xe0y, d\u1eef li\u1ec7u s\u1ebd lu\xf4n \u0111\u01b0\u1ee3c coi l\xe0 m\u1edbi v\xe0 n\u1ebfu ta g\u1ecdi query, n\xf3 s\u1ebd kh\xf4ng g\u1eedi \u0111i ",(0,r.jsx)(n.a,{href:"#ph%C3%A2n-bi%E1%BB%87t-hai-lo%E1%BA%A1i-request-trong-react-query",children:"refetch request network"}),", khi n\xe0o h\u1ebft kho\u1ea3ng ",(0,r.jsx)(n.code,{children:"staleTime"})," n\xe0y, d\u1eef li\u1ec7u s\u1ebd \u0111\u01b0\u1ee3c coi l\xe0 c\u0169. Khi \u0111\xf3 n\u1ebfu g\u1ecdi query, n\xf3 m\u1edbi g\u1eedi ",(0,r.jsx)(n.a,{href:"#ph%C3%A2n-bi%E1%BB%87t-hai-lo%E1%BA%A1i-request-trong-react-query",children:"refetch request network"})," \u0111\u1ec3 l\xe0m m\u1edbi d\u1eef li\u1ec7u (c\u1eadp nh\u1eadt d\u1eef li\u1ec7u m\u1edbi nh\u1ea5t)."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Khi c\xe1c component c\xf3 ch\u1ee9a l\u1eddi g\u1ecdi query b\u1ecb ",(0,r.jsx)(n.strong,{children:"unmounted"})," ho\u1eb7c kh\xf4ng c\xf3 component n\xe0o d\xf9ng query \u0111\xf3 n\u1eefa, l\xfac n\xe0y, query s\u1ebd \u1edf tr\u1ea1ng th\xe1i ",(0,r.jsx)(n.strong,{children:"inactive"})," v\xe0 ",(0,r.jsx)(n.code,{children:"cacheTime"})," s\u1ebd \u0111\u1ebfm ng\u01b0\u1ee3c. ",(0,r.jsx)(n.code,{children:"cacheTime"})," l\xe0 kho\u1ea3ng th\u1eddi gian m\xe0 d\u1eef li\u1ec7u trong cache s\u1ebd b\u1ecb x\xf3a. Sau kho\u1ea3ng th\u1eddi gian n\xe0y, khi g\u1ecdi query, s\u1ebd bu\u1ed9c ph\u1ea3i g\u1eedi l\u1ea1i ",(0,r.jsx)(n.a,{href:"#ph%C3%A2n-bi%E1%BB%87t-hai-lo%E1%BA%A1i-request-trong-react-query",children:"cache request network"})," \u0111\u1ec3 ti\u1ebfp t\u1ee5c l\u01b0u d\u1eef li\u1ec7u v\xe0o cache. Th\u1eddi gian m\u1eb7c \u0111\u1ecbnh c\u1ee7a ",(0,r.jsx)(n.code,{children:"cacheTime"})," l\xe0 5 ph\xfat v\xe0 ta c\xf3 th\u1ec3 t\xf9y ch\u1ec9nh th\u1eddi gian n\xe0y. L\u01b0u \xfd r\u1eb1ng ",(0,r.jsx)(n.strong,{children:"staleTime <= cacheTime"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ph\xe2n-bi\u1ec7t-hai-lo\u1ea1i-request-trong-react-query",children:"Ph\xe2n bi\u1ec7t hai lo\u1ea1i request trong react query"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Cache request network"}),(0,r.jsx)(n.th,{children:"Refetch request network"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Khi g\u1ecdi m\u1ed9t query m\xe0 query \u0111\xf3 ch\u01b0a c\xf3 trong cache, lo\u1ea1i request n\xe0y s\u1ebd \u0111\u01b0\u1ee3c g\u1ecdi \u0111\u1ec3 \u0111\u01b0a query v\xe0o trong cache"}),(0,r.jsx)(n.td,{children:"Khi g\u1ecdi m\u1ed9t query m\xe0 query \u0111\xf3 \u0111\xe3 c\xf3 trong cache, lo\u1ea1i request n\xe0y s\u1ebd \u0111\u01b0\u1ee3c g\u1ecdi. Lo\u1ea1i request n\xe0y c\xf3 nhi\u1ec7m v\u1ee5 l\xe0m m\u1edbi d\u1eef li\u1ec7u c\u1ee7a query t\u01b0\u01a1ng \u1ee9ng"})]})})]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var r=t(6540);const i={},c=r.createContext(i);function l(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);