(self.webpackChunkprofiles_dev=self.webpackChunkprofiles_dev||[]).push([[2485],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},918:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var o=n(2122),i=n(9756),r=(n(7294),n(3905)),a=["components"],l={sidebar_position:1},p="Installing Profile with GitOps",s={unversionedId:"installer-docs/installing-via-gitops",id:"installer-docs/installing-via-gitops",isDocsHomePage:!1,title:"Installing Profile with GitOps",description:"Environment setup",source:"@site/docs/installer-docs/installing-via-gitops.md",sourceDirName:"installer-docs",slug:"/installer-docs/installing-via-gitops",permalink:"/docs/installer-docs/installing-via-gitops",editUrl:"https://github.com/weaveworks/profiles/edit/main/userdocs/profiles.dev/docs/installer-docs/installing-via-gitops.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Versioning",permalink:"/docs/author-docs/versioning"},next:{title:"Configuring values",permalink:"/docs/installer-docs/setting-values"}},c=[{value:"Environment setup",id:"environment-setup",children:[]},{value:"Simple install from a profile URL",id:"simple-install-from-a-profile-url",children:[{value:"Bootstrapping your local git repository",id:"bootstrapping-your-local-git-repository",children:[]},{value:"Installing",id:"installing",children:[]}]},{value:"Further configurations",id:"further-configurations",children:[]},{value:"The <code>git-repository</code> flag",id:"the-git-repository-flag",children:[]}],u={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installing-profile-with-gitops"},"Installing Profile with GitOps"),(0,r.kt)("h2",{id:"environment-setup"},"Environment setup"),(0,r.kt)("p",null,"To install profiles with GitOps you will need to have completed the following environment setup."),(0,r.kt)("p",null," \u2705 ","\xa0","\xa0"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial-basics/setup#kubernetes-cluster"},"Cluster")),(0,r.kt)("p",null," \u2705 ","\xa0","\xa0"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial-basics/setup#pctl-the-profiles-cli"},"Pctl binary")),(0,r.kt)("p",null," \u2705 ","\xa0","\xa0"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial-basics/setup#profiles-crds-and-flux-crds"},"Profiles CRDs and Flux CRDs")),(0,r.kt)("p",null," \u2705 ","\xa0","\xa0"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial-basics/setup#a-github-repo-synced-to-flux"},"GitHub repo")),(0,r.kt)("p",null," \u2705 ","\xa0","\xa0"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial-basics/setup#personal-access-token"},"GitHub token")),(0,r.kt)("p",null,"The full setup docs can be found ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial-basics/setup#prerequisites"},"here"),"."),(0,r.kt)("h2",{id:"simple-install-from-a-profile-url"},"Simple install from a profile URL"),(0,r.kt)("h3",{id:"bootstrapping-your-local-git-repository"},"Bootstrapping your local git repository"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"pctl bootstrap")," command to save commonly used ",(0,r.kt)("inlineCode",{parentName:"p"},"pctl")," configuration to your GitOps repo."),(0,r.kt)("p",null,"Once such piece of configuration is your flux repo's ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepository")," resource.\nIf you have ",(0,r.kt)("strong",{parentName:"p"},"not")," bootstrapped your local GitOps repository, you will have to provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"--git-repository")," flag when installing profiles (see ",(0,r.kt)("a",{parentName:"p",href:"#the-git-repository-flag"},"below")," for more detail). The ",(0,r.kt)("inlineCode",{parentName:"p"},"--git-repository")," references the namespace and name of the\n",(0,r.kt)("a",{parentName:"p",href:"https://fluxcd.io/docs/components/source/gitrepositories/"},"Flux ",(0,r.kt)("inlineCode",{parentName:"a"},"GitRepository")),"\nresource that is pointing at your GitOps repository. The value should be in the format ",(0,r.kt)("inlineCode",{parentName:"p"},"<namespace>/<name>"),", for example\n",(0,r.kt)("inlineCode",{parentName:"p"},"flux-system/gitops-repo"),". This value is needed in order for pctl to generate Flux resources, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Kustomization"),"s.\nTo bootstrap your local git repository run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pctl bootstrap --git-repository flux-system/gitops-repo ~/workspace/gitops-repo/\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See ",(0,r.kt)("a",{parentName:"em",href:"#the-git-repository-flag"},"below")," for how to find the namespace and name of your ",(0,r.kt)("inlineCode",{parentName:"em"},"GitRepository")," resource.")),(0,r.kt)("p",null," This will create a ",(0,r.kt)("inlineCode",{parentName:"p"},".pctl/config.yaml")," in your git repository to store the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"--git-repository"),". Future\n",(0,r.kt)("inlineCode",{parentName:"p"},"pctl add")," commands in this repository will then detect the pctl config and re-use the value."),(0,r.kt)("h3",{id:"installing"},"Installing"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Private repos")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If either your GitOps repository, or the repository containing the profile you wish to install\nare private, remember to ensure that your local git environment is configured correctly."))),(0,r.kt)("p",null,"To install a profile, we use ",(0,r.kt)("inlineCode",{parentName:"p"},"pctl add"),". To see all flags available on this subcommand,\nsee ",(0,r.kt)("a",{parentName:"p",href:"/docs/pctl/pctl-add-cmd"},"the help"),"."),(0,r.kt)("p",null,"There are two methods by which you can install a profile: with a direct URL and via a catalog.\nPlease see ",(0,r.kt)("a",{parentName:"p",href:"/docs/installer-docs/using-catalogs"},"the page here")," for specific instructions on how to\ninstall a profile from a catalog."),(0,r.kt)("p",null,"With the following command, ",(0,r.kt)("inlineCode",{parentName:"p"},"pctl")," will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"generate a set of manifests for each artifact declared in the profile at the given URL"),(0,r.kt)("li",{parentName:"ul"},"commit those manifests to a branch in your GitOps repo"),(0,r.kt)("li",{parentName:"ul"},"push that branch and"),(0,r.kt)("li",{parentName:"ul"},"open a PR on your GitOps repo to merge the changes.\nYour GitOps repo is the one you synced to Flux in your cluster in the\n",(0,r.kt)("a",{parentName:"li",href:"/docs/tutorial-basics/setup#a-github-repo-synced-to-flux"},"environment setup"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pctl add \\\n  --name <name of the profile installation> \\\n  --profile-repo-url <URL of repo containing profile to install> \\\n  --create-pr \\\n  --pr-repo <gitops repo username or orgname>/<gitops repo name>\n")),(0,r.kt)("p",null,"Above we use the following flags:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--name"),". This is the name of the profile installation. The installation directory will be created using this name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--profile-repo-url"),". This is the full URL of the repository containing the profile you wish to install on your cluster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--create-pr"),". This directs ",(0,r.kt)("inlineCode",{parentName:"li"},"pctl")," to open a PR against the main branch of your GitOps repo.\n",(0,r.kt)("em",{parentName:"li"},"Note that this flag is only supported for GitHub.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--pr-repo"),". The partial URL of your GitOps repo synced to your cluster, in the format\n",(0,r.kt)("inlineCode",{parentName:"li"},"username/repo-name")," (or ",(0,r.kt)("inlineCode",{parentName:"li"},"org-name/repo-name"),").")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you have not bootstrapped your local git repository you must provide the",(0,r.kt)("inlineCode",{parentName:"p"},"--git-repository")," flag.\nSee ",(0,r.kt)("a",{parentName:"p",href:"#the-git-repository-flag"},"below"),"\nfor more information."))),(0,r.kt)("p",null,"Once you have run the command, navigate to your GitOps repo and approve and merge the PR.\nFlux will then sync the new files, and the profile will be applied to your cluster."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When installing a profile via its repository's URL (i.e. when using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--profile-repo-url")," flag)\nremember to check where the profile's ",(0,r.kt)("inlineCode",{parentName:"p"},"profile.yaml")," file is located within\nthe profile's source repository."),(0,r.kt)("p",{parentName:"div"},"Once discovered, you can set the relative path to this file using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--profile-path")," flag, which defaults to the root of the repository."))),(0,r.kt)("h2",{id:"further-configurations"},"Further configurations"),(0,r.kt)("p",null,"You can pass further arguments to ",(0,r.kt)("inlineCode",{parentName:"p"},"pctl add")," for more control over the format\nand destination of your PR. For example, the following command will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"generate the profile manifests in the ",(0,r.kt)("inlineCode",{parentName:"li"},"ethel")," directory within my GitOps repo"),(0,r.kt)("li",{parentName:"ul"},"set the objects to be deployed in the ",(0,r.kt)("inlineCode",{parentName:"li"},"two-sugars-please")," namespace in my cluster"),(0,r.kt)("li",{parentName:"ul"},"commit to a branch called ",(0,r.kt)("inlineCode",{parentName:"li"},"add-aunt-ethels-profile")),(0,r.kt)("li",{parentName:"ul"},"push that branch to the ",(0,r.kt)("inlineCode",{parentName:"li"},"jammy-dodger")," remote"),(0,r.kt)("li",{parentName:"ul"},"open a PR against the ",(0,r.kt)("inlineCode",{parentName:"li"},"tea-time")," branch in my target GitOps repo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pctl add \\\n  --name pctl-profile \\\n  --profile-repo-url https://github.com/weaveworks/nginx-profile \\\n  --create-pr \\\n  --pr-repo drwho/thirteen \\\n  --out ethel \\\n  --namespace two-sugars-please \\\n  --pr-branch add-aunt-ethels-profile \\\n  --pr-remote jammy-dodger \\\n  --pr-base tea-time\n")),(0,r.kt)("p",null,"To see all flags available on this subcommand, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/pctl/pctl-add-cmd"},"the help"),"."),(0,r.kt)("h2",{id:"the-git-repository-flag"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"git-repository")," flag"),(0,r.kt)("p",null,"This flag is required for installing profiles because pctl generates flux ",(0,r.kt)("inlineCode",{parentName:"p"},"Kustomization")," resources for\ndeploying the profile artifacts, and these resources need to know which ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepository")," resource is governing the repository.\nTo avoid setting this flag on every call of ",(0,r.kt)("inlineCode",{parentName:"p"},"pctl add"),", users can bootstrap the repository; see ",(0,r.kt)("a",{parentName:"p",href:"#bootstrapping-your-local-git-repository"},"here"),".\nAny ",(0,r.kt)("inlineCode",{parentName:"p"},"pctl add")," call from within this repository will then no longer need this flag."),(0,r.kt)("p",null,"First, look up the ID of the ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepository")," resource connected to your repo. (This is\nwhat Flux uses internally to keep things up to date between the repo and the cluster.)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# replace GITOPS_REPO with the name of your GitOps repository\n\nkubectl get gitrepositories.source.toolkit.fluxcd.io -A | awk '/GITOPS_REPO/ {print $1\"/\"$2}'\n")),(0,r.kt)("p",null,"This should return something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# namespace/name\nflux-system/flux-system\n")),(0,r.kt)("p",null,"Then add the following flag to your ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"--git-repository <output from the command above>\n")))}m.isMDXComponent=!0}}]);