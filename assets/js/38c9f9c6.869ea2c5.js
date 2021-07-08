(self.webpackChunkprofiles_dev=self.webpackChunkprofiles_dev||[]).push([[3671],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4155:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:4},c="Kustomize patches and raw yaml artifacts",l={unversionedId:"author-docs/kustomize-and-raw",id:"author-docs/kustomize-and-raw",isDocsHomePage:!1,title:"Kustomize patches and raw yaml artifacts",description:"Both Kustomize patches and raw yamls (such as a simple deployment manifest,",source:"@site/docs/author-docs/kustomize-and-raw.md",sourceDirName:"author-docs",slug:"/author-docs/kustomize-and-raw",permalink:"/docs/author-docs/kustomize-and-raw",editUrl:"https://github.com/weaveworks/profiles/edit/main/userdocs/profiles.dev/docs/author-docs/kustomize-and-raw.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Local Helm Chart artifacts",permalink:"/docs/author-docs/local-helm-chart"},next:{title:"Nested profile artifacts",permalink:"/docs/author-docs/nested-profiles"}},p=[],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kustomize-patches-and-raw-yaml-artifacts"},"Kustomize patches and raw yaml artifacts"),(0,o.kt)("p",null,"Both Kustomize patches and raw yamls (such as a simple deployment manifest,\nor any other Kubernetes object) can be added to a profile under the same key."),(0,o.kt)("p",null,"The resources must be stored locally within the profile directory.\nFor example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"org-profiles-repo/\n\u251c\u2500\u2500 our-awesome-apps-profile\n\u2502\xa0\xa0 \u251c\u2500\u2500 super-cool-artifact-manifests\n\u2502\xa0\xa0 \u2502\xa0  \u251c\u2500\u2500 deployment.yaml\n\u2502\xa0\xa0 \u2502\xa0  \u2514\u2500\u2500 patches.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 profile.yaml\n...\n")),(0,o.kt)("p",null,"Then in the ",(0,o.kt)("inlineCode",{parentName:"p"},"profile.yaml")," we add these artifact manifests by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"kustomize"),"\ntype identifier:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# ...\nspec:\n  # ...\n  artifacts:\n    - name: # the name of your artifact as you would like it to be known in the profile\n      kustomize:\n        path: "super-cool-artifact-manifests/" # the relative path to the manifests directory\n    # ...\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When you add local artifacts (meaning those with manifests stored in the profile repository)\nto your profile, we recommend noting that you have done\nso in your Readme, or other documentation, because users of such profiles will have to provide additional flags\nwhen installing."),(0,o.kt)("p",{parentName:"div"},"Take care to also note whether you are adding a nested profile which contains local resources."))),(0,o.kt)("p",null,"The exact directory structure can be as you wish, so long as it is a child to the profile\ndirectory and the ",(0,o.kt)("inlineCode",{parentName:"p"},"kustomize.path")," value in the ",(0,o.kt)("inlineCode",{parentName:"p"},"profile.yaml")," is correct."),(0,o.kt)("p",null,"Examples of profiles with various artifacts and configurations can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/weaveworks/profiles-examples"},"here"),"."))}d.isMDXComponent=!0}}]);