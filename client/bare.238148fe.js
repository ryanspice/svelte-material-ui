import{K as t,S as e,i as n,s as r,_ as i,L as l,M as a,e as o,a as c,b as u,f as s,c as f,d,N as p,k as m,l as g,O as h,r as b,P as y,$ as v,a0 as _,Q as O,U as E,u as I,v as w,V as $,W as j,a1 as x,X as L,Y as P,Z as S,z as k}from"./client.a39e05ea.js";import{p as C}from"./prefixFilter.73eb3417.js";t(".mdc-form-field{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.01786em;text-decoration:inherit;text-transform:inherit;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{order:0;margin-right:auto;padding-left:4px}.mdc-form-field--align-end>label,.mdc-form-field[dir=rtl]>label,[dir=rtl] .mdc-form-field>label{margin-left:auto;padding-right:4px}.mdc-form-field--align-end>label{order:-1}.mdc-form-field--align-end[dir=rtl]>label,[dir=rtl] .mdc-form-field--align-end>label{margin-right:auto;padding-left:4px}.mdc-form-field .mdc-switch+label{margin-left:10px;margin-right:0}.mdc-form-field.mdc-form-field--align-end .mdc-switch+label,.mdc-form-field .mdc-switch+label[dir=rtl],[dir=rtl] .mdc-form-field .mdc-switch+label{margin-left:0;margin-right:10px}.mdc-form-field.mdc-form-field--align-end .mdc-switch+label[dir=rtl],[dir=rtl] .mdc-form-field.mdc-form-field--align-end .mdc-switch+label{margin-left:10px;margin-right:0}");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var R=function(t,e){return(R=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function H(t,e){function n(){this.constructor=t}R(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var A=function(){return(A=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function D(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,l=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=l.next()).done;)a.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(n=l.return)&&n.call(l)}finally{if(i)throw i.error}}return a}function F(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(D(arguments[e]));return t}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var M=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),z=function(){function t(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];this.root_=t,this.initialize.apply(this,F(n)),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new M({}))},t.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,e,n){this.root_.addEventListener(t,e,n)},t.prototype.unlisten=function(t,e,n){this.root_.removeEventListener(t,e,n)},t.prototype.emit=function(t,e,n){var r;void 0===n&&(n=!1),"function"==typeof CustomEvent?r=new CustomEvent(t,{bubbles:n,detail:e}):(r=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),this.root_.dispatchEvent(r)},t}(),T={ROOT:"mdc-form-field"},U={LABEL_SELECTOR:".mdc-form-field > label"},B=function(t){function e(n){var r=t.call(this,A({},e.defaultAdapter,n))||this;return r.clickHandler_=function(){return r.handleClick_()},r}return H(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return T},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return U},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.adapter_.registerInteractionHandler("click",this.clickHandler_)},e.prototype.destroy=function(){this.adapter_.deregisterInteractionHandler("click",this.clickHandler_)},e.prototype.handleClick_=function(){var t=this;this.adapter_.activateInputRipple(),requestAnimationFrame((function(){return t.adapter_.deactivateInputRipple()}))},e}(M),W=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return H(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"input",{get:function(){return this.input_},set:function(t){this.input_=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"label_",{get:function(){var t=B.strings.LABEL_SELECTOR;return this.root_.querySelector(t)},enumerable:!0,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this;return new B({activateInputRipple:function(){t.input_&&t.input_.ripple&&t.input_.ripple.activate()},deactivateInputRipple:function(){t.input_&&t.input_.ripple&&t.input_.ripple.deactivate()},deregisterInteractionHandler:function(e,n){t.label_&&t.label_.removeEventListener(e,n)},registerInteractionHandler:function(e,n){t.label_&&t.label_.addEventListener(e,n)}})},e}(z);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const q=t=>({}),V=t=>({});function K(t){let e,n,r,$,j,x,L,P;const S=t[10].default,k=i(S,t,t[9],null),R=t[10].label,H=i(R,t,t[9],V);let A=[{for:t[3]},l(C(t[7],"label$"),["use"])],D={};for(let t=0;t<A.length;t+=1)D=a(D,A[t]);let F=[{class:"\n    mdc-form-field\n    "+t[1]+"\n    "+("end"===t[2]?"mdc-form-field--align-end":"")+"\n  "},l(t[7],["use","class","alignEnd","inputId","label$"])],M={};for(let t=0;t<F.length;t+=1)M=a(M,F[t]);return{c(){e=o("div"),k&&k.c(),n=c(),r=o("label"),H&&H.c(),this.h()},l(t){e=u(t,"DIV",{class:!0});var i=s(e);k&&k.l(i),n=f(i),r=u(i,"LABEL",{for:!0});var l=s(r);H&&H.l(l),l.forEach(d),i.forEach(d),this.h()},h(){p(r,D),p(e,M)},m(i,l,a){m(i,e,l),k&&k.m(e,null),g(e,n),g(e,r),H&&H.m(r,null),t[11](e),L=!0,a&&h(P),P=[b($=y.call(null,r,t[4])),b(j=y.call(null,e,t[0])),b(x=t[6].call(null,e))]},p(t,[n]){k&&k.p&&512&n&&k.p(v(S,t,t[9],null),_(S,t[9],n,null)),H&&H.p&&512&n&&H.p(v(R,t,t[9],V),_(R,t[9],n,q)),p(r,O(A,[8&n&&{for:t[3]},128&n&&l(C(t[7],"label$"),["use"])])),$&&E($.update)&&16&n&&$.update.call(null,t[4]),p(e,O(F,[6&n&&{class:"\n    mdc-form-field\n    "+t[1]+"\n    "+("end"===t[2]?"mdc-form-field--align-end":"")+"\n  "},128&n&&l(t[7],["use","class","alignEnd","inputId","label$"])])),j&&E(j.update)&&1&n&&j.update.call(null,t[0])},i(t){L||(I(k,t),I(H,t),L=!0)},o(t){w(k,t),w(H,t),L=!1},d(n){n&&d(e),k&&k.d(n),H&&H.d(n),t[11](null),h(P)}}}let N=0;function Q(t,e,n){const r=$(j());let i,l,{use:o=[]}=e,{class:c=""}=e,{align:u="start"}=e,{inputId:s="SMUI-form-field-"+N++}=e,{label$use:f=[]}=e;x("SMUI:form-field",()=>l),x("SMUI:generic:input:props",{id:s}),L(()=>{l=new W(i)}),P(()=>{l&&l.destroy()});let{$$slots:d={},$$scope:p}=e;return t.$set=t=>{n(7,e=a(a({},e),S(t))),"use"in t&&n(0,o=t.use),"class"in t&&n(1,c=t.class),"align"in t&&n(2,u=t.align),"inputId"in t&&n(3,s=t.inputId),"label$use"in t&&n(4,f=t.label$use),"$$scope"in t&&n(9,p=t.$$scope)},e=S(e),[o,c,u,s,f,i,r,e,l,p,d,function(t){k[t?"unshift":"push"](()=>{n(5,i=t)})}]}class X extends e{constructor(t){super(),n(this,t,Q,K,r,{use:0,class:1,align:2,inputId:3,label$use:4})}}export{X as F};
