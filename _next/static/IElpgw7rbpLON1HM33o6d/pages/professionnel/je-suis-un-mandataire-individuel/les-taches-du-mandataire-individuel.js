(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"3N3c":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/professionnel/je-suis-un-mandataire-individuel/les-taches-du-mandataire-individuel",function(){return n("9ryI")}])},"9ryI":function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),a=n.n(i),r=n("Q/Mu"),l=n("mudf"),s=n("udHH"),o=a.a.createElement;t.default=function(){return o(a.a.Fragment,null,o(r.a,{navItems:s.i.sections}),o(l.a,{data:s.g}))}},mudf:function(e,t,n){"use strict";var i=n("q1tI"),a=n.n(i),r=n("VdAu"),l=n("7ljp"),s=a.a.createElement,o=function(e){var t=e.children;return s(r.Box,{sx:{fontFamily:"Comfortaa",textAlign:"center",fontWeight:"bold",fontSize:"18px",mb:"24px",color:"text"}},t)},c=function(e){var t=e.children;return s(r.Box,{sx:{mb:"50px"}},t)},d=function(e){var t=e.children;return s(r.Box,{sx:{marginBottom:"10px"}},"\u2022 ",t)},u=function(e){var t=e.children;return s(r.Box,{sx:{lineHeight:"normal",mb:"48px",":last-of-type":{mb:0}}},t)},m={h1:function(e){return s(o,null,e.children)},ul:function(e){return s(c,null,e.children)},li:function(e){return s(d,null,e.children)},p:function(e){return s(u,null,e.children)}},p=n("wx14"),f=n("rePB"),g={"&:active":{opacity:"0.8"},fontSize:1,fontWeight:500,lineHeight:"1.2",outline:"none",position:"relative",p:"10px",mr:"20px",mb:"5px",transition:"150ms ease-in-out opacity",cursor:"pointer","@media screen and (min-width: 1200px)":{":first-of-type":{ml:0},":last-of-type":{mr:0}},"@media screen and (max-width: 1199px)":{my:"5px"}},v=a.a.createElement;function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){var t=e.children,n=e.sx;return v(r.Button,Object(p.a)({sx:b(b({},g),n)},e),v(r.Box,null,t))},_=h;h.defaultProps={variant:null};var L=_,j=a.a.createElement,A={flexFlow:"row wrap",mb:"50px","@media screen and (max-width: 1000px)":{justifyContent:"center"}},y=function(e){var t=e.data,n=e.setSectionId;return j(i.Fragment,null,t.sections&&t.sections.length>1&&j(r.Flex,{sx:A},t.sections.map((function(e){return j(L,{key:e._id,onClick:function(){return n(e._id)}},e.title)}))))},w=a.a.createElement,S=function(e){var t=e.children;return w(r.Box,{sx:{fontFamily:"Quicksand",pt:"15px",pb:"22px",px:"85px","@media screen and (max-width: 1000px)":{px:"10px"}}},t)},O=n("ZcoB"),C=a.a.createElement,B=function(e){var t=e.children,n=e.title;return C(O.Card,{bg:"white",mb:6,borderRadius:3},C(r.Box,{fontWeight:"bold",mt:"5px",textAlign:"center",fontSize:"18px",fontFamily:"Comfortaa"},n),C(r.Box,{color:"textSecondary"},t))},E=a.a.createElement,P=function(e){var t=e.mainContent;return E(B,{title:t.title},E(S,null,t.content))},D=a.a.createElement,F=function(e){var t=e.article,n=e.articlesLength,i=e.activeArticle,a=e.setActiveArticle,l=function(e){return e<0?0:e>=n-1?n-1:e<n?e:void 0};return D(B,{title:t.title},D(S,null,t.content),D(r.Flex,{sx:{justifyContent:"space-between"}},D(r.Box,{sx:0===i&&{visibility:"hidden"}},D(L,{onClick:function(){return a(l(t._id-1))}},"Article pr\xe9c\xe9dent")),D(r.Box,{sx:i===n-1&&{visibility:"hidden"}},D(L,{onClick:function(){return a(l(t._id+1))}},"Article suivant"))))},I=a.a.createElement,U=function(e){var t=e.currentSection,n=e.articles,a=e.activeArticle,l=e.setActiveArticle;return I(r.Box,{sx:{my:"auto"}},I(B,{title:t.title},I(S,null,t.content)),n&&n.map((function(e){return I(i.Fragment,{key:e._id},a===e._id&&I(F,{article:e,articlesLength:n.length,activeArticle:a,setActiveArticle:l}))})))},k=a.a.createElement,H=function(e){var t=e.data,n=e.activeArticle,a=e.currentSection,s=e.articles,o=e.setActiveArticle,c=e.setSectionId;return k(l.a,{components:m},k(r.Box,{mx:"20px"},k(r.Heading,{mb:"50px",mt:"28px",fontSize:"18px",fontFamily:"Comfortaa"},t.heading),t&&t.mainSection&&k(P,{mainContent:t.mainSection}),t&&t.sections&&k(i.Fragment,null,k(y,{data:t,setSectionId:c}),k(U,{currentSection:a,articles:s,activeArticle:n,setActiveArticle:o}))))},J=a.a.createElement;t.a=function(e){var t=e.data,n=Object(i.useState)(0),a=n[0],l=n[1],s=Object(i.useState)(0),o=s[0],c=s[1],d=function(e,t){return t&&t.find((function(t){return t._id===e}))}(a,t.sections),u=d&&d.subSection&&d.subSection.articleContent;return J(r.Flex,{bg:"whiteGray"},J(r.Box,{width:"100%",maxWidth:1200,mx:"auto",minHeight:"68.5vh"},J(H,{data:t,activeArticle:o,currentSection:d,articles:u,setActiveArticle:c,setSectionId:l})))}},udHH:function(e,t,n){"use strict";n.d(t,"k",(function(){return u})),n.d(t,"i",(function(){return m})),n.d(t,"j",(function(){return p})),n.d(t,"g",(function(){return f})),n.d(t,"h",(function(){return g})),n.d(t,"e",(function(){return v})),n.d(t,"b",(function(){return x})),n.d(t,"d",(function(){return b})),n.d(t,"f",(function(){return h})),n.d(t,"c",(function(){return _})),n.d(t,"a",(function(){return L}));var i=n("yLiY"),a=n.n(i),r=n("q1tI"),l=n.n(r),s=n("5s55"),o=l.a.createElement,c=a()().publicRuntimeConfig,d="Bienvenue sur le portail de la Protection Juridique des Majeurs",u={heading:d,sections:[{image:"".concat(c.appUrl,"/bg-pro-a.png"),splitTitle:{firstLine:"je suis",secondLine:"un mandataire individuel"},title:"Je suis un mandataire individuel",url:"/professionnel/je-suis-un-mandataire-individuel"},{image:"".concat(c.appUrl,"/bg-pro-c.png"),splitTitle:{firstLine:"je suis",secondLine:"un service mandataire"},title:"Je suis un service mandataire",url:"/professionnel/je-suis-un-service-mandataire"},{image:"".concat(c.appUrl,"/bg-pro-b.png"),splitTitle:{firstLine:"je suis",secondLine:"un pr\xe9pos\xe9 d'\xe9tablissement"},title:"Je suis un pr\xe9pos\xe9 d'\xe9tablissement",url:"/professionnel/je-suis-un-prepose-d-etablissement"}]},m={heading:d,sections:[{image:"".concat(c.appUrl,"/bg-a.png"),title:"Les missions et les activit\xe9s du mandataire",url:"/professionnel/je-suis-un-mandataire-individuel/les-missions-et-les-activites-du-mandataire"},{image:"".concat(c.appUrl,"/bg-a.png"),title:"Les t\xe2ches du mandataire individuel",url:"/professionnel/je-suis-un-mandataire-individuel/les-taches-du-mandataire-individuel"},{image:"".concat(c.appUrl,"/bg-a.png"),title:"Les droits du prot\xe9g\xe9",url:"/professionnel/je-suis-un-mandataire-individuel/les-droits-du-protege"},{image:"".concat(c.appUrl,"/bg-a.png"),title:"Les obligations administratives du mandataire",url:"/professionnel/je-suis-un-mandataire-individuel/les-obligations-administratives-du-mandataire"},{image:"".concat(c.appUrl,"/bg-a.png"),title:"La d\xe9claration d'activit\xe9",url:"/professionnel/je-suis-un-mandataire-individuel/la-declaration-d-activite"},{image:"".concat(c.appUrl,"/bg-a.png"),title:"Le financement des mandataires individuels",url:"/professionnel/je-suis-un-mandataire-individuel/le-financement-des-mandataires-individuels"},{image:"".concat(c.appUrl,"/bg-a.png"),title:"Les sanctions en cas de non-respect des engagements",url:"/professionnel/je-suis-un-mandataire-individuel/les-sanctions-en-cas-de-non-respect-des-engagements"},{image:"".concat(c.appUrl,"/bg-a.png"),title:"La demande de nouvel agr\xe9ment",url:"/professionnel/je-suis-un-mandataire-individuel/demande-de-nouvel-agrement"},{image:"".concat(c.appUrl,"/bg-a.png"),title:"Cessation d'activit\xe9",url:"/professionnel/je-suis-un-mandataire-individuel/cessation-d-activite"}]},p={heading:"Les missions et les activit\xe9s du mandataire",sections:[{_id:0,content:o(s.L,null),title:"Dans le cas d'une curatelle"},{_id:1,content:o(s.O,null),title:"Dans le cas d'une tutelle"},{_id:2,content:o(s.N,null),title:"Dans le cas de la sauvegarde de justice"},{_id:3,content:o(s.M,null),title:"Dans le cas d'une mesure d'accompagnement judiciaire"}]},f={heading:"Les t\xe2ches du mandataire individuel",sections:[{_id:0,content:o(s.Rb,null),title:"Les t\xe2ches du mandataire individuel"}]},g={heading:"Les droits du prot\xe9g\xe9",sections:[{_id:0,content:o(s.r,null),subSection:{articleContent:[{_id:0,content:o(s.s,null),title:"Article 1er : Respect des libert\xe9s individuelles et des droits civiques"},{_id:1,content:o(s.x,null),title:"Article 2 : Non-discrimination"},{_id:2,content:o(s.y,null),title:"Article 3 : Respect de la dignit\xe9 de la personne et de son int\xe9grit\xe9"},{_id:3,content:o(s.z,null),title:"Article 4 : Libert\xe9 des relations personnelles"},{_id:4,content:o(s.A,null),title:"Article 5 : Droit au respect des liens familiaux"},{_id:5,content:o(s.B,null),title:"Article 6 : Droit \xe0 l\u2019information"},{_id:6,content:o(s.C,null),title:"Article 7 : Droit \xe0 l\u2019autonomie "},{_id:7,content:o(s.D,null),title:"Article 8 : Droit \xe0 la protection du logement et des objets personnels"},{_id:8,content:o(s.E,null),title:"Article 9 : Consentement \xe9clair\xe9 et participation de la personne"},{_id:9,content:o(s.t,null),title:"Article 10 : Droit \xe0 une intervention personnalis\xe9e"},{_id:10,content:o(s.u,null),title:"Article 11 : Droit \xe0 l\u2019acc\xe8s aux soins"},{_id:11,content:o(s.v,null),title:"Article 12 : Protection des biens dans l\u2019int\xe9r\xeat exclusif de la personne"},{_id:12,content:o(s.w,null),title:"Article 13 : Confidentialit\xe9 des informations"}]},title:"Les droits du prot\xe9g\xe9"}]},v={heading:"Les obligations administratives du mandataire",mainSection:{content:o(s.P,null),title:"Les obligations administratives du mandataire"},sections:[{_id:0,content:o(s.R,null),title:"Envoi des pi\xe8ces apr\xe8s notification de l'agr\xe9ment"},{_id:1,content:o(s.S,null),title:"Mise en place des moyens mentionn\xe9s dans le dossier"},{_id:2,content:o(s.T,null),title:"Prestation de serment"},{_id:3,content:o(s.Q,null),title:"Contr\xf4les"}]},x={heading:"La d\xe9claration d'activit\xe9",sections:[{_id:0,content:o(s.c,null),title:"La d\xe9claration semestrielle"},{_id:1,content:o(s.d,null),title:"Le site e-MJPM"},{_id:2,content:o(s.b,null),title:"L'enqu\xeate annuelle"}]},b={heading:"Le financement des mandataires individuels",sections:[{_id:0,content:o(s.K,null),title:"Le syst\xe8me de financement des mesures"},{_id:1,content:o(s.J,null),title:"L'outil de calcul des mandataires individuels"},{_id:2,content:o(s.F,null),title:"L\u2019application de l\u2019article R 472-8"},{_id:3,content:o(s.I,null),title:"Les modalit\xe9s de calcul de co\xfbt des mesures"},{_id:4,content:o(s.G,null),title:"Les diff\xe9rents co\xfbts au regard des indicateurs"},{_id:5,content:o(s.H,null),title:"Indemnit\xe9 compl\xe9mentaire"}]},h={heading:"Les sanctions en cas de non-respect des engagements",mainSection:{content:o(s.tb,null),title:"Les sanctions en cas de non-respect des engagements"}},_={heading:"La demande de nouvel agr\xe9ment",mainSection:{content:o(s.e,null),title:"La demande de nouvel agr\xe9ment"}},L={heading:"Cessation d'activit\xe9",mainSection:{content:o(s.a,null),title:"Cessation d'activit\xe9"}}}},[["3N3c",0,2,1,3,4]]]);