import"./chunks/styles.12718665.js";function A(){}function H(t){return t()}function F(){return Object.create(null)}function T(t){t.forEach(H)}function le(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ce(t){return Object.keys(t).length===0}let D=!1;function ue(){D=!0}function ae(){D=!1}function fe(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function de(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,a=(i>0&&e[n[i]].claim_order<=u?i+1:fe(1,i,d=>e[n[d]].claim_order,u))-1;r[l]=n[a]+1;const f=a+1;n[f]=l,i=Math.max(f,i)}const s=[],o=[];let c=e.length-1;for(let l=n[i]+1;l!=0;l=r[l-1]){for(s.push(e[l-1]);c>=l;c--)o.push(e[c]);c--}for(;c>=0;c--)o.push(e[c]);s.reverse(),o.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<o.length;l++){for(;u<s.length&&o[l].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(o[l],a)}}function y(t,e){if(D){for(de(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function b(t,e,n){D&&!n?y(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function _(t){t.parentNode.removeChild(t)}function he(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function S(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function R(){return p(" ")}function L(){return p("")}function Y(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function _e(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Z(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t){return Array.from(t.childNodes)}function pe(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function J(t,e,n,r,i=!1){pe(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const c=t[o];if(e(c)){const l=n(c);return l===void 0?t.splice(o,1):t[o]=l,i||(t.claim_info.last_index=o),c}}for(let o=t.claim_info.last_index-1;o>=0;o--){const c=t[o];if(e(c)){const l=n(c);return l===void 0?t.splice(o,1):t[o]=l,i?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,c}}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function me(t,e,n,r){return J(t,i=>i.nodeName===e,i=>{const s=[];for(let o=0;o<i.attributes.length;o++){const c=i.attributes[o];n[c.name]||s.push(c.name)}s.forEach(o=>i.removeAttribute(o))},()=>r(e))}function O(t,e,n){return me(t,e,n,S)}function g(t,e){return J(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>p(e),!0)}function U(t){return g(t," ")}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ge(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}let E;function k(t){E=t}function X(){if(!E)throw new Error("Function called outside component initialization");return E}function ye(t){X().$$.on_destroy.push(t)}function we(){const t=X();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const s=ge(e,n,{cancelable:r});return i.slice().forEach(o=>{o.call(t,s)}),!s.defaultPrevented}return!0}}const v=[],j=[],C=[],V=[],be=Promise.resolve();let q=!1;function ve(){q||(q=!0,be.then(ee))}function z(t){C.push(t)}const G=new Set;let M=0;function ee(){const t=E;do{for(;M<v.length;){const e=v[M];M++,k(e),$e(e.$$)}for(k(null),v.length=0,M=0;j.length;)j.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];G.has(n)||(G.add(n),n())}C.length=0}while(v.length);for(;V.length;)V.pop()();q=!1,G.clear(),k(t)}function $e(t){if(t.fragment!==null){t.update(),T(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}const N=new Set;let ke;function te(t,e){t&&t.i&&(N.delete(t),t.i(e))}function Ee(t,e,n,r){if(t&&t.o){if(N.has(t))return;N.add(t),ke.c.push(()=>{N.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Qe(t){t&&t.c()}function Se(t,e){t&&t.l(e)}function ne(t,e,n,r){const{fragment:i,on_mount:s,on_destroy:o,after_update:c}=t.$$;i&&i.m(e,n),r||z(()=>{const l=s.map(H).filter(le);o?o.push(...l):T(l),t.$$.on_mount=[]}),c.forEach(z)}function re(t,e){const n=t.$$;n.fragment!==null&&(T(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function xe(t,e){t.$$.dirty[0]===-1&&(v.push(t),ve(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ie(t,e,n,r,i,s,o,c=[-1]){const l=E;k(t);const u=t.$$={fragment:null,ctx:null,props:s,update:A,not_equal:i,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:F(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};o&&o(u.root);let a=!1;if(u.ctx=n?n(t,e.props||{},(f,d,...m)=>{const h=m.length?m[0]:d;return u.ctx&&i(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),a&&xe(t,f)),d}):[],u.update(),a=!0,T(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){ue();const f=x(e.target);u.fragment&&u.fragment.l(f),f.forEach(_)}else u.fragment&&u.fragment.c();e.intro&&te(t.$$.fragment),ne(t,e.target,e.anchor,e.customElement),ae(),ee()}k(l)}class oe{$destroy(){re(this,1),this.$destroy=A}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!ce(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Me(t){let e,n=t[2](t[0])+"",r,i,s=t[2](t[1])+"",o;return{c(){e=S("div"),r=p(n),i=p(":"),o=p(s)},l(c){e=O(c,"DIV",{});var l=x(e);r=g(l,n),i=g(l,":"),o=g(l,s),l.forEach(_)},m(c,l){b(c,e,l),y(e,r),y(e,i),y(e,o)},p(c,[l]){l&1&&n!==(n=c[2](c[0])+"")&&$(r,n),l&2&&s!==(s=c[2](c[1])+"")&&$(o,s)},i:A,o:A,d(c){c&&_(e)}}}function Ce(t,e,n){let r,i,s,o;const c=we();let l=0,u=Date.now(),a=u+l*1e3;function f(w){h(w)}function d(){n(4,u=Date.now())}let m=setInterval(d,1e3);function h(w){l=w,n(4,u=Date.now()),n(5,a=Date.now()+l*1e3),m=setInterval(d,1e3)}function I(){clearInterval(m),c("finish")}const se=w=>w<10?"0"+w:w;return ye(()=>{clearInterval(m)}),t.$$.update=()=>{t.$$.dirty&48&&n(6,r=Math.round((a-u)/1e3)),t.$$.dirty&64&&n(7,i=Math.floor(r/3600)),t.$$.dirty&192&&n(0,s=Math.floor((r-i*3600)/60)),t.$$.dirty&193&&n(1,o=r-i*3600-s*60),t.$$.dirty&64&&r===0&&I()},[s,o,se,f,u,a,r,i]}class Ne extends oe{constructor(e){super(),ie(this,e,Ce,Me,K,{start:3})}get start(){return this.$$.ctx[3]}}class B{lowerBound;upperBound;guranteedNumbers;excludedNumbers;constructor(e,n,r,i){this.lowerBound=e,this.upperBound=n,this.guranteedNumbers=r,this.excludedNumbers=i}createQuestion(){}generateOperands(){const e=this.generateOperand();if(this.guranteedNumbers.length>0){const r=this.guranteedNumbers[Math.floor(Math.random()*this.guranteedNumbers.length)];return[e,r]}const n=this.generateOperand();return[e,n]}generateOperand(){let e=Math.floor(Math.random()*(this.upperBound-this.lowerBound+1))+this.lowerBound;for(;this.excludedNumbers.includes(e);)e=Math.floor(Math.random()*(this.upperBound-this.lowerBound+1))+this.lowerBound;return e}}class Q{operand1;operand2;operation;answer;constructor(e,n,r,i){this.operand1=e,this.operand2=n,this.operation=r,this.answer=i}display(){switch(this.operation){case"addition":return`${this.operand1} + ${this.operand2}`;case"subtraction":return`${this.operand1} - ${this.operand2}`;case"multiplication":return`${this.operand1} \xD7 ${this.operand2}`;case"division":return`${this.operand1} \xF7 ${this.operand2}`}}}class Ae extends B{constructor(e,n,r,i){super(e,n,r,i)}createQuestion(){let[e,n]=this.generateOperands();return new Q(e,n,"addition",e+n)}}class Te extends B{constructor(e,n,r,i){super(e,n,r,i)}createQuestion(){let[e,n]=this.generateOperands();return new Q(e,n,"division",e/n)}}class De extends B{constructor(e,n,r,i){super(e,n,r,i)}createQuestion(){let[e,n]=this.generateOperands();return new Q(e,n,"multiplication",e*n)}}class Oe extends B{constructor(e,n,r,i){super(e,n,r,i)}createQuestion(){let[e,n]=this.generateOperands();return e<n?new Q(n,e,"subtraction",n-e):new Q(e,n,"subtraction",e-n)}}class Be{input;question;constructor(e,n){this.input=e,this.question=n}isCorrect(){return this.input===this.question.answer.toString()}}class Ie{generators;currentQuestion=null;records;constructor(e,n,r,i,s){this.generators=this.constructGenerators(e,n,r,i,s),this.records=[]}constructGenerators=(e,n,r,i,s)=>{let o=[];for(let c of r)switch(c){case"addition":o.push(new Ae(e,n,i,s));break;case"subtraction":o.push(new Oe(e,n,i,s));break;case"multiplication":o.push(new De(e,n,i,s));break;case"division":o.push(new Te(e,n,i,s));break}return o};initialize=()=>{this.generateQuestion()};submitAnswer=e=>{const n=this.recordAnswer(e);return this.generateQuestion(),n.isCorrect()};generateQuestion=()=>{const e=this.generators[Math.floor(Math.random()*this.generators.length)];this.currentQuestion=e.createQuestion()};recordAnswer=e=>{const n=new Be(e,this.currentQuestion);return this.records.push(n),n};determineScore=()=>{let e=0;for(let n of this.records)n.isCorrect()&&e++;return e};displayScore=()=>`You got ${this.determineScore()} out of ${this.records.length} questions correct.`}function P(t,e,n){const r=t.slice();return r[11]=e[n],r}function Ge(t){let e,n=t[3],r=[];for(let i=0;i<n.length;i+=1)r[i]=W(P(t,n,i));return{c(){for(let i=0;i<r.length;i+=1)r[i].c();e=L()},l(i){for(let s=0;s<r.length;s+=1)r[s].l(i);e=L()},m(i,s){for(let o=0;o<r.length;o+=1)r[o].m(i,s);b(i,e,s)},p(i,s){if(s&72){n=i[3];let o;for(o=0;o<n.length;o+=1){const c=P(i,n,o);r[o]?r[o].p(c,s):(r[o]=W(c),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(i){he(r,i),i&&_(e)}}}function je(t){let e,n=t[0].currentQuestion.display()+"",r,i,s=(t[1].length>0?t[1]:"?")+"",o,c,l=t[0].displayScore()+"",u;return{c(){e=S("div"),r=p(n),i=p(" = "),o=p(s),c=R(),u=p(l),this.h()},l(a){e=O(a,"DIV",{class:!0});var f=x(e);r=g(f,n),i=g(f," = "),o=g(f,s),f.forEach(_),c=U(a),u=g(a,l),this.h()},h(){Z(e,"class","question")},m(a,f){b(a,e,f),y(e,r),y(e,i),y(e,o),b(a,c,f),b(a,u,f)},p(a,f){f&1&&n!==(n=a[0].currentQuestion.display()+"")&&$(r,n),f&2&&s!==(s=(a[1].length>0?a[1]:"?")+"")&&$(o,s),f&1&&l!==(l=a[0].displayScore()+"")&&$(u,l)},d(a){a&&_(e),a&&_(c),a&&_(u)}}}function W(t){let e,n=t[11].name+"",r,i,s;function o(){return t[9](t[11])}return{c(){e=S("button"),r=p(n)},l(c){e=O(c,"BUTTON",{});var l=x(e);r=g(l,n),l.forEach(_)},m(c,l){b(c,e,l),y(e,r),i||(s=Y(e,"click",o),i=!0)},p(c,l){t=c},d(c){c&&_(e),i=!1,s()}}}function qe(t){let e,n,r,i,s,o,c={};n=new Ne({props:c}),t[8](n),n.$on("finish",t[5]);function l(f,d){return f[0].currentQuestion!=null?je:Ge}let u=l(t),a=u(t);return{c(){e=S("div"),Qe(n.$$.fragment),r=R(),a.c(),this.h()},l(f){e=O(f,"DIV",{class:!0});var d=x(e);Se(n.$$.fragment,d),r=U(d),a.l(d),d.forEach(_),this.h()},h(){Z(e,"class","simple-arithmetic-app")},m(f,d){b(f,e,d),ne(n,e,null),y(e,r),a.m(e,null),i=!0,s||(o=Y(window,"keydown",_e(t[4])),s=!0)},p(f,[d]){const m={};n.$set(m),u===(u=l(f))&&a?a.p(f,d):(a.d(1),a=u(f),a&&(a.c(),a.m(e,null)))},i(f){i||(te(n.$$.fragment,f),i=!0)},o(f){Ee(n.$$.fragment,f),i=!1},d(f){f&&_(e),t[8](null),re(n),a.d(),s=!1,o()}}}function ze(t,e,n){let{data:r}=e;const i=[{name:"1 minutes",seconds:60},{name:"2 minutes",seconds:120},{name:"3 minutes",seconds:180},{name:"4 minutes",seconds:240},{name:"5 minutes",seconds:300}];let s=new Ie(r.lowerBound,r.upperBound,r.operations,r.guranteedNumbers,r.excludedNumbers),o="",c;const l=h=>{if(h.keyCode>=48&&h.keyCode<=57&&n(1,o+=h.keyCode-48),h.keyCode===8&&o.length>0&&n(1,o=o.slice(0,o.length-1)),o.length===s.currentQuestion.answer.toString().length){const I=s.submitAnswer(o);console.log(I?"correct":"incorrect"),n(1,o=""),f(),console.log(s.currentQuestion.display())}},u=()=>{console.log("timer finished")},a=h=>{c.start(h),s.initialize(),f(),console.log(s.currentQuestion.display())},f=()=>{n(0,s)};function d(h){j[h?"unshift":"push"](()=>{c=h,n(2,c)})}const m=h=>a(h.seconds);return t.$$set=h=>{"data"in h&&n(7,r=h.data)},[s,o,c,i,l,u,a,r,d,m]}class Le extends oe{constructor(e){super(),ie(this,e,ze,qe,K,{data:7})}}export{Le as default};
