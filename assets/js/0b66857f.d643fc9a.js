"use strict";(self.webpackChunkreact_query_kr=self.webpackChunkreact_query_kr||[]).push([[6975],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,m=u["".concat(s,".").concat(f)]||u[f]||g[f]||a;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6986:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return g}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={sidebar_position:19,title:"setLogger"},s="**setLogger**",l={unversionedId:"api_reference/setLogger",id:"api_reference/setLogger",title:"setLogger",description:"setLogger",source:"@site/docs/api_reference/setLogger.md",sourceDirName:"api_reference",slug:"/api_reference/setLogger",permalink:"/react-query-kr/docs/api_reference/setLogger",draft:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19,title:"setLogger"},sidebar:"defaultSidebar",previous:{title:"onlineManager",permalink:"/react-query-kr/docs/api_reference/onlineManager"},next:{title:"hydration",permalink:"/react-query-kr/docs/api_reference/hydration"}},p={},g=[{value:"<strong><code>setLogger</code></strong>",id:"setlogger-1",level:2}],u={toc:g};function f(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setlogger"},(0,a.kt)("strong",{parentName:"h1"},"setLogger")),(0,a.kt)("h2",{id:"setlogger-1"},(0,a.kt)("strong",{parentName:"h2"},(0,a.kt)("inlineCode",{parentName:"strong"},"setLogger"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"setLogger")),"\ub294 \ub9ac\uc561\ud2b8\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uae30\ubcf8 \ub85c\uac70\ub97c \ub300\uccb4\ud560 ",(0,a.kt)("strong",{parentName:"p"},"\ucee4\uc2a4\ud140 \uac00\ub2a5\ud55c")," \ub9ac\uc561\ud2b8 \ucffc\ub9ac \uc804\uc6a9 \ub85c\uac70\uc785\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c window.console \uac1d\uccb4\uac00 \uc0ac\uc6a9\ub418\uae30 \ub54c\ubb38\uc5d0, \uc804\uc5ed \uac1d\uccb4\uc5d0 console\uc774 \uc5c6\uc73c\uba74 \uc544\ubb34\uac83\ub3c4 \uae30\ub85d\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { setLogger } from 'react-query';\nimport { printLog, printWarn, printError } from 'custom-logger';\n\n// Custom logger\nsetLogger({\n    log: printLog,\n    warn: printWarn,\n    error: printError,\n});\n\n// Sentry logger\nsetLogger({\n    log: (message) => {\n        Sentry.captureMessage(message);\n    },\n    warn: (message) => {\n        Sentry.captureMessage(message);\n    },\n    error: (error) => {\n        Sentry.captureException(error);\n    },\n});\n\n// Winston logger\nsetLogger(winston.createLogger());\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Options")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"logger: Logger"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"log"),",\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"warn"),", \uadf8\ub9ac\uace0\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"error"),"\xa0\uba54\uc18c\ub4dc\ub97c \uad6c\ud604\ud558\uc154\uc57c \ud569\ub2c8\ub2e4.")))))}f.isMDXComponent=!0}}]);