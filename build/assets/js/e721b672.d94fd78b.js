"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5639],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:e},p),{},{components:r})):n.createElement(f,i({ref:e},p))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[d]="string"==typeof t?t:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3544:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},i="Qdrant",s={unversionedId:"Core Components/Vector Database/qdrant",id:"Core Components/Vector Database/qdrant",title:"Qdrant",description:"Setting up Qdrant with SuperAGI",source:"@site/docs/Core Components/Vector Database/qdrant.md",sourceDirName:"Core Components/Vector Database",slug:"/Core Components/Vector Database/qdrant",permalink:"/docs/Core Components/Vector Database/qdrant",draft:!1,editUrl:"https://github.com/TransformerOptimus/SuperAGI-Docs/tree/main/docs/Core Components/Vector Database/qdrant.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Pinecone",permalink:"/docs/Core Components/Vector Database/pinecone"},next:{title:"Weaviate",permalink:"/docs/Core Components/Vector Database/weaviate"}},c={},l=[{value:"Setting up Qdrant with SuperAGI",id:"setting-up-qdrant-with-superagi",level:2}],p={toc:l},d="wrapper";function u(t){let{components:e,...o}=t;return(0,a.kt)(d,(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"qdrant"},"Qdrant"),(0,a.kt)("h2",{id:"setting-up-qdrant-with-superagi"},"Setting up Qdrant with SuperAGI"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Access your Qdrant Account"),(0,a.kt)("li",{parentName:"ol"},"If you are new to Qdrant, you can create your account as follows. If you already have an existing index skip to step 5"),(0,a.kt)("li",{parentName:"ol"},"Create your cluster for Qdrant and get your api-key, and URL.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt_text",src:r(8474).Z,width:"602",height:"329"}),"\n",(0,a.kt)("img",{alt:"alt_text",src:r(9522).Z,width:"602",height:"329"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"To create your index, run the following code with your Qdrant Credentials:")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt_text",src:r(3641).Z,width:"602",height:"252"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Once your index is created, go to Vector Settings in SuperAGI by clicking the settings icon on the top right corner."),(0,a.kt)("li",{parentName:"ol"},"In the Vector Database Settings, select Qdrant.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt_text",src:r(9272).Z,width:"602",height:"329"})),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Add your vector database settings and click connect. This will connect your Qdrant index. ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt_text",src:r(6091).Z,width:"602",height:"329"})))}u.isMDXComponent=!0},8474:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/qdrant1-385a9b9b3d38fc488931b2cb98e35414.png"},9522:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/qdrant2-dc24591d7917a194730b03b0b04bfaac.png"},3641:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/qdrant3-9aac2a67584d354b0ff532fb8101f0cf.png"},9272:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/qdrant4-803bd086af726d198ea35af05c574b86.png"},6091:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/qdrant5-9f9ebea0bb468990bfa2c942e4d71ad2.png"}}]);