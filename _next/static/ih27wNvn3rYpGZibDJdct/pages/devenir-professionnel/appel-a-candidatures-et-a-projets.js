(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"315v":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/devenir-professionnel/appel-a-candidatures-et-a-projets",function(){return n("8r2W")}])},"8r2W":function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),r=n.n(i),a=n("mudf"),o=n("pnw1"),c=r.a.createElement;t.default=function(){return c(a.a,{data:o.a})}},mudf:function(e,t,n){"use strict";var i=n("q1tI"),r=n.n(i),a=n("VdAu"),o=n("7ljp"),c=r.a.createElement,s=function(e){var t=e.children;return c(a.a,{sx:{fontFamily:"Comfortaa",textAlign:"center",fontWeight:"bold",fontSize:"18px",mb:"24px",color:"text"}},t)},l=function(e){var t=e.children;return c(a.a,{sx:{mb:"50px"}},t)},d=function(e){var t=e.children;return c(a.a,{sx:{marginBottom:"10px"}},"\u2022 ",t)},u=function(e){var t=e.children;return c(a.a,{sx:{lineHeight:"normal",mb:"48px",":last-of-type":{mb:0}}},t)},p={h1:function(e){return c(s,null,e.children)},ul:function(e){return c(l,null,e.children)},li:function(e){return c(d,null,e.children)},p:function(e){return c(u,null,e.children)}},f=n("rePB"),m=n("wx14"),v={"&:active":{opacity:"0.8"},fontSize:1,fontWeight:500,lineHeight:"1.2",mx:"auto",outline:"none",position:"relative",px:3,py:2,cursor:"pointer",transition:"150ms ease-in-out opacity"},b=r.a.createElement;function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){var t=e.children,n=e.sx;return b(a.b,Object(m.a)({sx:x(x({},v),n)},e),b(a.a,null,t))},y=h;h.defaultProps={variant:null};var O=y,j=r.a.createElement;function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A={flexFlow:"row wrap",mb:"50px","@media screen and (max-width: 1000px)":{justifyContent:"center"}},S={fontSize:1,fontWeight:500,p:"10px",mr:"20px",mb:"10px",cursor:"pointer",outline:"none","@media screen and (min-width: 1200px)":{":first-of-type":{ml:0},":last-of-type":{mr:0}},"@media screen and (max-width: 1199px)":{my:"5px"}},_=function(e){var t=e.data,n=e.setSectionId,r=e.activeButton,o=e.setActiveButton;return j(i.Fragment,null,t.sections&&t.sections.length>1&&j(a.d,{sx:A},t.sections.map((function(e,t){return j(O,{key:e._id,sx:L(L({},S),{},{backgroundColor:r===t?"primary":"terciary"}),onClick:function(){o(e._id),n(e._id)}},e.title)}))))},P=r.a.createElement,E=function(e){var t=e.children;return P(a.a,{sx:{fontFamily:"Quicksand",pt:"15px",pb:"22px",px:"85px","@media screen and (max-width: 1000px)":{px:"10px"}}},t)},C=n("OZdj"),k=r.a.createElement,B=function(e){var t=e.children,n=e.title;return k(C.a,{bg:"white",mb:6,borderRadius:3},k(a.a,{fontWeight:"bold",mt:"5px",textAlign:"center",fontSize:"18px",fontFamily:"Comfortaa"},n),k(a.a,{color:"textSecondary"},t))},D=r.a.createElement,F=function(e){var t=e.mainContent;return D(B,{title:t.title},D(E,null,t.content))},I=r.a.createElement,W=function(e){var t=e.article,n=e.articlesLength,i=e.activeArticle,r=e.setActiveArticle,o=function(e){return e<0?0:e>=n-1?n-1:e<n?e:void 0};return I(B,{title:t.title},I(E,null,t.content),I(a.d,{sx:{justifyContent:"space-between"}},I(a.a,{sx:0===i&&{visibility:"hidden"}},I(O,{onClick:function(){return r(o(t._id-1))}},"Article pr\xe9c\xe9dent")),I(a.a,{sx:i===n-1&&{visibility:"hidden"}},I(O,{onClick:function(){return r(o(t._id+1))}},"Article suivant"))))},T=r.a.createElement,q=function(e){var t=e.currentSection,n=e.articles,r=e.activeArticle,o=e.setActiveArticle;return T(a.a,{sx:{my:"auto"}},T(B,{title:t.title},T(E,null,t.content)),n&&n.map((function(e){return T(i.Fragment,{key:e._id},r===e._id&&T(W,{article:e,articlesLength:n.length,activeArticle:r,setActiveArticle:o}))})))},z=r.a.createElement,U=function(e){var t=e.data,n=e.activeArticle,r=e.currentSection,c=e.articles,s=e.setActiveArticle,l=e.setSectionId,d=e.activeButton,u=e.setActiveButton;return z(o.a,{components:p},z(a.a,{mx:"20px"},z(a.e,{mb:"50px",mt:"28px",fontSize:"18px",fontFamily:"Comfortaa"},t.heading),t&&t.mainSection&&z(F,{mainContent:t.mainSection}),t&&t.sections&&z(i.Fragment,null,z(_,{data:t,setSectionId:l,activeButton:d,setActiveButton:u}),z(q,{currentSection:r,articles:c,activeArticle:n,setActiveArticle:s}))))},H=r.a.createElement;t.a=function(e){var t=e.data,n=Object(i.useState)(0),r=n[0],o=n[1],c=Object(i.useState)(0),s=c[0],l=c[1],d=Object(i.useState)(0),u=d[0],p=d[1],f=function(e,t){return t&&t.find((function(t){return t._id===e}))}(r,t.sections),m=f&&f.subSection&&f.subSection.articleContent;return H(a.d,{bg:"whiteGray"},H(a.a,{width:"100%",maxWidth:1200,mx:"auto",minHeight:"68.5vh"},H(U,{data:t,activeArticle:s,currentSection:f,articles:m,setActiveArticle:l,setSectionId:o,activeButton:u,setActiveButton:p})))}},pnw1:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return m})),n.d(t,"c",(function(){return v}));var i=n("yLiY"),r=n.n(i),a=n("q1tI"),o=n.n(a),c=n("5s55"),s=o.a.createElement,l=r()().publicRuntimeConfig,d={heading:"Bienvenue sur le portail de la Protection Juridique des Majeurs",sections:[{image:"".concat(l.appUrl,"/bg-devenir-pro-a.png"),title:"Appel \xe0 candidatures et \xe0 projets",url:"/devenir-professionnel/appel-a-candidatures-et-a-projets"},{image:"".concat(l.appUrl,"/bg-devenir-pro-b.png"),splitTitle:{firstLine:"La proc\xe9dure d'agr\xe9ment",secondLine:"des mandataires individuels"},title:"La proc\xe9dure d'agr\xe9ment des mandataires individuels",url:"/devenir-professionnel/la-procedure-d-agrement-des-mandataires-individuels"},{image:"".concat(l.appUrl,"/bg-devenir-pro-c.png"),splitTitle:{firstLine:"La proc\xe9dure d\u2019autorisation",secondLine:"des services mandataires"},title:"La proc\xe9dure d\u2019autorisation des services mandataires",url:"/devenir-professionnel/la-procedure-d-autorisation-des-services-mandataires"},{image:"".concat(l.appUrl,"/bg-devenir-pro-a.png"),splitTitle:{firstLine:"La proc\xe9dure de d\xe9claration",secondLine:"des pr\xe9pos\xe9s d\u2019\xe9tablissement"},title:"La proc\xe9dure de d\xe9claration des pr\xe9pos\xe9s d\u2019\xe9tablissement",url:"/devenir-professionnel/la-procedure-de-declaration-des-preposes-d-etablissement"},{image:"".concat(l.appUrl,"/bg-devenir-pro-b.png"),splitTitle:{firstLine:"La formation au certificat",secondLine:"national de comp\xe9tences"},title:"La formation au certificat national de comp\xe9tences",url:"/devenir-professionnel/la-formation-au-certificat-national-de-competences"}]},u={heading:"Appel \xe0 candidatures et \xe0 projets",sections:[{_id:0,content:s(c.f,null),title:"Appel \xe0 candidatures"},{_id:1,content:s(c.g,null),title:"Appel \xe0 projets"}]},p={heading:"La proc\xe9dure d\u2019agr\xe9ment des mandataires individuels",sections:[{_id:0,content:s(c.l,null),title:"Les conditions \xe0 satisfaire"},{_id:1,content:s(c.m,null),title:"Les \xe9tapes de la proc\xe9dure"},{_id:2,content:s(c.n,null),title:"La proc\xe9dure de recours suite \xe0 un refus d\u2019agr\xe9ment"}]},f={heading:"La proc\xe9dure d\u2019autorisation des services mandataires",sections:[{_id:0,content:s(c.o,null),title:"Les conditions d\u2019autorisation"},{_id:1,content:s(c.p,null),title:"La proc\xe9dure d\u2019autorisation d\u2019un service mandataire"}]},m={heading:"La proc\xe9dure de d\xe9claration des pr\xe9pos\xe9s d\u2019\xe9tablissement",mainSection:{content:s(c.q,null),title:"La proc\xe9dure de d\xe9claration des pr\xe9pos\xe9s d\u2019\xe9tablissement"}},v={heading:"La formation au certificat national de comp\xe9tences",sections:[{_id:0,content:s(c.k,null),title:"L\u2019objet de la formation"},{_id:1,content:s(c.h,null),title:"Les conditions d\u2019acc\xe8s \xe0 la formation"},{_id:2,content:s(c.i,null),title:"Le d\xe9roulement de la formation"},{_id:3,content:s(c.j,null),title:"Les dispenses et les all\xe8gements \xe0 la formation"}]}}},[["315v",0,1,2,3]]]);