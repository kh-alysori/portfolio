"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[581],{8149:function(e,t,n){n.d(t,{M:function(){return r}});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},1584:function(e,t,n){n.d(t,{F:function(){return o},e:function(){return i}});var r=n(2265);function o(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function i(...e){return r.useCallback(o(...e),e)}},8324:function(e,t,n){n.d(t,{b:function(){return u},k:function(){return i}});var r=n(2265),o=n(7437);function i(e,t){let n=r.createContext(t);function i(e){let{children:t,...i}=e,u=r.useMemo(()=>i,Object.values(i));return(0,o.jsx)(n.Provider,{value:u,children:t})}return i.displayName=e+"Provider",[i,function(o){let i=r.useContext(n);if(i)return i;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function u(e,t=[]){let n=[],i=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return i.scopeName=e,[function(t,i){let u=r.createContext(i),l=n.length;function s(t){let{scope:n,children:i,...s}=t,a=n?.[e][l]||u,c=r.useMemo(()=>s,Object.values(s));return(0,o.jsx)(a.Provider,{value:c,children:i})}return n=[...n,i],s.displayName=t+"Provider",[s,function(n,o){let s=o?.[e][l]||u,a=r.useContext(s);if(a)return a;if(void 0!==i)return i;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(i,...t)]}},2358:function(e,t,n){n.d(t,{XB:function(){return d}});var r,o=n(2265),i=n(8149),u=n(5171),l=n(1584),s=n(5137),a=n(7437),c="dismissableLayer.update",f=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),d=o.forwardRef((e,t)=>{var n,d;let{disableOutsidePointerEvents:m=!1,onEscapeKeyDown:y,onPointerDownOutside:b,onFocusOutside:h,onInteractOutside:E,onDismiss:g,...w}=e,O=o.useContext(f),[P,j]=o.useState(null),C=null!==(d=null==P?void 0:P.ownerDocument)&&void 0!==d?d:null===(n=globalThis)||void 0===n?void 0:n.document,[,x]=o.useState({}),N=(0,l.e)(t,e=>j(e)),D=Array.from(O.layers),[W]=[...O.layersWithOutsidePointerEventsDisabled].slice(-1),S=D.indexOf(W),L=P?D.indexOf(P):-1,k=O.layersWithOutsidePointerEventsDisabled.size>0,R=L>=S,T=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,s.W)(e),i=o.useRef(!1),u=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!i.current){let t=function(){p("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",u.current),u.current=t,n.addEventListener("click",u.current,{once:!0})):t()}else n.removeEventListener("click",u.current);i.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",u.current)}},[n,r]),{onPointerDownCapture:()=>i.current=!0}}(e=>{let t=e.target,n=[...O.branches].some(e=>e.contains(t));!R||n||(null==b||b(e),null==E||E(e),e.defaultPrevented||null==g||g())},C),_=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,s.W)(e),i=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!i.current&&p("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}(e=>{let t=e.target;[...O.branches].some(e=>e.contains(t))||(null==h||h(e),null==E||E(e),e.defaultPrevented||null==g||g())},C);return!function(e,t=globalThis?.document){let n=(0,s.W)(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{L!==O.layers.size-1||(null==y||y(e),!e.defaultPrevented&&g&&(e.preventDefault(),g()))},C),o.useEffect(()=>{if(P)return m&&(0===O.layersWithOutsidePointerEventsDisabled.size&&(r=C.body.style.pointerEvents,C.body.style.pointerEvents="none"),O.layersWithOutsidePointerEventsDisabled.add(P)),O.layers.add(P),v(),()=>{m&&1===O.layersWithOutsidePointerEventsDisabled.size&&(C.body.style.pointerEvents=r)}},[P,C,m,O]),o.useEffect(()=>()=>{P&&(O.layers.delete(P),O.layersWithOutsidePointerEventsDisabled.delete(P),v())},[P,O]),o.useEffect(()=>{let e=()=>x({});return document.addEventListener(c,e),()=>document.removeEventListener(c,e)},[]),(0,a.jsx)(u.WV.div,{...w,ref:N,style:{pointerEvents:k?R?"auto":"none":void 0,...e.style},onFocusCapture:(0,i.M)(e.onFocusCapture,_.onFocusCapture),onBlurCapture:(0,i.M)(e.onBlurCapture,_.onBlurCapture),onPointerDownCapture:(0,i.M)(e.onPointerDownCapture,T.onPointerDownCapture)})});function v(){let e=new CustomEvent(c);document.dispatchEvent(e)}function p(e,t,n,r){let{discrete:o}=r,i=n.originalEvent.target,l=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),o?(0,u.jH)(i,l):i.dispatchEvent(l)}d.displayName="DismissableLayer",o.forwardRef((e,t)=>{let n=o.useContext(f),r=o.useRef(null),i=(0,l.e)(t,r);return o.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,a.jsx)(u.WV.div,{...e,ref:i})}).displayName="DismissableLayerBranch"},3201:function(e,t,n){n.d(t,{M:function(){return s}});var r,o=n(2265),i=n(1336),u=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),l=0;function s(e){let[t,n]=o.useState(u());return(0,i.b)(()=>{e||n(e=>e??String(l++))},[e]),e||(t?`radix-${t}`:"")}},6935:function(e,t,n){n.d(t,{h:function(){return s}});var r=n(2265),o=n(4887),i=n(5171),u=n(1336),l=n(7437),s=r.forwardRef((e,t)=>{var n,s;let{container:a,...c}=e,[f,d]=r.useState(!1);(0,u.b)(()=>d(!0),[]);let v=a||f&&(null===(s=globalThis)||void 0===s?void 0:null===(n=s.document)||void 0===n?void 0:n.body);return v?o.createPortal((0,l.jsx)(i.WV.div,{...c,ref:t}),v):null});s.displayName="Portal"},5171:function(e,t,n){n.d(t,{WV:function(){return l},jH:function(){return s}});var r=n(2265),o=n(4887),i=n(1538),u=n(7437),l=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...o}=e,l=r?i.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,u.jsx)(l,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function s(e,t){e&&o.flushSync(()=>e.dispatchEvent(t))}},1538:function(e,t,n){n.d(t,{A4:function(){return s},g7:function(){return u}});var r=n(2265),o=n(1584),i=n(7437),u=r.forwardRef((e,t)=>{let{children:n,...o}=e,u=r.Children.toArray(n),s=u.find(a);if(s){let e=s.props.children,n=u.map(t=>t!==s?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,i.jsx)(l,{...o,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,i.jsx)(l,{...o,ref:t,children:n})});u.displayName="Slot";var l=r.forwardRef((e,t)=>{let{children:n,...i}=e;if(r.isValidElement(n)){let e,u;let l=(e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.props.ref:n.props.ref||n.ref;return r.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...e)=>{i(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}(i,n.props),ref:t?(0,o.F)(t,l):l})}return r.Children.count(n)>1?r.Children.only(null):null});l.displayName="SlotClone";var s=({children:e})=>(0,i.jsx)(i.Fragment,{children:e});function a(e){return r.isValidElement(e)&&e.type===s}},5137:function(e,t,n){n.d(t,{W:function(){return o}});var r=n(2265);function o(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},1715:function(e,t,n){n.d(t,{T:function(){return i}});var r=n(2265),o=n(5137);function i({prop:e,defaultProp:t,onChange:n=()=>{}}){let[i,u]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[i]=n,u=r.useRef(i),l=(0,o.W)(t);return r.useEffect(()=>{u.current!==i&&(l(i),u.current=i)},[i,u,l]),n}({defaultProp:t,onChange:n}),l=void 0!==e,s=l?e:i,a=(0,o.W)(n);return[s,r.useCallback(t=>{if(l){let n="function"==typeof t?t(e):t;n!==e&&a(n)}else u(t)},[l,e,u,a])]}},1336:function(e,t,n){n.d(t,{b:function(){return o}});var r=n(2265),o=globalThis?.document?r.useLayoutEffect:()=>{}},1810:function(e,t,n){n.d(t,{w_:function(){return c}});var r=n(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),u=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){var r,o;r=t,o=n[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(r))in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function c(e){return t=>r.createElement(f,l({attr:a({},e.attr)},t),function e(t){return t&&t.map((t,n)=>r.createElement(t.tag,a({key:n},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var n,{attr:o,size:i,title:s}=e,c=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,u),f=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==i?r.createElement(i.Consumer,null,e=>t(e)):t(o)}}}]);