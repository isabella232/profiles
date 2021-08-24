(self.webpackChunkprofiles_dev=self.webpackChunkprofiles_dev||[]).push([[9696],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,d=p["".concat(i,".").concat(f)]||p[f]||u[f]||c;return r?n.createElement(d,o(o({ref:t},m),{},{components:r})):n.createElement(d,o({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<c;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4602:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}r.d(t,{Z:function(){return o}});var c=r(7294),o=function(e){var t=e.jsonFile,r=(0,c.useState)(),n=r[0],o=r[1],l=function(e){var t=e.default,r="value",n="default",a=e.enum&&e.enum.length>0||e.const;return null==e.default&&a?(t=e.const||e.example||e.enum[0],r="example",n="example",(e.const||1===e.enum.length)&&(r="const",n="required value")):e.examples&&e.examples.length>0&&(t=e.examples[0],r="example",n="example"),[t,r,n]},i=function(e,t,r){var n;void 0!==r&&(n=c.createElement("span",{style:{visibility:r?"visible":"hidden"}}," - "));var a="#"+e,o=c.createElement("a",{className:"key",href:a},t);return c.createElement(c.Fragment,null,n,o)},s=function(e){return 2*e+"ex"};if((0,c.useEffect)((function(){var e=!0;return fetch(t).then((function(e){return e.json()})).then((function(t){e&&o(t)})).catch((function(e){return console.log(e)})),function(){e=!1}}),[t]),!n)return null;return c.createElement("table",{id:"schema"},c.createElement("tbody",null,function e(t,r,n,o,m){for(var u,p=n.replace("#/definitions/",""),f=[],d={},y=a(t[p].preferredOrder||[]);!(u=y()).done;){var v=u.value;f.push([v,t[p].properties[v]]),d[v]=!0}for(var g,b=-1,h=0,E=f;h<E.length;h++){var j=E[h],O=j[0],x=j[1],N=0==m.length?O:m+"-"+O;b++;var w=t[p].required&&t[p].required.includes(O),k=w?"key required":"key",S=l(x),P=S[0],C=S[1],T=S[2],F=x["x-intellij-html-description"]||"",$=void 0;r&&"array"===r.type&&($=0===b);var D=P&&c.createElement("span",{title:T,className:C},P),A=c.createElement("td",null,c.createElement("div",{className:"anchor",id:N}),c.createElement("span",{title:w?"Required key":"",className:k,style:{marginLeft:s(o)}},i(N,O,$),":\xa0"),D),M=void 0;if(x.$ref?M=x.$ref:x.items&&x.items.$ref&&(M=x.items.$ref),x.$ref){var q=t[x.$ref.replace("#/definitions/","")],I="";"object"===q.type?q.properties||q.anyOf||(I="object"):I=q.type,""===F&&(F=q["x-intellij-html-description"]||""),g=c.createElement(c.Fragment,null,g,c.createElement("tr",{className:"top"},A,c.createElement("td",{className:"comment"},F+" "),c.createElement("td",{className:"type"},I)))}else if(x.items&&x.items.$ref){var Z=t[x.items.$ref.replace("#/definitions/","")],_="";"object"===Z.type?Z.properties||Z.anyOf||(_="object[]",P="{}"):_=Z.type+"[]",(""===F||Z.enum&&Z.enum.length>0)&&(F=[F,Z["x-intellij-html-description"]].filter((function(e){return e})).join(" ")),"undefined[]"===_&&(_="[]"),g=c.createElement(c.Fragment,null,g,c.createElement("tr",{className:"top"},A,c.createElement("td",{className:"comment"},F),c.createElement("td",{className:"type"},_)))}else if("array"===x.type&&P&&"[]"!==P){var L=JSON.parse(P),X=c.createElement("tr",null,A,c.createElement("td",{className:"comment",rowspan:1+L.length},F),c.createElement("td",{className:"type"})),R=L.map((function(e){return c.createElement("tr",null,c.createElement("td",null,c.createElement("span",{className:"key",style:{marginLeft:s(o)}},"- ",c.createElement("span",{className:"valueClass"},e))),c.createElement("td",{className:"comment"}),c.createElement("td",{className:"type"},"object"))}));g=c.createElement(c.Fragment,null,g,X,R)}else if("object"===x.type&&P&&"{}"!==P)g=c.createElement(c.Fragment,null,g,c.createElement("tr",null,A,c.createElement("td",{className:"comment"},F),c.createElement("td",{className:"type"},"object")));else{var U="array"===x.type?x.items.type+"[]":x.type;g=c.createElement(c.Fragment,null,g,c.createElement("tr",null,A,c.createElement("td",{className:"comment"},F),c.createElement("td",{className:"type"},U)))}M&&(g=c.createElement(c.Fragment,null,g,e(t,x,M,o+2,N)))}return g}(n.definitions,void 0,n.$ref,0,"")))}},8427:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return u},default:function(){return f}});var n=r(2122),a=r(9756),c=(r(7294),r(3905)),o=r(4602),l=["components"],i={sidebar_position:2,title:"Catalog Source schema"},s=void 0,m={unversionedId:"catalog-docs/catalog-source-schema",id:"catalog-docs/catalog-source-schema",isDocsHomePage:!1,title:"Catalog Source schema",description:"",source:"@site/docs/catalog-docs/catalog-source-schema.mdx",sourceDirName:"catalog-docs",slug:"/catalog-docs/catalog-source-schema",permalink:"/docs/catalog-docs/catalog-source-schema",editUrl:"https://github.com/weaveworks/profiles/edit/main/userdocs/profiles.dev/docs/catalog-docs/catalog-source-schema.mdx",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Catalog Source schema"},sidebar:"tutorialSidebar",previous:{title:"Adding profiles",permalink:"/docs/catalog-docs/add-profiles"},next:{title:"add",permalink:"/docs/pctl/pctl-add-cmd"}},u=[],p={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)(o.Z,{jsonFile:"../../docs/assets/schema/catalogdef.json",mdxType:"Schema"}))}f.isMDXComponent=!0}}]);