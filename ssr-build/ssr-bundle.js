module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="https://rschristian.github.io/preact-github-calendar",n(n.s="/hs+")}({"/hs+":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return F}));var r,o,i,a=n("HteQ"),c=0,u=[],s=a.options.__r,l=a.options.diffed,h=a.options.__c,b=a.options.unmount;function p(t,e){a.options.__h&&a.options.__h(o,t,c||e),c=0;var n=o.__H||(o.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function d(t){return c=1,function(t,e,n){var i=p(r++,2);return i.t=t,i.__c||(i.__c=o,i.__=[n?n(e):w(void 0,e),function(t){var e=i.t(i.__[0],t);i.__[0]!==e&&(i.__=[e,i.__[1]],i.__c.setState({}))}]),i.__}(w,t)}function _(t,e){var n=p(r++,3);!a.options.__s&&y(n.__H,e)&&(n.__=t,n.__H=e,o.__H.__h.push(n))}function f(t){return c=5,g((function(){return{current:void 0===t?null:t}}),[])}function g(t,e){var n=p(r++,7);return y(n.__H,e)?(n.__H=e,n.__h=t,n.__=t()):n.__}function m(){u.some((function(t){if(t.__P)try{t.__H.__h.forEach(O),t.__H.__h.forEach(v),t.__H.__h=[]}catch(e){return t.__H.__h=[],a.options.__e(e,t.__v),!0}})),u=[]}a.options.__r=function(t){s&&s(t),r=0;var e=(o=t.__c).__H;e&&(e.__h.forEach(O),e.__h.forEach(v),e.__h=[])},a.options.diffed=function(t){l&&l(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(1!==u.push(e)&&i===a.options.requestAnimationFrame||((i=a.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),j&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);j&&(e=requestAnimationFrame(n))})(m))},a.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(O),t.__h=t.__h.filter((function(t){return!t.__||v(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],a.options.__e(n,t.__v)}})),h&&h(t,e)},a.options.unmount=function(t){b&&b(t);var e=t.__c;if(e&&e.__H)try{e.__H.__.forEach(O)}catch(t){a.options.__e(t,e.__v)}};var j="function"==typeof requestAnimationFrame;function O(t){"function"==typeof t.u&&t.u()}function v(t){t.u=t.__()}function y(t,e){return!t||e.some((function(e,n){return e!==t[n]}))}function w(t,e){return"function"==typeof e?e(t):e}n("LQXr");function H(t){var e=f(null),n=d(0),r=n[0],o=n[1];return _((function(){e.current&&o(e.current.getBoundingClientRect().width)}),[e]),Object(a.h)("div",{class:"preact-hint preact-hint__fade-in",style:{bottom:t.rootBoundingRect.height-t.targetBoundingRect.top+t.rootBoundingRect.top+2,left:t.targetBoundingRect.left-t.rootBoundingRect.left-r/2+t.targetBoundingRect.width/2}},Object(a.h)("span",{class:"preact-hint__content",ref:e},t.template?t.template(t.content):t.content))}var x=function(t){var e=d(""),n=e[0],r=e[1],o=d(null),i=o[0],u=o[1],s=d(null),l=s[0],h=s[1],b=function(t,e){return c=8,g((function(){return t}),e)}((function(t){u(t),i&&(i.addEventListener("mouseover",(function(t){t.target instanceof Element&&t.target.hasAttribute("data-preact-hint")&&(r(t.target.getAttribute("data-preact-hint")||""),h(t.target.getBoundingClientRect()))})),i.addEventListener("mouseout",(function(t){t.target instanceof Element&&t.target.hasAttribute("data-preact-hint")&&(r(""),h(null))})))}),[i]);return Object(a.h)("div",{ref:b,style:{position:"relative"}},n&&i&&l&&Object(a.h)(H,{content:n,template:t.template,rootBoundingRect:i.getBoundingClientRect(),targetBoundingRect:l}),t.children)};n("GV3P"),n("Fuuw");function k(){return(k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var S=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function C(t){var e,n,r,o=k({blockMargin:2,blockSize:12,contributionColorArray:["#ebedf0","#9be9a8","#40c463","#30a14e","#216e39"],labelFontSize:14,showWeekdaysLabels:!1,showTooltip:!0},t.options),i=o.blockMargin,c=o.blockSize,u=o.contributionColorArray,s=o.labelFontSize,l=o.showWeekdaysLabels,h=o.showTooltip,b=d(null),p=b[0],f=b[1],g=d(""),m=g[0],j=g[1];return _((function(){new Promise((function(e,n){var r,o=function(){try{return e()}catch(t){return n(t)}},i=function(t){try{return j("Unknown Error"),o()}catch(t){return n(t)}};try{return Promise.resolve(fetch("https://githubapi.ryanchristian.dev/user/"+t.username)).then((function(t){try{return Promise.resolve(t.json()).then((function(t){try{return"total"in(r=t)&&"contributions"in r?(f(r),o()):e(j("Invalid response data"))}catch(t){return i()}}),i)}catch(t){return i()}}),i)}catch(t){i()}})).then()}),[t.username]),Object(a.h)(a.Fragment,null,null!==p?Object(a.h)("figure",{class:"github-calendar"},Object(a.h)("div",{class:"github-calendar__graph"},Object(a.h)(x,{template:function(t){var e=t.split(","),n=e[1].split("-"),r=S[Number(n[1])-1]+" "+ +n[2]+", "+n[0];return Object(a.h)(a.Fragment,null,Object(a.h)("strong",null,e[0]," Contributions")," on ",r)}},Object(a.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",viewBox:"0 0 "+(53*(c+i)-i+(l?2.4*(c+i):0))+" "+(7*(c+i)-i+1.5*s)},l&&["Mon","Wed","Fri"].map((function(t,e){return Object(a.h)("text",{key:t,class:"github-calendar__graph-label",style:{fontSize:s},x:0,y:1.5*s+(c+i)*(2*(e+1)-1)+(c-1)},t)})),function(){for(var t=[],e=0;e<p.contributions.length-1;e++)t.push(p.contributions[e][0]);var n=0,r=t.map((function(t,e){var r=t.date.split("-"),o=Number(r[1])-1;if(o!==n)return n=o,Object(a.h)("text",{key:S[o]+"-"+r[0],class:"github-calendar__graph-label",style:{fontSize:s},x:(l?2.4*(c+i):0)+(c+i)*e,y:s},S[o])})).filter((function(t){return void 0!==t}));return r[1].props.x-r[0].props.x<=2*(c+i)&&r.shift(),r}(),p.contributions.map((function(t){return t.map((function(t,e){return Object(a.h)("rect",{key:t.date,x:"0",y:1.5*s+(c+i)*e,width:c,height:c,fill:u[t.intensity],"data-preact-hint":h?[t.count,t.date]:null})}))})).map((function(t,e){return Object(a.h)("g",{key:e,transform:"translate("+((l?2.4*(c+i):0)+(c+i)*e)+", 0)"},t)})))),Object(a.h)("div",{class:"github-calendar__graph-footer"},Object(a.h)("div",{style:{float:"left"}},"Sum of pull requests, issues opened, and commits made by"," ",Object(a.h)("a",{href:"https://github.com/"+t.username,target:"blank"},"@",t.username)),Object(a.h)("div",{style:{float:"right"}},"Less",Object(a.h)("ul",{class:"github-calendar__graph-legend"},u.map((function(t){return Object(a.h)("li",{key:t,class:"github-calendar__graph-legend-item",style:{width:c-2,height:c-2,backgroundColor:t}})}))),"More"))),Object(a.h)("div",{class:"github-calendar__footer"},Object(a.h)("span",null,"Contributions in the last year"),Object(a.h)("span",{class:"github-calendar__footer-contribution-count"},p.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")," Total"),Object(a.h)("span",null,(e=p.contributions.length-1,n=p.contributions[0][0].date.split("-"),r=p.contributions[e][p.contributions[e].length-1].date.split("-"),S[Number(n[1])-1]+" "+ +n[2]+", "+n[0]+" - "+S[Number(r[1])-1]+" "+ +r[2]+", "+r[0])))):m?Object(a.h)("div",{class:"github-calendar__error"},m):Object(a.h)("noscript",null,"This component requires JS in order to function properly."))}var z=function(t){return Object(a.h)("div",{class:"tile is-child box content-section"},t.content)},A=function(t){return Object(a.h)("div",{class:"mb-6 mx-3"},Object(a.h)("h5",{class:"title is-size-5 has-text-weight-normal mb-4"},"• ",t.label),Object(a.h)("pre",{class:"mt-4"},Object(a.h)("code",null,t.usage)),Object(a.h)(z,{content:Object(a.h)(a.Fragment,null,t.calendar)}))};n("MV5A");function F(){var t=d("rschristian"),e=t[0],n=t[1],r=function(t,e){var n=f(),r=f();function o(){r.current&&clearTimeout(r.current)}return _((function(){return o}),[]),function(){for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];n.current=a,o(),r.current=setTimeout((function(){n.current&&t.apply(void 0,n.current)}),e)}}((function(t){return n(t)}),650);return _((function(){return""===e&&n("rschristian")}),[e]),Object(a.h)("div",{id:"app"},Object(a.h)("section",{class:"hero"},Object(a.h)("div",{class:"hero-body"},Object(a.h)("div",{class:"container has-text-centered"},Object(a.h)("h2",{class:"is-size-2 has-text-weight-bold"},"preact-github-calendar"),Object(a.h)("h6",{class:"is-size-6"},"Lightweight and extensible component to display the contribution calendar for a GitHub user"),Object(a.h)("input",{class:"input is-success",type:"text",placeholder:"Enter a GitHub username",onInput:function(t){return r(t.target.value)}}),Object(a.h)("a",{class:"button",href:"https://github.com/rschristian/preact-github-calendar"},"Check it out on GitHub")))),Object(a.h)("div",{class:"section main-content"},Object(a.h)("div",{class:"container"},Object(a.h)("h3",{class:"is-size-3"},"Preact GitHub Calendar"),Object(a.h)("div",{class:"shields mt-1"},Object(a.h)("a",{href:"https://github.com/rschristian/preact-github-calendar/blob/master/LICENSE"},Object(a.h)("img",{alt:"NPM",src:"https://img.shields.io/npm/l/preact-github-calendar?color=brightgreen"})),Object(a.h)("a",{href:"https://bundlephobia.com/result?p=preact-github-calendar"},Object(a.h)("img",{alt:"npm bundle size",src:"https://img.shields.io/bundlephobia/minzip/preact-github-calendar?color=brightgreen"})),Object(a.h)("a",{href:"https://npmjs.org/package/preact-github-calendar"},Object(a.h)("img",{alt:"TS Support",src:"https://img.shields.io/npm/types/preact-github-calendar?color=brightgreen"}))),Object(a.h)("div",{class:"mt-2 mb-5"},"Preact-GitHub-Calendar is a lightweight and extensible component for"," ",Object(a.h)("a",{href:"https://preactjs.com"},"Preact"),". It was designed to be a more lightweight alternative to the existing React implementations."),Object(a.h)(z,{content:Object(a.h)(a.Fragment,null,Object(a.h)(C,{username:e,options:{showWeekdaysLabels:!0}}))}),Object(a.h)("h4",{class:"is-size-4 mt-5 mb-2"},"Installation"),Object(a.h)("pre",null,Object(a.h)("code",null,"yarn add preact-github-calendar")),Object(a.h)("h4",{class:"is-size-4 mt-5 mb-2"},"General Usage"),Object(a.h)("pre",null,Object(a.h)("code",null,'import GitHubCalendar from "preact-github-calendar";\nimport \'preact-github-calendar/dist/index.css\'\n\nexport default function App() {\n    return <GitHubCalendar username="'+e+'" options={{ ... }} />\n}')),Object(a.h)("hr",{class:"divider"}),Object(a.h)("div",{id:"options"},Object(a.h)("h4",{class:"is-size-4 mt-5 mb-4"},"Options"),Object(a.h)(A,{label:"blockMargin",usage:'<GitHubCalendar username="'+e+'" options={{ blockMargin: 4 }} />',calendar:Object(a.h)(C,{username:e,options:{blockMargin:4}})}),Object(a.h)(A,{label:"blockSize",usage:'<GitHubCalendar username="'+e+'" options={{ blockSize: 14 }} />',calendar:Object(a.h)(C,{username:e,options:{blockSize:14}})}),Object(a.h)(A,{label:"contributionColorArray",usage:'<GitHubCalendar username="'+e+'" options={{ contributionColorArray: ["#ededed", "#9ba1e9", "#4040c4", "#3030a1", "#21216e"] }} />',calendar:Object(a.h)(C,{username:e,options:{contributionColorArray:["#ededed","#9ba1e9","#4040c4","#3030a1","#21216e"]}})}),Object(a.h)(A,{label:"labelFontSize",usage:'<GitHubCalendar username="'+e+'" options={{ labelFontSize: 20 }} />',calendar:Object(a.h)(C,{username:e,options:{labelFontSize:20}})}),Object(a.h)(A,{label:"showTooltip",usage:'<GitHubCalendar username="'+e+'" options={{ showTooltip: false }} />',calendar:Object(a.h)(C,{username:e,options:{showTooltip:!1}})}),Object(a.h)(A,{label:"showWeekdaysLabels",usage:'<GitHubCalendar username="'+e+'" options={{ showWeekdaysLabels: true }} />',calendar:Object(a.h)(C,{username:e,options:{showWeekdaysLabels:!0}})})))),Object(a.h)("footer",{class:"footer"},Object(a.h)("div",{class:"container has-text-centered"},Object(a.h)("span",null,"© 2020 Ryan Christian"))))}},Fuuw:function(t,e,n){},GV3P:function(t,e,n){},HteQ:function(t,e){t.exports=require("preact")},LQXr:function(t,e,n){},MV5A:function(t,e,n){}});
//# sourceMappingURL=ssr-bundle.js.map