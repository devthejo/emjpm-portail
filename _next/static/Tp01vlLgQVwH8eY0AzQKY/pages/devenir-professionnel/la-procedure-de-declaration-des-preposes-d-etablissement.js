(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Xk2d:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/devenir-professionnel/la-procedure-de-declaration-des-preposes-d-etablissement",function(){return n("wI7S")}])},mudf:function(e,t,n){"use strict";var r=n("q1tI"),i=n.n(r),a=n("VdAu"),o=n("35RN"),c=n("7ljp"),s=n("yLiY"),l=n.n(s),d=i.a.createElement,u=l()().publicRuntimeConfig,p=function(e){var t=e.children;return d(a.a,{sx:{fontFamily:"Comfortaa",textAlign:"center",fontWeight:"bold",fontSize:"18px",mb:"24px",color:"text"}},t)},f=function(e){var t=e.children;return d(a.a,{sx:{my:"18px",":last-of-type":{mb:0}}},t)},m=function(e){var t=e.children;return d(a.a,{sx:{mb:"10px"}},d(a.d,{flexDirection:"row",alignItems:"middle"},d(a.a,{sx:{mt:"1px",mr:"3px",minWidth:"5px"}},"\u2022"),t))},b=function(e){var t=e.children;return d(a.a,{sx:{lineHeight:"1.5",mb:"5px",":last-of-type":{mb:0}}},t)},x=function(e){var t=e.children;return d(a.a,{sx:{display:"inline",fontWeight:"bold"}},t)},g=function(e){var t=e.children;return d(a.a,{sx:{mb:"18px",":last-of-type":{mb:0}}},t)},v=function(e){var t=e.src,n=e.alt;return d(a.f,{sx:{display:"block",maxWidth:"800px",mx:"auto",my:"20px","@media screen and (max-width: 950px)":{width:"100%"}},src:"".concat(u.appUrl).concat(t),alt:n})},h={h1:function(e){return d(p,null,e.children)},ul:function(e){return d(f,null,e.children)},li:function(e){return d(m,null,e.children)},p:function(e){return d(b,null,e.children)},strong:function(e){return d(x,null,e.children)},br:function(e){return d(g,null,e.children)},img:function(e){return d(v,{src:e.src,alt:e.alt})}},y=n("rePB"),w=n("wx14"),O={"&:active":{opacity:"0.8"},fontSize:1,fontWeight:500,lineHeight:"1.2",mx:"auto",outline:"none",position:"relative",px:3,py:2,cursor:"pointer",transition:"150ms ease-in-out opacity"},j=i.a.createElement;function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){var t=e.children,n=e.sx;return j(a.b,Object(w.a)({sx:S(S({},O),n)},e),j(a.a,null,t))},P=_;_.defaultProps={variant:null};var E=P,k=i.a.createElement;function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D={flexFlow:"row wrap",mb:"50px","@media screen and (max-width: 1000px)":{justifyContent:"center"}},I={fontSize:1,fontWeight:500,p:"10px",mr:"20px",mb:"10px",cursor:"pointer",outline:"none","@media screen and (min-width: 1200px)":{":first-of-type":{ml:0},":last-of-type":{mr:0}},"@media screen and (max-width: 1199px)":{my:"5px"},"@media screen and (max-width: 800px)":{width:"90%",mr:0,py:"12px",lineHeight:1.2}},B=function(e){var t=e.data,n=e.setSectionId,i=e.activeButton,o=e.setActiveButton;return k(r.Fragment,null,t.sections&&t.sections.length>1&&k(a.d,{sx:D},t.sections.map((function(e,t){return k(E,{key:e._id,sx:A(A({},I),{},{backgroundColor:i===t?"primary":"terciary"}),onClick:function(){o(e._id),n(e._id)}},e.title)}))))},F=i.a.createElement,W=function(e){var t=e.children;return F(a.a,{sx:{fontFamily:"Quicksand",pt:"15px",pb:"22px",px:"85px","@media screen and (max-width: 1000px)":{px:"10px"}}},t)},T=n("OZdj"),U=i.a.createElement,z=function(e){var t=e.children,n=e.title;return U(T.a,{bg:"white",mb:6,borderRadius:3},U(a.a,{fontWeight:"bold",mt:"5px",textAlign:"center",fontSize:"18px",fontFamily:"Comfortaa"},n),U(a.a,{color:"textSecondary"},t))},H=i.a.createElement,R=function(e){var t=e.mainContent;return H(z,{title:t.title},H(W,null,t.content))},X=i.a.createElement,q=function(e){var t=e.currentSection,n=e.articles;return X(a.a,{sx:{my:"auto"}},X(z,{title:t.title},X(W,null,t.content)),n&&n.map((function(e){return X(z,{key:e._id,title:e.title},X(W,null,e.content))})))},N=i.a.createElement,J=function(e){var t=e.data,n=e.currentSection,i=e.articles,o=e.setSectionId,s=e.activeButton,l=e.setActiveButton;return N(c.a,{components:h},N(a.a,{mx:"20px",width:"100%"},N(a.e,{mb:"50px",mt:"28px",fontSize:"18px",fontFamily:"Comfortaa"},t.heading),t&&t.mainSection&&N(R,{mainContent:t.mainSection}),t&&t.sections&&N(r.Fragment,null,N(B,{data:t,setSectionId:o,activeButton:s,setActiveButton:l}),N(q,{currentSection:n,articles:i}))))},Y=i.a.createElement;t.a=function(e){var t=e.data,n=Object(r.useState)(0),c=n[0],s=n[1],l=Object(r.useState)(0),d=l[0],u=l[1],p=function(e,t){return t&&t.find((function(t){return t._id===e}))}(c,t.sections),f=p&&p.subSection&&p.subSection.articleContent;return Y(i.a.Fragment,null,Y(o.a,null),Y(a.d,{bg:"whiteGray",maxWidth:1200,minHeight:"68.5vh",justifyContent:"start",mx:"auto"},Y(J,{data:t,currentSection:p,articles:f,setSectionId:s,activeButton:d,setActiveButton:u})))}},pnw1:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return m})),n.d(t,"c",(function(){return b}));var r=n("yLiY"),i=n.n(r),a=n("q1tI"),o=n.n(a),c=n("5s55"),s=o.a.createElement,l=i()().publicRuntimeConfig,d={heading:"Devenir professionnel",sections:[{image:"".concat(l.appUrl,"/bg-devenir-pro-a.png"),title:"Appel \xe0 candidatures et \xe0 projets",url:"/devenir-professionnel/appel-a-candidatures-et-a-projets"},{image:"".concat(l.appUrl,"/bg-devenir-pro-b.png"),splitTitle:{firstLine:"La proc\xe9dure d'agr\xe9ment",secondLine:"des mandataires individuels"},title:"La proc\xe9dure d'agr\xe9ment des mandataires individuels",url:"/devenir-professionnel/la-procedure-d-agrement-des-mandataires-individuels"},{image:"".concat(l.appUrl,"/bg-devenir-pro-c.png"),splitTitle:{firstLine:"La proc\xe9dure d\u2019autorisation",secondLine:"des services mandataires"},title:"La proc\xe9dure d\u2019autorisation des services mandataires",url:"/devenir-professionnel/la-procedure-d-autorisation-des-services-mandataires"},{image:"".concat(l.appUrl,"/bg-devenir-pro-a.png"),splitTitle:{firstLine:"La proc\xe9dure de d\xe9claration",secondLine:"des pr\xe9pos\xe9s d\u2019\xe9tablissement"},title:"La proc\xe9dure de d\xe9claration des pr\xe9pos\xe9s d\u2019\xe9tablissement",url:"/devenir-professionnel/la-procedure-de-declaration-des-preposes-d-etablissement"},{image:"".concat(l.appUrl,"/bg-devenir-pro-b.png"),splitTitle:{firstLine:"La formation au certificat",secondLine:"national de comp\xe9tences"},title:"La formation au certificat national de comp\xe9tences",url:"/devenir-professionnel/la-formation-au-certificat-national-de-competences"}]},u={heading:"Appel \xe0 candidatures et \xe0 projets",sections:[{_id:0,content:s(c.a,null),title:"Appel \xe0 candidatures"},{_id:1,content:s(c.b,null),title:"Appel \xe0 projets"}]},p={heading:"La proc\xe9dure d\u2019agr\xe9ment des mandataires individuels",sections:[{_id:0,content:s(c.g,null),title:"Les conditions \xe0 satisfaire"},{_id:1,content:s(c.h,null),title:"Les \xe9tapes de la proc\xe9dure"},{_id:2,content:s(c.i,null),title:"La proc\xe9dure de recours suite \xe0 un refus d\u2019agr\xe9ment"}]},f={heading:"La proc\xe9dure d\u2019autorisation des services mandataires",sections:[{_id:0,content:s(c.j,null),title:"Les conditions d\u2019autorisation"},{_id:1,content:s(c.k,null),title:"La proc\xe9dure d\u2019autorisation d\u2019un service mandataire"}]},m={heading:"La proc\xe9dure de d\xe9claration des pr\xe9pos\xe9s d\u2019\xe9tablissement",mainSection:{content:s(c.l,null),title:"La proc\xe9dure de d\xe9claration des pr\xe9pos\xe9s d\u2019\xe9tablissement"}},b={heading:"La formation au certificat national de comp\xe9tences",sections:[{_id:0,content:s(c.f,null),title:"L\u2019objet de la formation"},{_id:1,content:s(c.c,null),title:"Les conditions d\u2019acc\xe8s \xe0 la formation"},{_id:2,content:s(c.d,null),title:"Le d\xe9roulement de la formation"},{_id:3,content:s(c.e,null),title:"Les dispenses et les all\xe8gements \xe0 la formation"}]}},wI7S:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),a=n("mudf"),o=n("pnw1"),c=i.a.createElement;t.default=function(){return c(a.a,{data:o.f})}}},[["Xk2d",0,2,1,3,4]]]);