(self.webpackChunkprofiles_dev=self.webpackChunkprofiles_dev||[]).push([[3672],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7547:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:3},p="Install a profile",s={unversionedId:"tutorial-basics/install-a-profile",id:"tutorial-basics/install-a-profile",isDocsHomePage:!1,title:"Install a profile",description:"This stage of the tutorial assumes you have prepared your environment correctly.",source:"@site/docs/tutorial-basics/install-a-profile.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/install-a-profile",permalink:"/docs/tutorial-basics/install-a-profile",editUrl:"https://github.com/weaveworks/profiles/edit/main/userdocs/profiles.dev/docs/tutorial-basics/install-a-profile.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Write a profile",permalink:"/docs/tutorial-basics/create-a-profile"},next:{title:"How a profile is structured",permalink:"/docs/author-docs/profile-structure"}},u=[],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"install-a-profile"},"Install a profile"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This stage of the tutorial assumes you have prepared your environment correctly."),(0,i.kt)("p",{parentName:"div"},"Please refer back to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorial-basics/setup"},"set up docs")," if not."))),(0,i.kt)("p",null,"To install a profile, we use ",(0,i.kt)("inlineCode",{parentName:"p"},"pctl add"),"."),(0,i.kt)("p",null,"With the following command ",(0,i.kt)("inlineCode",{parentName:"p"},"pctl add")," will:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"generate a set of manifests for each profile artifact"),(0,i.kt)("li",{parentName:"ul"},"commit those manifests to a branch in your GitOps repo"),(0,i.kt)("li",{parentName:"ul"},"push that branch and"),(0,i.kt)("li",{parentName:"ul"},"open a PR to merge the changes")),(0,i.kt)("p",null,"Your GitOps repository is the one you synced to Flux in your cluster in the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorial-basics/setup#a-github-repo-synced-to-flux"},"environment setup")," section of this tutorial."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"(A breakdown of each flag is provided below.)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pctl add \\\n  --name <profile installation name> \\\n  --profile-repo-url <URL of repo containing profile to add> \\\n  --profile-path . \\\n  --create-pr \\\n  --pr-repo <gitops repo username or orgname>/<gitops repo name> \\\n  --pr-branch add-simple-profile\n")),(0,i.kt)("p",null,"Above we use the following flags:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--name"),". This is the name of the profile installation. The installation directory will be created using this name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--profile-repo-url"),". This is the full URL of the repository containing the profile you wish to install on your cluster.\nIf you completed the previous section and wrote your own profile, you can use that here.\nIf you chose not to, you can use the following URL to a repository containing a simple example profile which\nwill install an NGINX server: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/weaveworks/nginx-profile"},"https://github.com/weaveworks/nginx-profile")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--profile-path"),". This is the relative path within the profile definition repo which contains the\n",(0,i.kt)("inlineCode",{parentName:"li"},"profile.yaml"),". Upstream profile repos can contain multiple profiles separated into\ndifferent subdirectories. In our case, whether you are using the example repo, or the\none you created in the previous section, there is just one profile, and the ",(0,i.kt)("inlineCode",{parentName:"li"},"profile.yaml"),"\nis located at the top level: ",(0,i.kt)("inlineCode",{parentName:"li"},"."),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--create-pr"),". This directs ",(0,i.kt)("inlineCode",{parentName:"li"},"pctl")," to open a PR against the main branch of your GitOps repo.\n",(0,i.kt)("em",{parentName:"li"},"Note that this flag is only supported for GitHub.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--pr-repo"),". The partial URL of your GitOps repo synced to your cluster, in the format\n",(0,i.kt)("inlineCode",{parentName:"li"},"username/repo-name"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--pr-branch"),". The name of the branch ",(0,i.kt)("inlineCode",{parentName:"li"},"pctl")," will create in your GitOps repo to push\nchanges to and open a PR against your main branch.")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Private repos")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If either your GitOps repository, or the repository containing the profile you wish to install\nare private, remember to ensure that your local git environment is configured correctly."))),(0,i.kt)("p",null,"Once you have run the command, navigate to your GitOps repo and approve the PR.\nFlux will then sync the new files, and the profile will be applied to your cluster."),(0,i.kt)("p",null,"You can eventually see the profile artifact running in the ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," namespace of your cluster\nby running ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get pod/nginx-server"),"."),(0,i.kt)("p",null,"To delete the profile, there is no need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"pctl"),". Simply remove the generated files from\nyour GitOps repo, merge the changes, and wait for Flux to delete those resources."),(0,i.kt)("hr",null),(0,i.kt)("p",null,'\u2728 The "Getting Started" tutorial ends here, please consult the documentation for more\nadvanced usage of profiles and ',(0,i.kt)("inlineCode",{parentName:"p"},"pctl"),". \u2728"))}m.isMDXComponent=!0}}]);