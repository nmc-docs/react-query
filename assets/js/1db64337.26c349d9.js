"use strict";(self.webpackChunkhtml=self.webpackChunkhtml||[]).push([[372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>s});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=o(n),h=a,s=m["".concat(u,".").concat(h)]||m[h]||g[h]||i;return n?r.createElement(s,l(l({ref:t},p),{},{components:n})):r.createElement(s,l({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=h;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[m]="string"==typeof e?e:a,l[1]=c;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1,slug:"/"},l="T\u1ed5ng quan v\u1ec1 React Query",c={unversionedId:"overview",id:"overview",title:"T\u1ed5ng quan v\u1ec1 React Query",description:"React query l\xe0 g\xec?",source:"@site/docs/overview.md",sourceDirName:".",slug:"/",permalink:"/react-query/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Query Keys v\xe0 Query Function",permalink:"/react-query/querykeys-queryfunction"}},u={},o=[{value:"React query l\xe0 g\xec?",id:"react-query-l\xe0-g\xec",level:2},{value:"C\xe0i \u0111\u1eb7t",id:"c\xe0i-\u0111\u1eb7t",level:2},{value:"V\xf2ng \u0111\u1eddi c\u1ee7a m\u1ed9t query trong react query",id:"v\xf2ng-\u0111\u1eddi-c\u1ee7a-m\u1ed9t-query-trong-react-query",level:2},{value:"Ph\xe2n bi\u1ec7t hai lo\u1ea1i request trong react query",id:"ph\xe2n-bi\u1ec7t-hai-lo\u1ea1i-request-trong-react-query",level:2}],p={toc:o},m="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"t\u1ed5ng-quan-v\u1ec1-react-query"},"T\u1ed5ng quan v\u1ec1 React Query"),(0,a.kt)("h2",{id:"react-query-l\xe0-g\xec"},"React query l\xe0 g\xec?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Th\xf4ng th\u01b0\u1eddng ch\xfang ta d\xf9ng ",(0,a.kt)("inlineCode",{parentName:"li"},"useEffect")," \u0111\u1ec3 x\u1eed l\xfd vi\u1ec7c g\u1eedi m\u1ed9t request \u0111\u1ebfn server \u0111\u1ec3 l\u1ea5y d\u1eef li\u1ec7u trong t\u1eebng component. Khi component b\u1ecb ",(0,a.kt)("strong",{parentName:"li"},"unmounted")," (t\u1ee9c ch\xfang ta chuy\u1ec3n sang trang kh\xe1c), d\u1eef li\u1ec7u s\u1ebd b\u1ecb x\xf3a \u0111i, v\xe0 sau \u0111\xf3 component \u0111\u01b0\u1ee3c ",(0,a.kt)("strong",{parentName:"li"},"mounted")," l\u1ea1i (ch\xfang ta quay tr\u1edf l\u1ea1i trang ban n\xe3y), vi\u1ec7c g\u1eedi request l\u1ea1i ti\u1ebfp t\u1ee5c di\u1ec5n ra. N\u1ebfu l\u1eb7p \u0111i l\u1eb7p l\u1ea1i h\xe0nh \u0111\u1ed9ng n\xe0y, khi\u1ebfn hi\u1ec7u n\u0103ng c\u1ee7a app gi\u1ea3m. V\u1eady l\xe0m th\u1ebf n\xe0o c\xf3 th\u1ec3 \u0111\u1ed3ng b\u1ed9 h\xf3a v\xe0 c\u1eadp nh\u1eadt tr\u1ea1ng th\xe1i d\u1eef li\u1ec7u gi\u1eefa server v\xe0 client?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"react-query")," l\xe0 th\u01b0 vi\u1ec7n c\xf3 th\u1ec3 x\u1eed l\xfd vi\u1ec7c t\xecm n\u1ea1p (",(0,a.kt)("inlineCode",{parentName:"li"},"fetching"),"), l\u01b0u v\xe0o b\u1ed9 nh\u1edb \u0111\u1ec7m (",(0,a.kt)("inlineCode",{parentName:"li"},"caching"),"), \u0111\u1ed3ng b\u1ed9 h\xf3a v\xe0 c\u1eadp nh\u1eadt tr\u1ea1ng th\xe1i d\u1eef li\u1ec7u gi\u1eefa server v\xe0 client.")),(0,a.kt)("h2",{id:"c\xe0i-\u0111\u1eb7t"},"C\xe0i \u0111\u1eb7t"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @tanstack/react-query\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"B\u1ecdc component ",(0,a.kt)("inlineCode",{parentName:"li"},"<QueryClientProvider/>")," l\xean tr\xean c\xf9ng c\u1ee7a app:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { QueryClient, QueryClientProvider } from "@tanstack/react-query";\n\nconst queryClient = new QueryClient();\n\nconst root = ReactDOM.createRoot(document.getElementById("root"));\nroot.render(\n  <QueryClientProvider client={queryClient}>\n    <App />\n  </QueryClientProvider>\n);\n')),(0,a.kt)("h2",{id:"v\xf2ng-\u0111\u1eddi-c\u1ee7a-m\u1ed9t-query-trong-react-query"},"V\xf2ng \u0111\u1eddi c\u1ee7a m\u1ed9t query trong react query"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"M\u1ed9t query do ta \u0111\u1ecbnh ngh\u0129a s\u1ebd l\xe0m nhi\u1ec7m v\u1ee5 fetching v\xe0 caching data cho app c\u1ee7a ch\xfang ta. V\xf2ng \u0111\u1eddi c\u1ee7a n\xf3 \u0111\u01b0\u1ee3c m\xf4 t\u1ea3 nh\u01b0 sau:"),(0,a.kt)("li",{parentName:"ul"},"Sau khi fetching, query v\xe0 d\u1eef li\u1ec7u t\u01b0\u01a1ng \u1ee9ng s\u1ebd \u0111\u01b0\u1ee3c l\u01b0u v\xe0o cache"),(0,a.kt)("li",{parentName:"ul"},"C\xf3 m\u1ed9t t\u1eeb kh\xf3a g\u1ecdi l\xe0 ",(0,a.kt)("inlineCode",{parentName:"li"},"staleTime"),". \u0110\xe2y l\xe0 th\u1eddi gian m\xe0 data s\u1ebd \u0111\u01b0\u1ee3c cho l\xe0 m\u1edbi.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"N\u1ebfu ",(0,a.kt)("inlineCode",{parentName:"li"},"staleTime = 0"),", d\u1eef li\u1ec7u sau khi \u0111\u01b0\u1ee3c fetch xong s\u1ebd lu\xf4n \u0111\u01b0\u1ee3c coi l\xe0 c\u0169 v\xe0 khi query \u0111\u01b0\u1ee3c g\u1ecdi, d\u1eef li\u1ec7u s\u1ebd \u0111\u01b0\u1ee3c l\u1ea5y t\u1eeb cache ra \u0111\u1ed3ng th\u1eddi g\u1eedi \u0111i m\u1ed9t ",(0,a.kt)("a",{parentName:"li",href:"#ph%C3%A2n-bi%E1%BB%87t-hai-lo%E1%BA%A1i-request-trong-react-query"},"refetch request network")," \u0111\u1ec3 l\xe0m m\u1edbi data."),(0,a.kt)("li",{parentName:"ul"},"N\u1ebfu ",(0,a.kt)("inlineCode",{parentName:"li"},"staleTime > 0"),", trong kho\u1ea3ng th\u1eddi gian n\xe0y, d\u1eef li\u1ec7u s\u1ebd lu\xf4n \u0111\u01b0\u1ee3c coi l\xe0 m\u1edbi v\xe0 n\u1ebfu ta g\u1ecdi query, n\xf3 s\u1ebd kh\xf4ng g\u1eedi \u0111i ",(0,a.kt)("a",{parentName:"li",href:"#ph%C3%A2n-bi%E1%BB%87t-hai-lo%E1%BA%A1i-request-trong-react-query"},"refetch request network"),", khi n\xe0o h\u1ebft kho\u1ea3ng ",(0,a.kt)("inlineCode",{parentName:"li"},"staleTime")," n\xe0y, d\u1eef li\u1ec7u s\u1ebd \u0111\u01b0\u1ee3c coi l\xe0 c\u0169. Khi \u0111\xf3 n\u1ebfu g\u1ecdi query, n\xf3 m\u1edbi g\u1eedi ",(0,a.kt)("a",{parentName:"li",href:"#ph%C3%A2n-bi%E1%BB%87t-hai-lo%E1%BA%A1i-request-trong-react-query"},"refetch request network")," \u0111\u1ec3 l\xe0m m\u1edbi d\u1eef li\u1ec7u (c\u1eadp nh\u1eadt d\u1eef li\u1ec7u m\u1edbi nh\u1ea5t)."))),(0,a.kt)("li",{parentName:"ul"},"Khi c\xe1c component c\xf3 ch\u1ee9a l\u1eddi g\u1ecdi query b\u1ecb ",(0,a.kt)("strong",{parentName:"li"},"unmounted")," ho\u1eb7c kh\xf4ng c\xf3 component n\xe0o d\xf9ng query \u0111\xf3 n\u1eefa, l\xfac n\xe0y, query s\u1ebd \u1edf tr\u1ea1ng th\xe1i ",(0,a.kt)("strong",{parentName:"li"},"inactive")," v\xe0 ",(0,a.kt)("inlineCode",{parentName:"li"},"cacheTime")," s\u1ebd \u0111\u1ebfm ng\u01b0\u1ee3c. ",(0,a.kt)("inlineCode",{parentName:"li"},"cacheTime")," l\xe0 kho\u1ea3ng th\u1eddi gian m\xe0 d\u1eef li\u1ec7u trong cache s\u1ebd b\u1ecb x\xf3a. Sau kho\u1ea3ng th\u1eddi gian n\xe0y, khi g\u1ecdi query, s\u1ebd bu\u1ed9c ph\u1ea3i g\u1eedi l\u1ea1i ",(0,a.kt)("a",{parentName:"li",href:"#ph%C3%A2n-bi%E1%BB%87t-hai-lo%E1%BA%A1i-request-trong-react-query"},"cache request network")," \u0111\u1ec3 ti\u1ebfp t\u1ee5c l\u01b0u d\u1eef li\u1ec7u v\xe0o cache. Th\u1eddi gian m\u1eb7c \u0111\u1ecbnh c\u1ee7a ",(0,a.kt)("inlineCode",{parentName:"li"},"cacheTime")," l\xe0 5 ph\xfat v\xe0 ta c\xf3 th\u1ec3 t\xf9y ch\u1ec9nh th\u1eddi gian n\xe0y. L\u01b0u \xfd r\u1eb1ng ",(0,a.kt)("strong",{parentName:"li"},"staleTime <= cacheTime"))),(0,a.kt)("h2",{id:"ph\xe2n-bi\u1ec7t-hai-lo\u1ea1i-request-trong-react-query"},"Ph\xe2n bi\u1ec7t hai lo\u1ea1i request trong react query"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Cache request network"),(0,a.kt)("th",{parentName:"tr",align:null},"Refetch request network"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Khi g\u1ecdi m\u1ed9t query m\xe0 query \u0111\xf3 ch\u01b0a c\xf3 trong cache, lo\u1ea1i request n\xe0y s\u1ebd \u0111\u01b0\u1ee3c g\u1ecdi \u0111\u1ec3 \u0111\u01b0a query v\xe0o trong cache"),(0,a.kt)("td",{parentName:"tr",align:null},"Khi g\u1ecdi m\u1ed9t query m\xe0 query \u0111\xf3 \u0111\xe3 c\xf3 trong cache, lo\u1ea1i request n\xe0y s\u1ebd \u0111\u01b0\u1ee3c g\u1ecdi. Lo\u1ea1i request n\xe0y c\xf3 nhi\u1ec7m v\u1ee5 l\xe0m m\u1edbi d\u1eef li\u1ec7u c\u1ee7a query t\u01b0\u01a1ng \u1ee9ng")))))}g.isMDXComponent=!0}}]);