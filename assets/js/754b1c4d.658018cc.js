"use strict";(self.webpackChunkhtml=self.webpackChunkhtml||[]).push([[808],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(t),d=i,m=p["".concat(o,".").concat(d)]||p[d]||y[d]||a;return t?r.createElement(m,c(c({ref:n},s),{},{components:t})):r.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,c=new Array(a);c[0]=d;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u[p]="string"==typeof e?e:i,c[1]=u;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1477:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>y,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const a={sidebar_position:5},c="cancelQueries()",u={unversionedId:"useQueryClient/cancelQueries",id:"useQueryClient/cancelQueries",title:"cancelQueries()",description:"- Ph\u01b0\u01a1ng th\u1ee9c cancelQueries() d\xf9ng \u0111\u1ec3 h\u1ee7y b\u1ecf khi \u0111ang th\u1ef1c hi\u1ec7n d\u1edf query. \u0110\u01b0\u1ee3c d\xf9ng khi component unmounted (t\u1ee9c khi ng\u01b0\u1eddi d\xf9ng chuy\u1ec3n trang kh\xe1c trong khi query \u0111ang th\u1ef1c hi\u1ec7n d\u1edf th\xec h\u1ee7y b\u1ecf kh\xf4ng th\u1ef1c hi\u1ec7n query \u0111\xf3 n\u1eefa, gi\xfap t\u1ed1i \u01b0u hi\u1ec7u n\u0103ng).",source:"@site/docs/useQueryClient/cancelQueries.md",sourceDirName:"useQueryClient",slug:"/useQueryClient/cancelQueries",permalink:"/react-query/useQueryClient/cancelQueries",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"getQueryData()",permalink:"/react-query/useQueryClient/getQueryData"},next:{title:"removeQueries()",permalink:"/react-query/useQueryClient/removeQueries"}},o={},l=[{value:"C\xfa ph\xe1p",id:"c\xfa-ph\xe1p",level:2},{value:"V\xed d\u1ee5",id:"v\xed-d\u1ee5",level:2}],s={toc:l},p="wrapper";function y(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cancelqueries"},"cancelQueries()"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Ph\u01b0\u01a1ng th\u1ee9c ",(0,i.kt)("inlineCode",{parentName:"li"},"cancelQueries()")," d\xf9ng \u0111\u1ec3 h\u1ee7y b\u1ecf khi \u0111ang th\u1ef1c hi\u1ec7n d\u1edf query. \u0110\u01b0\u1ee3c d\xf9ng khi component unmounted (t\u1ee9c khi ng\u01b0\u1eddi d\xf9ng chuy\u1ec3n trang kh\xe1c trong khi query \u0111ang th\u1ef1c hi\u1ec7n d\u1edf th\xec h\u1ee7y b\u1ecf kh\xf4ng th\u1ef1c hi\u1ec7n query \u0111\xf3 n\u1eefa, gi\xfap t\u1ed1i \u01b0u hi\u1ec7u n\u0103ng)."),(0,i.kt)("li",{parentName:"ul"},"Ph\u01b0\u01a1ng th\u1ee9c n\xe0y \u0111\u01b0\u1ee3c d\xf9ng ch\u1ee7 y\u1ebfu \u1edf ",(0,i.kt)("strong",{parentName:"li"},"cleanup function")," trong ",(0,i.kt)("inlineCode",{parentName:"li"},"useEffect()")))),(0,i.kt)("h2",{id:"c\xfa-ph\xe1p"},"C\xfa ph\xe1p"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"queryClient.cancelQueries(filter?: QueryFilter): Promise<void>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Xem chi ti\u1ebft QueryFilter ",(0,i.kt)("a",{parentName:"li",href:"../query-filter"},"t\u1ea1i \u0111\xe2y"))),(0,i.kt)("h2",{id:"v\xed-d\u1ee5"},"V\xed d\u1ee5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useQuery, useQueryClient } from "@tanstack/react-query";\nimport "./styles.css";\nimport axios from "axios";\nimport { useEffect } from "react";\n\ninterface Task {\n  name: string;\n}\n\nconst api = axios.create({\n  baseURL: "https://6404cc9280d9c5c7bad0e2f2.mockapi.io/api/v1/",\n});\n\nconst getAllTasks = async (querySignal?: AbortSignal) => {\n  const { data } = await api.get<Task[]>("tasks", { signal: querySignal });\n  return data;\n};\n\nexport default function App() {\n  const queryClient = useQueryClient();\n  const { data: taskList } = useQuery({\n    queryKey: ["todos"],\n    queryFn: ({ signal }) => getAllTasks(signal),\n  });\n\n  useEffect(() => {\n    return () => {\n      queryClient.cancelQueries({ queryKey: ["todos"] });\n    };\n  }, [queryClient]);\n\n  return (\n    <div>\n      {taskList?.map((item, index) => (\n        <p key={index}>{item.name}</p>\n      ))}\n    </div>\n  );\n}\n')))}y.isMDXComponent=!0}}]);