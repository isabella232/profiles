(self.webpackChunkprofiles_dev=self.webpackChunkprofiles_dev||[]).push([[2519],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var p=n.createContext({}),a=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=a(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=a(r),d=c,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function d(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:c,i[1]=l;for(var a=2;a<o;a++)i[a]=r[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7747:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return a},toc:function(){return s},default:function(){return f}});var n=r(2122),c=r(9756),o=(r(7294),r(3905)),i=["components"],l={},p="list",a={unversionedId:"pctl/pctl-list-cmd",id:"pctl/pctl-list-cmd",isDocsHomePage:!1,title:"list",description:"`",source:"@site/docs/pctl/pctl-list-cmd.md",sourceDirName:"pctl",slug:"/pctl/pctl-list-cmd",permalink:"/docs/pctl/pctl-list-cmd",editUrl:"https://github.com/weaveworks/profiles/edit/main/userdocs/profiles.dev/docs/pctl/pctl-list-cmd.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"install",permalink:"/docs/pctl/pctl-install-cmd"},next:{title:"prepare",permalink:"/docs/pctl/pctl-prepare-cmd"}},s=[],u={toc:s};function f(e){var t=e.components,r=(0,c.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"list"},"list"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NAME:\n   pctl list - list installed profiles\n\nUSAGE:\n   pctl list\n")))}f.isMDXComponent=!0}}]);