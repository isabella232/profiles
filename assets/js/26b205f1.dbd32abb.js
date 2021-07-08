(self.webpackChunkprofiles_dev=self.webpackChunkprofiles_dev||[]).push([[3399],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=r(2122),n=r(9756),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:1},s="How a profile is structured",p={unversionedId:"author-docs/profile-structure",id:"author-docs/profile-structure",isDocsHomePage:!1,title:"How a profile is structured",description:"profile.yaml contents",source:"@site/docs/author-docs/profile-structure.md",sourceDirName:"author-docs",slug:"/author-docs/profile-structure",permalink:"/docs/author-docs/profile-structure",editUrl:"https://github.com/weaveworks/profiles/edit/main/userdocs/profiles.dev/docs/author-docs/profile-structure.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Install a profile",permalink:"/docs/tutorial-basics/install-a-profile"},next:{title:"Remote Helm Chart artifacts",permalink:"/docs/author-docs/remote-helm-chart"}},c=[{value:"<code>profile.yaml</code> contents",id:"profileyaml-contents",children:[]},{value:"Profile repo directories",id:"profile-repo-directories",children:[]},{value:"Documenting profiles",id:"documenting-profiles",children:[]}],u={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-a-profile-is-structured"},"How a profile is structured"),(0,o.kt)("h2",{id:"profileyaml-contents"},(0,o.kt)("inlineCode",{parentName:"h2"},"profile.yaml")," contents"),(0,o.kt)("p",null,"A profile is defined in a single file which ",(0,o.kt)("strong",{parentName:"p"},"must")," be named ",(0,o.kt)("inlineCode",{parentName:"p"},"profile.yaml"),".\nThis file lives at the root of the profile directory."),(0,o.kt)("p",null,"The following fields are required:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: weave.works/v1alpha1\nkind: ProfileDefinition\nmetadata:\n  name: # the name of your profile\nspec:\n  description: # a brief description of what your profile installs\n")),(0,o.kt)("p",null,"These fields are optional:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\nspec:\n  # ...\n  maintainer: # the name(s) of the profile author\n  prerequisites:\n  - # a list of strings detailing things the profile needs to run.\n  - # this field is not processed at the moment, but will be soon.\n")),(0,o.kt)("p",null,"Finally, the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.artifacts")," lists all the components which the profile will install."),(0,o.kt)("p",null,"The following artifact types are supported:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/author-docs/local-helm-chart"},"'Local' Helm Chart")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/author-docs/remote-helm-chart"},"'Remote' Helm Chart")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/author-docs/kustomize-and-raw"},"Raw Kubernetes yaml")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/author-docs/kustomize-and-raw"},"Kustomize patch")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/author-docs/nested-profiles"},"Another profile"))),(0,o.kt)("p",null,"Please refer to their dedicated docs pages for details on how to register different artifact\ntypes in a profile."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please take care to name your profile artifacts sensibly. This will help those who are\ninstalling your profile locate and refer to artifacts later."),(0,o.kt)("p",{parentName:"div"},"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/installer-docs/setting-values"},"how users use artifact names to configure values"),"\nfor an example of how artifact names are used."))),(0,o.kt)("h2",{id:"profile-repo-directories"},"Profile repo directories"),(0,o.kt)("p",null,"It will be assumed that everything contained within the same directory as a ",(0,o.kt)("inlineCode",{parentName:"p"},"profile.yaml"),"\nis related to that same profile."),(0,o.kt)("p",null,"A repository can contain multiple profiles when they are written in separate directories.\nFor example, the following structure shows a repo with three distinct profiles which\ncan be installed independently of each other:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"org-profiles-repo/\n\u251c\u2500\u2500 logging-profile\n\u2502\xa0\xa0 \u2514\u2500\u2500 profile.yaml\n\u251c\u2500\u2500 observability-profile\n\u2502\xa0\xa0 \u2514\u2500\u2500 profile.yaml\n\u2514\u2500\u2500 our-awesome-apps\n    \u2514\u2500\u2500 profile.yaml\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The name of each profile directory ",(0,o.kt)("strong",{parentName:"p"},"must")," match the name given in the ",(0,o.kt)("inlineCode",{parentName:"p"},"profile.yaml"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"metadata.name"),"."))),(0,o.kt)("p",null,"A repository can also contain just a single profile, with the ",(0,o.kt)("inlineCode",{parentName:"p"},"profile.yaml"),"\ndefined at the top level:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"org-profiles-repo/\n\u2514\u2500\u2500 profile.yaml\n")),(0,o.kt)("p",null,"Profile directories can contain other objects related to various artifacts. These\nwill be demonstrated in subsequent pages."),(0,o.kt)("p",null,"Examples of profiles with various artifacts and configurations can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/weaveworks/profiles-examples"},"here"),"."),(0,o.kt)("h2",{id:"documenting-profiles"},"Documenting profiles"),(0,o.kt)("p",null,"When you add ",(0,o.kt)("a",{parentName:"p",href:"/docs/author-docs/local-helm-chart"},"'local' Helm"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/author-docs/kustomize-and-raw"},"raw yaml or Kustomize"),"\nartifacts to your profile, we recommend noting that you have done\nso in your Readme, or other documentation, because users of such profiles will have to provide additional flags\nwhen installing."),(0,o.kt)("p",null,"Take care to also note whether you are adding a ",(0,o.kt)("a",{parentName:"p",href:"/docs/author-docs/nested-profiles"},"nested profile")," which contains local resources\nsuch as the ones listed above."),(0,o.kt)("p",null,"Users are also able to configure values on Helm artifacts. To help them discover which values\nare available, you can provide information or links to the Charts you have used in your profile."))}d.isMDXComponent=!0}}]);