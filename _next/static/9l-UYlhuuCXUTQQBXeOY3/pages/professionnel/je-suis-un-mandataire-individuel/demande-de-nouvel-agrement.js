(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{iSYX:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),a=n.n(i),r=n("mudf"),l=n("udHH"),s=a.a.createElement;t.default=function(){return s(r.a,{data:l.c})}},mudf:function(e,t,n){"use strict";var i=n("q1tI"),a=n.n(i),r=n("VdAu"),l=n("35RN"),s=n("7ljp"),c=a.a.createElement,o=function(e){var t=e.children;return c(r.a,{sx:{fontFamily:"Comfortaa",textAlign:"center",fontWeight:"bold",fontSize:"18px",mb:"24px",color:"text"}},t)},d=function(e){var t=e.children;return c(r.a,{sx:{my:"36px",":last-of-type":{mb:0}}},t)},u=function(e){var t=e.children;return c(r.a,{sx:{mb:"10px"}},c(r.d,{flexDirection:"row",alignItems:"middle"},c(r.a,{sx:{mt:"1px",mr:"3px",minWidth:"5px"}},"\u2022"),t))},p=function(e){var t=e.children;return c(r.a,{sx:{lineHeight:"1.5",mb:"5px",":last-of-type":{mb:0}}},t)},m=function(e){var t=e.children;return c(r.a,{sx:{display:"inline",fontWeight:"bold"}},t)},f=function(e){var t=e.children;return c(r.a,{sx:{mb:"36px",":last-of-type":{mb:0}}},t)},g={h1:function(e){return c(o,null,e.children)},ul:function(e){return c(d,null,e.children)},li:function(e){return c(u,null,e.children)},p:function(e){return c(p,null,e.children)},strong:function(e){return c(m,null,e.children)},br:function(e){return c(f,null,e.children)}},v=n("rePB"),b=n("wx14"),h={"&:active":{opacity:"0.8"},fontSize:1,fontWeight:500,lineHeight:"1.2",mx:"auto",outline:"none",position:"relative",px:3,py:2,cursor:"pointer",transition:"150ms ease-in-out opacity"},x=a.a.createElement;function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(v.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){var t=e.children,n=e.sx;return x(r.b,Object(b.a)({sx:j(j({},h),n)},e),x(r.a,null,t))},O=_;_.defaultProps={variant:null};var A=O,L=a.a.createElement;function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(v.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P={flexFlow:"row wrap",mb:"50px","@media screen and (max-width: 1000px)":{justifyContent:"center"}},C={fontSize:1,fontWeight:500,p:"10px",mr:"20px",mb:"10px",cursor:"pointer",outline:"none","@media screen and (min-width: 1200px)":{":first-of-type":{ml:0},":last-of-type":{mr:0}},"@media screen and (max-width: 1199px)":{my:"5px"},"@media screen and (max-width: 800px)":{width:"90%",mr:0,py:"12px",lineHeight:1.2}},D=function(e){var t=e.data,n=e.setSectionId,a=e.activeButton,l=e.setActiveButton;return L(i.Fragment,null,t.sections&&t.sections.length>1&&L(r.d,{sx:P},t.sections.map((function(e,t){return L(A,{key:e._id,sx:S(S({},C),{},{backgroundColor:a===t?"primary":"terciary"}),onClick:function(){l(e._id),n(e._id)}},e.title)}))))},E=a.a.createElement,U=function(e){var t=e.children;return E(r.a,{sx:{fontFamily:"Quicksand",pt:"15px",pb:"22px",px:"85px","@media screen and (max-width: 1000px)":{px:"10px"}}},t)},k=n("OZdj"),J=a.a.createElement,B=function(e){var t=e.children,n=e.title;return J(k.a,{bg:"white",mb:6,borderRadius:3},J(r.a,{fontWeight:"bold",mt:"5px",textAlign:"center",fontSize:"18px",fontFamily:"Comfortaa"},n),J(r.a,{color:"textSecondary"},t))},F=a.a.createElement,I=function(e){var t=e.mainContent;return F(B,{title:t.title},F(U,null,t.content))},H=a.a.createElement,R=function(e){var t=e.article,n=e.articlesLength,i=e.activeArticle,a=e.setActiveArticle,l=function(e){return e<0?0:e>=n-1?n-1:e<n?e:void 0};return H(B,{title:t.title},H(U,null,t.content),H(r.d,{sx:{justifyContent:"space-between"}},H(r.a,{sx:0===i&&{visibility:"hidden"}},H(A,{onClick:function(){return a(l(t._id-1))}},"Article pr\xe9c\xe9dent")),H(r.a,{sx:i===n-1&&{visibility:"hidden"}},H(A,{onClick:function(){return a(l(t._id+1))}},"Article suivant"))))},W=a.a.createElement,q=function(e){var t=e.currentSection,n=e.articles,a=e.activeArticle,l=e.setActiveArticle;return W(r.a,{sx:{my:"auto"}},W(B,{title:t.title},W(U,null,t.content)),n&&n.map((function(e){return W(i.Fragment,{key:e._id},a===e._id&&W(R,{article:e,articlesLength:n.length,activeArticle:a,setActiveArticle:l}))})))},z=a.a.createElement,T=function(e){var t=e.data,n=e.activeArticle,a=e.currentSection,l=e.articles,c=e.setActiveArticle,o=e.setSectionId,d=e.activeButton,u=e.setActiveButton;return z(s.a,{components:g},z(r.a,{mx:"20px"},z(r.e,{mb:"50px",mt:"28px",fontSize:"18px",fontFamily:"Comfortaa"},t.heading),t&&t.mainSection&&z(I,{mainContent:t.mainSection}),t&&t.sections&&z(i.Fragment,null,z(D,{data:t,setSectionId:o,activeButton:d,setActiveButton:u}),z(q,{currentSection:a,articles:l,activeArticle:n,setActiveArticle:c}))))},M=a.a.createElement;t.a=function(e){var t=e.data,n=Object(i.useState)(0),s=n[0],c=n[1],o=Object(i.useState)(0),d=o[0],u=o[1],p=Object(i.useState)(0),m=p[0],f=p[1],g=function(e,t){return t&&t.find((function(t){return t._id===e}))}(s,t.sections),v=g&&g.subSection&&g.subSection.articleContent;return M(a.a.Fragment,null,M(l.a,null),M(r.d,{bg:"whiteGray",maxWidth:1200,minHeight:"68.5vh",justifyContent:"start",mx:"auto"},M(T,{data:t,activeArticle:d,currentSection:g,articles:v,setActiveArticle:u,setSectionId:c,activeButton:m,setActiveButton:f})))}},nSQ6:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/professionnel/je-suis-un-mandataire-individuel/demande-de-nouvel-agrement",function(){return n("iSYX")}])},udHH:function(e,t,n){"use strict";n.d(t,"k",(function(){return d})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return p})),n.d(t,"g",(function(){return m})),n.d(t,"h",(function(){return f})),n.d(t,"e",(function(){return g})),n.d(t,"b",(function(){return v})),n.d(t,"d",(function(){return b})),n.d(t,"f",(function(){return h})),n.d(t,"c",(function(){return x})),n.d(t,"a",(function(){return y}));var i=n("yLiY"),a=n.n(i),r=n("q1tI"),l=n.n(r),s=n("5s55"),c=l.a.createElement,o=a()().publicRuntimeConfig,d={heading:"Bienvenue sur le portail de la Protection Juridique des Majeurs",sections:[{image:"".concat(o.appUrl,"/bg-pro-a.png"),splitTitle:{firstLine:"Je suis",secondLine:"un mandataire individuel"},title:"Je suis un mandataire individuel",url:"/professionnel/je-suis-un-mandataire-individuel"},{image:"".concat(o.appUrl,"/bg-pro-c.png"),splitTitle:{firstLine:"Je suis",secondLine:"un service mandataire"},title:"Je suis un service mandataire",url:"/professionnel/je-suis-un-service-mandataire"},{image:"".concat(o.appUrl,"/bg-pro-b.png"),splitTitle:{firstLine:"Je suis",secondLine:"un pr\xe9pos\xe9 d'\xe9tablissement"},title:"Je suis un pr\xe9pos\xe9 d'\xe9tablissement",url:"/professionnel/je-suis-un-prepose-d-etablissement"}]},u={heading:"Je suis un mandataire individuel",sections:[{image:"".concat(o.appUrl,"/bg-a.png"),title:"Les missions et les activit\xe9s du mandataire",url:"/professionnel/je-suis-un-mandataire-individuel/les-missions-et-les-activites-du-mandataire"},{image:"".concat(o.appUrl,"/bg-a.png"),title:"Les t\xe2ches du mandataire individuel",url:"/professionnel/je-suis-un-mandataire-individuel/les-taches-du-mandataire-individuel"},{image:"".concat(o.appUrl,"/bg-a.png"),title:"Les droits du prot\xe9g\xe9",url:"/professionnel/je-suis-un-mandataire-individuel/les-droits-du-protege"},{image:"".concat(o.appUrl,"/bg-a.png"),title:"Les obligations administratives du mandataire",url:"/professionnel/je-suis-un-mandataire-individuel/les-obligations-administratives-du-mandataire"},{image:"".concat(o.appUrl,"/bg-a.png"),title:"La d\xe9claration d'activit\xe9",url:"/professionnel/je-suis-un-mandataire-individuel/la-declaration-d-activite"},{image:"".concat(o.appUrl,"/bg-a.png"),title:"Le financement des mandataires individuels",url:"/professionnel/je-suis-un-mandataire-individuel/le-financement-des-mandataires-individuels"},{image:"".concat(o.appUrl,"/bg-a.png"),title:"Les sanctions en cas de non-respect des engagements",url:"/professionnel/je-suis-un-mandataire-individuel/les-sanctions-en-cas-de-non-respect-des-engagements"},{image:"".concat(o.appUrl,"/bg-a.png"),title:"La demande de nouvel agr\xe9ment",url:"/professionnel/je-suis-un-mandataire-individuel/demande-de-nouvel-agrement"},{image:"".concat(o.appUrl,"/bg-a.png"),title:"Cessation d'activit\xe9",url:"/professionnel/je-suis-un-mandataire-individuel/cessation-d-activite"}]},p={heading:"Les missions et les activit\xe9s du mandataire",mainSection:{content:c(s.P,null),title:"Les missions et les activit\xe9s du mandataire"},sections:[{_id:0,content:c(s.L,null),title:"Dans le cas d'une curatelle"},{_id:1,content:c(s.O,null),title:"Dans le cas d'une tutelle"},{_id:2,content:c(s.N,null),title:"Dans le cas de la sauvegarde de justice"},{_id:3,content:c(s.M,null),title:"Dans le cas d'une mesure d'accompagnement judiciaire"}]},m={heading:"Les t\xe2ches du mandataire individuel",sections:[{_id:0,content:c(s.Sb,null),title:"Les t\xe2ches du mandataire individuel"}]},f={heading:"Les droits du prot\xe9g\xe9",sections:[{_id:0,content:c(s.r,null),subSection:{articleContent:[{_id:0,content:c(s.s,null),title:"Article 1er : Respect des libert\xe9s individuelles et des droits civiques"},{_id:1,content:c(s.x,null),title:"Article 2 : Non-discrimination"},{_id:2,content:c(s.y,null),title:"Article 3 : Respect de la dignit\xe9 de la personne et de son int\xe9grit\xe9"},{_id:3,content:c(s.z,null),title:"Article 4 : Libert\xe9 des relations personnelles"},{_id:4,content:c(s.A,null),title:"Article 5 : Droit au respect des liens familiaux"},{_id:5,content:c(s.B,null),title:"Article 6 : Droit \xe0 l\u2019information"},{_id:6,content:c(s.C,null),title:"Article 7 : Droit \xe0 l\u2019autonomie "},{_id:7,content:c(s.D,null),title:"Article 8 : Droit \xe0 la protection du logement et des objets personnels"},{_id:8,content:c(s.E,null),title:"Article 9 : Consentement \xe9clair\xe9 et participation de la personne"},{_id:9,content:c(s.t,null),title:"Article 10 : Droit \xe0 une intervention personnalis\xe9e"},{_id:10,content:c(s.u,null),title:"Article 11 : Droit \xe0 l\u2019acc\xe8s aux soins"},{_id:11,content:c(s.v,null),title:"Article 12 : Protection des biens dans l\u2019int\xe9r\xeat exclusif de la personne"},{_id:12,content:c(s.w,null),title:"Article 13 : Confidentialit\xe9 des informations"}]},title:"Les droits du prot\xe9g\xe9"}]},g={heading:"Les obligations administratives du mandataire",mainSection:{content:c(s.Q,null),title:"Les obligations administratives du mandataire"},sections:[{_id:0,content:c(s.S,null),title:"Envoi des pi\xe8ces apr\xe8s notification de l'agr\xe9ment"},{_id:1,content:c(s.T,null),title:"Mise en place des moyens mentionn\xe9s dans le dossier"},{_id:2,content:c(s.U,null),title:"Prestation de serment"},{_id:3,content:c(s.R,null),title:"Contr\xf4les"}]},v={heading:"La d\xe9claration d'activit\xe9",sections:[{_id:0,content:c(s.c,null),title:"La d\xe9claration semestrielle"},{_id:1,content:c(s.d,null),title:"Le site e-MJPM"},{_id:2,content:c(s.b,null),title:"L'enqu\xeate annuelle"}]},b={heading:"Le financement des mandataires individuels",sections:[{_id:0,content:c(s.K,null),title:"Le syst\xe8me de financement des mesures"},{_id:1,content:c(s.J,null),title:"L'outil de calcul des mandataires individuels"},{_id:2,content:c(s.F,null),title:"L\u2019application de l\u2019article R 472-8"},{_id:3,content:c(s.I,null),title:"Les modalit\xe9s de calcul de co\xfbt des mesures"},{_id:4,content:c(s.G,null),title:"Les diff\xe9rents co\xfbts au regard des indicateurs"},{_id:5,content:c(s.H,null),title:"Indemnit\xe9 compl\xe9mentaire"}]},h={heading:"Les sanctions en cas de non-respect des engagements",mainSection:{content:c(s.ub,null),title:"Les sanctions en cas de non-respect des engagements"}},x={heading:"La demande de nouvel agr\xe9ment",mainSection:{content:c(s.e,null),title:"La demande de nouvel agr\xe9ment"}},y={heading:"Cessation d'activit\xe9",mainSection:{content:c(s.a,null),title:"Cessation d'activit\xe9"}}}},[["nSQ6",0,2,1,3,4]]]);