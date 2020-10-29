!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(e){return t[e]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="https://rschristian.github.io/preact-github-calendar",e(e.s="mdyV")}({"/hs+":function(t,e,n){"use strict";function r(t,e){y.d.__h&&y.d.__h(g,t,j||e),j=0;var n=g.__H||(g.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function o(t){return j=1,function(t,e,n){var o=r(m++,2);return o.t=t,o.__c||(o.__c=g,o.__=[n?n(e):b(void 0,e),function(t){var e=o.t(o.__[0],t);o.__[0]!==e&&(o.__=[e,o.__[1]],o.__c.setState({}))}]),o.__}(b,t)}function i(t,e){var n=r(m++,3);!y.d.__s&&_(n.__H,e)&&(n.__=t,n.__H=e,g.__H.__h.push(n))}function l(t){return j=5,c((function(){return{current:void 0===t?null:t}}),[])}function c(t,e){var n=r(m++,7);return _(n.__H,e)?(n.__H=e,n.__h=t,n.__=t()):n.__}function u(){O.some((function(t){if(t.__P)try{t.__H.__h.forEach(a),t.__H.__h.forEach(s),t.__H.__h=[]}catch(e){return t.__H.__h=[],y.d.__e(e,t.__v),!0}})),O=[]}function a(t){"function"==typeof t.u&&t.u()}function s(t){t.u=t.__()}function _(t,e){return!t||e.some((function(e,n){return e!==t[n]}))}function b(t,e){return"function"==typeof e?e(t):e}function d(t){var e=l(null),n=o(0),r=n[0],c=n[1];return i((function(){e.current&&c(e.current.getBoundingClientRect().width)}),[e]),Object(y.b)("div",{class:"preact-hint preact-hint__fade-in",style:{bottom:t.rootBoundingRect.height-t.targetBoundingRect.top+t.rootBoundingRect.top+2,left:t.targetBoundingRect.left-t.rootBoundingRect.left-r/2+t.targetBoundingRect.width/2}},Object(y.b)("span",{class:"preact-hint__content",ref:e},t.template?t.template(t.content):t.content))}function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function f(t){var e,n,r,l=p({blockMargin:2,blockSize:12,contributionColorArray:["#ebedf0","#9be9a8","#40c463","#30a14e","#216e39"],labelFontSize:14,showWeekdaysLabels:!1,showTooltip:!0},t.options),c=l.blockMargin,u=l.blockSize,a=l.contributionColorArray,s=l.labelFontSize,_=l.showWeekdaysLabels,b=l.showTooltip,d=o(null),f=d[0],h=d[1],m=o(""),g=m[0],v=m[1];return i((function(){new Promise((function(e,n){var r;h(null),v("");var o=function(){try{return e()}catch(t){return n(t)}},i=function(){try{return v("Unknown Error"),o()}catch(t){return n(t)}};try{return Promise.resolve(fetch("https://githubapi.ryanchristian.dev/user/"+t.username)).then((function(t){try{return Promise.resolve(t.json()).then((function(t){try{return"message"in(r=t)?e(v(r.message)):"total"in r&&"contributions"in r?(h(r),o()):e(v("Invalid response data"))}catch(t){return i()}}),i)}catch(t){return i()}}),i)}catch(t){i()}})).then()}),[t.username]),Object(y.b)(y.a,null,null!==f?Object(y.b)("figure",{class:"github-calendar"},Object(y.b)("div",{class:"github-calendar__graph"},Object(y.b)(A,{template:function(t){var e=t.split(","),n=e[1].split("-"),r=H[Number(n[1])-1]+" "+ +n[2]+", "+n[0];return Object(y.b)(y.a,null,Object(y.b)("strong",null,e[0]," Contributions")," on ",r)}},Object(y.b)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",viewBox:"0 0 "+(53*(u+c)-c+(_?2.4*(u+c):0))+" "+(7*(u+c)-c+1.5*s)},_&&["Mon","Wed","Fri"].map((function(t,e){return Object(y.b)("text",{key:t,class:"github-calendar__graph-label",style:{fontSize:s},x:0,y:1.5*s+(u+c)*(2*(e+1)-1)+(u-1)},t)})),function(){for(var t=[],e=0;e<f.contributions.length-1;e++)t.push(f.contributions[e][0]);var n=0,r=t.map((function(t,e){var r=t.date.split("-"),o=Number(r[1])-1;if(o!==n)return n=o,Object(y.b)("text",{key:H[o]+"-"+r[0],class:"github-calendar__graph-label",style:{fontSize:s},x:(_?2.4*(u+c):0)+(u+c)*e,y:s},H[o])})).filter((function(t){return void 0!==t}));return void 0!==r[1]&&r[1].props.x-r[0].props.x<=2*(u+c)&&r.shift(),r}(),f.contributions.map((function(t){return t.map((function(t,e){return Object(y.b)("rect",{key:t.date,x:"0",y:1.5*s+(u+c)*e,width:u,height:u,fill:a[t.intensity],"data-preact-hint":b?[t.count,t.date]:null})}))})).map((function(t,e){return Object(y.b)("g",{key:e,transform:"translate("+((_?2.4*(u+c):0)+(u+c)*e)+", 0)"},t)})))),Object(y.b)("div",{class:"github-calendar__graph-footer"},Object(y.b)("div",{style:{float:"left"}},"Sum of pull requests, issues opened, and commits made by"," ",Object(y.b)("a",{href:"https://github.com/"+t.username,target:"blank"},"@",t.username)),Object(y.b)("div",{style:{float:"right"}},"Less",Object(y.b)("ul",{class:"github-calendar__graph-legend"},a.map((function(t){return Object(y.b)("li",{key:t,class:"github-calendar__graph-legend-item",style:{width:u-2,height:u-2,backgroundColor:t}})}))),"More"))),Object(y.b)("div",{class:"github-calendar__footer"},Object(y.b)("span",null,"Contributions in the last year"),Object(y.b)("span",{class:"github-calendar__footer-contribution-count"},f.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")," Total"),Object(y.b)("span",null,(e=f.contributions.length-1,n=f.contributions[0][0].date.split("-"),r=f.contributions[e][f.contributions[e].length-1].date.split("-"),H[Number(n[1])-1]+" "+ +n[2]+", "+n[0]+" - "+H[Number(r[1])-1]+" "+ +r[2]+", "+r[0])))):g?Object(y.b)("div",{class:"github-calendar__error"},g):Object(y.b)("noscript",null,"This component requires JS in order to function properly."))}function h(){var t=o("rschristian"),e=t[0],n=t[1],r=function(t,e){function n(){o.current&&clearTimeout(o.current)}var r=l(),o=l();return i((function(){return n}),[]),function(){for(var i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];r.current=l,n(),o.current=setTimeout((function(){r.current&&t.apply(void 0,r.current)}),e)}}((function(t){return n(t)}),650);return i((function(){return""===e&&n("rschristian")}),[e]),Object(y.b)("div",{id:"app"},Object(y.b)("section",{class:"hero"},Object(y.b)("div",{class:"hero-body"},Object(y.b)("div",{class:"container has-text-centered"},Object(y.b)("h2",{class:"is-size-2 has-text-weight-bold"},"preact-github-calendar"),Object(y.b)("h6",{class:"is-size-6"},"Lightweight and extensible component to display the contribution calendar for a GitHub user"),Object(y.b)("a",{class:"button",href:"https://github.com/rschristian/preact-github-calendar"},"Check it out on GitHub")))),Object(y.b)("div",{class:"section main-content"},Object(y.b)("div",{class:"container"},Object(y.b)("h3",{class:"is-size-3"},"Preact GitHub Calendar"),Object(y.b)("div",{class:"shields mt-1"},Object(y.b)("a",{href:"https://github.com/rschristian/preact-github-calendar/blob/master/LICENSE"},Object(y.b)("img",{alt:"NPM",src:"https://img.shields.io/npm/l/preact-github-calendar?color=brightgreen"})),Object(y.b)("a",{href:"https://bundlephobia.com/result?p=preact-github-calendar"},Object(y.b)("img",{alt:"npm bundle size",src:"https://img.shields.io/bundlephobia/minzip/preact-github-calendar?color=brightgreen"})),Object(y.b)("a",{href:"https://npmjs.org/package/preact-github-calendar"},Object(y.b)("img",{alt:"TS Support",src:"https://img.shields.io/npm/types/preact-github-calendar?color=brightgreen"}))),Object(y.b)("div",{class:"mt-2 mb-5"},"Preact-GitHub-Calendar is a lightweight and extensible component for"," ",Object(y.b)("a",{href:"https://preactjs.com"},"Preact"),". It was designed to be a more lightweight alternative to the existing React implementations."),Object(y.b)("input",{className:"input is-success",type:"text",placeholder:"Enter a GitHub username",onInput:function(t){return r(t.target.value)}}),Object(y.b)(P,{content:Object(y.b)(y.a,null,Object(y.b)(f,{username:e,options:{showWeekdaysLabels:!0}}))}),Object(y.b)("h4",{class:"is-size-4 mt-5 mb-2"},"Installation"),Object(y.b)("pre",null,Object(y.b)("code",null,"yarn add preact-github-calendar")),Object(y.b)("h4",{class:"is-size-4 mt-5 mb-2"},"General Usage"),Object(y.b)("pre",null,Object(y.b)("code",null,'import GitHubCalendar from "preact-github-calendar";\nimport \'preact-github-calendar/dist/index.css\'\n\nexport default function App() {\n    return <GitHubCalendar username="'+e+'" options={{ ... }} />\n}')),Object(y.b)("hr",{class:"divider"}),Object(y.b)("div",{id:"options"},Object(y.b)("h4",{class:"is-size-4 mt-5 mb-4"},"Options"),Object(y.b)(T,{label:"blockMargin",usage:'<GitHubCalendar username="'+e+'" options={{ blockMargin: 4 }} />',calendar:Object(y.b)(f,{username:e,options:{blockMargin:4}})}),Object(y.b)(T,{label:"blockSize",usage:'<GitHubCalendar username="'+e+'" options={{ blockSize: 14 }} />',calendar:Object(y.b)(f,{username:e,options:{blockSize:14}})}),Object(y.b)(T,{label:"contributionColorArray",usage:'<GitHubCalendar username="'+e+'" options={{ contributionColorArray: ["#ededed", "#9ba1e9", "#4040c4", "#3030a1", "#21216e"] }} />',calendar:Object(y.b)(f,{username:e,options:{contributionColorArray:["#ededed","#9ba1e9","#4040c4","#3030a1","#21216e"]}})}),Object(y.b)(T,{label:"labelFontSize",usage:'<GitHubCalendar username="'+e+'" options={{ labelFontSize: 20 }} />',calendar:Object(y.b)(f,{username:e,options:{labelFontSize:20}})}),Object(y.b)(T,{label:"showTooltip",usage:'<GitHubCalendar username="'+e+'" options={{ showTooltip: false }} />',calendar:Object(y.b)(f,{username:e,options:{showTooltip:!1}})}),Object(y.b)(T,{label:"showWeekdaysLabels",usage:'<GitHubCalendar username="'+e+'" options={{ showWeekdaysLabels: true }} />',calendar:Object(y.b)(f,{username:e,options:{showWeekdaysLabels:!0}})})))),Object(y.b)("footer",{class:"footer"},Object(y.b)("div",{class:"container has-text-centered"},Object(y.b)("span",null,"© 2020 Ryan Christian"))))}n.r(e),n.d(e,"default",(function(){return h}));var m,g,v,y=n("hosL"),j=0,O=[],k=y.d.__r,w=y.d.diffed,S=y.d.__c,x=y.d.unmount;y.d.__r=function(t){k&&k(t),m=0;var e=(g=t.__c).__H;e&&(e.__h.forEach(a),e.__h.forEach(s),e.__h=[])},y.d.diffed=function(t){w&&w(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(1!==O.push(e)&&v===y.d.requestAnimationFrame||((v=y.d.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),C&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);C&&(e=requestAnimationFrame(n))})(u))},y.d.__c=function(t,e){e.some((function(t){try{t.__h.forEach(a),t.__h=t.__h.filter((function(t){return!t.__||s(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],y.d.__e(n,t.__v)}})),S&&S(t,e)},y.d.unmount=function(t){x&&x(t);var e=t.__c;if(e&&e.__H)try{e.__H.__.forEach(a)}catch(t){y.d.__e(t,e.__v)}};var C="function"==typeof requestAnimationFrame,A=(n("2zjJ"),function(t){var e=o(""),n=e[0],r=e[1],i=o(null),l=i[0],u=i[1],a=o(null),s=a[0],_=a[1],b=function(t,e){return j=8,c((function(){return t}),e)}((function(t){u(t),l&&(l.addEventListener("mouseover",(function(t){t.target instanceof Element&&t.target.hasAttribute("data-preact-hint")&&(r(t.target.getAttribute("data-preact-hint")||""),_(t.target.getBoundingClientRect()))})),l.addEventListener("mouseout",(function(t){t.target instanceof Element&&t.target.hasAttribute("data-preact-hint")&&(r(""),_(null))})))}),[l]);return Object(y.b)("div",{ref:b,style:{position:"relative"}},n&&l&&s&&Object(y.b)(d,{content:n,template:t.template,rootBoundingRect:l.getBoundingClientRect(),targetBoundingRect:s}),t.children)}),H=(n("sSCD"),["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]),P=function(t){return Object(y.b)("div",{class:"tile is-child box content-section"},t.content)},T=function(t){return Object(y.b)("div",{class:"mb-6 mx-3"},Object(y.b)("h5",{class:"title is-size-5 has-text-weight-normal mb-4"},"• ",t.label),Object(y.b)("pre",{class:"mt-4"},Object(y.b)("code",null,t.usage)),Object(y.b)(P,{content:Object(y.b)(y.a,null,t.calendar)}))};n("MV5A")},"2zjJ":function(){},MV5A:function(){},hosL:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t){var e=t.parentNode;e&&e.removeChild(t)}function i(t,e,n){var r,o=arguments,i={};for(r in e)"key"!==r&&"ref"!==r&&(i[r]=e[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(i.children=n),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===i[r]&&(i[r]=t.defaultProps[r]);return l(t,i,e&&e.key,e&&e.ref,null)}function l(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(i.__v=i),C.vnode&&C.vnode(i),i}function c(t){return t.children}function u(t,e){this.props=t,this.context=e}function a(t,e){if(null==e)return t.__?a(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?a(t):null}function s(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return s(t)}}function _(t){(!t.__d&&(t.__d=!0)&&A.push(t)&&!b.__r++||P!==C.debounceRendering)&&((P=C.debounceRendering)||H)(b)}function b(){for(var t;b.__r=A.length;)t=A.sort((function(t,e){return t.__v.__b-e.__v.__b})),A=[],t.some((function(t){var e,n,o,i,l,c,u;t.__d&&(c=(l=(e=t).__v).__e,(u=e.__P)&&(n=[],(o=r({},l)).__v=o,i=v(u,l,o,e.__n,void 0!==u.ownerSVGElement,null,n,null==c?a(l):c),y(n,l),i!=c&&s(l)))}))}function d(t,e,n,r,i,u,s,_,b,d){var f,h,m,g,y,j,w,S=r&&r.__k||L,x=S.length;for(b==E&&(b=null!=s?s[0]:x?a(r,0):null),n.__k=[],f=0;f<e.length;f++)if(null!=(g=n.__k[f]=null==(g=e[f])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g?l(null,g,null,null,g):Array.isArray(g)?l(c,{children:g},null,null,null):null!=g.__e||null!=g.__c?l(g.type,g.props,g.key,null,g.__v):g)){if(g.__=n,g.__b=n.__b+1,null===(m=S[f])||m&&g.key==m.key&&g.type===m.type)S[f]=void 0;else for(h=0;h<x;h++){if((m=S[h])&&g.key==m.key&&g.type===m.type){S[h]=void 0;break}m=null}y=v(t,g,m=m||E,i,u,s,_,b,d),(h=g.ref)&&m.ref!=h&&(w||(w=[]),m.ref&&w.push(m.ref,null,g),w.push(h,g.__c||y,g)),null!=y?(null==j&&(j=y),b=p(t,g,m,S,s,y,b),d||"option"!=n.type?"function"==typeof n.type&&(n.__d=b):t.value=""):b&&m.__e==b&&b.parentNode!=t&&(b=a(m))}if(n.__e=j,null!=s&&"function"!=typeof n.type)for(f=s.length;f--;)null!=s[f]&&o(s[f]);for(f=x;f--;)null!=S[f]&&k(S[f],S[f]);if(w)for(f=0;f<w.length;f++)O(w[f],w[++f],w[++f])}function p(t,e,n,r,o,i,l){var c,u,a;if(void 0!==e.__d)c=e.__d,e.__d=void 0;else if(o==n||i!=l||null==i.parentNode)t:if(null==l||l.parentNode!==t)t.appendChild(i),c=null;else{for(u=l,a=0;(u=u.nextSibling)&&a<r.length;a+=2)if(u==i)break t;t.insertBefore(i,l),c=l}return void 0!==c?c:i.nextSibling}function f(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]="number"==typeof n&&!1===z.test(e)?n+"px":null==n?"":n}function h(t,e,n,r,o){var i,l,c,u,a;if(o?"className"===e&&(e="class"):"class"===e&&(e="className"),"style"===e)if(i=t.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(u in r)n&&u in n||f(i,u,"");if(n)for(a in n)r&&n[a]===r[a]||f(i,a,n[a])}else"o"===e[0]&&"n"===e[1]?(l=e!==(e=e.replace(/Capture$/,"")),c=e.toLowerCase(),e=(c in t?c:e).slice(2),n?(r||t.addEventListener(e,m,l),(t.l||(t.l={}))[e]=n):t.removeEventListener(e,m,l)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&"download"!==e&&!o&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,n))}function m(t){this.l[t.type](C.event?C.event(t):t)}function g(t,e,n){var r,o;for(r=0;r<t.__k.length;r++)(o=t.__k[r])&&(o.__=t,o.__e&&("function"==typeof o.type&&o.__k.length>1&&g(o,e,n),e=p(n,o,o,t.__k,null,o.__e,e),"function"==typeof t.type&&(t.__d=e)))}function v(t,e,n,o,i,l,a,s,_){var b,p,f,h,m,v,y,O,k,S,x,A=e.type;if(void 0!==e.constructor)return null;(b=C.__b)&&b(e);try{t:if("function"==typeof A){if(O=e.props,k=(b=A.contextType)&&o[b.__c],S=b?k?k.props.value:b.__:o,n.__c?y=(p=e.__c=n.__c).__=p.__E:("prototype"in A&&A.prototype.render?e.__c=p=new A(O,S):(e.__c=p=new u(O,S),p.constructor=A,p.render=w),k&&k.sub(p),p.props=O,p.state||(p.state={}),p.context=S,p.__n=o,f=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=A.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,A.getDerivedStateFromProps(O,p.__s))),h=p.props,m=p.state,f)null==A.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==A.getDerivedStateFromProps&&O!==h&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(O,S),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(O,p.__s,S)||e.__v===n.__v){p.props=O,p.state=p.__s,e.__v!==n.__v&&(p.__d=!1),p.__v=e,e.__e=n.__e,e.__k=n.__k,p.__h.length&&a.push(p),g(e,s,t);break t}null!=p.componentWillUpdate&&p.componentWillUpdate(O,p.__s,S),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(h,m,v)}))}p.context=S,p.props=O,p.state=p.__s,(b=C.__r)&&b(e),p.__d=!1,p.__v=e,p.__P=t,b=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),f||null==p.getSnapshotBeforeUpdate||(v=p.getSnapshotBeforeUpdate(h,m)),x=null!=b&&b.type==c&&null==b.key?b.props.children:b,d(t,Array.isArray(x)?x:[x],e,n,o,i,l,a,s,_),p.base=e.__e,p.__h.length&&a.push(p),y&&(p.__E=p.__=null),p.__e=!1}else null==l&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=j(n.__e,e,n,o,i,l,a,_);(b=C.diffed)&&b(e)}catch(t){e.__v=null,C.__e(t,e,n)}return e.__e}function y(t,e){C.__c&&C.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){C.__e(t,e.__v)}}))}function j(t,e,n,r,o,i,l,c){var u,a,s,_,b,p=n.props,f=e.props;if(o="svg"===e.type||o,null!=i)for(u=0;u<i.length;u++)if(null!=(a=i[u])&&((null===e.type?3===a.nodeType:a.localName===e.type)||t==a)){t=a,i[u]=null;break}if(null==t){if(null===e.type)return document.createTextNode(f);t=o?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,f.is&&{is:f.is}),i=null,c=!1}if(null===e.type)p!==f&&t.data!==f&&(t.data=f);else{if(null!=i&&(i=L.slice.call(t.childNodes)),s=(p=n.props||E).dangerouslySetInnerHTML,_=f.dangerouslySetInnerHTML,!c){if(null!=i)for(p={},b=0;b<t.attributes.length;b++)p[t.attributes[b].name]=t.attributes[b].value;(_||s)&&(_&&s&&_.__html==s.__html||(t.innerHTML=_&&_.__html||""))}(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||h(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||h(t,i,e[i],n[i],r)})(t,f,p,o,c),_?e.__k=[]:(u=e.props.children,d(t,Array.isArray(u)?u:[u],e,n,r,"foreignObject"!==e.type&&o,i,l,E,c)),c||("value"in f&&void 0!==(u=f.value)&&u!==t.value&&h(t,"value",u,p.value,!1),"checked"in f&&void 0!==(u=f.checked)&&u!==t.checked&&h(t,"checked",u,p.checked,!1))}return t}function O(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){C.__e(t,n)}}function k(t,e,n){var r,i,l;if(C.unmount&&C.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||O(r,null,e)),n||"function"==typeof t.type||(n=null!=(i=t.__e)),t.__e=t.__d=void 0,null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){C.__e(t,e)}r.base=r.__P=null}if(r=t.__k)for(l=0;l<r.length;l++)r[l]&&k(r[l],e,n);null!=i&&o(i)}function w(t,e,n){return this.constructor(t,n)}function S(t,e,n){var r,o,l;C.__&&C.__(t,e),o=(r=n===T)?null:n&&n.__k||e.__k,t=i(c,null,[t]),l=[],v(e,(r?e:n||e).__k=t,o||E,E,void 0!==e.ownerSVGElement,n&&!r?[n]:o?null:e.childNodes.length?L.slice.call(e.childNodes):null,l,n||E,r),y(l,t)}function x(t,e){S(t,e,T)}n.d(e,"e",(function(){return S})),n.d(e,"c",(function(){return x})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return c})),n.d(e,"d",(function(){return C}));var C,A,H,P,T,E={},L=[],z=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;C={__e:function(t,e){for(var n,r;e=e.__;)if((n=e.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(t))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(t)),r)return _(n.__E=n)}catch(e){t=e}throw t}},u.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof t&&(t=t(n,this.props)),t&&r(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),_(this))},u.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),_(this))},u.prototype.render=c,A=[],H="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b.__r=0,T=E},mdyV:function(t,e,n){"use strict";n.r(e);var r=n("hosL"),o=r.b,i=r.e,l=r.c,c=function(t){return t&&t.default?t.default:t},u=function(t){return"/"===t[t.length-1]?t:t+"/"};if("function"==typeof c(n("/hs+"))){var a=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var t=c(n("/hs+")),e={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(e=JSON.parse(decodeURI(r.innerHTML)).preRenderData||e);var s={preRenderData:e},_=e.url?u(e.url):"",b=l&&_===u(location.pathname);a=(b?l:i)(o(t,{CLI_DATA:s}),document.body,a)}()}},sSCD:function(){}});
//# sourceMappingURL=bundle.073aa.js.map