!function(e,t){"use strict";function n(){var e=A.splice(0,A.length);for(Qe=0;e.length;)e.shift().call(null,e.shift())}function r(e,t){for(var n=0,r=e.length;n<r;n++)T(e[n],t)}function l(e){for(var t,n=0,r=e.length;n<r;n++)t=e[n],V(t,le[a(t)])}function o(e){return function(t){Ue(t)&&(T(t,e),r(t.querySelectorAll(oe),e))}}function a(e){var t=xe.call(e,"is"),n=e.nodeName.toUpperCase(),r=ie.call(re,t?ee+t.toUpperCase():J+n);return t&&-1<r&&!i(n,t)?-1:r}function i(e,t){return-1<oe.indexOf(e+'[is="'+t+'"]')}function u(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,l=e.target,o=e[K]||2,a=e[Q]||3;!Je||l&&l!==t||!t[x]||"style"===r||e.prevValue===e.newValue&&(""!==e.newValue||n!==o&&n!==a)||t[x](r,n===o?null:e.prevValue,n===a?null:e.newValue)}function c(e){var t=o(e);return function(e){A.push(t,e.target),Qe&&clearTimeout(Qe),Qe=setTimeout(n,1)}}function s(e){$e&&($e=!1,e.currentTarget.removeEventListener(Y,s)),r((e.target||b).querySelectorAll(oe),e.detail===_?_:R),Ie&&p()}function m(e,t){var n=this;je.call(n,e,t),w.call(n,{target:n})}function f(e,t){Se(e,t),D?D.observe(e,Ke):(Ye&&(e.setAttribute=m,e[P]=N(e),e[U]($,w)),e[U](W,u)),e[G]&&Je&&(e.created=!0,e[G](),e.created=!1)}function p(){for(var e,t=0,n=Re.length;t<n;t++)e=Re[t],ae.contains(e)||(n--,Re.splice(t--,1),T(e,_))}function d(e){throw new Error("A "+e+" type is already registered")}function T(e,t){var n,r=a(e);-1<r&&(F(e,le[r]),r=0,t!==R||e[R]?t!==_||e[_]||(e[R]=!1,e[_]=!0,r=1):(e[_]=!1,e[R]=!0,r=1,Ie&&ie.call(Re,e)<0&&Re.push(e)),r&&(n=e[t+k])&&n.call(e))}function h(){}function E(e,t,n){var r=n&&n[q]||"",l=t.prototype,o=De(l),a=t.observedAttributes||fe,i={prototype:o};Pe(o,G,{value:function(){if(Ce)Ce=!1;else if(!this[Le]){this[Le]=!0,new t(this),l[G]&&l[G].call(this);var e=Ae[Oe.get(t)];(!ve||e.create.length>1)&&H(this)}}}),Pe(o,x,{value:function(e){-1<ie.call(a,e)&&l[x].apply(this,arguments)}}),l[B]&&Pe(o,Z,{value:l[B]}),l[j]&&Pe(o,z,{value:l[j]}),r&&(i[q]=r),e=e.toUpperCase(),Ae[e]={constructor:t,create:r?[r,Ne(e)]:[e]},Oe.set(t,e),b[I](e.toLowerCase(),i),v(e),we[e].r()}function M(e){var t=Ae[e.toUpperCase()];return t&&t.constructor}function L(e){return"string"==typeof e?e:e&&e.is||""}function H(e){for(var t,n=e[x],r=n?e.attributes:fe,l=r.length;l--;)t=r[l],n.call(e,t.name||t.nodeName,null,t.value||t.nodeValue)}function v(e){return e=e.toUpperCase(),e in we||(we[e]={},we[e].p=new ye(function(t){we[e].r=t})),we[e].p}function g(){He&&delete e.customElements,me(e,"customElements",{configurable:!0,value:new h}),me(e,"CustomElementRegistry",{configurable:!0,value:h});for(var t=function(t){var n=e[t];if(n){e[t]=function(e){var t,r;return e||(e=this),e[Le]||(Ce=!0,t=Ae[Oe.get(e.constructor)],r=ve&&1===t.create.length,e=r?Reflect.construct(n,fe,t.constructor):b.createElement.apply(b,t.create),e[Le]=!0,Ce=!1,r||H(e)),e},e[t].prototype=n.prototype;try{n.prototype.constructor=e[t]}catch(r){Me=!0,me(n,Le,{value:e[t]})}}},n=C.get(/^HTML[A-Z]*[a-z]/),r=n.length;r--;t(n[r]));b.createElement=function(e,t){var n=L(t);return n?ze.call(this,e,Ne(n)):ze.call(this,e)}}var b=e.document,y=e.Object,C=function(e){var t,n,r,l,o=/^[A-Z]+[a-z]/,a=function(e){var t,n=[];for(t in u)e.test(t)&&n.push(t);return n},i=function(e,t){t=t.toLowerCase(),t in u||(u[e]=(u[e]||[]).concat(t),u[t]=u[t.toUpperCase()]=e)},u=(y.create||y)(null),c={};for(n in e)for(l in e[n])for(r=e[n][l],u[l]=r,t=0;t<r.length;t++)u[r[t].toLowerCase()]=u[r[t].toUpperCase()]=l;return c.get=function(e){return"string"==typeof e?u[e]||(o.test(e)?[]:""):a(e)},c.set=function(e,t){return o.test(e)?i(e,t):i(t,e),c},c}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:["element","abbr","address","article","aside","b","bdi","bdo","cite","code","command","dd","dfn","dt","em","figcaption","figure","footer","header","i","kbd","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],HTMLHeadElement:["head"],HTMLHeadingElement:["h1","h2","h3","h4","h5","h6"],HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}});t||(t="auto");var A,w,O,N,D,S,F,V,I="registerElement",P="__"+I+(1e5*e.Math.random()>>0),U="addEventListener",R="attached",k="Callback",_="detached",q="extends",x="attributeChanged"+k,Z=R+k,B="connected"+k,j="disconnected"+k,G="created"+k,z=_+k,K="ADDITION",X="MODIFICATION",Q="REMOVAL",W="DOMAttrModified",Y="DOMContentLoaded",$="DOMSubtreeModified",J="<",ee="=",te=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,ne=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],re=[],le=[],oe="",ae=b.documentElement,ie=re.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},ue=y.prototype,ce=ue.hasOwnProperty,se=ue.isPrototypeOf,me=y.defineProperty,fe=[],pe=y.getOwnPropertyDescriptor,de=y.getOwnPropertyNames,Te=y.getPrototypeOf,he=y.setPrototypeOf,Ee=!!y.__proto__,Me=!1,Le="__dreCEv1",He=e.customElements,ve="force"!==t&&!!(He&&He.define&&He.get&&He.whenDefined),ge=y.create||y,be=e.Map||function(){var e,t=[],n=[];return{get:function(e){return n[ie.call(t,e)]},set:function(r,l){e=ie.call(t,r),e<0?n[t.push(r)-1]=l:n[e]=l}}},ye=e.Promise||function(e){function t(e){for(r=!0;n.length;)n.shift()(e)}var n=[],r=!1,l={catch:function(){return l},then:function(e){return n.push(e),r&&setTimeout(t,1),l}};return e(t),l},Ce=!1,Ae=ge(null),we=ge(null),Oe=new be,Ne=String,De=y.create||function e(t){return t?(e.prototype=t,new e):this},Se=he||(Ee?function(e,t){return e.__proto__=t,e}:de&&pe?function(){function e(e,t){for(var n,r=de(t),l=0,o=r.length;l<o;l++)n=r[l],ce.call(e,n)||me(e,n,pe(t,n))}return function(t,n){do e(t,n);while((n=Te(n))&&!se.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),Fe=e.MutationObserver||e.WebKitMutationObserver,Ve=(e.HTMLElement||e.Element||e.Node).prototype,Ie=!se.call(Ve,ae),Pe=Ie?function(e,t,n){return e[t]=n.value,e}:me,Ue=Ie?function(e){return 1===e.nodeType}:function(e){return se.call(Ve,e)},Re=Ie&&[],ke=Ve.attachShadow,_e=Ve.cloneNode,qe=Ve.dispatchEvent,xe=Ve.getAttribute,Ze=Ve.hasAttribute,Be=Ve.removeAttribute,je=Ve.setAttribute,Ge=b.createElement,ze=Ge,Ke=Fe&&{attributes:!0,characterData:!0,attributeOldValue:!0},Xe=Fe||function(e){Ye=!1,ae.removeEventListener(W,Xe)},Qe=0,We=!1,Ye=!0,$e=!0,Je=!0;if(I in b||(he||Ee?(F=function(e,t){se.call(t,e)||f(e,t)},V=f):(F=function(e,t){e[P]||(e[P]=y(!0),f(e,t))},V=F),Ie?(Ye=!1,function(){var e=pe(Ve,U),t=e.value,n=function(e){var t=new CustomEvent(W,{bubbles:!0});t.attrName=e,t.prevValue=xe.call(this,e),t.newValue=null,t[Q]=t.attrChange=2,Be.call(this,e),qe.call(this,t)},r=function(e,t){var n=Ze.call(this,e),r=n&&xe.call(this,e),l=new CustomEvent(W,{bubbles:!0});je.call(this,e,t),l.attrName=e,l.prevValue=n?r:null,l.newValue=t,n?l[X]=l.attrChange=1:l[K]=l.attrChange=0,qe.call(this,l)},l=function(e){var t,n=e.currentTarget,r=n[P],l=e.propertyName;r.hasOwnProperty(l)&&(r=r[l],t=new CustomEvent(W,{bubbles:!0}),t.attrName=r.name,t.prevValue=r.value||null,t.newValue=r.value=n[l]||null,null==t.prevValue?t[K]=t.attrChange=0:t[X]=t.attrChange=1,qe.call(n,t))};e.value=function(e,o,a){e===W&&this[x]&&this.setAttribute!==r&&(this[P]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",l)),t.call(this,e,o,a)},me(Ve,U,e)}()):Fe||(ae[U](W,Xe),ae.setAttribute(P,1),ae.removeAttribute(P),Ye&&(w=function(e){var t,n,r,l=this;if(l===e.target){t=l[P],l[P]=n=N(l);for(r in n){if(!(r in t))return O(0,l,r,t[r],n[r],K);if(n[r]!==t[r])return O(1,l,r,t[r],n[r],X)}for(r in t)if(!(r in n))return O(2,l,r,t[r],n[r],Q)}},O=function(e,t,n,r,l,o){var a={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:l};a[o]=e,u(a)},N=function(e){for(var t,n,r={},l=e.attributes,o=0,a=l.length;o<a;o++)t=l[o],n=t.name,"setAttribute"!==n&&(r[n]=t.value);return r})),b[I]=function(e,t){if(n=e.toUpperCase(),We||(We=!0,Fe?(D=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new Fe(function(r){for(var l,o,a,i=0,u=r.length;i<u;i++)l=r[i],"childList"===l.type?(n(l.addedNodes,e),n(l.removedNodes,t)):(o=l.target,Je&&o[x]&&"style"!==l.attributeName&&(a=xe.call(o,l.attributeName),a!==l.oldValue&&o[x](l.attributeName,l.oldValue,a)))})}(o(R),o(_)),S=function(e){return D.observe(e,{childList:!0,subtree:!0}),e},S(b),ke&&(Ve.attachShadow=function(){return S(ke.apply(this,arguments))})):(A=[],b[U]("DOMNodeInserted",c(R)),b[U]("DOMNodeRemoved",c(_))),b[U](Y,s),b[U]("readystatechange",s),Ve.cloneNode=function(e){var t=_e.call(this,!!e),n=a(t);return-1<n&&V(t,le[n]),e&&l(t.querySelectorAll(oe)),t}),-2<ie.call(re,ee+n)+ie.call(re,J+n)&&d(e),!te.test(n)||-1<ie.call(ne,n))throw new Error("The type "+e+" is invalid");var n,i,u=function(){return f?b.createElement(p,n):b.createElement(p)},m=t||ue,f=ce.call(m,q),p=f?t[q].toUpperCase():n;return f&&-1<ie.call(re,J+p)&&d(p),i=re.push((f?ee:J)+n)-1,oe=oe.concat(oe.length?",":"",f?p+'[is="'+e.toLowerCase()+'"]':p),u.prototype=le[i]=ce.call(m,"prototype")?m.prototype:De(Ve),r(b.querySelectorAll(oe),R),u},b.createElement=ze=function(e,t){var n=L(t),r=n?Ge.call(b,e,Ne(n)):Ge.call(b,e),l=""+e,o=ie.call(re,(n?ee:J)+(n||l).toUpperCase()),a=-1<o;return n&&(r.setAttribute("is",n=n.toLowerCase()),a&&(a=i(l.toUpperCase(),n))),Je=!b.createElement.innerHTMLHelper,a&&V(r,le[o]),r}),h.prototype={constructor:h,define:ve?function(e,t,n){if(n)E(e,t,n);else{var r=e.toUpperCase();Ae[r]={constructor:t,create:[r]},Oe.set(t,r),He.define(e,t)}}:E,get:ve?function(e){return He.get(e)||M(e)}:M,whenDefined:ve?function(e){return ye.race([He.whenDefined(e),v(e)])}:v},He&&"force"!==t)try{!function(t,n,r){if(n[q]="a",t.prototype=De(HTMLAnchorElement.prototype),t.prototype.constructor=t,e.customElements.define(r,t,n),xe.call(b.createElement("a",{is:r}),"is")!==r||ve&&xe.call(new t,"is")!==r)throw n}(function e(){return Reflect.construct(HTMLAnchorElement,[],e)},{},"document-register-element-a")}catch(e){g()}else g();try{Ge.call(b,"a","a")}catch(e){Ne=function(e){return{is:e}}}}(window);