"use strict";(self.webpackChunkreact_query_kr=self.webpackChunkreact_query_kr||[]).push([[629],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,v=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(v,o(o({ref:t},s),{},{components:n})):r.createElement(v,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9073:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={sidebar_position:2,title:"\uc124\uce58 (installation)"},l="\uc124\uce58",p={unversionedId:"overview/installation",id:"overview/installation",title:"\uc124\uce58 (installation)",description:"3\uac00\uc9c0 \ubc29\ubc95\uc73c\ub85c \ub9ac\uc561\ud2b8 \ucffc\ub9ac\ub97c \uc124\uce58\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. npm, yarn \uc544\ub2c8\uba74 unpkg.com \ub97c \ud1b5\ud574 script\ub85c \uc124\uce58\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4.",source:"@site/docs/overview/installation.md",sourceDirName:"overview",slug:"/overview/installation",permalink:"/react-query-kr/docs/overview/installation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\uc124\uce58 (installation)"},sidebar:"defaultSidebar",previous:{title:"\ub9ac\uc561\ud2b8 \ucffc\ub9ac \ud1ba\uc544\ubcf4\uae30 (overview)",permalink:"/react-query-kr/docs/overview/"},next:{title:"\uac04\ub2e8\ud558\uac8c \uc2dc\uc791\ud574\ubcf4\uae30 (Quick Start)",permalink:"/react-query-kr/docs/overview/quick_start"}},s={},u=[{value:"<strong>NPM</strong>",id:"npm",level:3},{value:"<strong>CDN</strong>",id:"cdn",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\uc124\uce58"},"\uc124\uce58"),(0,i.kt)("p",null,"3\uac00\uc9c0 \ubc29\ubc95\uc73c\ub85c \ub9ac\uc561\ud2b8 \ucffc\ub9ac\ub97c \uc124\uce58\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. npm, yarn \uc544\ub2c8\uba74 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://unpkg.com/"},"unpkg.com")," \ub97c \ud1b5\ud574")," script\ub85c \uc124\uce58\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"npm"},(0,i.kt)("strong",{parentName:"h3"},"NPM")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"1 $ npm i react-query\n2# or\n3 $ yarn add react-query\n")),(0,i.kt)("p",null,"React Query is compatible with React v16.8+ and works with ReactDOM and React Native."),(0,i.kt)("p",null,"\ub9ac\uc561\ud2b8 \ucffc\ub9ac\ub294 16.8\ubc84\uc804 \uc774\uc0c1\uc758 React\uc5d0\uc11c \ub3d9\uc791\ud569\ub2c8\ub2e4. React Dom \ubc0f React Native\uc5d0\uc11c\ub3c4 \ub3d9\uc791\ud558\uace0\uc694."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\ub2e4\uc6b4\ub85c\ub4dc \ubc1b\uae30 \uc804\uc5d0 \uac04\ub2e8\ud788 \ud14c\uc2a4\ud2b8\ud574\ubcf4\uace0 \uc2f6\uc73c\uc2dc\ub2e4\uba74 \uc608\uc81c\ub97c \uad6c\ub3d9\ud574\ubcf4\uc138\uc694!"))),(0,i.kt)("h3",{id:"cdn"},(0,i.kt)("strong",{parentName:"h3"},"CDN")),(0,i.kt)("p",null,"\ub9cc\uc57d \ubaa8\ub4c8 \ubc88\ub4e4\ub7ec\ub098 \ud328\ud0a4\uc9c0 \ub9e4\ub2c8\uc838\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc73c\uc2e0\ub2e4\uba74 unpkg.com\uc758 CDN\uc744 \ud1b5\ud574 \ub2e4\uc6b4\ubc1b\ub294 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c\uc758 script \ud0dc\uadf8\ub97c HTML \ud30c\uc77c\uc5d0 \ub07c\uc6cc\ub123\uc73c\uc138\uc694"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/react-query/dist/react-query.production.min.js"><\/script>\n')),(0,i.kt)("p",null,"\uc798 \ub123\uc73c\uc168\ub2e4\uba74, \ub2e4\uc74c\uacfc \uac19\uc774 window \uac1d\uccb4\ub97c \ud1b5\ud574 \uc811\uadfc\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"window.ReactQuery;\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"CDN \uc124\uce58 \ubc0f \uc0ac\uc6a9 \ubc29\uc2dd\uc5d4 React CDN \uc2a4\ud06c\ub9bd\ud2b8 \ubc88\ub4e4\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."))))}d.isMDXComponent=!0}}]);