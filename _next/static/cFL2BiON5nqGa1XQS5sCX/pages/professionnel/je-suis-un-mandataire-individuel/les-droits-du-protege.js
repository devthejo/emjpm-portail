(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{b4a8:function(t,e,n){"use strict";var i=n("ZcoB"),r=n("q1tI"),c=n.n(r),a=n("VdAu"),o=c.a.createElement;e.a=function(t){var e=t.children,n=t.title;return o(i.Card,{bg:"white",py:4,px:6,mb:6,borderRadius:3,fontSize:1},o(i.Heading4,{fontWeight:"normal",mb:4,textAlign:"center"},n),o(a.Box,{maxWidth:1e3,mx:"auto"},o(a.Box,{fontWeight:"normal",color:"textSecondary"},e)))}},k37o:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/professionnel/je-suis-un-mandataire-individuel/les-droits-du-protege",function(){return n("xrTt")}])},mudf:function(t,e,n){"use strict";var i=n("q1tI"),r=n.n(i),c=n("VdAu"),a=n("7ljp"),o=r.a.createElement,l=function(t){var e=t.children;return o("div",{style:{color:"blue",fontSize:"30px"}},e)},u=function(t){var e=t.children;return o(c.Box,{sx:{my:"50px",lineHeight:"0.8",fontFamily:"Quicksand"}},e)},s=function(t){var e=t.children;return o("div",{style:{color:"green"}},e)},d=function(t){var e=t.children;return o(c.Box,{sx:{lineHeight:"normal",margin:"50px 0",fontFamily:"Quicksand"}},e)},f={h1:function(t){return o(l,null,t.children)},ul:function(t){return o(u,null,t.children)},li:function(t){return o(s,null,t.children)},p:function(t){return o(d,null,t.children)}},m=n("wx14"),p=n("rePB"),x={"&:active":{opacity:"0.8"},fontSize:1,fontWeight:500,lineHeight:"1.2",outline:"none",position:"relative",p:"10px",mx:"10px",transition:"150ms ease-in-out opacity",cursor:"pointer","@media screen and (min-width: 1200px)":{":first-of-type":{ml:0},":last-of-type":{mr:0}},"@media screen and (max-width: 1199px)":{my:"5px"}},v=r.a.createElement;function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){Object(p.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y=function(t){var e=t.children,n=t.sx;return v(c.Button,Object(m.a)({sx:b(b({},x),n)},t),v(c.Box,null,e))},g=y;y.defaultProps={variant:null};var w=g,A=r.a.createElement,S={flexFlow:"row wrap",mb:"50px","@media screen and (max-width: 1200px)":{justifyContent:"space-around"}},O=function(t){var e=t.data,n=t.setSectionId;return A(i.Fragment,null,e.sections&&e.sections.length>1&&A(c.Flex,{sx:S},e.sections.map((function(t){return A(w,{key:t._id,onClick:function(){return n(t._id)}},t.title)}))))},j=r.a.createElement,E=function(t){var e=t.children;return j(c.Box,{sx:{fontSize:"14px",fontFamily:"Quicksand"}},e)},k=n("b4a8"),B=r.a.createElement,_=function(t){var e=t.mainContent;return B(k.a,{title:e.title},B(E,null,e.content))},F=r.a.createElement,P=function(t){var e=t.article,n=t.articlesLength,i=t.activeArticle,r=t.setActiveArticle,a=function(t){return t<0?0:t>=n-1?n-1:t<n?t:void 0};return F(k.a,{title:e.title},F(E,null,e.content),F(c.Flex,{sx:{justifyContent:"space-between"}},F(c.Box,{sx:0===i&&{visibility:"hidden"}},F(w,{onClick:function(){return r(a(e._id-1))}},"Article pr\xe9c\xe9dent")),F(c.Box,{sx:i===n-1&&{visibility:"hidden"}},F(w,{onClick:function(){return r(a(e._id+1))}},"Article suivant"))))},C=r.a.createElement,H=function(t){var e=t.currentSection,n=t.articles,r=t.activeArticle,a=t.setActiveArticle;return C(c.Box,{sx:{my:"auto"}},C(k.a,{title:e.title},C(E,null,e.content)),n&&n.map((function(t){return C(i.Fragment,{key:t._id},r===t._id&&C(P,{article:t,articlesLength:n.length,activeArticle:r,setActiveArticle:a}))})))},I=r.a.createElement,z=function(t){var e=t.data,n=t.activeArticle,r=t.currentSection,o=t.articles,l=t.setActiveArticle,u=t.setSectionId;return I(a.a,{components:f},I(c.Heading,{mb:"50px",mt:"28px",fontSize:"18px",fontFamily:"Comfortaa"},e.heading),e&&e.mainSection&&I(_,{mainContent:e.mainSection}),e&&e.sections&&I(i.Fragment,null,I(O,{data:e,setSectionId:u}),I(H,{currentSection:r,articles:o,activeArticle:n,setActiveArticle:l})))},W=r.a.createElement;e.a=function(t){var e=t.data,n=Object(i.useState)(0),r=n[0],a=n[1],o=Object(i.useState)(0),l=o[0],u=o[1],s=function(t,e){return e&&e.find((function(e){return e._id===t}))}(r,e.sections),d=s&&s.subSection&&s.subSection.articleContent;return W(c.Flex,{bg:"whiteGray"},W(c.Box,{width:"100%",maxWidth:1200,mx:"auto",minHeight:"68.5vh"},W(z,{data:e,activeArticle:l,currentSection:s,articles:d,setActiveArticle:u,setSectionId:a})))}},xrTt:function(t,e,n){"use strict";n.r(e);var i=n("q1tI"),r=n.n(i),c=n("Q/Mu"),a=n("mudf"),o=n("udHH"),l=r.a.createElement;e.default=function(){return l(r.a.Fragment,null,l(c.a,{navItems:o.i.sections}),l(a.a,{data:o.h}))}}},[["k37o",0,2,1,3,4,5]]]);