"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[767],{6503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>s,metadata:()=>u,toc:()=>a});var r=n(4848),i=n(8453);const s={sidebar_position:8},c="refetchQueries()",u={id:"useQueryClient/refetchQueries",title:"refetchQueries()",description:"- Ph\u01b0\u01a1ng th\u1ee9c refetchQueries() d\xf9ng \u0111\u1ec3 refetch nh\u1eefng query \u0111ang c\xf3 trong cache.",source:"@site/docs/useQueryClient/refetchQueries.md",sourceDirName:"useQueryClient",slug:"/useQueryClient/refetchQueries",permalink:"/react-query/useQueryClient/refetchQueries",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"removeQueries()",permalink:"/react-query/useQueryClient/removeQueries"},next:{title:"isFetching / isMutating",permalink:"/react-query/useQueryClient/isFetching-isMutating"}},l={},a=[{value:"C\xfa ph\xe1p",id:"c\xfa-ph\xe1p",level:2},{value:"V\xed d\u1ee5",id:"v\xed-d\u1ee5",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"refetchqueries",children:"refetchQueries()"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Ph\u01b0\u01a1ng th\u1ee9c ",(0,r.jsx)(t.code,{children:"refetchQueries()"})," d\xf9ng \u0111\u1ec3 refetch nh\u1eefng query \u0111ang c\xf3 trong cache."]}),"\n"]})}),"\n",(0,r.jsx)(t.h2,{id:"c\xfa-ph\xe1p",children:"C\xfa ph\xe1p"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"queryClient.refetchQueries(filter?: QueryFilter): Promise<void>\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Xem chi ti\u1ebft QueryFilter ",(0,r.jsx)(t.a,{href:"../query-filter",children:"t\u1ea1i \u0111\xe2y"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"v\xed-d\u1ee5",children:"V\xed d\u1ee5"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'// Refetch all queries\nawait queryClient.refetchQueries();\n\n// Refetch all inactive queries that begin with `posts` in the key\nqueryClient.refetchQueries({ queryKey: ["posts"], type: "inactive" });\n\n// Refetch all active queries\nawait queryClient.refetchQueries({ type: "active" });\n\n// Refetch all active queries that begin with `posts` in the key\nawait queryClient.refetchQueries({ queryKey: ["posts"], type: "active" });\n'})})]})}function o(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>u});var r=n(6540);const i={},s=r.createContext(i);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);