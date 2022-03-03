var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function s(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,n,s){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}const u="undefined"!=typeof window;let c=u?()=>window.performance.now():()=>Date.now(),a=u?t=>requestAnimationFrame(t):t;const f=new Set;function m(t){f.forEach((e=>{e.c(t)||(f.delete(e),e.f())})),0!==f.size&&a(m)}function d(t){let e;return 0===f.size&&a(m),{promise:new Promise((n=>{f.add(e={c:t,f:n})})),abort(){f.delete(e)}}}function p(t,e){t.appendChild(e)}function h(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function g(t){const e=x("style");return function(t,e){p(t.head||t,e)}(h(t),e),e}function v(t,e,n){t.insertBefore(e,n||null)}function _(t){t.parentNode.removeChild(t)}function k(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function x(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function $(t){return document.createTextNode(t)}function b(){return $(" ")}function z(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function T(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function E(t,e){t.value=null==e?"":e}function S(t,e,n,s){t.style.setProperty(e,n,s?"important":"")}const P=new Set;let L,C=0;function A(t,e,n,s,o,r,i,l=0){const u=16.666/s;let c="{\n";for(let t=0;t<=1;t+=u){const s=e+(n-e)*r(t);c+=100*t+`%{${i(s,1-s)}}\n`}const a=c+`100% {${i(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${l}`,m=h(t);P.add(m);const d=m.__svelte_stylesheet||(m.__svelte_stylesheet=g(t).sheet),p=m.__svelte_rules||(m.__svelte_rules={});p[f]||(p[f]=!0,d.insertRule(`@keyframes ${f} ${a}`,d.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${f} ${s}ms linear ${o}ms 1 both`,C+=1,f}function M(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-s.length;o&&(t.style.animation=s.join(", "),C-=o,C||a((()=>{C||(P.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),P.clear())})))}function R(t){L=t}const j=[],I=[],B=[],N=[],O=Promise.resolve();let D=!1;function Z(t){B.push(t)}let H=!1;const q=new Set;function U(){if(!H){H=!0;do{for(let t=0;t<j.length;t+=1){const e=j[t];R(e),F(e.$$)}for(R(null),j.length=0;I.length;)I.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];q.has(e)||(q.add(e),e())}B.length=0}while(j.length);for(;N.length;)N.pop()();D=!1,H=!1,q.clear()}}function F(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}let G;function J(){return G||(G=Promise.resolve(),G.then((()=>{G=null}))),G}function K(t,e,n){t.dispatchEvent(function(t,e,n=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,!1,e),s}(`${e?"intro":"outro"}${n}`))}const Q=new Set;let V;function W(t,e){t&&t.i&&(Q.delete(t),t.i(e))}function X(t,e,n,s){if(t&&t.o){if(Q.has(t))return;Q.add(t),V.c.push((()=>{Q.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}const Y={duration:0};function tt(n,s,o){let i,l,u=s(n,o),a=!1,f=0;function m(){i&&M(n,i)}function p(){const{delay:s=0,duration:o=300,easing:r=e,tick:p=t,css:h}=u||Y;h&&(i=A(n,0,1,o,s,r,h,f++)),p(0,1);const g=c()+s,v=g+o;l&&l.abort(),a=!0,Z((()=>K(n,!0,"start"))),l=d((t=>{if(a){if(t>=v)return p(1,0),K(n,!0,"end"),m(),a=!1;if(t>=g){const e=r((t-g)/o);p(e,1-e)}}return a}))}let h=!1;return{start(){h||(h=!0,M(n),r(u)?(u=u(),J().then(p)):p())},invalidate(){h=!1},end(){a&&(m(),a=!1)}}}function et(t,e){-1===t.$$.dirty[0]&&(j.push(t),D||(D=!0,O.then(U)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function nt(e,i,l,u,c,a,f,m=[-1]){const d=L;R(e);const p=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(d?d.$$.context:[])),callbacks:s(),dirty:m,skip_bound:!1,root:i.target||d.$$.root};f&&f(p.root);let h=!1;if(p.ctx=l?l(e,i.props||{},((t,n,...s)=>{const o=s.length?s[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),h&&et(e,t)),n})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!u&&u(p.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);p.fragment&&p.fragment.l(t),t.forEach(_)}else p.fragment&&p.fragment.c();i.intro&&W(e.$$.fragment),function(t,e,s,i){const{fragment:l,on_mount:u,on_destroy:c,after_update:a}=t.$$;l&&l.m(e,s),i||Z((()=>{const e=u.map(n).filter(r);c?c.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(Z)}(e,i.target,i.anchor,i.customElement),U()}R(d)}class st{constructor(t,e){t<24&&t>=0?st._hour=t:console.log("Error: hour value must be >= 0 and < 24"),e<60&&e>=0?st._minute=e:console.log("Error: minute value must be >= 0 and < 60"),st.alarmIsActive=!1,st._minutesPassed=st._minute}tick(){st._minute++,st._minutesPassed++,st._minute>=60&&(st._hour++,st._minute=0),st._hour>=24&&(st._hour=0)}get minute(){return st._minute}get minutesPassed(){return st._minutesPassed}get hour(){return st._hour}get clockTime(){return st._hour>=0&&st._hour<10&&st._minute>=0&&st._minute<10?String("0"+st._hour+":0"+st._minute):st._hour>=0&&st._hour<10?String("0"+st._hour+":"+st._minute):st._minute>=0&&st._minute<10?String(st._hour+":0"+st._minute):String(st._hour+":"+st._minute)}set alarmTime(t){st._alarm=t}get alarmTime(){return st._alarm}}function ot(t,{delay:n=0,duration:s=400,easing:o=e}={}){const r=+getComputedStyle(t).opacity;return{delay:n,duration:s,easing:o,css:t=>"opacity: "+t*r}}const rt=[];function it(t){return"[object Date]"===Object.prototype.toString.call(t)}function lt(t,e,n,s){if("number"==typeof n||it(n)){const o=s-n,r=(n-e)/(t.dt||1/60),i=(r+(t.opts.stiffness*o-t.opts.damping*r)*t.inv_mass)*t.dt;return Math.abs(i)<t.opts.precision&&Math.abs(o)<t.opts.precision?s:(t.settled=!1,it(n)?new Date(n.getTime()+i):n+i)}if(Array.isArray(n))return n.map(((o,r)=>lt(t,e[r],n[r],s[r])));if("object"==typeof n){const o={};for(const r in n)o[r]=lt(t,e[r],n[r],s[r]);return o}throw new Error(`Cannot spring ${typeof n} values`)}function ut(e,n={}){const s=function(e,n=t){let s;const o=new Set;function r(t){if(i(e,t)&&(e=t,s)){const t=!rt.length;for(const t of o)t[1](),rt.push(t,e);if(t){for(let t=0;t<rt.length;t+=2)rt[t][0](rt[t+1]);rt.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(i,l=t){const u=[i,l];return o.add(u),1===o.size&&(s=n(r)||t),i(e),()=>{o.delete(u),0===o.size&&(s(),s=null)}}}}(e),{stiffness:o=.15,damping:r=.8,precision:l=.01}=n;let u,a,f,m=e,p=e,h=1,g=0,v=!1;function _(t,n={}){p=t;const o=f={};if(null==e||n.hard||k.stiffness>=1&&k.damping>=1)return v=!0,u=c(),m=t,s.set(e=p),Promise.resolve();if(n.soft){const t=!0===n.soft?.5:+n.soft;g=1/(60*t),h=0}return a||(u=c(),v=!1,a=d((t=>{if(v)return v=!1,a=null,!1;h=Math.min(h+g,1);const n={inv_mass:h,opts:k,settled:!0,dt:60*(t-u)/1e3},o=lt(n,m,e,p);return u=t,m=e,s.set(e=o),n.settled&&(a=null),!n.settled}))),new Promise((t=>{a.promise.then((()=>{o===f&&t()}))}))}const k={set:_,update:(t,n)=>_(t(p,e),n),subscribe:s.subscribe,stiffness:o,damping:r,precision:l};return k}function ct(t,e,n){const s=t.slice();return s[27]=e[n],s}function at(t,e,n){const s=t.slice();return s[30]=e[n],s}function ft(e){let n,s,o,r,i,l,u,c;return{c(){n=x("div"),s=x("p"),o=$(e[3]),r=b(),i=x("button"),i.textContent="Cancel Alarm",w(s,"class","wakeUpText svelte-11knzpx"),w(i,"class","alarmButton svelte-11knzpx"),w(n,"class","wakeUpScreen svelte-11knzpx")},m(t,l){v(t,n,l),p(n,s),p(s,o),p(n,r),p(n,i),u||(c=z(i,"click",e[23]),u=!0)},p(t,e){8&e[0]&&T(o,t[3])},i(t){l||Z((()=>{l=tt(n,ot,{}),l.start()}))},o:t,d(t){t&&_(n),u=!1,c()}}}function mt(n){let s,i,l,u,a,f,m,h,g,P,L,C,R,j,I,B,N,O,D,H,q,U,F,G,Q,W,X,et,nt,st,rt,it,lt,ut,at,ft,mt,dt,ht,gt,vt,_t,kt,xt=n[0].clockTime+"",yt=[0,5,10,15,20,25,30,35,40,45,50,55],$t=[];for(let t=0;t<12;t+=1)$t[t]=pt(ct(n,yt,t));return{c(){s=x("div"),i=x("div"),l=y("svg"),u=y("circle"),a=y("circle"),f=y("circle"),m=y("circle");for(let t=0;t<12;t+=1)$t[t].c();h=y("line"),P=y("line"),C=b(),R=x("div"),j=x("h2"),I=$("Time:"),B=b(),N=x("h3"),O=$(xt),D=b(),H=x("div"),q=y("svg"),U=y("line"),F=y("line"),G=y("path"),Q=y("path"),X=y("path"),nt=b(),st=x("div"),rt=x("button"),rt.textContent="Press to jump forward one minute",it=b(),lt=x("div"),ut=x("h4"),ut.textContent="Set Alarm:",at=b(),ft=x("input"),mt=b(),dt=x("input"),w(u,"class","clockOuterRing svelte-11knzpx"),w(u,"r","48px"),w(a,"class","clockMiddleRing svelte-11knzpx"),w(a,"r","45px"),w(f,"class","clockInnerRing svelte-11knzpx"),w(f,"r","39px"),w(m,"class","clockMostInnerRing svelte-11knzpx"),w(m,"r","35px"),w(h,"class","hourHand svelte-11knzpx"),w(h,"y1","28"),w(h,"y2","-3"),w(h,"transform",g="rotate("+(180+.5*(n[0].minute+60*n[0].hour))+")"),w(P,"class","minuteHand svelte-11knzpx"),w(P,"y1","32"),w(P,"y2","-6"),w(P,"transform",L="rotate("+(180+6*n[0].minute)+")"),w(l,"id","svgAnalogClock"),w(l,"viewBox","-50 -50 100 100"),w(l,"class","svelte-11knzpx"),w(i,"class","analogClock svelte-11knzpx"),w(j,"id","text"),S(j,"color","darkgray"),S(j,"background-color","hsl(211, 45%, "+n[1]+"%)"),w(j,"class","svelte-11knzpx"),w(N,"id","text"),S(N,"color","lightgray"),S(N,"background-color","hsl(211, 45%, "+n[1]+"%)"),w(N,"class","svelte-11knzpx"),w(R,"class","clockText svelte-11knzpx"),w(U,"class","hourglassSide svelte-11knzpx"),w(U,"x1","40"),w(U,"y1","9"),w(U,"x2","40"),w(U,"y2","192"),w(F,"class","hourglassSide svelte-11knzpx"),w(F,"x1","161"),w(F,"y1","9"),w(F,"x2","161"),w(F,"y2","192"),w(G,"class","hourglassMain svelte-11knzpx"),w(G,"d","M 40 10 \n\t\t\t\t\t\t\tL 161 10 \n\t\t\t\t\t\t\tL 104 101\n\t\t\t\t\t\t\tL 161 191\n\t\t\t\t\t\t\tL 40 191\n\t\t\t\t\t\t\tL 98 101\n\t\t\t\t\t\t\tZ"),w(Q,"class","hourglassSand svelte-11knzpx"),w(Q,"d",W="M "+n[5]+" "+n[6]+" \n\t\t\t\t\t\t\tL 101 "+n[7]+"\n\t\t\t\t\t\t\tL "+n[8]+" "+n[6]+"\n\t\t\t\t\t\t\tZ"),w(X,"class","hourglassSand svelte-11knzpx"),w(X,"d",et="M "+n[9]+" "+n[10]+" \n\t\t\t\t\t\t\tL 101 "+n[11]+"\n\t\t\t\t\t\t\tL "+n[12]+" "+n[10]+" \n\t\t\t\t\t\t\tZ"),w(q,"class","svgHourglass svelte-11knzpx"),w(q,"viewBox","0 0 201 201"),S(q,"transform","rotate("+n[4]+"deg)"),w(H,"class","hourglass svelte-11knzpx"),w(rt,"id","button"),w(rt,"class","svelte-11knzpx"),w(st,"class","timeSkipButton svelte-11knzpx"),w(ut,"class","svelte-11knzpx"),w(ft,"class","input svelte-11knzpx"),w(ft,"id","alarmTimeInput"),w(ft,"placeholder","Type the alarm's time here"),w(dt,"class","input svelte-11knzpx"),w(dt,"id","alarmNameInput"),w(dt,"placeholder","Type the alarm's name here"),w(lt,"class","alarmText svelte-11knzpx"),w(s,"class","mainPage svelte-11knzpx")},m(t,e){v(t,s,e),p(s,i),p(i,l),p(l,u),p(l,a),p(l,f),p(l,m);for(let t=0;t<12;t+=1)$t[t].m(l,null);p(l,h),p(l,P),p(s,C),p(s,R),p(R,j),p(j,I),p(R,B),p(R,N),p(N,O),p(s,D),p(s,H),p(H,q),p(q,U),p(q,F),p(q,G),p(q,Q),p(q,X),p(s,nt),p(s,st),p(st,rt),p(s,it),p(s,lt),p(lt,ut),p(lt,at),p(lt,ft),E(ft,n[0].alarmTime),p(lt,mt),p(lt,dt),E(dt,n[3]),vt=!0,_t||(kt=[z(rt,"click",n[22]),z(ft,"input",n[24]),z(dt,"input",n[25])],_t=!0)},p(t,e){(!vt||1&e[0]&&g!==(g="rotate("+(180+.5*(t[0].minute+60*t[0].hour))+")"))&&w(h,"transform",g),(!vt||1&e[0]&&L!==(L="rotate("+(180+6*t[0].minute)+")"))&&w(P,"transform",L),(!vt||2&e[0])&&S(j,"background-color","hsl(211, 45%, "+t[1]+"%)"),(!vt||1&e[0])&&xt!==(xt=t[0].clockTime+"")&&T(O,xt),(!vt||2&e[0])&&S(N,"background-color","hsl(211, 45%, "+t[1]+"%)"),(!vt||480&e[0]&&W!==(W="M "+t[5]+" "+t[6]+" \n\t\t\t\t\t\t\tL 101 "+t[7]+"\n\t\t\t\t\t\t\tL "+t[8]+" "+t[6]+"\n\t\t\t\t\t\t\tZ"))&&w(Q,"d",W),(!vt||7680&e[0]&&et!==(et="M "+t[9]+" "+t[10]+" \n\t\t\t\t\t\t\tL 101 "+t[11]+"\n\t\t\t\t\t\t\tL "+t[12]+" "+t[10]+" \n\t\t\t\t\t\t\tZ"))&&w(X,"d",et),(!vt||16&e[0])&&S(q,"transform","rotate("+t[4]+"deg)"),1&e[0]&&ft.value!==t[0].alarmTime&&E(ft,t[0].alarmTime),8&e[0]&&dt.value!==t[3]&&E(dt,t[3])},i(t){vt||(Z((()=>{gt&&gt.end(1),ht=tt(s,ot,{}),ht.start()})),vt=!0)},o(n){ht&&ht.invalidate(),gt=function(n,s,i){let l,u=s(n,i),a=!0;const f=V;function m(){const{delay:s=0,duration:r=300,easing:i=e,tick:m=t,css:p}=u||Y;p&&(l=A(n,1,0,r,s,i,p));const h=c()+s,g=h+r;Z((()=>K(n,!1,"start"))),d((t=>{if(a){if(t>=g)return m(0,1),K(n,!1,"end"),--f.r||o(f.c),!1;if(t>=h){const e=i((t-h)/r);m(1-e,e)}}return a}))}return f.r+=1,r(u)?J().then((()=>{u=u(),m()})):m(),{end(t){t&&u.tick&&u.tick(1,0),a&&(l&&M(n,l),a=!1)}}}(s,ot,{}),vt=!1},d(t){t&&_(s),k($t,t),t&&gt&&gt.end(),_t=!1,o(kt)}}}function dt(t){let e,n;return{c(){e=y("line"),w(e,"class","minute svelte-11knzpx"),w(e,"y1","44"),w(e,"y2","39"),w(e,"transform",n="rotate("+6*(t[27]+t[30])+")")},m(t,n){v(t,e,n)},d(t){t&&_(e)}}}function pt(e){let n,s,o,r=[1,2,3,4],i=[];for(let t=0;t<4;t+=1)i[t]=dt(at(e,r,t));return{c(){n=y("line");for(let t=0;t<4;t+=1)i[t].c();o=$(""),w(n,"class","hour svelte-11knzpx"),w(n,"y1","44"),w(n,"y2","35"),w(n,"transform",s="rotate("+30*e[27]+")")},m(t,e){v(t,n,e);for(let n=0;n<4;n+=1)i[n].m(t,e);v(t,o,e)},p:t,d(t){t&&_(n),k(i,t),t&&_(o)}}}function ht(t){let e,n,s,r;const i=[mt,ft],l=[];function u(t,e){return t[2]?1:0}return n=u(t),s=l[n]=i[n](t),{c(){e=x("main"),s.c(),w(e,"class","svelte-11knzpx")},m(t,s){v(t,e,s),l[n].m(e,null),r=!0},p(t,r){let c=n;n=u(t),n===c?l[n].p(t,r):(V={r:0,c:[],p:V},X(l[c],1,1,(()=>{l[c]=null})),V.r||o(V.c),V=V.p,s=l[n],s?s.p(t,r):(s=l[n]=i[n](t),s.c()),W(s,1),s.m(e,null))},i(t){r||(W(s),r=!0)},o(t){X(s),r=!1},d(t){t&&_(e),l[n].d()}}}let gt=1e3;function vt(t,e,n){let s,o,r,i,u,c,a,f,m,d=new st(4,20),p=40,h=ut(63);l(t,h,(t=>n(5,o=t)));let g=ut(138);l(t,g,(t=>n(8,u=t)));let v=ut(35);l(t,v,(t=>n(6,r=t)));let _=ut(95);l(t,_,(t=>n(7,i=t)));let k=ut(181);l(t,k,(t=>n(11,f=t)));let x=ut(91);l(t,x,(t=>n(9,c=t)));let y=ut(111);l(t,y,(t=>n(12,m=t)));let $=ut(181);l(t,$,(t=>n(10,a=t)));let b=ut(0);l(t,b,(t=>n(4,s=t)));let z=!1,w=!1;d.alarmTime="";let T="BEEP BEEP";function E(){d.tick(),n(0,d),d.minutesPassed%120==0?(b.set(0),z=!1):d.minutesPassed%60==0&&(b.set(180),z=!0),z?(k.set(107),y.set(d.minute/60*37+63),x.set(-d.minute/60*36+138),$.set(-d.minute/60*60+168),v.set(15),_.set(d.minute/60*45+15),d.minute<10?(g.set(-d.minute/10*40+91),h.set(d.minute/10*40+111)):d.minute>10&&(g.set(51),h.set(151))):(k.set(-d.minute/60*45+186),$.set(186),v.set(d.minute/60*60+35),h.set(d.minute/60*37+63),g.set(-d.minute/60*36+138),_.set(95),d.minute<10?(x.set(-d.minute/10*40+91),y.set(d.minute/10*40+111)):d.minute>10&&(x.set(51),y.set(151)))}return E(),setInterval(E,gt),setInterval((()=>{n(1,p=20==p?40:20)}),gt),setInterval((()=>{d.clockTime.length==d.alarmTime.length&&d.clockTime>=d.alarmTime?n(2,w=!0):n(2,w=!1)}),gt),[d,p,w,T,s,o,r,i,u,c,a,f,m,h,g,v,_,k,x,y,$,b,E,function(){n(2,w=!1),n(0,d.alarmTime="",d)},function(){d.alarmTime=this.value,n(0,d)},function(){T=this.value,n(3,T)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),nt(this,t,vt,ht,i,{},null,[-1,-1])}}({target:document.body,props:{name:"world!"}})}();
//# sourceMappingURL=bundle.js.map
