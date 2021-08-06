(self.webpackChunkprofiles_dev=self.webpackChunkprofiles_dev||[]).push([[5272],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,g=d["".concat(s,".").concat(f)]||d[f]||u[f]||l;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5077:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(2122),i=n(9756),l=(n(7294),n(3905)),o=["components"],a={sidebar_position:5},s="Listing installed profiles",c={unversionedId:"installer-docs/listing-installed-profiles",id:"installer-docs/listing-installed-profiles",isDocsHomePage:!1,title:"Listing installed profiles",description:"You can see which profiles are installed on your cluster with the pctl get --installed subcommand.",source:"@site/docs/installer-docs/listing-installed-profiles.md",sourceDirName:"installer-docs",slug:"/installer-docs/listing-installed-profiles",permalink:"/docs/installer-docs/listing-installed-profiles",editUrl:"https://github.com/weaveworks/profiles/edit/main/userdocs/profiles.dev/docs/installer-docs/listing-installed-profiles.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Generating local manifests",permalink:"/docs/installer-docs/generate-local-manifests"},next:{title:"Upgrading profiles",permalink:"/docs/installer-docs/upgrading-profiles"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"listing-installed-profiles"},"Listing installed profiles"),(0,l.kt)("p",null,"You can see which profiles are installed on your cluster with the ",(0,l.kt)("inlineCode",{parentName:"p"},"pctl get --installed")," subcommand."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ pctl get --installed\nNAMESPACE       NAME            SOURCE                                                                          AVAILABLE UPDATES\ndefault         pctl-profile    nginx-catalog/weaveworks-nginx/v0.1.0                                           -\ndefault         update-profile  https://github.com/weaveworks/profiles-examples:branch-and-url:bitnami-nginx    -\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"In case of a branch install, as seen on the second line above, the source is put together as follows: ",(0,l.kt)("inlineCode",{parentName:"em"},"url:branch:profile-name"),".")),(0,l.kt)("p",null,"If you have installed your profiles via a catalog, you will be able to see whether updates are available:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ pctl get --installed\nNAMESPACE       NAME            SOURCE                                  AVAILABLE UPDATES\ndefault         pctl-profile    nginx-catalog/weaveworks-nginx/v0.1.0   v0.1.1\n")),(0,l.kt)("p",null,"To upgrade a profile see ",(0,l.kt)("a",{parentName:"p",href:"/docs/installer-docs/upgrading-profiles#upgrading-profiles"},"upgrades")))}d.isMDXComponent=!0}}]);