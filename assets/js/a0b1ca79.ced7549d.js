"use strict";(self.webpackChunkhtml=self.webpackChunkhtml||[]).push([[951],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),y=i,h=p["".concat(o,".").concat(y)]||p[y]||f[y]||a;return r?n.createElement(h,u(u({ref:t},s),{},{components:r})):n.createElement(h,u({ref:t},s))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,u=new Array(a);u[0]=y;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[p]="string"==typeof e?e:i,u[1]=c;for(var l=2;l<a;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},6899:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:7},u="refetchQueries()",c={unversionedId:"useQueryClient/refetchQueries",id:"useQueryClient/refetchQueries",title:"refetchQueries()",description:"- Ph\u01b0\u01a1ng th\u1ee9c refetchQueries() d\xf9ng \u0111\u1ec3 refetch nh\u1eefng query \u0111ang c\xf3 trong cache.",source:"@site/docs/useQueryClient/refetchQueries.md",sourceDirName:"useQueryClient",slug:"/useQueryClient/refetchQueries",permalink:"/react-query/useQueryClient/refetchQueries",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"removeQueries()",permalink:"/react-query/useQueryClient/removeQueries"},next:{title:"isFetching / isMutating",permalink:"/react-query/useQueryClient/isFetching-isMutating"}},o={},l=[{value:"C\xfa ph\xe1p",id:"c\xfa-ph\xe1p",level:2},{value:"V\xed d\u1ee5",id:"v\xed-d\u1ee5",level:2}],s={toc:l},p="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"refetchqueries"},"refetchQueries()"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Ph\u01b0\u01a1ng th\u1ee9c ",(0,i.kt)("inlineCode",{parentName:"li"},"refetchQueries()")," d\xf9ng \u0111\u1ec3 refetch nh\u1eefng query \u0111ang c\xf3 trong cache."))),(0,i.kt)("h2",{id:"c\xfa-ph\xe1p"},"C\xfa ph\xe1p"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"queryClient.refetchQueries(filter?: QueryFilter): Promise<void>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Xem chi ti\u1ebft QueryFilter ",(0,i.kt)("a",{parentName:"li",href:"../query-filter"},"t\u1ea1i \u0111\xe2y"))),(0,i.kt)("h2",{id:"v\xed-d\u1ee5"},"V\xed d\u1ee5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// Refetch all queries\nawait queryClient.refetchQueries();\n\n// Refetch all inactive queries that begin with `posts` in the key\nqueryClient.refetchQueries({ queryKey: ["posts"], type: "inactive" });\n\n// Refetch all active queries\nawait queryClient.refetchQueries({ type: "active" });\n\n// Refetch all active queries that begin with `posts` in the key\nawait queryClient.refetchQueries({ queryKey: ["posts"], type: "active" });\n')))}f.isMDXComponent=!0}}]);