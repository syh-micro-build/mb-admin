var pe=Object.defineProperty,ce=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var K=(e,t,n)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))ue.call(t,n)&&K(e,n,t[n]);if(j)for(var n of j(t))me.call(t,n)&&K(e,n,t[n]);return e},N=(e,t)=>ce(e,ve(t));import{_ as he}from"./ContentWrap.vue_vue_type_script_setup_true_lang-BufG6Jwo.js";import{_ as we}from"./Button.vue_vue_type_script_setup_true_lang-Zi7YaU9y.js";import{y as fe,z as ge,K as ye,L as V,O as xe,u as G,a4 as be}from"./vue-chunks-ChjHxF1G.js";import"./Icon-CdhVCYkm.js";import"./index-DHbc4UQl.js";import"./element-plus-CUBv5pjL.js";/* empty css                *//* empty css                  */let F={};function q(e={}){F=k({animate:!0,allowClose:!0,overlayOpacity:.7,smoothScroll:!1,disableActiveInteraction:!1,showProgress:!1,stagePadding:10,stageRadius:5,popoverOffset:10,showButtons:["next","previous","close"],disableButtons:[],overlayColor:"#000"},e)}function l(e){return e?F[e]:F}function I(e,t,n,i){return(e/=i/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}function U(e){const t='a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';return e.flatMap(n=>{const i=n.matches(t),o=Array.from(n.querySelectorAll(t));return[...i?[n]:[],...o]}).filter(n=>getComputedStyle(n).pointerEvents!=="none"&&Le(n))}function ee(e){if(!e||_e(e))return;const t=l("smoothScroll");e.scrollIntoView({behavior:!t||Ce(e)?"auto":"smooth",inline:"center",block:"center"})}function Ce(e){if(!e||!e.parentElement)return;const t=e.parentElement;return t.scrollHeight>t.clientHeight}function _e(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function Le(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}let z={};function b(e,t){z[e]=t}function d(e){return e?z[e]:z}function X(){z={}}let O={};function R(e,t){O[e]=t}function B(e){var t;(t=O[e])==null||t.call(O)}function Ee(){O={}}function Pe(e,t,n,i){let o=d("__activeStagePosition");const a=o||n.getBoundingClientRect(),m=i.getBoundingClientRect(),h=I(e,a.x,m.x-a.x,t),s=I(e,a.y,m.y-a.y,t),u=I(e,a.width,m.width-a.width,t),r=I(e,a.height,m.height-a.height,t);o={x:h,y:s,width:u,height:r},ne(o),b("__activeStagePosition",o)}function te(e){if(!e)return;const t=e.getBoundingClientRect(),n={x:t.x,y:t.y,width:t.width,height:t.height};b("__activeStagePosition",n),ne(n)}function ke(){const e=d("__activeStagePosition"),t=d("__overlaySvg");if(!e)return;if(!t){console.warn("No stage svg found.");return}const n=window.innerWidth,i=window.innerHeight;t.setAttribute("viewBox",`0 0 ${n} ${i}`)}function $e(e){const t=Be(e);document.body.appendChild(t),re(t,n=>{n.target.tagName==="path"&&B("overlayClick")}),b("__overlaySvg",t)}function ne(e){const t=d("__overlaySvg");if(!t){$e(e);return}const n=t.firstElementChild;if((n==null?void 0:n.tagName)!=="path")throw new Error("no path element found in stage svg");n.setAttribute("d",oe(e))}function Be(e){const t=window.innerWidth,n=window.innerHeight,i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.classList.add("driver-overlay","driver-overlay-animated"),i.setAttribute("viewBox",`0 0 ${t} ${n}`),i.setAttribute("xmlSpace","preserve"),i.setAttribute("xmlnsXlink","http://www.w3.org/1999/xlink"),i.setAttribute("version","1.1"),i.setAttribute("preserveAspectRatio","xMinYMin slice"),i.style.fillRule="evenodd",i.style.clipRule="evenodd",i.style.strokeLinejoin="round",i.style.strokeMiterlimit="2",i.style.zIndex="10000",i.style.position="fixed",i.style.top="0",i.style.left="0",i.style.width="100%",i.style.height="100%";const o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("d",oe(e)),o.style.fill=l("overlayColor")||"rgb(0,0,0)",o.style.opacity=`${l("overlayOpacity")}`,o.style.pointerEvents="auto",o.style.cursor="auto",i.appendChild(o),i}function oe(e){const t=window.innerWidth,n=window.innerHeight,i=l("stagePadding")||0,o=l("stageRadius")||0,a=e.width+i*2,m=e.height+i*2,h=Math.min(o,a/2,m/2),s=Math.floor(Math.max(h,0)),u=e.x-i+s,r=e.y-i,p=a-s*2,c=m-s*2;return`M${t},0L0,0L0,${n}L${t},${n}L${t},0Z
    M${u},${r} h${p} a${s},${s} 0 0 1 ${s},${s} v${c} a${s},${s} 0 0 1 -${s},${s} h-${p} a${s},${s} 0 0 1 -${s},-${s} v-${c} a${s},${s} 0 0 1 ${s},-${s} z`}function Ae(){const e=d("__overlaySvg");e&&e.remove()}function Se(){const e=document.getElementById("driver-dummy-element");if(e)return e;let t=document.createElement("div");return t.id="driver-dummy-element",t.style.width="0",t.style.height="0",t.style.pointerEvents="none",t.style.opacity="0",t.style.position="fixed",t.style.top="50%",t.style.left="50%",document.body.appendChild(t),t}function Y(e){const{element:t}=e;let n=typeof t=="string"?document.querySelector(t):t;n||(n=Se()),Me(n,e)}function He(){const e=d("__activeElement"),t=d("__activeStep");e&&(te(e),ke(),le(e,t))}function Me(e,t){const n=Date.now(),i=d("__activeStep"),o=d("__activeElement")||e,a=!o||o===e,m=e.id==="driver-dummy-element",h=o.id==="driver-dummy-element",s=l("animate"),u=t.onHighlightStarted||l("onHighlightStarted"),r=(t==null?void 0:t.onHighlighted)||l("onHighlighted"),p=(i==null?void 0:i.onDeselected)||l("onDeselected"),c=l(),w=d();!a&&p&&p(h?void 0:o,i,{config:c,state:w}),u&&u(m?void 0:e,t,{config:c,state:w});const g=!a&&s;let f=!1;Ie(),b("previousStep",i),b("previousElement",o),b("activeStep",t),b("activeElement",e);const v=()=>{if(d("__transitionCallback")!==v)return;const y=Date.now()-n,L=400-y<=400/2;t.popover&&L&&!f&&g&&(Z(e,t),f=!0),l("animate")&&y<400?Pe(y,400,o,e):(te(e),r&&r(m?void 0:e,t,{config:l(),state:d()}),b("__transitionCallback",void 0),b("__previousStep",i),b("__previousElement",o),b("__activeStep",t),b("__activeElement",e)),window.requestAnimationFrame(v)};b("__transitionCallback",v),window.requestAnimationFrame(v),ee(e),!g&&t.popover&&Z(e,t),o.classList.remove("driver-active-element","driver-no-interaction"),o.removeAttribute("aria-haspopup"),o.removeAttribute("aria-expanded"),o.removeAttribute("aria-controls"),l("disableActiveInteraction")&&e.classList.add("driver-no-interaction"),e.classList.add("driver-active-element"),e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded","true"),e.setAttribute("aria-controls","driver-popover-content")}function Te(){var e;(e=document.getElementById("driver-dummy-element"))==null||e.remove(),document.querySelectorAll(".driver-active-element").forEach(t=>{t.classList.remove("driver-active-element","driver-no-interaction"),t.removeAttribute("aria-haspopup"),t.removeAttribute("aria-expanded"),t.removeAttribute("aria-controls")})}function A(){const e=d("__resizeTimeout");e&&window.cancelAnimationFrame(e),b("__resizeTimeout",window.requestAnimationFrame(He))}function De(e){var t;if(!d("isInitialized")||!(e.key==="Tab"||e.keyCode===9))return;const n=d("__activeElement"),i=(t=d("popover"))==null?void 0:t.wrapper,o=U([...i?[i]:[],...n?[n]:[]]),a=o[0],m=o[o.length-1];if(e.preventDefault(),e.shiftKey){const h=o[o.indexOf(document.activeElement)-1]||m;h==null||h.focus()}else{const h=o[o.indexOf(document.activeElement)+1]||a;h==null||h.focus()}}function ie(e){var t;((t=l("allowKeyboardControl"))==null||t)&&(e.key==="Escape"?B("escapePress"):e.key==="ArrowRight"?B("arrowRightPress"):e.key==="ArrowLeft"&&B("arrowLeftPress"))}function re(e,t,n){const i=(o,a)=>{const m=o.target;e.contains(m)&&((!n||n(m))&&(o.preventDefault(),o.stopPropagation(),o.stopImmediatePropagation()),a==null||a(o))};document.addEventListener("pointerdown",i,!0),document.addEventListener("mousedown",i,!0),document.addEventListener("pointerup",i,!0),document.addEventListener("mouseup",i,!0),document.addEventListener("click",o=>{i(o,t)},!0)}function We(){window.addEventListener("keyup",ie,!1),window.addEventListener("keydown",De,!1),window.addEventListener("resize",A),window.addEventListener("scroll",A)}function Ne(){window.removeEventListener("keyup",ie),window.removeEventListener("resize",A),window.removeEventListener("scroll",A)}function Ie(){const e=d("popover");e&&(e.wrapper.style.display="none")}function Z(e,t){var n,i;let o=d("popover");o&&document.body.removeChild(o.wrapper),o=ze(),document.body.appendChild(o.wrapper);const{title:a,description:m,showButtons:h,disableButtons:s,showProgress:u,nextBtnText:r=l("nextBtnText")||"Next &rarr;",prevBtnText:p=l("prevBtnText")||"&larr; Previous",progressText:c=l("progressText")||"{current} of {total}"}=t.popover||{};o.nextButton.innerHTML=r,o.previousButton.innerHTML=p,o.progress.innerHTML=c,a?(o.title.innerHTML=a,o.title.style.display="block"):o.title.style.display="none",m?(o.description.innerHTML=m,o.description.style.display="block"):o.description.style.display="none";const w=h||l("showButtons"),g=u||l("showProgress")||!1,f=(w==null?void 0:w.includes("next"))||(w==null?void 0:w.includes("previous"))||g;o.closeButton.style.display=w.includes("close")?"block":"none",f?(o.footer.style.display="flex",o.progress.style.display=g?"block":"none",o.nextButton.style.display=w.includes("next")?"block":"none",o.previousButton.style.display=w.includes("previous")?"block":"none"):o.footer.style.display="none";const v=s||l("disableButtons")||[];v!=null&&v.includes("next")&&(o.nextButton.disabled=!0,o.nextButton.classList.add("driver-popover-btn-disabled")),v!=null&&v.includes("previous")&&(o.previousButton.disabled=!0,o.previousButton.classList.add("driver-popover-btn-disabled")),v!=null&&v.includes("close")&&(o.closeButton.disabled=!0,o.closeButton.classList.add("driver-popover-btn-disabled"));const y=o.wrapper;y.style.display="block",y.style.left="",y.style.top="",y.style.bottom="",y.style.right="",y.id="driver-popover-content",y.setAttribute("role","dialog"),y.setAttribute("aria-labelledby","driver-popover-title"),y.setAttribute("aria-describedby","driver-popover-description");const L=o.arrow;L.className="driver-popover-arrow";const E=((n=t.popover)==null?void 0:n.popoverClass)||l("popoverClass")||"";y.className=`driver-popover ${E}`.trim(),re(o.wrapper,P=>{var S,H,M;const $=P.target,T=((S=t.popover)==null?void 0:S.onNextClick)||l("onNextClick"),D=((H=t.popover)==null?void 0:H.onPrevClick)||l("onPrevClick"),W=((M=t.popover)==null?void 0:M.onCloseClick)||l("onCloseClick");if($.classList.contains("driver-popover-next-btn"))return T?T(e,t,{config:l(),state:d()}):B("nextClick");if($.classList.contains("driver-popover-prev-btn"))return D?D(e,t,{config:l(),state:d()}):B("prevClick");if($.classList.contains("driver-popover-close-btn"))return W?W(e,t,{config:l(),state:d()}):B("closeClick")},P=>!(o!=null&&o.description.contains(P))&&!(o!=null&&o.title.contains(P))&&typeof P.className=="string"&&P.className.includes("driver-popover")),b("popover",o);const x=((i=t.popover)==null?void 0:i.onPopoverRender)||l("onPopoverRender");x&&x(o,{config:l(),state:d()}),le(e,t),ee(y);const C=e.classList.contains("driver-dummy-element"),_=U([y,...C?[]:[e]]);_.length>0&&_[0].focus()}function se(){const e=d("popover");if(!(e!=null&&e.wrapper))return;const t=e.wrapper.getBoundingClientRect(),n=l("stagePadding")||0,i=l("popoverOffset")||0;return{width:t.width+n+i,height:t.height+n+i,realWidth:t.width,realHeight:t.height}}function J(e,t){const{elementDimensions:n,popoverDimensions:i,popoverPadding:o,popoverArrowDimensions:a}=t;return e==="start"?Math.max(Math.min(n.top-o,window.innerHeight-i.realHeight-a.width),a.width):e==="end"?Math.max(Math.min(n.top-(i==null?void 0:i.realHeight)+n.height+o,window.innerHeight-(i==null?void 0:i.realHeight)-a.width),a.width):e==="center"?Math.max(Math.min(n.top+n.height/2-(i==null?void 0:i.realHeight)/2,window.innerHeight-(i==null?void 0:i.realHeight)-a.width),a.width):0}function Q(e,t){const{elementDimensions:n,popoverDimensions:i,popoverPadding:o,popoverArrowDimensions:a}=t;return e==="start"?Math.max(Math.min(n.left-o,window.innerWidth-i.realWidth-a.width),a.width):e==="end"?Math.max(Math.min(n.left-(i==null?void 0:i.realWidth)+n.width+o,window.innerWidth-(i==null?void 0:i.realWidth)-a.width),a.width):e==="center"?Math.max(Math.min(n.left+n.width/2-(i==null?void 0:i.realWidth)/2,window.innerWidth-(i==null?void 0:i.realWidth)-a.width),a.width):0}function le(e,t){const n=d("popover");if(!n)return;const{align:i="start",side:o="left"}=(t==null?void 0:t.popover)||{},a=i,m=e.id==="driver-dummy-element"?"over":o,h=l("stagePadding")||0,s=se(),u=n.arrow.getBoundingClientRect(),r=e.getBoundingClientRect(),p=r.top-s.height;let c=p>=0;const w=window.innerHeight-(r.bottom+s.height);let g=w>=0;const f=r.left-s.width;let v=f>=0;const y=window.innerWidth-(r.right+s.width);let L=y>=0;const E=!c&&!g&&!v&&!L;let x=m;if(m==="top"&&c?L=v=g=!1:m==="bottom"&&g?L=v=c=!1:m==="left"&&v?L=c=g=!1:m==="right"&&L&&(v=c=g=!1),m==="over"){const C=window.innerWidth/2-s.realWidth/2,_=window.innerHeight/2-s.realHeight/2;n.wrapper.style.left=`${C}px`,n.wrapper.style.right="auto",n.wrapper.style.top=`${_}px`,n.wrapper.style.bottom="auto"}else if(E){const C=window.innerWidth/2-(s==null?void 0:s.realWidth)/2,_=10;n.wrapper.style.left=`${C}px`,n.wrapper.style.right="auto",n.wrapper.style.bottom=`${_}px`,n.wrapper.style.top="auto"}else if(v){const C=Math.min(f,window.innerWidth-(s==null?void 0:s.realWidth)-u.width),_=J(a,{elementDimensions:r,popoverDimensions:s,popoverPadding:h,popoverArrowDimensions:u});n.wrapper.style.left=`${C}px`,n.wrapper.style.top=`${_}px`,n.wrapper.style.bottom="auto",n.wrapper.style.right="auto",x="left"}else if(L){const C=Math.min(y,window.innerWidth-(s==null?void 0:s.realWidth)-u.width),_=J(a,{elementDimensions:r,popoverDimensions:s,popoverPadding:h,popoverArrowDimensions:u});n.wrapper.style.right=`${C}px`,n.wrapper.style.top=`${_}px`,n.wrapper.style.bottom="auto",n.wrapper.style.left="auto",x="right"}else if(c){const C=Math.min(p,window.innerHeight-s.realHeight-u.width);let _=Q(a,{elementDimensions:r,popoverDimensions:s,popoverPadding:h,popoverArrowDimensions:u});n.wrapper.style.top=`${C}px`,n.wrapper.style.left=`${_}px`,n.wrapper.style.bottom="auto",n.wrapper.style.right="auto",x="top"}else if(g){const C=Math.min(w,window.innerHeight-(s==null?void 0:s.realHeight)-u.width);let _=Q(a,{elementDimensions:r,popoverDimensions:s,popoverPadding:h,popoverArrowDimensions:u});n.wrapper.style.left=`${_}px`,n.wrapper.style.bottom=`${C}px`,n.wrapper.style.top="auto",n.wrapper.style.right="auto",x="bottom"}E?n.arrow.classList.add("driver-popover-arrow-none"):Re(a,x,e)}function Re(e,t,n){const i=d("popover");if(!i)return;const o=n.getBoundingClientRect(),a=se(),m=i.arrow,h=a.width,s=window.innerWidth,u=o.width,r=o.left,p=a.height,c=window.innerHeight,w=o.top,g=o.height;m.className="driver-popover-arrow";let f=t,v=e;t==="top"?(r+u<=0?(f="right",v="end"):r+u-h<=0&&(f="top",v="start"),r>=s?(f="left",v="end"):r+h>=s&&(f="top",v="end")):t==="bottom"?(r+u<=0?(f="right",v="start"):r+u-h<=0&&(f="bottom",v="start"),r>=s?(f="left",v="start"):r+h>=s&&(f="bottom",v="end")):t==="left"?(w+g<=0?(f="bottom",v="end"):w+g-p<=0&&(f="left",v="start"),w>=c?(f="top",v="end"):w+p>=c&&(f="left",v="end")):t==="right"&&(w+g<=0?(f="bottom",v="start"):w+g-p<=0&&(f="right",v="start"),w>=c?(f="top",v="start"):w+p>=c&&(f="right",v="end")),f?(m.classList.add(`driver-popover-arrow-side-${f}`),m.classList.add(`driver-popover-arrow-align-${v}`)):m.classList.add("driver-popover-arrow-none")}function ze(){const e=document.createElement("div");e.classList.add("driver-popover");const t=document.createElement("div");t.classList.add("driver-popover-arrow");const n=document.createElement("header");n.id="driver-popover-title",n.classList.add("driver-popover-title"),n.style.display="none",n.innerText="Popover Title";const i=document.createElement("div");i.id="driver-popover-description",i.classList.add("driver-popover-description"),i.style.display="none",i.innerText="Popover description is here";const o=document.createElement("button");o.type="button",o.classList.add("driver-popover-close-btn"),o.setAttribute("aria-label","Close"),o.innerHTML="&times;";const a=document.createElement("footer");a.classList.add("driver-popover-footer");const m=document.createElement("span");m.classList.add("driver-popover-progress-text"),m.innerText="";const h=document.createElement("span");h.classList.add("driver-popover-navigation-btns");const s=document.createElement("button");s.type="button",s.classList.add("driver-popover-prev-btn"),s.innerHTML="&larr; Previous";const u=document.createElement("button");return u.type="button",u.classList.add("driver-popover-next-btn"),u.innerHTML="Next &rarr;",h.appendChild(s),h.appendChild(u),a.appendChild(m),a.appendChild(h),e.appendChild(o),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(a),{wrapper:e,arrow:t,title:n,description:i,footer:a,previousButton:s,nextButton:u,closeButton:o,footerButtons:h,progress:m}}function Oe(){var e;const t=d("popover");t&&((e=t.wrapper.parentElement)==null||e.removeChild(t.wrapper))}function qe(e={}){q(e);function t(){l("allowClose")&&u()}function n(){const r=d("activeIndex"),p=l("steps")||[];if(typeof r=="undefined")return;const c=r+1;p[c]?s(c):u()}function i(){const r=d("activeIndex"),p=l("steps")||[];if(typeof r=="undefined")return;const c=r-1;p[c]?s(c):u()}function o(r){(l("steps")||[])[r]?s(r):u()}function a(){var r;if(d("__transitionCallback"))return;const p=d("activeIndex"),c=d("__activeStep"),w=d("__activeElement");if(typeof p=="undefined"||typeof c=="undefined"||typeof d("activeIndex")=="undefined")return;const g=((r=c.popover)==null?void 0:r.onPrevClick)||l("onPrevClick");if(g)return g(w,c,{config:l(),state:d()});i()}function m(){var r;if(d("__transitionCallback"))return;const p=d("activeIndex"),c=d("__activeStep"),w=d("__activeElement");if(typeof p=="undefined"||typeof c=="undefined")return;const g=((r=c.popover)==null?void 0:r.onNextClick)||l("onNextClick");if(g)return g(w,c,{config:l(),state:d()});n()}function h(){d("isInitialized")||(b("isInitialized",!0),document.body.classList.add("driver-active",l("animate")?"driver-fade":"driver-simple"),We(),R("overlayClick",t),R("escapePress",t),R("arrowLeftPress",a),R("arrowRightPress",m))}function s(r=0){var p,c,w,g,f,v,y,L;const E=l("steps");if(!E){console.error("No steps to drive through"),u();return}if(!E[r]){u();return}b("__activeOnDestroyed",document.activeElement),b("activeIndex",r);const x=E[r],C=E[r+1],_=E[r-1],P=((p=x.popover)==null?void 0:p.doneBtnText)||l("doneBtnText")||"Done",S=l("allowClose"),H=typeof((c=x.popover)==null?void 0:c.showProgress)!="undefined"?(w=x.popover)==null?void 0:w.showProgress:l("showProgress"),M=(((g=x.popover)==null?void 0:g.progressText)||l("progressText")||"{{current}} of {{total}}").replace("{{current}}",`${r+1}`).replace("{{total}}",`${E.length}`),$=((f=x.popover)==null?void 0:f.showButtons)||l("showButtons"),T=["next","previous",...S?["close"]:[]].filter(ae=>!($!=null&&$.length)||$.includes(ae)),D=((v=x.popover)==null?void 0:v.onNextClick)||l("onNextClick"),W=((y=x.popover)==null?void 0:y.onPrevClick)||l("onPrevClick"),de=((L=x.popover)==null?void 0:L.onCloseClick)||l("onCloseClick");Y(N(k({},x),{popover:k({showButtons:T,nextBtnText:C?void 0:P,disableButtons:[..._?[]:["previous"]],showProgress:H,progressText:M,onNextClick:D||(()=>{C?s(r+1):u()}),onPrevClick:W||(()=>{s(r-1)}),onCloseClick:de||(()=>{u()})},(x==null?void 0:x.popover)||{})}))}function u(r=!0){const p=d("__activeElement"),c=d("__activeStep"),w=d("__activeOnDestroyed"),g=l("onDestroyStarted");if(r&&g){const y=!p||(p==null?void 0:p.id)==="driver-dummy-element";g(y?void 0:p,c,{config:l(),state:d()});return}const f=(c==null?void 0:c.onDeselected)||l("onDeselected"),v=l("onDestroyed");if(document.body.classList.remove("driver-active","driver-fade","driver-simple"),Ne(),Oe(),Te(),Ae(),Ee(),X(),p&&c){const y=p.id==="driver-dummy-element";f&&f(y?void 0:p,c,{config:l(),state:d()}),v&&v(y?void 0:p,c,{config:l(),state:d()})}w&&w.focus()}return{isActive:()=>d("isInitialized")||!1,refresh:A,drive:(r=0)=>{h(),s(r)},setConfig:q,setSteps:r=>{X(),q(N(k({},l()),{steps:r}))},getConfig:l,getState:d,getActiveIndex:()=>d("activeIndex"),isFirstStep:()=>d("activeIndex")===0,isLastStep:()=>{const r=l("steps")||[],p=d("activeIndex");return p!==void 0&&p===r.length-1},getActiveStep:()=>d("activeStep"),getActiveElement:()=>d("activeElement"),getPreviousElement:()=>d("previousElement"),getPreviousStep:()=>d("previousStep"),moveNext:n,movePrevious:i,moveTo:o,hasNextStep:()=>{const r=l("steps")||[],p=d("activeIndex");return p!==void 0&&r[p+1]},hasPreviousStep:()=>{const r=l("steps")||[],p=d("activeIndex");return p!==void 0&&r[p-1]},highlight:r=>{h(),Y(N(k({},r),{popover:r.popover?k({showButtons:[],showProgress:!1,progressText:""},r.popover):void 0}))},destroy:()=>{u(!1)}}}const Fe=e=>{const t=qe({showProgress:!0,nextBtnText:"下一步",prevBtnText:"上一步",doneBtnText:"结束",steps:[{element:"#menu",popover:{title:"菜单",description:"以路由的结构渲染的菜单栏",side:"right"}},{element:"#tool-header",popover:{title:"工具",description:"用于设置定制系统",side:"left"}},{element:"#tags-view",popover:{title:"标签页",description:"用于记录路由历史记录",side:"bottom"}}]});return k({},t)},Ue=fe({__name:"Guide",setup(e){const{drive:t}=Fe(),n=()=>{t()};return(i,o)=>(ge(),ye(G(he),{title:"引导页",message:"引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。引导页基于 driver.js"},{default:V(()=>[xe(G(we),{type:"primary",onClick:n},{default:V(()=>o[0]||(o[0]=[be("开始")])),_:1})]),_:1}))}});export{Ue as default};