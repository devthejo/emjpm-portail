(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{O0AW:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),a=n.n(i),r=n("mudf"),l=n("udHH"),s=a.a.createElement;t.default=function(){return s(r.a,{data:l.e})}},bJge:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/professionnel/je-suis-un-mandataire-individuel/les-obligations-administratives-du-mandataire",function(){return n("O0AW")}])},mudf:function(e,t,n){"use strict";var i=n("q1tI"),a=n.n(i),r=n("VdAu"),l=n("35RN"),s=n("7ljp"),o=a.a.createElement,c=function(e){var t=e.children;return o(r.a,{sx:{fontFamily:"Comfortaa",textAlign:"center",fontWeight:"bold",fontSize:"18px",mb:"24px",color:"text"}},t)},d=function(e){var t=e.children;return o(r.a,{sx:{my:"36px",":last-of-type":{mb:0}}},t)},u=function(e){var t=e.children;return o(r.a,{sx:{mb:"10px"}},o(r.d,{flexDirection:"row",alignItems:"middle"},o(r.a,{sx:{mt:"1px",mr:"3px",minWidth:"5px"}},"\u2022"),t))},p=function(e){var t=e.children;return o(r.a,{sx:{lineHeight:"1.5",mb:"5px",":last-of-type":{mb:0}}},t)},m=function(e){var t=e.children;return o(r.a,{sx:{display:"inline",fontWeight:"bold"}},t)},f=function(e){var t=e.children;return o(r.a,{sx:{mb:"36px",":last-of-type":{mb:0}}},t)},g={h1:function(e){return o(c,null,e.children)},ul:function(e){return o(d,null,e.children)},li:function(e){return o(u,null,e.children)},p:function(e){return o(p,null,e.children)},strong:function(e){return o(m,null,e.children)},br:function(e){return o(f,null,e.children)}},v=n("rePB"),b=n("wx14"),x={"&:active":{opacity:"0.8"},fontSize:1,fontWeight:500,lineHeight:"1.2",mx:"auto",outline:"none",position:"relative",px:3,py:2,cursor:"pointer",transition:"150ms ease-in-out opacity"},h=a.a.createElement;function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(v.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){var t=e.children,n=e.sx;return h(r.b,Object(b.a)({sx:j(j({},x),n)},e),h(r.a,null,t))},_=O;O.defaultProps={variant:null};var L=_,w=a.a.createElement;function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){Object(v.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A={flexFlow:"row wrap",mb:"50px","@media screen and (max-width: 1000px)":{justifyContent:"center"}},D={fontSize:1,fontWeight:500,p:"10px",mr:"20px",mb:"10px",cursor:"pointer",outline:"none","@media screen and (min-width: 1200px)":{":first-of-type":{ml:0},":last-of-type":{mr:0}},"@media screen and (max-width: 1199px)":{my:"5px"},"@media screen and (max-width: 800px)":{width:"90%",mr:0,py:"12px",lineHeight:1.2}},C=function(e){var t=e.data,n=e.setSectionId,a=e.activeButton,l=e.setActiveButton;return w(i.Fragment,null,t.sections&&t.sections.length>1&&w(r.d,{sx:A},t.sections.map((function(e,t){return w(L,{key:e._id,sx:P(P({},D),{},{backgroundColor:a===t?"primary":"terciary"}),onClick:function(){l(e._id),n(e._id)}},e.title)}))))},E=a.a.createElement,J=function(e){var t=e.children;return E(r.a,{sx:{fontFamily:"Quicksand",pt:"15px",pb:"22px",px:"85px","@media screen and (max-width: 1000px)":{px:"10px"}}},t)},U=n("OZdj"),B=a.a.createElement,k=function(e){var t=e.children,n=e.title;return B(U.a,{bg:"white",mb:6,borderRadius:3},B(r.a,{fontWeight:"bold",mt:"5px",textAlign:"center",fontSize:"18px",fontFamily:"Comfortaa"},n),B(r.a,{color:"textSecondary"},t))},I=a.a.createElement,F=function(e){var t=e.mainContent;return I(k,{title:t.title},I(J,null,t.content))},H=a.a.createElement,W=function(e){var t=e.currentSection,n=e.articles;return H(r.a,{sx:{my:"auto"}},H(k,{title:t.title},H(J,null,t.content)),n&&n.map((function(e){return H(k,{key:e._id,title:e.title},H(J,null,e.content))})))},R=a.a.createElement,q=function(e){var t=e.data,n=e.currentSection,a=e.articles,l=e.setSectionId,o=e.activeButton,c=e.setActiveButton;return R(s.a,{components:g},R(r.a,{mx:"20px"},R(r.e,{mb:"50px",mt:"28px",fontSize:"18px",fontFamily:"Comfortaa"},t.heading),t&&t.mainSection&&R(F,{mainContent:t.mainSection}),t&&t.sections&&R(i.Fragment,null,R(C,{data:t,setSectionId:l,activeButton:o,setActiveButton:c}),R(W,{currentSection:n,articles:a}))))},z=a.a.createElement;t.a=function(e){var t=e.data,n=Object(i.useState)(0),s=n[0],o=n[1],c=Object(i.useState)(0),d=c[0],u=c[1],p=function(e,t){return t&&t.find((function(t){return t._id===e}))}(s,t.sections),m=p&&p.subSection&&p.subSection.articleContent;return z(a.a.Fragment,null,z(l.a,null),z(r.d,{bg:"whiteGray",maxWidth:1200,minHeight:"68.5vh",justifyContent:"start",mx:"auto"},z(q,{data:t,currentSection:p,articles:m,setSectionId:o,activeButton:d,setActiveButton:u})))}},udHH:function(e,t,n){"use strict";n.d(t,"k",(function(){return d})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return p})),n.d(t,"g",(function(){return m})),n.d(t,"h",(function(){return f})),n.d(t,"e",(function(){return g})),n.d(t,"b",(function(){return v})),n.d(t,"d",(function(){return b})),n.d(t,"f",(function(){return x})),n.d(t,"c",(function(){return h})),n.d(t,"a",(function(){return y}));var i=n("yLiY"),a=n.n(i),r=n("q1tI"),l=n.n(r),s=n("5s55"),o=l.a.createElement,c=a()().publicRuntimeConfig,d={heading:"Bienvenue sur le portail de la Protection Juridique des Majeurs",sections:[{image:"".concat(c.appUrl,"/bg-pro-a.png"),splitTitle:{firstLine:"Je suis",secondLine:"un mandataire individuel"},title:"Je suis un mandataire individuel",url:"/professionnel/je-suis-un-mandataire-individuel"},{image:"".concat(c.appUrl,"/bg-pro-c.png"),splitTitle:{firstLine:"Je suis",secondLine:"un service mandataire"},title:"Je suis un service mandataire",url:"/professionnel/je-suis-un-service-mandataire"},{image:"".concat(c.appUrl,"/bg-pro-b.png"),splitTitle:{firstLine:"Je suis",secondLine:"un pr\xe9pos\xe9 d'\xe9tablissement"},title:"Je suis un pr\xe9pos\xe9 d'\xe9tablissement",url:"/professionnel/je-suis-un-prepose-d-etablissement"}]},u={heading:"Je suis un mandataire individuel",sections:[{image:"".concat(c.appUrl,"/bg-a.png"),title:"Les missions et les activit\xe9s du mandataire",url:"/professionnel/je-suis-un-mandataire-individuel/les-missions-et-les-activites-du-mandataire"},{image:"".concat(c.appUrl,"/bg-a.png"),title:"Les t\xe2ches du mandataire individuel",url:"/professionnel/je-suis-un-mandataire-individuel/les-taches-du-mandataire-individuel"},{image:"".concat(c.appUrl,"/bg-a.png"),title:"Les droits du prot\xe9g\xe9",url:"/professionnel/je-suis-un-mandataire-individuel/les-droits-du-protege"},{image:"".concat(c.appUrl,"/bg-a.png"),title:"Les obligations administratives du mandataire",url:"/professionnel/je-suis-un-mandataire-individuel/les-obligations-administratives-du-mandataire"},{image:"".concat(c.appUrl,"/bg-a.png"),title:"La d\xe9claration d'activit\xe9",url:"/professionnel/je-suis-un-mandataire-individuel/la-declaration-d-activite"},{image:"".concat(c.appUrl,"/bg-a.png"),title:"Le financement des mandataires individuels",url:"/professionnel/je-suis-un-mandataire-individuel/le-financement-des-mandataires-individuels"},{image:"".concat(c.appUrl,"/bg-a.png"),title:"Les sanctions en cas de non-respect des engagements",url:"/professionnel/je-suis-un-mandataire-individuel/les-sanctions-en-cas-de-non-respect-des-engagements"},{image:"".concat(c.appUrl,"/bg-a.png"),title:"La demande de nouvel agr\xe9ment",url:"/professionnel/je-suis-un-mandataire-individuel/demande-de-nouvel-agrement"},{image:"".concat(c.appUrl,"/bg-a.png"),title:"Cessation d'activit\xe9",url:"/professionnel/je-suis-un-mandataire-individuel/cessation-d-activite"}]},p={heading:"Les missions et les activit\xe9s du mandataire",mainSection:{content:o(s.P,null),title:"Les missions et les activit\xe9s du mandataire"},sections:[{_id:0,content:o(s.L,null),title:"Dans le cas d'une curatelle"},{_id:1,content:o(s.O,null),title:"Dans le cas d'une tutelle"},{_id:2,content:o(s.N,null),title:"Dans le cas de la sauvegarde de justice"},{_id:3,content:o(s.M,null),title:"Dans le cas d'une mesure d'accompagnement judiciaire"}]},m={heading:"Les t\xe2ches du mandataire individuel",sections:[{_id:0,content:o(s.Sb,null),title:"Les t\xe2ches du mandataire individuel"}]},f={heading:"Les droits du prot\xe9g\xe9",sections:[{_id:0,content:o(s.r,null),subSection:{articleContent:[{_id:0,content:o(s.s,null),title:"Article 1er : Respect des libert\xe9s individuelles et des droits civiques"},{_id:1,content:o(s.x,null),title:"Article 2 : Non-discrimination"},{_id:2,content:o(s.y,null),title:"Article 3 : Respect de la dignit\xe9 de la personne et de son int\xe9grit\xe9"},{_id:3,content:o(s.z,null),title:"Article 4 : Libert\xe9 des relations personnelles"},{_id:4,content:o(s.A,null),title:"Article 5 : Droit au respect des liens familiaux"},{_id:5,content:o(s.B,null),title:"Article 6 : Droit \xe0 l\u2019information"},{_id:6,content:o(s.C,null),title:"Article 7 : Droit \xe0 l\u2019autonomie "},{_id:7,content:o(s.D,null),title:"Article 8 : Droit \xe0 la protection du logement et des objets personnels"},{_id:8,content:o(s.E,null),title:"Article 9 : Consentement \xe9clair\xe9 et participation de la personne"},{_id:9,content:o(s.t,null),title:"Article 10 : Droit \xe0 une intervention personnalis\xe9e"},{_id:10,content:o(s.u,null),title:"Article 11 : Droit \xe0 l\u2019acc\xe8s aux soins"},{_id:11,content:o(s.v,null),title:"Article 12 : Protection des biens dans l\u2019int\xe9r\xeat exclusif de la personne"},{_id:12,content:o(s.w,null),title:"Article 13 : Confidentialit\xe9 des informations"}]},title:"Les droits du prot\xe9g\xe9"}]},g={heading:"Les obligations administratives du mandataire",mainSection:{content:o(s.Q,null),title:"Les obligations administratives du mandataire"},sections:[{_id:0,content:o(s.S,null),title:"Envoi des pi\xe8ces apr\xe8s notification de l'agr\xe9ment"},{_id:1,content:o(s.T,null),title:"Mise en place des moyens mentionn\xe9s dans le dossier"},{_id:2,content:o(s.U,null),title:"Prestation de serment"},{_id:3,content:o(s.R,null),title:"Contr\xf4les"}]},v={heading:"La d\xe9claration d'activit\xe9",sections:[{_id:0,content:o(s.c,null),title:"La d\xe9claration semestrielle"},{_id:1,content:o(s.d,null),title:"Le site e-MJPM"},{_id:2,content:o(s.b,null),title:"L'enqu\xeate annuelle"}]},b={heading:"Le financement des mandataires individuels",sections:[{_id:0,content:o(s.K,null),title:"Le syst\xe8me de financement des mesures"},{_id:1,content:o(s.J,null),title:"L'outil de calcul des mandataires individuels"},{_id:2,content:o(s.F,null),title:"L\u2019application de l\u2019article R 472-8"},{_id:3,content:o(s.I,null),title:"Les modalit\xe9s de calcul de co\xfbt des mesures"},{_id:4,content:o(s.G,null),title:"Les diff\xe9rents co\xfbts au regard des indicateurs"},{_id:5,content:o(s.H,null),title:"Indemnit\xe9 compl\xe9mentaire"}]},x={heading:"Les sanctions en cas de non-respect des engagements",mainSection:{content:o(s.ub,null),title:"Les sanctions en cas de non-respect des engagements"}},h={heading:"La demande de nouvel agr\xe9ment",mainSection:{content:o(s.e,null),title:"La demande de nouvel agr\xe9ment"}},y={heading:"Cessation d'activit\xe9",mainSection:{content:o(s.a,null),title:"Cessation d'activit\xe9"}}}},[["bJge",0,2,1,3,4]]]);