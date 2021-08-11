(self.webpackChunkprofiles_dev=self.webpackChunkprofiles_dev||[]).push([[4810],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),d=r,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1473:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:2},c="Catalog source schema",l={unversionedId:"catalog-docs/catalog-source-schema",id:"catalog-docs/catalog-source-schema",isDocsHomePage:!1,title:"Catalog source schema",description:"`go",source:"@site/docs/catalog-docs/catalog-source-schema.md",sourceDirName:"catalog-docs",slug:"/catalog-docs/catalog-source-schema",permalink:"/docs/catalog-docs/catalog-source-schema",editUrl:"https://github.com/weaveworks/profiles/edit/main/userdocs/profiles.dev/docs/catalog-docs/catalog-source-schema.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Adding profiles",permalink:"/docs/catalog-docs/add-profiles"},next:{title:"add",permalink:"/docs/pctl/pctl-add-cmd"}},p=[],u={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"catalog-source-schema"},"Catalog source schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// ProfileCatalogSourceSpec defines the desired state of ProfileCatalogSource\ntype ProfileCatalogSourceSpec struct {\n    // Profiles is the list of profiles exposed by the catalog\n    // +optional\n    Profiles []ProfileCatalogEntry `json:"profiles,omitempty"`\n    // Repos contains a list of repositories to scan for profiles\n    // +optional\n    Repos []Repository `json:"repositories,omitempty"`\n}\n\n// Repository defines the list of repositories to scan for profiles\ntype Repository struct {\n    // URL is the URL of the repository. When using SSH credentials to access\n    // must be in format ssh://git@github.com/weaveworks/profiles-examples\n    // When using username/password must be in format\n    // https://github.com/weaveworks/profiles-examples\n    URL string `json:"url,omitempty"`\n    // The secret name containing the Git credentials.\n    // For HTTPS repositories the secret must contain username and password\n    // fields.\n    // For SSH repositories the secret must contain identity, identity.pub and\n    // known_hosts fields.\n    // +optional\n    SecretRef *meta.LocalObjectReference `json:"secretRef,omitempty"`\n}\n\n// ProfileCatalogEntry defines details about a given profile.\ntype ProfileCatalogEntry struct {\n    // Tag\n    // +optional\n    // +kubebuilder:validation:Pattern=^([a-zA-Z\\-]+\\/)?(v)?(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(-(0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(\\.(0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*)?(\\+[0-9a-zA-Z-]+(\\.[0-9a-zA-Z-]+)*)?$\n\n    Tag string `json:"tag,omitempty"`\n    // CatalogSource is the name of the catalog the profile is listed in\n    // +optional\n    CatalogSource string `json:"catalog,omitempty"`\n    // URL is the full URL path to the profile.yaml\n    // +optional\n    URL                string `json:"url,omitempty"`\n    Name               string `json:"name,omitempty"`\n    ProfileDescription `json:",inline"`\n}\n\n// ProfileDescription defines details about a given profile.\ntype ProfileDescription struct {\n    // Profile description\n    Description string `json:"description,omitempty"`\n    // Maintainer is the name of the author(s)\n    // +optional\n    Maintainer string `json:"maintainer,omitempty"`\n    // Prerequisites are a list of dependencies required by the profile\n    // +optional\n    Prerequisites []string `json:"prerequisites,omitempty"`\n}\n')))}f.isMDXComponent=!0}}]);