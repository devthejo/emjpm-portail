(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"4xjx":function(t,e,n){"use strict";n.r(e);var i=n("q1tI"),r=n.n(i),c=n("VdAu"),a=n("wx14"),o=n("rePB"),u={"&:active":{opacity:"0.8"},fontSize:1,fontWeight:500,lineHeight:"1.2",mx:"auto",outline:"none",position:"relative",px:3,py:2,transition:"150ms ease-in-out opacity"},l=r.a.createElement;function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f=function(t){var e=t.children,n=t.sx;return l(c.Button,Object(a.a)({sx:d(d({},u),n)},t),l(c.Box,null,e))},p=f;f.defaultProps={variant:null};var v=p,b=r.a.createElement,x=function(t){var e=t.data,n=t.setSectionId;return b(c.Flex,{sx:{mb:"50px"}},e.sections.map((function(t){return b(v,{key:t._id,onClick:function(){return n(t._id)}},t.title)})))},m=n("b4a8"),g=r.a.createElement,h=function(t){var e=t.article,n=t.articlesLength,i=t.activeArticle,r=t.setActiveArticle,a=function(t){return t<0?0:t>=n-1?n-1:t<n?t:void 0};return g(m.a,{title:e.title},g(c.Box,null,e.content),g(c.Flex,{sx:{justifyContent:"space-between"}},g(c.Box,{sx:0===i&&{visibility:"hidden"}},g(v,{onClick:function(){return r(a(e._id-1))}},"Article pr\xe9c\xe9dent")),g(c.Box,{sx:i===n-1&&{visibility:"hidden"}},g(v,{onClick:function(){return r(a(e._id+1))}},"Article suivant"))))},y=r.a.createElement,A=function(t){var e=t.currentSection,n=t.articles,r=t.activeArticle,a=t.setActiveArticle;return y(c.Box,{sx:{my:"auto"}},y(m.a,{title:e.title},e.content),n&&n.map((function(t){return y(i.Fragment,{key:t._id},r===t._id&&y(h,{article:t,articlesLength:n.length,activeArticle:r,setActiveArticle:a}))})))},w=r.a.createElement,O=function(t){var e=t.data,n=t.activeArticle,r=t.currentSection,a=t.articles,o=t.setActiveArticle,u=t.setSectionId;return w(i.Fragment,null,w(c.Heading,{fontWeight:"normal",mb:"50px",mt:"28px",fontSize:4},e.heading),e&&e.sections&&w(i.Fragment,null,w(x,{data:e,setSectionId:u}),w(A,{currentSection:r,articles:a,activeArticle:n,setActiveArticle:o})))},j=r.a.createElement,S=function(t){var e=t.data,n=Object(i.useState)(0),r=n[0],a=n[1],o=Object(i.useState)(0),u=o[0],l=o[1],s=function(t,e){return e.find((function(e){return e._id===t}))}(r,e.sections),d=s.subSection&&s.subSection.articleContent;return j(c.Flex,{bg:"whiteGray"},j(c.Box,{width:"100%",maxWidth:1200,mx:"auto"},j(O,{data:e,activeArticle:u,currentSection:s,articles:d,setActiveArticle:l,setSectionId:a})))},_=n("udHH"),E=r.a.createElement;e.default=function(){return E(S,{data:_.b})}},b4a8:function(t,e,n){"use strict";var i=n("ZcoB"),r=n("q1tI"),c=n.n(r),a=n("VdAu"),o=c.a.createElement;e.a=function(t){var e=t.children,n=t.title;return o(i.Card,{bg:"white",py:4,px:6,mb:6,borderRadius:3,fontSize:1},o(i.Heading4,{fontWeight:"normal",mb:4,textAlign:"center"},n),o(a.Box,{maxWidth:1e3,mx:"auto"},o(a.Box,{fontWeight:"normal",color:"textSecondary"},e)))}},poM3:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/professionnel/je-suis-un-mandataire-individuel/les-missions-et-les-activites-du-mandataire",function(){return n("4xjx")}])}},[["poM3",0,1,2,4,5]]]);