(self.webpackChunkprofiles_dev=self.webpackChunkprofiles_dev||[]).push([[8504],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,d=f["".concat(l,".").concat(m)]||f[m]||s[m]||c;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<c;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6304:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var n=r(2122),o=r(9756),c=(r(7294),r(3905)),i=["components"],a={},l="show",p={unversionedId:"pctl/pctl-show-cmd",id:"pctl/pctl-show-cmd",isDocsHomePage:!1,title:"show",description:"`",source:"@site/docs/pctl/pctl-show-cmd.md",sourceDirName:"pctl",slug:"/pctl/pctl-show-cmd",permalink:"/docs/pctl/pctl-show-cmd",editUrl:"https://github.com/weaveworks/profiles/edit/main/userdocs/profiles.dev/docs/pctl/pctl-show-cmd.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"search",permalink:"/docs/pctl/pctl-search-cmd"},next:{title:"Community",permalink:"/docs/community"}},u=[],s={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"show"},"show"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"NAME:\n   pctl show - display information about a profile\n\nUSAGE:\n   pctl [--kubeconfig=<kubeconfig-path>] show <CATALOG>/<PROFILE>[/<VERSION>]\n\n   example: pctl show catalog/weaveworks-nginx/v0.1.0\n\nOPTIONS:\n   --output value, -o value  Output format. json|table (default: table)\n   \n")))}f.isMDXComponent=!0}}]);