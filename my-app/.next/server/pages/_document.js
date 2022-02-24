(()=>{var e={id:660,ids:[660]};e.modules={7:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isEqualNode=s,t.default=function(){let e=null;return{mountedInstances:new Set,updateHead:t=>{const n=e=Promise.resolve().then((()=>{if(n!==e)return;e=null;const i={};t.forEach((e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector(`style[data-href="${e.props["data-href"]}"]`))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}const t=i[e.type]||[];t.push(e),i[e.type]=t}));const o=i.title?i.title[0]:null;let a="";if(o){const{children:e}=o.props;a="string"==typeof e?e:Array.isArray(e)?e.join(""):""}a!==document.title&&(document.title=a),["meta","base","link","style","script"].forEach((e=>{!function(e,t){const n=document.getElementsByTagName("head")[0],i=n.querySelector("meta[name=next-head-count]");0;const o=Number(i.content),a=[];for(let t=0,n=i.previousElementSibling;t<o;t++,n=(null==n?void 0:n.previousElementSibling)||null){var l;(null==n||null===(l=n.tagName)||void 0===l?void 0:l.toLowerCase())===e&&a.push(n)}const c=t.map(r).filter((e=>{for(let t=0,n=a.length;t<n;t++){if(s(a[t],e))return a.splice(t,1),!1}return!0}));a.forEach((e=>{var t;return null===(t=e.parentNode)||void 0===t?void 0:t.removeChild(e)})),c.forEach((e=>n.insertBefore(e,i))),i.content=(o-a.length+c.length).toString()}(e,i[e]||[])}))}))}}},t.DOMAttributeNames=void 0;const n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function r({type:e,props:t}){const r=document.createElement(e);for(const s in t){if(!t.hasOwnProperty(s))continue;if("children"===s||"dangerouslySetInnerHTML"===s)continue;if(void 0===t[s])continue;const i=n[s]||s.toLowerCase();"script"!==e||"async"!==i&&"defer"!==i&&"noModule"!==i?r.setAttribute(i,t[s]):r[i]=!!t[s]}const{children:s,dangerouslySetInnerHTML:i}=t;return i?r.innerHTML=i.__html||"":s&&(r.textContent="string"==typeof s?s:Array.isArray(s)?s.join(""):""),r}function s(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){const n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){const r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}t.DOMAttributeNames=n},311:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cancelIdleCallback=t.requestIdleCallback=void 0;const n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)};t.requestIdleCallback=n;const r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};t.cancelIdleCallback=r},699:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initScriptLoader=function(e){e.forEach(m)},t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(689)),s=n(796),i=n(7),o=n(311);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}function c(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}const d=new Map,u=new Set,p=["onLoad","dangerouslySetInnerHTML","children","onError","strategy"],f=e=>{const{src:t,id:n,onLoad:r=(()=>{}),dangerouslySetInnerHTML:s,children:o="",strategy:a="afterInteractive",onError:l}=e,c=n||t;if(c&&u.has(c))return;if(d.has(t))return u.add(c),void d.get(t).then(r,l);const f=document.createElement("script"),m=new Promise(((e,t)=>{f.addEventListener("load",(function(t){e(),r&&r.call(this,t)})),f.addEventListener("error",(function(e){t(e)}))})).catch((function(e){l&&l(e)}));t&&d.set(t,m),u.add(c),s?f.innerHTML=s.__html||"":o?f.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):"":t&&(f.src=t);for(const[t,n]of Object.entries(e)){if(void 0===n||p.includes(t))continue;const e=i.DOMAttributeNames[t]||t.toLowerCase();f.setAttribute(e,n)}f.setAttribute("data-nscript",a),document.body.appendChild(f)};function m(e){const{strategy:t="afterInteractive"}=e;"afterInteractive"===t?f(e):"lazyOnload"===t&&window.addEventListener("load",(()=>{o.requestIdleCallback((()=>f(e)))}))}var h=function(e){const{src:t="",onLoad:n=(()=>{}),dangerouslySetInnerHTML:i,strategy:a="afterInteractive",onError:d}=e,p=c(e,["src","onLoad","dangerouslySetInnerHTML","strategy","onError"]),{updateScripts:m,scripts:h,getIsSsr:y}=r.useContext(s.HeadManagerContext);return r.useEffect((()=>{"afterInteractive"===a?f(e):"lazyOnload"===a&&function(e){"complete"===document.readyState?o.requestIdleCallback((()=>f(e))):window.addEventListener("load",(()=>{o.requestIdleCallback((()=>f(e)))}))}(e)}),[e,a]),"beforeInteractive"===a&&(m?(h.beforeInteractive=(h.beforeInteractive||[]).concat([l({src:t,onLoad:n,onError:d},p)]),m(h)):y&&y()?u.add(p.id||t):y&&!y()&&f(e)),null};t.default=h},105:(e,t,n)=>{"use strict";t.Html=v,t.Main=E,t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(689)),s=n(724),i=n(232),o=n(140),a=n(368),l=n(716),c=u(n(699)),d=u(n(676));function u(e){return e&&e.__esModule?e:{default:e}}function p(e,t,n){const r=o.getPageFiles(e,"/_app"),s=n?[]:o.getPageFiles(e,t);return{sharedFiles:r,pageFiles:s,allFiles:[...new Set([...r,...s])]}}function f(e,t){const{assetPrefix:n,buildManifest:s,devOnlyCacheBusterQueryString:i,disableOptimizedLoading:o,crossOrigin:a}=e;return s.polyfillFiles.filter((e=>e.endsWith(".js")&&!e.endsWith(".module.js"))).map((e=>r.default.createElement("script",{key:e,defer:!o,nonce:t.nonce,crossOrigin:t.crossOrigin||a,noModule:!0,src:`${n}/_next/${e}${i}`})))}function m(e,t){const{scriptLoader:n,disableOptimizedLoading:s,crossOrigin:i}=e;return(n.beforeInteractive||[]).map(((e,n)=>{const{strategy:o,...a}=e;return r.default.createElement("script",Object.assign({},a,{key:a.src||n,defer:!s,nonce:t.nonce,"data-nscript":"beforeInteractive",crossOrigin:t.crossOrigin||i}))}))}function h(e,t,n){const{dynamicImports:s,assetPrefix:i,isDevelopment:o,devOnlyCacheBusterQueryString:a,disableOptimizedLoading:l,crossOrigin:c}=e;return s.map((e=>!e.endsWith(".js")||n.allFiles.includes(e)?null:r.default.createElement("script",{async:!o&&l,defer:!l,key:e,src:`${i}/_next/${encodeURI(e)}${a}`,nonce:t.nonce,crossOrigin:t.crossOrigin||c})))}function y(e,t,n){var s;const{assetPrefix:i,buildManifest:o,isDevelopment:a,devOnlyCacheBusterQueryString:l,disableOptimizedLoading:c,crossOrigin:d}=e;return[...n.allFiles.filter((e=>e.endsWith(".js"))),...null===(s=o.lowPriorityFiles)||void 0===s?void 0:s.filter((e=>e.endsWith(".js")))].map((e=>r.default.createElement("script",{key:e,src:`${i}/_next/${encodeURI(e)}${l}`,nonce:t.nonce,async:!a&&c,defer:!c,crossOrigin:t.crossOrigin||d})))}class g extends r.Component{static getInitialProps(e){return e.defaultGetInitialProps(e)}render(){return r.default.createElement(v,null,r.default.createElement(x,null),r.default.createElement("body",null,r.default.createElement(E,null),r.default.createElement(O,null)))}}function v(e){const{inAmpMode:t,docComponentsRendered:n,locale:s}=r.useContext(i.HtmlContext);return n.Html=!0,r.default.createElement("html",Object.assign({},e,{lang:e.lang||s||void 0,amp:t?"":void 0,"data-ampdevmode":void 0}))}function b({styles:e}){if(!e)return null;const t=Array.isArray(e)?e:[];if(e.props&&Array.isArray(e.props.children)){const n=e=>{var t,n;return null==e||null===(t=e.props)||void 0===t||null===(n=t.dangerouslySetInnerHTML)||void 0===n?void 0:n.__html};e.props.children.forEach((e=>{Array.isArray(e)?e.forEach((e=>n(e)&&t.push(e))):n(e)&&t.push(e)}))}return r.default.createElement("style",{"amp-custom":"",dangerouslySetInnerHTML:{__html:t.map((e=>e.props.dangerouslySetInnerHTML.__html)).join("").replace(/\/\*# sourceMappingURL=.*\*\//g,"").replace(/\/\*@ sourceURL=.*?\*\//g,"")}})}t.default=g;class x extends r.Component{getCssLinks(e){const{assetPrefix:t,devOnlyCacheBusterQueryString:n,dynamicImports:s,crossOrigin:i,optimizeCss:o,optimizeFonts:a}=this.context,l=e.allFiles.filter((e=>e.endsWith(".css"))),c=new Set(e.sharedFiles);let d=new Set([]),u=Array.from(new Set(s.filter((e=>e.endsWith(".css")))));if(u.length){const e=new Set(l);u=u.filter((t=>!(e.has(t)||c.has(t)))),d=new Set(u),l.push(...u)}let p=[];return l.forEach((e=>{const s=c.has(e);o||p.push(r.default.createElement("link",{key:`${e}-preload`,nonce:this.props.nonce,rel:"preload",href:`${t}/_next/${encodeURI(e)}${n}`,as:"style",crossOrigin:this.props.crossOrigin||i}));const a=d.has(e);p.push(r.default.createElement("link",{key:e,nonce:this.props.nonce,rel:"stylesheet",href:`${t}/_next/${encodeURI(e)}${n}`,crossOrigin:this.props.crossOrigin||i,"data-n-g":a?void 0:s?"":void 0,"data-n-p":a||s?void 0:""}))})),a&&(p=this.makeStylesheetInert(p)),0===p.length?null:p}getPreloadDynamicChunks(){const{dynamicImports:e,assetPrefix:t,devOnlyCacheBusterQueryString:n,crossOrigin:s}=this.context;return e.map((e=>e.endsWith(".js")?r.default.createElement("link",{rel:"preload",key:e,href:`${t}/_next/${encodeURI(e)}${n}`,as:"script",nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||s}):null)).filter(Boolean)}getPreloadMainLinks(e){const{assetPrefix:t,devOnlyCacheBusterQueryString:n,scriptLoader:s,crossOrigin:i}=this.context,o=e.allFiles.filter((e=>e.endsWith(".js")));return[...(s.beforeInteractive||[]).map((e=>r.default.createElement("link",{key:e.src,nonce:this.props.nonce,rel:"preload",href:e.src,as:"script",crossOrigin:this.props.crossOrigin||i}))),...o.map((e=>r.default.createElement("link",{key:e,nonce:this.props.nonce,rel:"preload",href:`${t}/_next/${encodeURI(e)}${n}`,as:"script",crossOrigin:this.props.crossOrigin||i})))]}getDynamicChunks(e){return h(this.context,this.props,e)}getPreNextScripts(){return m(this.context,this.props)}getScripts(e){return y(this.context,this.props,e)}getPolyfillScripts(){return f(this.context,this.props)}handleDocumentScriptLoaderItems(e){const{scriptLoader:t}=this.context,n=[],s=[];return r.default.Children.forEach(e,(e=>{if(e.type===c.default){if("beforeInteractive"===e.props.strategy)return void(t.beforeInteractive=(t.beforeInteractive||[]).concat([{...e.props}]));if(["lazyOnload","afterInteractive"].includes(e.props.strategy))return void n.push(e.props)}s.push(e)})),this.context.__NEXT_DATA__.scriptLoader=n,s}makeStylesheetInert(e){return r.default.Children.map(e,(e=>{var t,n;if("link"===(null==e?void 0:e.type)&&(null==e||null===(t=e.props)||void 0===t?void 0:t.href)&&s.OPTIMIZED_FONT_PROVIDERS.some((({url:t})=>{var n,r;return null==e||null===(n=e.props)||void 0===n||null===(r=n.href)||void 0===r?void 0:r.startsWith(t)}))){const t={...e.props||{},"data-href":e.props.href,href:void 0};return r.default.cloneElement(e,t)}if(null==e||null===(n=e.props)||void 0===n?void 0:n.children){const t={...e.props||{},children:this.makeStylesheetInert(e.props.children)};return r.default.cloneElement(e,t)}return e})).filter(Boolean)}render(){const{styles:e,ampPath:t,inAmpMode:n,hybridAmp:s,canonicalBase:i,__NEXT_DATA__:o,dangerousAsPath:l,headTags:c,unstable_runtimeJS:d,unstable_JsPreload:u,disableOptimizedLoading:f,useMaybeDeferContent:m,optimizeCss:h,optimizeFonts:y,optimizeImages:g,concurrentFeatures:v}=this.context,x=!1===d,E=!1===u||!f;this.context.docComponentsRendered.Head=!0;let{head:O}=this.context,S=[],j=[];O&&(O.forEach((e=>{e&&"link"===e.type&&"preload"===e.props.rel&&"style"===e.props.as?S.push(e):e&&j.push(e)})),O=S.concat(j));let I=r.default.Children.toArray(this.props.children).filter(Boolean);y&&!n&&(I=this.makeStylesheetInert(I)),I=this.handleDocumentScriptLoaderItems(I);let k=!1,C=!1;O=r.default.Children.map(O||[],(e=>{if(!e)return e;const{type:t,props:r}=e;if(n){let n="";if("meta"===t&&"viewport"===r.name?n='name="viewport"':"link"===t&&"canonical"===r.rel?C=!0:"script"===t&&(r.src&&r.src.indexOf("ampproject")<-1||r.dangerouslySetInnerHTML&&(!r.type||"text/javascript"===r.type))&&(n="<script",Object.keys(r).forEach((e=>{n+=` ${e}="${r[e]}"`})),n+="/>"),n)return console.warn(`Found conflicting amp tag "${e.type}" with conflicting prop ${n} in ${o.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`),null}else"link"===t&&"amphtml"===r.rel&&(k=!0);return e}));const P=p(this.context.buildManifest,this.context.__NEXT_DATA__.page,n),M=()=>{const o=()=>r.default.createElement(r.default.Fragment,null,O,r.default.createElement("meta",{name:"next-head-count",content:r.default.Children.count(O||[]).toString()})),d=()=>r.default.createElement(r.default.Fragment,null,!x&&!E&&this.getPreloadDynamicChunks(),!x&&!E&&this.getPreloadMainLinks(P)),u=()=>r.default.createElement(r.default.Fragment,null,!f&&!x&&this.getPreNextScripts(),!f&&!x&&this.getDynamicChunks(P),!f&&!x&&this.getScripts(P)),[p]=m("HEAD",(()=>r.default.createElement(r.default.Fragment,null,o(),d(),u())));var S,j;return r.default.createElement("head",Object.assign({},this.props),!v&&this.context.isDevelopment&&r.default.createElement(r.default.Fragment,null,r.default.createElement("style",{"data-next-hide-fouc":!0,"data-ampdevmode":n?"true":void 0,dangerouslySetInnerHTML:{__html:"body{display:none}"}}),r.default.createElement("noscript",{"data-next-hide-fouc":!0,"data-ampdevmode":n?"true":void 0},r.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{display:block}"}}))),I,y&&r.default.createElement("meta",{name:"next-font-preconnect"}),!p&&o(),n&&r.default.createElement(r.default.Fragment,null,r.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"}),!C&&r.default.createElement("link",{rel:"canonical",href:i+a.cleanAmpPath(l)}),r.default.createElement("link",{rel:"preload",as:"script",href:"https://cdn.ampproject.org/v0.js"}),r.default.createElement(b,{styles:e}),r.default.createElement("style",{"amp-boilerplate":"",dangerouslySetInnerHTML:{__html:"body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}"}}),r.default.createElement("noscript",null,r.default.createElement("style",{"amp-boilerplate":"",dangerouslySetInnerHTML:{__html:"body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}"}})),r.default.createElement("script",{async:!0,src:"https://cdn.ampproject.org/v0.js"})),!n&&r.default.createElement(r.default.Fragment,null,!k&&s&&r.default.createElement("link",{rel:"amphtml",href:i+_(t,l)}),!h&&this.getCssLinks(P),!h&&r.default.createElement("noscript",{"data-n-css":null!==(S=this.props.nonce)&&void 0!==S?S:""}),g&&r.default.createElement("meta",{name:"next-image-preload"}),!p&&d(),!f&&!x&&this.getPolyfillScripts(),!p&&u(),h&&this.getCssLinks(P),h&&r.default.createElement("noscript",{"data-n-css":null!==(j=this.props.nonce)&&void 0!==j?j:""}),this.context.isDevelopment&&r.default.createElement("noscript",{id:"__next_css__DO_NOT_USE__"}),e||null),r.default.createElement(r.default.Fragment,{},...c||[]))};return r.default.createElement(M,null)}}function E(){const{docComponentsRendered:e}=r.useContext(i.HtmlContext);return e.Main=!0,r.default.createElement("next-js-internal-body-render-target",null)}t.Head=x,x.contextType=i.HtmlContext;class O extends r.Component{getDynamicChunks(e){return h(this.context,this.props,e)}getPreNextScripts(){return m(this.context,this.props)}getScripts(e){return y(this.context,this.props,e)}getPolyfillScripts(){return f(this.context,this.props)}static getInlineScriptSource(e){const{__NEXT_DATA__:t}=e;try{const e=JSON.stringify(t);return l.htmlEscapeJsonString(e)}catch(e){if(d.default(e)&&e.message.indexOf("circular structure"))throw new Error(`Circular structure in "getInitialProps" result of page "${t.page}". https://nextjs.org/docs/messages/circular-structure`);throw e}}render(){const{assetPrefix:e,inAmpMode:t,buildManifest:n,unstable_runtimeJS:s,docComponentsRendered:i,devOnlyCacheBusterQueryString:o,disableOptimizedLoading:a,useMaybeDeferContent:l,crossOrigin:c}=this.context,d=!1===s;i.NextScript=!0;const u=()=>{const[,s]=l("NEXT_SCRIPT",(()=>{if(t){const t=[...n.devFiles,...n.polyfillFiles,...n.ampDevFiles];return r.default.createElement(r.default.Fragment,null,d?null:r.default.createElement("script",{id:"__NEXT_DATA__",type:"application/json",nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||c,dangerouslySetInnerHTML:{__html:O.getInlineScriptSource(this.context)},"data-ampdevmode":!0}),t.map((t=>r.default.createElement("script",{key:t,src:`${e}/_next/${t}${o}`,nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||c,"data-ampdevmode":!0}))))}const s=p(this.context.buildManifest,this.context.__NEXT_DATA__.page,t);return r.default.createElement(r.default.Fragment,null,!d&&n.devFiles?n.devFiles.map((t=>r.default.createElement("script",{key:t,src:`${e}/_next/${encodeURI(t)}${o}`,nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||c}))):null,d?null:r.default.createElement("script",{id:"__NEXT_DATA__",type:"application/json",nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||c,dangerouslySetInnerHTML:{__html:O.getInlineScriptSource(this.context)}}),a&&!d&&this.getPolyfillScripts(),a&&!d&&this.getPreNextScripts(),a&&!d&&this.getDynamicChunks(s),a&&!d&&this.getScripts(s))}));return t?null:s};return r.default.createElement(u,null)}}function _(e,t){return e||`${t}${t.includes("?")?"&":"?"}amp=1`}t.NextScript=O,O.contextType=i.HtmlContext,O.safariNomoduleFix='!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();'},208:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(997),s=n(859);class i extends s.default{render(){return(0,r.jsxs)(s.Html,{children:[(0,r.jsxs)(s.Head,{children:[r.jsx("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),r.jsx("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",crossOrigin:"anonymous"}),r.jsx("link",{rel:"shortcut icon",href:"assets/images/fav.png",type:"image/x-icon"}),r.jsx("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"})]}),(0,r.jsxs)("body",{children:[r.jsx(s.Main,{}),r.jsx(s.NextScript,{})]})]})}}const o=i},676:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=s,t.getProperError=function(e){if(s(e))return e;0;return new Error(r.isPlainObject(e)?JSON.stringify(e):e+"")};var r=n(524);function s(e){return"object"==typeof e&&null!==e&&"name"in e&&"message"in e}},859:(e,t,n)=>{e.exports=n(105)},140:e=>{"use strict";e.exports=require("next/dist/server/get-page-files.js")},716:e=>{"use strict";e.exports=require("next/dist/server/htmlescape.js")},368:e=>{"use strict";e.exports=require("next/dist/server/utils.js")},724:e=>{"use strict";e.exports=require("next/dist/shared/lib/constants.js")},796:e=>{"use strict";e.exports=require("next/dist/shared/lib/head-manager-context.js")},524:e=>{"use strict";e.exports=require("next/dist/shared/lib/is-plain-object.js")},232:e=>{"use strict";e.exports=require("next/dist/shared/lib/utils.js")},689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")}};var t=require("../webpack-runtime.js");t.C(e);var n,r=(n=208,t(t.s=n));module.exports=r})();