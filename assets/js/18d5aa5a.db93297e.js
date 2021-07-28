(self.webpackChunkprofiles_dev=self.webpackChunkprofiles_dev||[]).push([[3098],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),f=i,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||l;return n?a.createElement(d,r(r({ref:t},p),{},{components:n})):a.createElement(d,r({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6541:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(2122),i=n(9756),l=(n(7294),n(3905)),r=["components"],o={sidebar_position:4},s="Generating local manifests",c={unversionedId:"installer-docs/generate-local-manifests",id:"installer-docs/generate-local-manifests",isDocsHomePage:!1,title:"Generating local manifests",description:"If you are curious to see what pctl will create without opening a PR",source:"@site/docs/installer-docs/generate-local-manifests.md",sourceDirName:"installer-docs",slug:"/installer-docs/generate-local-manifests",permalink:"/docs/installer-docs/generate-local-manifests",editUrl:"https://github.com/weaveworks/profiles/edit/main/userdocs/profiles.dev/docs/installer-docs/generate-local-manifests.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Using catalogs",permalink:"/docs/installer-docs/using-catalogs"},next:{title:"Listing installed profiles",permalink:"/docs/installer-docs/listing-installed-profiles"}},p=[],u={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"generating-local-manifests"},"Generating local manifests"),(0,l.kt)("p",null,"If you are curious to see what ",(0,l.kt)("inlineCode",{parentName:"p"},"pctl")," will create ",(0,l.kt)("em",{parentName:"p"},"without")," opening a PR\nin your GitOps repo, you can generate the files locally by dropping all the ",(0,l.kt)("inlineCode",{parentName:"p"},"pr"),"\nrelated flags."),(0,l.kt)("p",null,"For example, using a profile URL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"pctl add \\\n  --profile-url <URL of profile to install> \\\n  --out relative-path\n")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"When installing a profile via its URL (i.e. when using the ",(0,l.kt)("inlineCode",{parentName:"p"},"--profile-url")," flag)\nremember to check where the profile's ",(0,l.kt)("inlineCode",{parentName:"p"},"profile.yaml")," file is located within\nthe profile's source repository."),(0,l.kt)("p",{parentName:"div"},"Once discovered, you can set the relative path to this file using the ",(0,l.kt)("inlineCode",{parentName:"p"},"--profile-path")," flag."))),(0,l.kt)("p",null,"Example generating from a profile listed in a catalog:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"pctl add \\\n  --out relative-path \\\n  <catalog name>/<profile>\n")),(0,l.kt)("p",null,"Consider the following installation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pctl add --git-repository flux-system/flux-system nginx-catalog/nginx/v2.0.1\ngenerating profile installation from source: catalog entry nginx-catalog/nginx/v2.0.1\ninstallation completed successfully\n")),(0,l.kt)("p",null,"Let's take a look inside:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"tree nginx\nnginx\n\u251c\u2500\u2500 artifacts\n\u2502\xa0\xa0 \u2514\u2500\u2500 bitnami-nginx\n\u2502\xa0\xa0     \u251c\u2500\u2500 helm-chart\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 ConfigMap.yaml\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 HelmRelease.yaml\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 HelmRepository.yaml\n\u2502\xa0\xa0     \u251c\u2500\u2500 kustomization.yaml\n\u2502\xa0\xa0     \u2514\u2500\u2500 kustomize-flux.yaml\n\u2514\u2500\u2500 profile-installation.yaml\n")),(0,l.kt)("p",null,"This profile installs an NGINX load balancer using a remote helm chart. The folders contain the following files in order:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"bitnami-nginx - the name of the artifact"),(0,l.kt)("li",{parentName:"ul"},"helm-chart - contains the resources which install the actual nginx"),(0,l.kt)("li",{parentName:"ul"},"ConfigMap.yaml - contains any default values set by the author on the artifact"),(0,l.kt)("li",{parentName:"ul"},"HelmRelease.yaml - contains the HelmRelease object which installs nginx"),(0,l.kt)("li",{parentName:"ul"},"HelmRepository.yaml - contains the definition of the helm chart repository where the chart is located"),(0,l.kt)("li",{parentName:"ul"},"kustomization.yaml - this is a file which tells flux what to install -- see below"),(0,l.kt)("li",{parentName:"ul"},"kustomize-flux.yaml - this is a Kustomization object which deals with ",(0,l.kt)("a",{parentName:"li",href:"/docs/author-docs/dependencies"},"dependencies")),(0,l.kt)("li",{parentName:"ul"},"profiles-installation.yaml - contains information about the profile -- mainly used by pctl")),(0,l.kt)("p",null,"What is ",(0,l.kt)("inlineCode",{parentName:"p"},"kustomization.yaml"),"? This is to prevent flux installing whatever there is in the ",(0,l.kt)("inlineCode",{parentName:"p"},"helm-chart")," folder. The ",(0,l.kt)("inlineCode",{parentName:"p"},"helm-chart"),"\nfolder can contain local resources such as helm chart definitions, READMEs and non-kubernetes objects. If flux were to try to\ninstall those, it would fail."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kustomization.yaml")," contains a single resource line:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"resources:\n- kustomize-flux.yaml\n")),(0,l.kt)("p",null,"Which means flux will only install the resource defined in this file. The Kustomization object in ",(0,l.kt)("inlineCode",{parentName:"p"},"kustomize-flux.yaml"),"\nwill take care of installing HelmRelease."))}m.isMDXComponent=!0}}]);