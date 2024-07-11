"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[842],{7540:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>a,frontMatter:()=>o,metadata:()=>u,toc:()=>h});var r=t(4848),i=t(8453);const o={sidebar_position:10},c="C\u1ea5u h\xecnh chung cho QueryClient",u={id:"common-query-client-config",title:"C\u1ea5u h\xecnh chung cho QueryClient",description:"- Khi ta s\u1eed d\u1ee5ng nhi\u1ec1u useQuery() hay useMutation() trong project m\xe0 c\xf3 nh\u1eefng c\u1ea5u h\xecnh chung (l\u1eb7p \u0111i l\u1eb7p l\u1ea1i nhi\u1ec1u l\u1ea7n) th\xec ta n\xean c\u1ea5u h\xecnh nh\u1eefng c\u1ea5u h\xecnh chung \u0111\xf3 khi ta kh\u1edfi t\u1ea1o m\u1ed9t QueryClient nh\u01b0 \u1edf b\xe0i \u0111\u1ea7u",source:"@site/docs/common-query-client-config.md",sourceDirName:".",slug:"/common-query-client-config",permalink:"/react-query/common-query-client-config",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Query Filters",permalink:"/react-query/query-filter"},next:{title:"The World of Flowers: Gladiolus and Marigold",permalink:"/react-query/flowers"}},s={},h=[];function l(n){const e={a:"a",code:"code",h1:"h1",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"c\u1ea5u-h\xecnh-chung-cho-queryclient",children:"C\u1ea5u h\xecnh chung cho QueryClient"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Khi ta s\u1eed d\u1ee5ng nhi\u1ec1u ",(0,r.jsx)(e.strong,{children:"useQuery()"})," hay ",(0,r.jsx)(e.strong,{children:"useMutation()"})," trong project m\xe0 c\xf3 nh\u1eefng c\u1ea5u h\xecnh chung (l\u1eb7p \u0111i l\u1eb7p l\u1ea1i nhi\u1ec1u l\u1ea7n) th\xec ta n\xean c\u1ea5u h\xecnh nh\u1eefng c\u1ea5u h\xecnh chung \u0111\xf3 khi ta kh\u1edfi t\u1ea1o m\u1ed9t QueryClient nh\u01b0 \u1edf ",(0,r.jsx)(e.a,{href:"./#c%C3%A0i-%C4%91%E1%BA%B7t",children:"b\xe0i \u0111\u1ea7u"})]}),"\n",(0,r.jsx)(e.li,{children:"C\xfa ph\xe1p:"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:'"use client";\n\nimport { QueryClient, QueryClientProvider } from "@tanstack/react-query";\nimport { ReactQueryDevtools } from "@tanstack/react-query-devtools";\nimport React, { PropsWithChildren } from "react";\n\nconst TanstackQueryProvider = ({ children }: PropsWithChildren) => {\n  const [queryClient] = React.useState(\n    () =>\n      new QueryClient({\n        defaultOptions: {\n          mutations: {\n            /* Mutation configuration */\n          },\n          queries: {\n            /* Queries configuration */\n          },\n        },\n      })\n  );\n  return (\n    <QueryClientProvider client={queryClient}>\n      {children}\n      <ReactQueryDevtools initialIsOpen={false} />\n    </QueryClientProvider>\n  );\n};\n\nexport default TanstackQueryProvider;\n'})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["C\u1ea5u h\xecnh cho ",(0,r.jsx)(e.strong,{children:"queries"}),": ",(0,r.jsx)(e.a,{href:"./useQuery#c%E1%BA%A5u-h%C3%ACnh-cho-usequery",children:"Xem t\u1ea1i \u0111\xe2y"})]}),"\n",(0,r.jsxs)(e.li,{children:["C\u1ea5u h\xecnh cho ",(0,r.jsx)(e.strong,{children:"mutations"}),": ",(0,r.jsx)(e.a,{href:"./useMutation#c%E1%BA%A5u-h%C3%ACnh-cho-usemutation",children:"Xem t\u1ea1i \u0111\xe2y"})]}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>u});var r=t(6540);const i={},o=r.createContext(i);function c(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function u(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);