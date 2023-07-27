"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2291],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,g=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},a="Contribute to Code",u={unversionedId:"Contribute/contribute_code",id:"Contribute/contribute_code",title:"Contribute to Code",description:"First of all, thank you for taking the time to contribute to this project. We truly appreciate your contributions, whether it's bug reports, feature suggestions, or pull requests. Your time and effort are highly valued in this project. \ud83d\ude80",source:"@site/docs/Contribute/contribute_code.md",sourceDirName:"Contribute",slug:"/Contribute/contribute_code",permalink:"/docs/Contribute/contribute_code",draft:!1,editUrl:"https://github.com/TransformerOptimus/SuperAGI-Docs/tree/main/docs/Contribute/contribute_code.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Contribute",permalink:"/docs/Contribute/"},next:{title:"Benchmarking",permalink:"/docs/benchmark"}},s={},l=[{value:"\u2714\ufe0f Code of Conduct:",id:"\ufe0f-code-of-conduct",level:2},{value:"\ud83d\ude80 Quick Start",id:"-quick-start",level:2},{value:"Contributing Guidelines",id:"contributing-guidelines",level:2},{value:"\ud83d\udd0d Reporting Bugs",id:"-reporting-bugs",level:3},{value:"\ud83d\udca1 New Feature or Suggesting Enhancements",id:"-new-feature-or-suggesting-enhancements",level:3},{value:"Testing your Changes",id:"testing-your-changes",level:2},{value:"Pull Request",id:"pull-request",level:2}],c={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contribute-to-code"},"Contribute to Code"),(0,o.kt)("p",null,"First of all, thank you for taking the time to contribute to this project. We truly appreciate your contributions, whether it's bug reports, feature suggestions, or pull requests. Your time and effort are highly valued in this project. \ud83d\ude80"),(0,o.kt)("p",null,"This document provides guidelines and best practices to help you to contribute effectively. These are meant to serve as guidelines, not strict rules. We encourage you to use your best judgment and feel comfortable proposing changes to this document through a pull request."),(0,o.kt)("h2",{id:"\ufe0f-code-of-conduct"},"\u2714\ufe0f Code of Conduct:"),(0,o.kt)("p",null,"Please read our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TransformerOptimus/SuperAGI/blob/main/CODE_OF_CONDUCT.md"},"Code of Conduct")," to understand the expectations we have for all contributors participating in this project. By participating, you agree to abide by our Code of Conduct."),(0,o.kt)("h2",{id:"-quick-start"},"\ud83d\ude80 Quick Start"),(0,o.kt)("p",null,"You can quickly get started with contributing by searching for issues with the labels ",(0,o.kt)("strong",{parentName:"p"},'"Good First Issue"')," or ",(0,o.kt)("strong",{parentName:"p"},'"Help Needed"')," in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TransformerOptimus/SuperAGI/Issues"},"Issues Section"),". If you think you can contribute, comment on the issue and we will assign it to you.  "),(0,o.kt)("p",null,"To set up your development environment, please follow the steps mentioned below : "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Fork the repository and create a clone of the fork"),(0,o.kt)("li",{parentName:"ol"},"Create a branch for a feature or a bug you are working on in your fork"),(0,o.kt)("li",{parentName:"ol"},"Once you've created your branch, follow the instructions in the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/TransformerOptimus/SuperAGI/README.MD"},"README.MD"))),(0,o.kt)("h2",{id:"contributing-guidelines"},"Contributing Guidelines"),(0,o.kt)("h3",{id:"-reporting-bugs"},"\ud83d\udd0d Reporting Bugs"),(0,o.kt)("p",null,"You can start working on an existing bug that has been reported and labeled as ",(0,o.kt)("strong",{parentName:"p"},'"Bug"')," in the Issues Section, and you can report your bugs in the following manner :"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Title describing the issue clearly and concisely with relevant labels"),(0,o.kt)("li",{parentName:"ol"},"Provide a detailed description of the problem and the necessary steps to reproduce the issue."),(0,o.kt)("li",{parentName:"ol"},"Include any relevant logs, screenshots, or other helpful information supporting the issue.")),(0,o.kt)("h3",{id:"-new-feature-or-suggesting-enhancements"},"\ud83d\udca1 New Feature or Suggesting Enhancements"),(0,o.kt)("p",null,"This section guides you through working on an enhancement ",(0,o.kt)("strong",{parentName:"p"},"Including a completely New Feature")," & ",(0,o.kt)("strong",{parentName:"p"},"Enhancements to an existing functionality"),". "),(0,o.kt)("p",null,"Before getting started, Perform a search on Issues to see if the enhancement or feature has already been suggested and picked up. If the feature or enhancement is suggested and not picked up, comment on the issue and assign yourself to it. "),(0,o.kt)("p",null,"If the feature or enhancement is not in the issues, find out whether your idea fits with the scope and aims of the project by looking at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/users/TransformerOptimus/projects/5/"},"Roadmap"),". If yes, raise an issue with the label ",(0,o.kt)("strong",{parentName:"p"},'"Feature Request"')," in the following manner: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Title describing the feature or enhancement in a clear and concise manner"),(0,o.kt)("li",{parentName:"ol"},"Clearly describe the proposed enhancement, highlighting its benefits and potential drawbacks."),(0,o.kt)("li",{parentName:"ol"},"Provide examples and supporting information.")),(0,o.kt)("p",null,"Once you have raised the issue and have gotten yourself assigned, you can start working on the feature or enhancement. Please make sure the feature or enhancement you're working on is placed on the Roadmap."),(0,o.kt)("h2",{id:"testing-your-changes"},"Testing your Changes"),(0,o.kt)("p",null,"Each method or the function of the code should have a unit test with the maximum coverage possible and on each Pull Request, we have GitHub Actions triggered, which\nruns all the unit tests where all the tests should pass for merging the Pull Request. "),(0,o.kt)("h2",{id:"pull-request"},"Pull Request"),(0,o.kt)("p",null,"Now that you have worked on your code and tested it thoroughly, you can now go ahead and raise the pull request. Please make sure that the Pull Request adheres to the following guidelines: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The pull request is atomic and focuses on a single change."),(0,o.kt)("li",{parentName:"ol"},"You have read the contributing guide and your code conforms to the guidelines."),(0,o.kt)("li",{parentName:"ol"},"You have documented your changes clearly and comprehensively."),(0,o.kt)("li",{parentName:"ol"},"You have added the required tests.")))}d.isMDXComponent=!0}}]);