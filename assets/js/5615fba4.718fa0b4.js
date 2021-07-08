(self.webpackChunkprofiles_dev=self.webpackChunkprofiles_dev||[]).push([[4149],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8069:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],l={sidebar_position:1},p="Prepare",c={unversionedId:"pctl/prepare",id:"pctl/prepare",isDocsHomePage:!1,title:"Prepare",description:"`sh",source:"@site/docs/pctl/prepare.md",sourceDirName:"pctl",slug:"/pctl/prepare",permalink:"/docs/pctl/prepare",editUrl:"https://github.com/weaveworks/profiles/edit/main/userdocs/profiles.dev/docs/pctl/prepare.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"simple-catalog",permalink:"/docs/catalog-docs/simple-catalog"},next:{title:"Install",permalink:"/docs/pctl/install"}},s=[],u={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prepare"},"Prepare"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"NAME:\n   pctl prepare - prepares the cluster for profiles by deploying the profile controllers and custom resource definitions\n\nUSAGE:\n   pctl prepare\n\nOPTIONS:\n   --dry-run                  If defined, nothing will be applied. (default: false)\n   --keep                     Keep the downloaded manifest files. (default: false)\n   --ignore-preflight-errors  Instead of stopping the process, output warnings when they occur during preflight check. (default: false)\n   --version value            Define the tagged version to use which can be found under releases in the profiles repository. Exp: [v]0.0.1\n   --baseurl value            Define the url to go and fetch releases from. (default: https://github.com/weaveworks/profiles/releases)\n   --flux-namespace value     Define the namespace in which flux is installed. (default: flux-system)\n   --out value                Specify the output location of the downloaded prepare file. (default: os.Temp)\n   --context value            The Kubernetes context to use to apply the manifest files .\n   --help, -h                 show help (default: false)\n")))}f.isMDXComponent=!0}}]);