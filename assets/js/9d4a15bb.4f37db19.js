(self.webpackChunkprofiles_dev=self.webpackChunkprofiles_dev||[]).push([[367],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(n),m=i,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2002:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:2},s="Write a profile",p={unversionedId:"tutorial-basics/create-a-profile",id:"tutorial-basics/create-a-profile",isDocsHomePage:!1,title:"Write a profile",description:"This stage of the tutorial assumes you have prepared your environment correctly.",source:"@site/docs/tutorial-basics/create-a-profile.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-profile",permalink:"/profiles/docs/tutorial-basics/create-a-profile",editUrl:"https://github.com/weaveworks/profiles/edit/main/userdocs/profiles.dev/docs/tutorial-basics/create-a-profile.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Environment setup",permalink:"/profiles/docs/tutorial-basics/setup"},next:{title:"Install a profile",permalink:"/profiles/docs/tutorial-basics/install-a-profile"}},c=[],u={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"write-a-profile"},"Write a profile"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This stage of the tutorial assumes you have prepared your environment correctly."),(0,a.kt)("p",{parentName:"div"},"Please refer back to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial-basics/setup"},"previous section")," if not."))),(0,a.kt)("p",null,"In this section we are going to write a very simple profile."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"If you do not wish to learn about writing profiles, please skip ahead to the next section.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"You will need an account with a git provider (eg GitHub or GitLab) and a text editor."),(0,a.kt)("p",null,"We are going to write a profile which can be used to install a single component: nginx.\nYes, I know it is not the most exciting thing, but it serves us well for a quick illustration."),(0,a.kt)("p",null,"Create a new repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir demo-profile\ncd demo-profile\ngit init\n# other git setup things, etc\n")),(0,a.kt)("p",null,"At a bare minimum a profile only needs to have one thing in it: a ",(0,a.kt)("inlineCode",{parentName:"p"},"profile.yaml")," file.\nIn here we define object Kind and the profile components, known as ",(0,a.kt)("inlineCode",{parentName:"p"},"artifacts"),", under the spec."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: weave.works/v1alpha1\nkind: ProfileDefinition\nmetadata:\n  name: nginx\nspec:\n  description: A profile which deploys an nginx server\n  artifacts:\n    - name: bitnami-nginx\n      chart:\n        url: https://charts.bitnami.com/bitnami\n        name: nginx\n        version: "8.9.1"\n')),(0,a.kt)("p",null,"The section of note here is ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.artifacts"),". Each artifact represents a component of a Profile.\nArtifacts can be one of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Helm Chart"),(0,a.kt)("li",{parentName:"ul"},"Raw Kubernetes yaml"),(0,a.kt)("li",{parentName:"ul"},"Kustomize patch"),(0,a.kt)("li",{parentName:"ul"},"Another profile")),(0,a.kt)("p",null,"In this example we are creating a Profile with just one artifact: a remote Helm Chart.\nThe artifact type is denoted here by the ",(0,a.kt)("inlineCode",{parentName:"p"},"chart")," key, and we provide further details for the\nspecific chart with the ",(0,a.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," fields."),(0,a.kt)("p",null,"Write the above snippet to ",(0,a.kt)("inlineCode",{parentName:"p"},"profile.yaml")," inside your profile repository. Commit the file\nand push to the remote."),(0,a.kt)("p",null,"You have now created a very basic profile which can be consumed by those who have access\nto the repository.\nIn the next section of this tutorial we will be installing that profile on a cluster."))}f.isMDXComponent=!0}}]);