(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"O+dy":function(e,t,n){"use strict";var r=n("ZcoB"),i=n("q1tI"),o=n.n(i),a=n("VdAu"),s=n("rePB"),c=n("yLiY"),u=n.n(c),l=n("YFqc"),f=n.n(l),p=o.a.createElement;function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=u()().publicRuntimeConfig.appUrl,g=function(e){var t=e.text,n=e.href,r=e.sx;return p(f.a,{href:n,as:"".concat(v).concat(n),passHref:!0},p(a.Link,{sx:h({bg:"primary",borderRadius:4,color:"white",display:"inline-block",mb:4,mr:6,px:6,py:4},r)},t))},m=o.a.createElement;t.a=function(e){var t=e.url,n=e.title,i=e.splitTitle,o=e.image;return m(r.Card,{sx:function(){return function(e){return{position:"relative",height:[150,300],display:"flex",alignItems:"center",justifyContent:"center",px:4,py:6,mb:4,mx:4,borderRadius:3,color:"white",backgroundColor:"black",":before":{content:'""',opacity:"0.4",position:"absolute",width:"100%",height:"100%",top:0,left:0,backgroundImage:"url(".concat(e,")"),backgroundSize:"cover"}}}(o)}},m(a.Box,{textAlign:"center",sx:{position:"relative"}},m(r.Heading4,{fontWeight:"normal",color:"white",mb:4},i?m("div",null,i.firstLine,m("br",null),i.secondLine):m("div",null,n)),m(g,{href:t,text:"En savoir plus",sx:{px:4,py:1,mx:"auto"}})))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cN7F:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/professionnel/je-suis-un-service-de-mandataire",function(){return n("g5nI")}])},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),i=n("W8MJ"),o=n("7W2i"),a=n("a1gu"),s=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var i=s(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return a(this,n)}}var u=n("TqRt"),l=n("284h");t.__esModule=!0,t.default=void 0;var f,p=l(n("q1tI")),d=n("QmWs"),h=n("g/15"),v=u(n("nOHt")),g=n("elyg");function m(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var b=new Map,y=window.IntersectionObserver,w={};function O(){return f||(y?f=new y((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var x=function(e){o(n,e);var t=c(n);function n(e){var i;return r(this,n),(i=t.call(this,e)).p=void 0,i.cleanUpListeners=function(){},i.formatUrls=function(e){var t=null,n=null,r=null;return function(i,o){if(r&&i===t&&o===n)return r;var a=e(i,o);return t=i,n=o,r=a,a}}((function(e,t){return{href:(0,g.addBasePath)(m(e)),as:t?(0,g.addBasePath)(m(t)):t}})),i.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=i.formatUrls(i.props.href,i.props.as),a=o.href,s=o.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var c=window.location.pathname;a=(0,d.resolve)(c,a),s=s?(0,d.resolve)(c,s):a,e.preventDefault();var u=i.props.scroll;null==u&&(u=s.indexOf("#")<0),v.default[i.props.replace?"replace":"push"](a,s,{shallow:i.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},i.p=!1!==e.prefetch,i}return i(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,i=(0,d.resolve)(e,n);return[i,r?(0,d.resolve)(e,r):i]}},{key:"handleRef",value:function(e){var t=this;this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=O();return n?(n.observe(e),b.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}b.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),w[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,i=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var o=p.Children.only(t),a={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(a.href=i||r),p.default.cloneElement(o,a)}}]),n}(p.Component);t.default=x},g5nI:function(e,t,n){"use strict";n.r(t);var r=n("yLiY"),i=n.n(r),o=n("q1tI"),a=n.n(o),s=n("VdAu"),c=n("O+dy"),u=a.a.createElement,l=i()().publicRuntimeConfig;t.default=function(){return u(s.Flex,{bg:"whiteGray"},u(s.Box,{width:"100%",maxWidth:1200,mx:"auto",textAlign:"center"},u(s.Heading,{fontWeight:"normal",fontSize:4,my:6,mx:4,textAlign:"center"},"Bienvenue sur le portail de la Protection Juridique des Majeurs"),u(c.a,{url:"/professionnel/je-suis-un-service-de-mandataire/les-obligations-a-l-issue-de-la-notification",title:"Les obligations \xe0 l'issue de la notification",image:"".concat(l.appUrl,"/bg-a.png")}),u(c.a,{url:"/professionnel/je-suis-un-service-de-mandataire/les-obligations-en-tant-que-service-de-mandataire",title:"Les obligations en tant que service de mandataire",image:"".concat(l.appUrl,"/bg-a.png")}),u(c.a,{url:"/professionnel/je-suis-un-service-de-mandataire/le-financement-des-services-de-mandataires",title:"Le financement des services de mandataires",image:"".concat(l.appUrl,"/bg-a.png")})))}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}},[["cN7F",0,1,2,3,4]]]);