(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{YFqc:function(e,t,n){e.exports=n("cTJO")},b4a8:function(e,t,n){"use strict";var r=n("ZcoB"),i=n("q1tI"),o=n.n(i),s=n("VdAu"),a=o.a.createElement;t.a=function(e){var t=e.children,n=e.title;return a(r.Card,{bg:"white",py:4,px:6,mb:6,borderRadius:3,fontSize:1},a(r.Heading4,{fontWeight:"normal",mb:4,textAlign:"center"},n),a(s.Box,{maxWidth:1e3,mx:"auto"},a(s.Box,{fontWeight:"normal",color:"textSecondary"},t)))}},bFM8:function(e,t,n){"use strict";var r=n("yLiY"),i=n.n(r),o=n("YFqc"),s=n.n(o),a=n("q1tI"),u=n.n(a),l=n("VdAu"),c=u.a.createElement,f=i()().publicRuntimeConfig.appUrl,p={color:"textSecondary",cursor:"pointer",textDecoration:"none","&:hover":{color:"primary"}},d=function(e){var t=e.index,n=e.parentTitle,r=e.parentUrl,i=e.title;return c(l.Flex,{alignItems:"center",my:4,fontSize:1,color:"textSecondary"},c(s.a,{href:t,as:"".concat(f).concat(t),passHref:!0},c(l.Link,{sx:p},"Accueil")),c(l.Box,{mx:1},">"),c(s.a,{href:r,as:"".concat(f).concat(r),passHref:!0},c(l.Link,{sx:p},n)),c(l.Box,{mx:1},">"),c(l.Box,{color:"primary"},i))};d.defaultProps={index:"/"},t.a=d},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),i=n("W8MJ"),o=n("7W2i"),s=n("a1gu"),a=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var i=a(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return s(this,n)}}var l=n("TqRt"),c=n("284h");t.__esModule=!0,t.default=void 0;var f,p=c(n("q1tI")),d=n("QmWs"),h=n("g/15"),m=l(n("nOHt")),v=n("elyg");function g(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var y=new Map,b=window.IntersectionObserver,x={};function w(){return f||(b?f=new b((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var k=function(e){o(n,e);var t=u(n);function n(e){var i;return r(this,n),(i=t.call(this,e)).p=void 0,i.cleanUpListeners=function(){},i.formatUrls=function(e){var t=null,n=null,r=null;return function(i,o){if(r&&i===t&&o===n)return r;var s=e(i,o);return t=i,n=o,r=s,s}}((function(e,t){return{href:(0,v.addBasePath)(g(e)),as:t?(0,v.addBasePath)(g(t)):t}})),i.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=i.formatUrls(i.props.href,i.props.as),s=o.href,a=o.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var u=window.location.pathname;s=(0,d.resolve)(u,s),a=a?(0,d.resolve)(u,a):s,e.preventDefault();var l=i.props.scroll;null==l&&(l=a.indexOf("#")<0),m.default[i.props.replace?"replace":"push"](s,a,{shallow:i.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},i.p=!1!==e.prefetch,i}return i(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,i=(0,d.resolve)(e,n);return[i,r?(0,d.resolve)(e,r):i]}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),x[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();m.default.prefetch(t[0],t[1],e).catch((function(e){0})),x[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,i=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var o=p.Children.only(t),s={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(s.href=i||r),p.default.cloneElement(o,s)}}]),n}(p.Component);t.default=k},edlK:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),o=n("VdAu"),s=n("bFM8"),a=n("b4a8"),u=i.a.createElement;t.default=function(){return u(o.Flex,{bg:"whiteGray"},u(o.Box,{width:"100%",maxWidth:1200,mx:"auto"},u(s.a,{index:"/professionnel",parentTitle:"Je suis un pr\xe9pos\xe9 d'\xe9tablissement",parentUrl:"/professionnel/je-suis-un-prepose-d-etablissement",title:"La d\xe9claration des pr\xe9pos\xe9s d'\xe9tablissement"}),u(o.Heading,{fontWeight:"normal",mb:6,fontSize:4},"La d\xe9claration des pr\xe9pos\xe9s d'\xe9tablissement"),u(a.a,{title:"L'\xe9volition de l'activit\xe9 des mandataires individuels de l'\xe9tablissement"},"In interdum sodales nisl id commodo. Nulla pretium ipsum et turpis efficitur, ut rutrum dolor rutrum. Morbi ultrices dignissim purus, in tincidunt enim facilisis nec. Vivamus et nunc hendrerit, egestas felis a, fringilla mauris. Mauris ac odio lectus. Maecenas sit amet augue varius, facilisis erat sit amet, convallis tellus. Proin vel tristique nisl."),u(a.a,{title:"Les obligations administratives du d\xe9l\xe9gu\xe9 de service"},"In interdum sodales nisl id commodo. Nulla pretium ipsum et turpis efficitur, ut rutrum dolor rutrum. Morbi ultrices dignissim purus, in tincidunt enim facilisis nec. Vivamus et nunc hendrerit, egestas felis a, fringilla mauris. Mauris ac odio lectus. Maecenas sit amet augue varius, facilisis erat sit amet, convallis tellus. Proin vel tristique nisl.")))}},velQ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/professionnel/je-suis-un-prepose-d-etablissement/la-declaration-des-preposes-d-etablissement",function(){return n("edlK")}])}},[["velQ",0,1,2,3,4]]]);