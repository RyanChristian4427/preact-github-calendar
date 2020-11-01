!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(e){return t[e]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="https://rschristian.github.io/preact-github-calendar",e(e.s="mdyV")}({"/hs+":function(t,e,n){"use strict";function r(t,e){v.options.__h&&v.options.__h(g,t,O||e),O=0;var n=g.__H||(g.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function o(t){return O=1,function(t,e,n){var o=r(m++,2);return o.t=t,o.__c||(o.__c=g,o.__=[n?n(e):h(void 0,e),function(t){var e=o.t(o.__[0],t);o.__[0]!==e&&(o.__=[e,o.__[1]],o.__c.setState({}))}]),o.__}(h,t)}function i(t,e){var n=r(m++,3);!v.options.__s&&_(n.__H,e)&&(n.__=t,n.__H=e,g.__H.__h.push(n))}function l(t){return O=5,c((function(){return{current:void 0===t?null:t}}),[])}function c(t,e){var n=r(m++,7);return _(n.__H,e)?(n.__H=e,n.__h=t,n.__=t()):n.__}function u(){j.some((function(t){if(t.__P)try{t.__H.__h.forEach(a),t.__H.__h.forEach(s),t.__H.__h=[]}catch(e){return t.__H.__h=[],v.options.__e(e,t.__v),!0}})),j=[]}function a(t){"function"==typeof t.u&&t.u()}function s(t){t.u=t.__()}function _(t,e){return!t||e.some((function(e,n){return e!==t[n]}))}function h(t,e){return"function"==typeof e?e(t):e}function p(t){var e=l(null),n=o(1e4),r=n[0],c=n[1];return i((function(){e.current&&c(e.current.getBoundingClientRect().width)}),[e]),Object(v.h)("div",{class:"preact-hint preact-hint__fade-in",style:{bottom:t.rootBoundingRect.height-t.targetBoundingRect.top+t.rootBoundingRect.top+2,left:t.targetBoundingRect.left-t.rootBoundingRect.left-r/2+t.targetBoundingRect.width/2}},Object(v.h)("span",{class:"preact-hint__content",ref:e},t.template?t.template(t.content):t.content))}function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function f(t){const{blockMargin:e,blockSize:n,contributionColorArray:r,labelFontSize:l,showWeekdaysLabels:c,showTooltip:u}=d({blockMargin:2,blockSize:12,contributionColorArray:["#ebedf0","#9be9a8","#40c463","#30a14e","#216e39"],labelFontSize:14,showWeekdaysLabels:!1,showTooltip:!0},t.options),[a,s]=o(null),[_,h]=o("");return i(()=>{(async function(){s(null),h("");try{const e=await(await fetch("https://githubapi.ryanchristian.dev/user/"+t.username)).json();if("message"in e)return h(e.message);if(!("total"in e)||!("contributions"in e))return h("Invalid response data");s(e)}catch(t){h("Unknown Error")}})().then()},[t.username]),Object(v.h)(v.Fragment,null,null!==a?Object(v.h)("figure",{class:"github-calendar"},Object(v.h)("div",{class:"github-calendar__graph"},Object(v.h)(A,{template:t=>{const e=t.split(","),n=e[1].split("-"),r=`${H[Number(n[1])-1]} ${+n[2]}, ${n[0]}`;return Object(v.h)(v.Fragment,null,Object(v.h)("strong",null,e[0]," Contributions")," on ",r)}},Object(v.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",viewBox:`0 0 ${53*(n+e)-e+(c?2.4*(n+e):0)} ${7*(n+e)-e+1.5*l}`},c&&["Mon","Wed","Fri"].map((t,r)=>Object(v.h)("text",{key:t,class:"github-calendar__graph-label",style:{fontSize:l},x:0,y:1.5*l+(n+e)*(2*(r+1)-1)+(n-1)},t)),function(){const t=[];for(let e=0;e<a.contributions.length-1;e++)t.push(a.contributions[e][0]);let r=0;const o=t.map((t,o)=>{const i=t.date.split("-"),u=Number(i[1])-1;if(u!==r)return r=u,Object(v.h)("text",{key:`${H[u]}-${i[0]}`,class:"github-calendar__graph-label",style:{fontSize:l},x:(c?2.4*(n+e):0)+(n+e)*o,y:l},H[u])}).filter(t=>void 0!==t);return void 0!==o[1]&&o[1].props.x-o[0].props.x<=2*(n+e)&&o.shift(),o}(),a.contributions.map(t=>t.map((t,o)=>Object(v.h)("rect",{key:t.date,x:"0",y:1.5*l+(n+e)*o,width:n,height:n,fill:r[t.intensity],"data-preact-hint":u?[t.count,t.date]:null}))).map((t,r)=>Object(v.h)("g",{key:r,transform:`translate(${(c?2.4*(n+e):0)+(n+e)*r}, 0)`},t)))),Object(v.h)("div",{class:"github-calendar__graph-footer"},Object(v.h)("div",{style:{float:"left"}},"Sum of pull requests, issues opened, and commits made by"," ",Object(v.h)("a",{href:"https://github.com/"+t.username,target:"blank"},"@",t.username)),Object(v.h)("div",{style:{float:"right"}},"Less",Object(v.h)("ul",{class:"github-calendar__graph-legend"},r.map(t=>Object(v.h)("li",{key:t,class:"github-calendar__graph-legend-item",style:{width:n-2,height:n-2,backgroundColor:t}}))),"More"))),Object(v.h)("div",{class:"github-calendar__footer"},Object(v.h)("span",null,"Contributions in the last year"),Object(v.h)("span",{class:"github-calendar__footer-contribution-count"},a.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")," Total"),Object(v.h)("span",null,function(){const t=a.contributions.length-1,e=a.contributions[0][0].date.split("-"),n=a.contributions[t][a.contributions[t].length-1].date.split("-");return`${H[Number(e[1])-1]} ${+e[2]}, ${e[0]} - ${H[Number(n[1])-1]} ${+n[2]}, ${n[0]}`}()))):_?Object(v.h)("div",{class:"github-calendar__error"},_):Object(v.h)("noscript",null,"This component requires JS in order to function properly."))}function b(){const[t,e]=o("rschristian"),n=function(t,e){function n(){o.current&&clearTimeout(o.current)}const r=l(),o=l();return i(()=>n,[]),function(...i){r.current=i,n(),o.current=setTimeout(()=>{r.current&&t(...r.current)},e)}}(t=>e(t),650);return i(()=>""===t&&e("rschristian"),[t]),Object(v.h)("div",{id:"app"},Object(v.h)("section",{class:"hero"},Object(v.h)("div",{class:"hero-body"},Object(v.h)("div",{class:"container has-text-centered"},Object(v.h)("h2",{class:"is-size-2 has-text-weight-bold"},"preact-github-calendar"),Object(v.h)("h6",{class:"is-size-6"},"Lightweight and extensible component to display the contribution calendar for a GitHub user"),Object(v.h)("a",{class:"button",href:"https://github.com/rschristian/preact-github-calendar"},"Check it out on GitHub")))),Object(v.h)("div",{class:"section main-content"},Object(v.h)("div",{class:"container"},Object(v.h)("h3",{class:"is-size-3"},"Preact GitHub Calendar"),Object(v.h)("div",{class:"shields mt-1"},Object(v.h)("a",{href:"https://github.com/rschristian/preact-github-calendar/blob/master/LICENSE"},Object(v.h)("img",{alt:"NPM",src:"https://img.shields.io/npm/l/preact-github-calendar?color=brightgreen"})),Object(v.h)("a",{href:"https://bundlephobia.com/result?p=preact-github-calendar"},Object(v.h)("img",{alt:"npm bundle size",src:"https://img.shields.io/bundlephobia/minzip/preact-github-calendar?color=brightgreen"})),Object(v.h)("a",{href:"https://npmjs.org/package/preact-github-calendar"},Object(v.h)("img",{alt:"TS Support",src:"https://img.shields.io/npm/types/preact-github-calendar?color=brightgreen"}))),Object(v.h)("div",{class:"mt-2 mb-5"},"Preact-GitHub-Calendar is a lightweight and extensible component for"," ",Object(v.h)("a",{href:"https://preactjs.com"},"Preact"),". It was designed to be a more lightweight alternative to the existing React implementations."),Object(v.h)("input",{className:"input is-success",type:"text",placeholder:"Enter a GitHub username",onInput:t=>n(t.target.value)}),Object(v.h)(E,{content:Object(v.h)(v.Fragment,null,Object(v.h)(f,{username:t,options:{showWeekdaysLabels:!0}}))}),Object(v.h)("h4",{class:"is-size-4 mt-5 mb-2"},"Installation"),Object(v.h)("pre",null,Object(v.h)("code",null,"yarn add preact-github-calendar")),Object(v.h)("h4",{class:"is-size-4 mt-5 mb-2"},"General Usage"),Object(v.h)("pre",null,Object(v.h)("code",null,`import GitHubCalendar from "preact-github-calendar";\nimport 'preact-github-calendar/dist/index.css'\n\nexport default function App() {\n    return <GitHubCalendar username="${t}" options={{ ... }} />\n}`)),Object(v.h)("hr",{class:"divider"}),Object(v.h)("div",{id:"options"},Object(v.h)("h4",{class:"is-size-4 mt-5 mb-4"},"Options"),Object(v.h)(P,{label:"blockMargin",usage:`<GitHubCalendar username="${t}" options={{ blockMargin: 4 }} />`,calendar:Object(v.h)(f,{username:t,options:{blockMargin:4}})}),Object(v.h)(P,{label:"blockSize",usage:`<GitHubCalendar username="${t}" options={{ blockSize: 14 }} />`,calendar:Object(v.h)(f,{username:t,options:{blockSize:14}})}),Object(v.h)(P,{label:"contributionColorArray",usage:`<GitHubCalendar username="${t}" options={{ contributionColorArray: ["#ededed", "#9ba1e9", "#4040c4", "#3030a1", "#21216e"] }} />`,calendar:Object(v.h)(f,{username:t,options:{contributionColorArray:["#ededed","#9ba1e9","#4040c4","#3030a1","#21216e"]}})}),Object(v.h)(P,{label:"labelFontSize",usage:`<GitHubCalendar username="${t}" options={{ labelFontSize: 20 }} />`,calendar:Object(v.h)(f,{username:t,options:{labelFontSize:20}})}),Object(v.h)(P,{label:"showTooltip",usage:`<GitHubCalendar username="${t}" options={{ showTooltip: false }} />`,calendar:Object(v.h)(f,{username:t,options:{showTooltip:!1}})}),Object(v.h)(P,{label:"showWeekdaysLabels",usage:`<GitHubCalendar username="${t}" options={{ showWeekdaysLabels: true }} />`,calendar:Object(v.h)(f,{username:t,options:{showWeekdaysLabels:!0}})})))),Object(v.h)("footer",{class:"footer"},Object(v.h)("div",{class:"container has-text-centered"},Object(v.h)("span",null,"© 2020 Ryan Christian"))))}n.r(e),n.d(e,"default",(function(){return b}));var m,g,y,v=n("hosL"),O=0,j=[],k=v.options.__r,w=v.options.diffed,C=v.options.__c,x=v.options.unmount;v.options.__r=function(t){k&&k(t),m=0;var e=(g=t.__c).__H;e&&(e.__h.forEach(a),e.__h.forEach(s),e.__h=[])},v.options.diffed=function(t){w&&w(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(1!==j.push(e)&&y===v.options.requestAnimationFrame||((y=v.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),S&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);S&&(e=requestAnimationFrame(n))})(u))},v.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(a),t.__h=t.__h.filter((function(t){return!t.__||s(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],v.options.__e(n,t.__v)}})),C&&C(t,e)},v.options.unmount=function(t){x&&x(t);var e=t.__c;if(e&&e.__H)try{e.__H.__.forEach(a)}catch(t){v.options.__e(t,e.__v)}};var S="function"==typeof requestAnimationFrame,A=(n("2zjJ"),function(t){var e=o(""),n=e[0],r=e[1],i=o(null),l=i[0],u=i[1],a=o(null),s=a[0],_=a[1],h=function(t,e){return O=8,c((function(){return t}),e)}((function(t){u(t),l&&(l.addEventListener("mouseover",(function(t){t.target instanceof Element&&t.target.hasAttribute("data-preact-hint")&&(r(t.target.getAttribute("data-preact-hint")||""),_(t.target.getBoundingClientRect()))})),l.addEventListener("mouseout",(function(t){t.target instanceof Element&&t.target.hasAttribute("data-preact-hint")&&(r(""),_(null))})))}),[l]);return Object(v.h)("div",{ref:h,style:{position:"relative"}},n&&l&&s&&Object(v.h)(p,{content:n,template:t.template,rootBoundingRect:l.getBoundingClientRect(),targetBoundingRect:s}),t.children)});n("sSCD");const H=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],E=t=>Object(v.h)("div",{class:"tile is-child box content-section"},t.content),P=t=>Object(v.h)("div",{class:"mb-6 mx-3"},Object(v.h)("h5",{class:"title is-size-5 has-text-weight-normal mb-4"},"• ",t.label),Object(v.h)("pre",{class:"mt-4"},Object(v.h)("code",null,t.usage)),Object(v.h)(E,{content:Object(v.h)(v.Fragment,null,t.calendar)}));n("MV5A")},"2zjJ":function(){},MV5A:function(){},hosL:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t){var e=t.parentNode;e&&e.removeChild(t)}function i(t,e,n){var r,o=arguments,i={};for(r in e)"key"!==r&&"ref"!==r&&(i[r]=e[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(i.children=n),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===i[r]&&(i[r]=t.defaultProps[r]);return l(t,i,e&&e.key,e&&e.ref,null)}function l(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(i.__v=i),P.vnode&&P.vnode(i),i}function c(){return{current:null}}function u(t){return t.children}function a(t,e){this.props=t,this.context=e}function s(t,e){if(null==e)return t.__?s(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?s(t):null}function _(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return _(t)}}function h(t){(!t.__d&&(t.__d=!0)&&L.push(t)&&!p.__r++||M!==P.debounceRendering)&&((M=P.debounceRendering)||z)(p)}function p(){for(var t;p.__r=L.length;)t=L.sort((function(t,e){return t.__v.__b-e.__v.__b})),L=[],t.some((function(t){var e,n,o,i,l,c,u;t.__d&&(c=(l=(e=t).__v).__e,(u=e.__P)&&(n=[],(o=r({},l)).__v=o,i=O(u,l,o,e.__n,void 0!==u.ownerSVGElement,null,n,null==c?s(l):c),j(n,l),i!=c&&_(l)))}))}function d(t,e,n,r,i,c,a,_,h,p){var d,f,m,g,y,v,j,k=r&&r.__k||R,x=k.length;for(h==$&&(h=null!=a?a[0]:x?s(r,0):null),n.__k=[],d=0;d<e.length;d++)if(null!=(g=n.__k[d]=null==(g=e[d])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g?l(null,g,null,null,g):Array.isArray(g)?l(u,{children:g},null,null,null):null!=g.__e||null!=g.__c?l(g.type,g.props,g.key,null,g.__v):g)){if(g.__=n,g.__b=n.__b+1,null===(m=k[d])||m&&g.key==m.key&&g.type===m.type)k[d]=void 0;else for(f=0;f<x;f++){if((m=k[f])&&g.key==m.key&&g.type===m.type){k[f]=void 0;break}m=null}y=O(t,g,m=m||$,i,c,a,_,h,p),(f=g.ref)&&m.ref!=f&&(j||(j=[]),m.ref&&j.push(m.ref,null,g),j.push(f,g.__c||y,g)),null!=y?(null==v&&(v=y),h=b(t,g,m,k,a,y,h),p||"option"!=n.type?"function"==typeof n.type&&(n.__d=h):t.value=""):h&&m.__e==h&&h.parentNode!=t&&(h=s(m))}if(n.__e=v,null!=a&&"function"!=typeof n.type)for(d=a.length;d--;)null!=a[d]&&o(a[d]);for(d=x;d--;)null!=k[d]&&C(k[d],k[d]);if(j)for(d=0;d<j.length;d++)w(j[d],j[++d],j[++d])}function f(t){return null==t||"boolean"==typeof t?[]:Array.isArray(t)?R.concat.apply([],t.map(f)):[t]}function b(t,e,n,r,o,i,l){var c,u,a;if(void 0!==e.__d)c=e.__d,e.__d=void 0;else if(o==n||i!=l||null==i.parentNode)t:if(null==l||l.parentNode!==t)t.appendChild(i),c=null;else{for(u=l,a=0;(u=u.nextSibling)&&a<r.length;a+=2)if(u==i)break t;t.insertBefore(i,l),c=l}return void 0!==c?c:i.nextSibling}function m(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]="number"==typeof n&&!1===D.test(e)?n+"px":null==n?"":n}function g(t,e,n,r,o){var i,l,c,u,a;if(o?"className"===e&&(e="class"):"class"===e&&(e="className"),"style"===e)if(i=t.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(u in r)n&&u in n||m(i,u,"");if(n)for(a in n)r&&n[a]===r[a]||m(i,a,n[a])}else"o"===e[0]&&"n"===e[1]?(l=e!==(e=e.replace(/Capture$/,"")),c=e.toLowerCase(),e=(c in t?c:e).slice(2),n?(r||t.addEventListener(e,y,l),(t.l||(t.l={}))[e]=n):t.removeEventListener(e,y,l)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&"download"!==e&&!o&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,n))}function y(t){this.l[t.type](P.event?P.event(t):t)}function v(t,e,n){var r,o;for(r=0;r<t.__k.length;r++)(o=t.__k[r])&&(o.__=t,o.__e&&("function"==typeof o.type&&o.__k.length>1&&v(o,e,n),e=b(n,o,o,t.__k,null,o.__e,e),"function"==typeof t.type&&(t.__d=e)))}function O(t,e,n,o,i,l,c,s,_){var h,p,f,b,m,g,y,O,j,w,C,S=e.type;if(void 0!==e.constructor)return null;(h=P.__b)&&h(e);try{t:if("function"==typeof S){if(O=e.props,j=(h=S.contextType)&&o[h.__c],w=h?j?j.props.value:h.__:o,n.__c?y=(p=e.__c=n.__c).__=p.__E:("prototype"in S&&S.prototype.render?e.__c=p=new S(O,w):(e.__c=p=new a(O,w),p.constructor=S,p.render=x),j&&j.sub(p),p.props=O,p.state||(p.state={}),p.context=w,p.__n=o,f=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=S.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,S.getDerivedStateFromProps(O,p.__s))),b=p.props,m=p.state,f)null==S.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==S.getDerivedStateFromProps&&O!==b&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(O,w),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(O,p.__s,w)||e.__v===n.__v){p.props=O,p.state=p.__s,e.__v!==n.__v&&(p.__d=!1),p.__v=e,e.__e=n.__e,e.__k=n.__k,p.__h.length&&c.push(p),v(e,s,t);break t}null!=p.componentWillUpdate&&p.componentWillUpdate(O,p.__s,w),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(b,m,g)}))}p.context=w,p.props=O,p.state=p.__s,(h=P.__r)&&h(e),p.__d=!1,p.__v=e,p.__P=t,h=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),f||null==p.getSnapshotBeforeUpdate||(g=p.getSnapshotBeforeUpdate(b,m)),C=null!=h&&h.type==u&&null==h.key?h.props.children:h,d(t,Array.isArray(C)?C:[C],e,n,o,i,l,c,s,_),p.base=e.__e,p.__h.length&&c.push(p),y&&(p.__E=p.__=null),p.__e=!1}else null==l&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=k(n.__e,e,n,o,i,l,c,_);(h=P.diffed)&&h(e)}catch(t){e.__v=null,P.__e(t,e,n)}return e.__e}function j(t,e){P.__c&&P.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){P.__e(t,e.__v)}}))}function k(t,e,n,r,o,i,l,c){var u,a,s,_,h,p=n.props,f=e.props;if(o="svg"===e.type||o,null!=i)for(u=0;u<i.length;u++)if(null!=(a=i[u])&&((null===e.type?3===a.nodeType:a.localName===e.type)||t==a)){t=a,i[u]=null;break}if(null==t){if(null===e.type)return document.createTextNode(f);t=o?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,f.is&&{is:f.is}),i=null,c=!1}if(null===e.type)p!==f&&t.data!==f&&(t.data=f);else{if(null!=i&&(i=R.slice.call(t.childNodes)),s=(p=n.props||$).dangerouslySetInnerHTML,_=f.dangerouslySetInnerHTML,!c){if(null!=i)for(p={},h=0;h<t.attributes.length;h++)p[t.attributes[h].name]=t.attributes[h].value;(_||s)&&(_&&s&&_.__html==s.__html||(t.innerHTML=_&&_.__html||""))}(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||g(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||g(t,i,e[i],n[i],r)})(t,f,p,o,c),_?e.__k=[]:(u=e.props.children,d(t,Array.isArray(u)?u:[u],e,n,r,"foreignObject"!==e.type&&o,i,l,$,c)),c||("value"in f&&void 0!==(u=f.value)&&u!==t.value&&g(t,"value",u,p.value,!1),"checked"in f&&void 0!==(u=f.checked)&&u!==t.checked&&g(t,"checked",u,p.checked,!1))}return t}function w(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){P.__e(t,n)}}function C(t,e,n){var r,i,l;if(P.unmount&&P.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||w(r,null,e)),n||"function"==typeof t.type||(n=null!=(i=t.__e)),t.__e=t.__d=void 0,null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){P.__e(t,e)}r.base=r.__P=null}if(r=t.__k)for(l=0;l<r.length;l++)r[l]&&C(r[l],e,n);null!=i&&o(i)}function x(t,e,n){return this.constructor(t,n)}function S(t,e,n){var r,o,l;P.__&&P.__(t,e),o=(r=n===N)?null:n&&n.__k||e.__k,t=i(u,null,[t]),l=[],O(e,(r?e:n||e).__k=t,o||$,$,void 0!==e.ownerSVGElement,n&&!r?[n]:o?null:e.childNodes.length?R.slice.call(e.childNodes):null,l,n||$,r),j(l,t)}function A(t,e){S(t,e,N)}function H(t,e){var n,o;for(o in e=r(r({},t.props),e),arguments.length>2&&(e.children=R.slice.call(arguments,2)),n={},e)"key"!==o&&"ref"!==o&&(n[o]=e[o]);return l(t.type,n,e.key||t.key,e.ref||t.ref,null)}function E(t){var e={},n={__c:"__cC"+F++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var r,o=this;return this.getChildContext||(r=[],this.getChildContext=function(){return e[n.__c]=o,e},this.shouldComponentUpdate=function(t){o.props.value!==t.value&&r.some((function(e){e.context=t.value,h(e)}))},this.sub=function(t){r.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){r.splice(r.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Consumer.contextType=n,n.Provider.__=n,n}n.r(e),n.d(e,"render",(function(){return S})),n.d(e,"hydrate",(function(){return A})),n.d(e,"createElement",(function(){return i})),n.d(e,"h",(function(){return i})),n.d(e,"Fragment",(function(){return u})),n.d(e,"createRef",(function(){return c})),n.d(e,"isValidElement",(function(){return T})),n.d(e,"Component",(function(){return a})),n.d(e,"cloneElement",(function(){return H})),n.d(e,"createContext",(function(){return E})),n.d(e,"toChildArray",(function(){return f})),n.d(e,"__u",(function(){return C})),n.d(e,"options",(function(){return P}));var P,T,L,z,M,N,F,$={},R=[],D=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;P={__e:function(t,e){for(var n,r;e=e.__;)if((n=e.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(t))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(t)),r)return h(n.__E=n)}catch(e){t=e}throw t}},T=function(t){return null!=t&&void 0===t.constructor},a.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof t&&(t=t(n,this.props)),t&&r(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),h(this))},a.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),h(this))},a.prototype.render=u,L=[],z="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,N=$,F=0},mdyV:function(t,e,n){"use strict";n.r(e);var r=n("hosL");const{h:o,render:i,hydrate:l}=r,c=t=>t&&t.default?t.default:t,u=t=>"/"===t[t.length-1]?t:t+"/";if("function"==typeof c(n("/hs+"))){let t=document.getElementById("preact_root")||document.body.firstElementChild;0,(()=>{let e=c(n("/hs+")),r={};const a=document.querySelector('[type="__PREACT_CLI_DATA__"]');a&&(r=JSON.parse(decodeURI(a.innerHTML)).preRenderData||r);const s={preRenderData:r},_=r.url?u(r.url):"",h=l&&_===u(location.pathname);t=(h?l:i)(o(e,{CLI_DATA:s}),document.body,t)})()}},sSCD:function(){}});
//# sourceMappingURL=bundle.613c0.esm.js.map