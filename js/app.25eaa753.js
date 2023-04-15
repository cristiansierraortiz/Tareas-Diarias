(function(){var t={8665:function(t,e,n){var o,i,s;n(2801),function(n,a){i=[],o=a(n),s="function"===typeof o?o.apply(e,i):o,void 0===s||(t.exports=s)}("undefined"!=typeof n.g?n.g:window||this.window||this.global,(function(t){"use strict";var e={},n="iziToast",o=(document.querySelector("body"),!!/Mobi/.test(navigator.userAgent)),i=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),s="undefined"!=typeof InstallTrigger,a="ontouchstart"in document.documentElement,r=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],l={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},c=568,d={};e.children={};var u={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),"function"!=typeof window.CustomEvent){var p=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n};p.prototype=window.Event.prototype,window.CustomEvent=p}var m=function(t,e,n){if("[object Object]"===Object.prototype.toString.call(t))for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(n,t[o],o,t);else if(t)for(var i=0,s=t.length;s>i;i++)e.call(n,t[i],i,t)},g=function(t,e){var n={};return m(t,(function(e,o){n[o]=t[o]})),m(e,(function(t,o){n[o]=e[o]})),n},f=function(t){var e=document.createDocumentFragment(),n=document.createElement("div");for(n.innerHTML=t;n.firstChild;)e.appendChild(n.firstChild);return e},v=function(t){var e=btoa(encodeURIComponent(t));return e.replace(/=/g,"")},h=function(t){return"#"==t.substring(0,1)||"rgb"==t.substring(0,3)||"hsl"==t.substring(0,3)},y=function(t){try{return btoa(atob(t))==t}catch(e){return!1}},b=function(){return{move:function(t,e,o,a){var r,l=.3,c=180;0!==a&&(t.classList.add(n+"-dragged"),t.style.transform="translateX("+a+"px)",a>0?(r=(c-a)/c,l>r&&e.hide(g(o,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),t,"drag")):(r=(c+a)/c,l>r&&e.hide(g(o,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),t,"drag")),t.style.opacity=r,l>r&&((i||s)&&(t.style.left=a+"px"),t.parentNode.style.opacity=l,this.stopMoving(t,null)))},startMoving:function(t,e,n,o){o=o||window.event;var i=a?o.touches[0].clientX:o.clientX,s=t.style.transform.replace("px)","");s=s.replace("translateX(","");var r=i-s;n.transitionIn&&t.classList.remove(n.transitionIn),n.transitionInMobile&&t.classList.remove(n.transitionInMobile),t.style.transition="",a?document.ontouchmove=function(o){o.preventDefault(),o=o||window.event;var i=o.touches[0].clientX,s=i-r;b.move(t,e,n,s)}:document.onmousemove=function(o){o.preventDefault(),o=o||window.event;var i=o.clientX,s=i-r;b.move(t,e,n,s)}},stopMoving:function(t,e){a?document.ontouchmove=function(){}:document.onmousemove=function(){},t.style.opacity="",t.style.transform="",t.classList.contains(n+"-dragged")&&(t.classList.remove(n+"-dragged"),t.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout((function(){t.style.transition=""}),400))}}}();return e.setSetting=function(t,n,o){e.children[t][n]=o},e.getSetting=function(t,n){return e.children[t][n]},e.destroy=function(){m(document.querySelectorAll("."+n+"-overlay"),(function(t,e){t.remove()})),m(document.querySelectorAll("."+n+"-wrapper"),(function(t,e){t.remove()})),m(document.querySelectorAll("."+n),(function(t,e){t.remove()})),this.children={},document.removeEventListener(n+"-opened",{},!1),document.removeEventListener(n+"-opening",{},!1),document.removeEventListener(n+"-closing",{},!1),document.removeEventListener(n+"-closed",{},!1),document.removeEventListener("keyup",{},!1),d={}},e.settings=function(t){e.destroy(),d=t,u=g(u,t||{})},m(l,(function(t,n){e[n]=function(e){var n=g(d,e||{});n=g(t,n||{}),this.show(n)}})),e.progress=function(t,e,o){var i=this,s=e.getAttribute("data-iziToast-ref"),a=g(this.children[s],t||{}),r=e.querySelector("."+n+"-progressbar div");return{start:function(){"undefined"==typeof a.time.REMAINING&&(e.classList.remove(n+"-reseted"),null!==r&&(r.style.transition="width "+a.timeout+"ms "+a.progressBarEasing,r.style.width="0%"),a.time.START=(new Date).getTime(),a.time.END=a.time.START+a.timeout,a.time.TIMER=setTimeout((function(){clearTimeout(a.time.TIMER),e.classList.contains(n+"-closing")||(i.hide(a,e,"timeout"),"function"==typeof o&&o.apply(i))}),a.timeout),i.setSetting(s,"time",a.time))},pause:function(){if("undefined"!=typeof a.time.START&&!e.classList.contains(n+"-paused")&&!e.classList.contains(n+"-reseted")){if(e.classList.add(n+"-paused"),a.time.REMAINING=a.time.END-(new Date).getTime(),clearTimeout(a.time.TIMER),i.setSetting(s,"time",a.time),null!==r){var t=window.getComputedStyle(r),l=t.getPropertyValue("width");r.style.transition="none",r.style.width=l}"function"==typeof o&&setTimeout((function(){o.apply(i)}),10)}},resume:function(){"undefined"!=typeof a.time.REMAINING?(e.classList.remove(n+"-paused"),null!==r&&(r.style.transition="width "+a.time.REMAINING+"ms "+a.progressBarEasing,r.style.width="0%"),a.time.END=(new Date).getTime()+a.time.REMAINING,a.time.TIMER=setTimeout((function(){clearTimeout(a.time.TIMER),e.classList.contains(n+"-closing")||(i.hide(a,e,"timeout"),"function"==typeof o&&o.apply(i))}),a.time.REMAINING),i.setSetting(s,"time",a.time)):this.start()},reset:function(){clearTimeout(a.time.TIMER),delete a.time.REMAINING,i.setSetting(s,"time",a.time),e.classList.add(n+"-reseted"),e.classList.remove(n+"-paused"),null!==r&&(r.style.transition="none",r.style.width="100%"),"function"==typeof o&&setTimeout((function(){o.apply(i)}),10)}}},e.hide=function(t,e,i){"object"!=typeof e&&(e=document.querySelector(e));var s=this,a=g(this.children[e.getAttribute("data-iziToast-ref")],t||{});a.closedBy=i||null,delete a.time.REMAINING,e.classList.add(n+"-closing"),function(){var t=document.querySelector("."+n+"-overlay");if(null!==t){var e=t.getAttribute("data-iziToast-ref");e=e.split(",");var o=e.indexOf(String(a.ref));-1!==o&&e.splice(o,1),t.setAttribute("data-iziToast-ref",e.join()),0===e.length&&(t.classList.remove("fadeIn"),t.classList.add("fadeOut"),setTimeout((function(){t.remove()}),700))}}(),a.transitionIn&&e.classList.remove(a.transitionIn),a.transitionInMobile&&e.classList.remove(a.transitionInMobile),o||window.innerWidth<=c?a.transitionOutMobile&&e.classList.add(a.transitionOutMobile):a.transitionOut&&e.classList.add(a.transitionOut);var r=e.parentNode.offsetHeight;e.parentNode.style.height=r+"px",e.style.pointerEvents="none",(!o||window.innerWidth>c)&&(e.parentNode.style.transitionDelay="0.2s");try{var l=new CustomEvent(n+"-closing",{detail:a,bubbles:!0,cancelable:!0});document.dispatchEvent(l)}catch(d){console.warn(d)}setTimeout((function(){e.parentNode.style.height="0px",e.parentNode.style.overflow="",setTimeout((function(){delete s.children[a.ref],e.parentNode.remove();try{var t=new CustomEvent(n+"-closed",{detail:a,bubbles:!0,cancelable:!0});document.dispatchEvent(t)}catch(o){console.warn(o)}"undefined"!=typeof a.onClosed&&a.onClosed.apply(null,[a,e,i])}),1e3)}),200),"undefined"!=typeof a.onClosing&&a.onClosing.apply(null,[a,e,i])},e.show=function(t){var i=this,s=g(d,t||{});if(s=g(u,s),s.time={},null===s.id&&(s.id=v(s.title+s.message+s.color)),1===s.displayMode||"once"==s.displayMode)try{if(document.querySelectorAll("."+n+"#"+s.id).length>0)return!1}catch(l){console.warn("["+n+"] Could not find an element with this selector: #"+s.id+". Try to set an valid id.")}if(2===s.displayMode||"replace"==s.displayMode)try{m(document.querySelectorAll("."+n+"#"+s.id),(function(t,e){i.hide(s,t,"replaced")}))}catch(l){console.warn("["+n+"] Could not find an element with this selector: #"+s.id+". Try to set an valid id.")}s.ref=(new Date).getTime()+Math.floor(1e7*Math.random()+1),e.children[s.ref]=s;var p,w={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:s.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};w.toast.setAttribute("data-iziToast-ref",s.ref),w.toast.appendChild(w.toastBody),w.toastCapsule.appendChild(w.toast),function(){if(w.toast.classList.add(n),w.toast.classList.add(n+"-opening"),w.toastCapsule.classList.add(n+"-capsule"),w.toastBody.classList.add(n+"-body"),w.toastTexts.classList.add(n+"-texts"),o||window.innerWidth<=c?s.transitionInMobile&&w.toast.classList.add(s.transitionInMobile):s.transitionIn&&w.toast.classList.add(s.transitionIn),s["class"]){var t=s["class"].split(" ");m(t,(function(t,e){w.toast.classList.add(t)}))}s.id&&(w.toast.id=s.id),s.rtl&&(w.toast.classList.add(n+"-rtl"),w.toast.setAttribute("dir","rtl")),s.layout>1&&w.toast.classList.add(n+"-layout"+s.layout),s.balloon&&w.toast.classList.add(n+"-balloon"),s.maxWidth&&(isNaN(s.maxWidth)?w.toast.style.maxWidth=s.maxWidth:w.toast.style.maxWidth=s.maxWidth+"px"),""===s.theme&&"light"===s.theme||w.toast.classList.add(n+"-theme-"+s.theme),s.color&&(h(s.color)?w.toast.style.background=s.color:w.toast.classList.add(n+"-color-"+s.color)),s.backgroundColor&&(w.toast.style.background=s.backgroundColor,s.balloon&&(w.toast.style.borderColor=s.backgroundColor))}(),function(){s.image&&(w.cover.classList.add(n+"-cover"),w.cover.style.width=s.imageWidth+"px",y(s.image.replace(/ /g,""))?w.cover.style.backgroundImage="url(data:image/png;base64,"+s.image.replace(/ /g,"")+")":w.cover.style.backgroundImage="url("+s.image+")",s.rtl?w.toastBody.style.marginRight=s.imageWidth+10+"px":w.toastBody.style.marginLeft=s.imageWidth+10+"px",w.toast.appendChild(w.cover))}(),function(){s.close?(w.buttonClose=document.createElement("button"),w.buttonClose.type="button",w.buttonClose.classList.add(n+"-close"),w.buttonClose.addEventListener("click",(function(t){t.target,i.hide(s,w.toast,"button")})),w.toast.appendChild(w.buttonClose)):s.rtl?w.toast.style.paddingLeft="18px":w.toast.style.paddingRight="18px"}(),function(){s.progressBar&&(w.progressBar=document.createElement("div"),w.progressBarDiv=document.createElement("div"),w.progressBar.classList.add(n+"-progressbar"),w.progressBarDiv.style.background=s.progressBarColor,w.progressBar.appendChild(w.progressBarDiv),w.toast.appendChild(w.progressBar)),s.timeout&&(s.pauseOnHover&&!s.resetOnHover&&(w.toast.addEventListener("mouseenter",(function(t){i.progress(s,w.toast).pause()})),w.toast.addEventListener("mouseleave",(function(t){i.progress(s,w.toast).resume()}))),s.resetOnHover&&(w.toast.addEventListener("mouseenter",(function(t){i.progress(s,w.toast).reset()})),w.toast.addEventListener("mouseleave",(function(t){i.progress(s,w.toast).start()}))))}(),function(){s.iconUrl?(w.icon.setAttribute("class",n+"-icon"),w.icon.setAttribute("src",s.iconUrl)):s.icon&&(w.icon.setAttribute("class",n+"-icon "+s.icon),s.iconText&&w.icon.appendChild(document.createTextNode(s.iconText)),s.iconColor&&(w.icon.style.color=s.iconColor)),(s.icon||s.iconUrl)&&(s.rtl?w.toastBody.style.paddingRight="33px":w.toastBody.style.paddingLeft="33px",w.toastBody.appendChild(w.icon))}(),function(){s.title.length>0&&(w.strong=document.createElement("strong"),w.strong.classList.add(n+"-title"),w.strong.appendChild(f(s.title)),w.toastTexts.appendChild(w.strong),s.titleColor&&(w.strong.style.color=s.titleColor),s.titleSize&&(isNaN(s.titleSize)?w.strong.style.fontSize=s.titleSize:w.strong.style.fontSize=s.titleSize+"px"),s.titleLineHeight&&(isNaN(s.titleSize)?w.strong.style.lineHeight=s.titleLineHeight:w.strong.style.lineHeight=s.titleLineHeight+"px")),s.message.length>0&&(w.p=document.createElement("p"),w.p.classList.add(n+"-message"),w.p.appendChild(f(s.message)),w.toastTexts.appendChild(w.p),s.messageColor&&(w.p.style.color=s.messageColor),s.messageSize&&(isNaN(s.titleSize)?w.p.style.fontSize=s.messageSize:w.p.style.fontSize=s.messageSize+"px"),s.messageLineHeight&&(isNaN(s.titleSize)?w.p.style.lineHeight=s.messageLineHeight:w.p.style.lineHeight=s.messageLineHeight+"px")),s.title.length>0&&s.message.length>0&&(s.rtl?w.strong.style.marginLeft="10px":2===s.layout||s.rtl||(w.strong.style.marginRight="10px"))}(),w.toastBody.appendChild(w.toastTexts),function(){s.inputs.length>0&&(w.inputs.classList.add(n+"-inputs"),m(s.inputs,(function(t,e){w.inputs.appendChild(f(t[0])),p=w.inputs.childNodes,p[e].classList.add(n+"-inputs-child"),t[3]&&setTimeout((function(){p[e].focus()}),300),p[e].addEventListener(t[1],(function(e){var n=t[2];return n(i,w.toast,this,e)}))})),w.toastBody.appendChild(w.inputs))}(),function(){s.buttons.length>0&&(w.buttons.classList.add(n+"-buttons"),m(s.buttons,(function(t,e){w.buttons.appendChild(f(t[0]));var o=w.buttons.childNodes;o[e].classList.add(n+"-buttons-child"),t[2]&&setTimeout((function(){o[e].focus()}),300),o[e].addEventListener("click",(function(e){e.preventDefault();var n=t[1];return n(i,w.toast,this,e,p)}))}))),w.toastBody.appendChild(w.buttons)}(),s.message.length>0&&(s.inputs.length>0||s.buttons.length>0)&&(w.p.style.marginBottom="0"),(s.inputs.length>0||s.buttons.length>0)&&(s.rtl?w.toastTexts.style.marginLeft="10px":w.toastTexts.style.marginRight="10px",s.inputs.length>0&&s.buttons.length>0&&(s.rtl?w.inputs.style.marginLeft="8px":w.inputs.style.marginRight="8px")),function(){w.toastCapsule.style.visibility="hidden",setTimeout((function(){var t=w.toast.offsetHeight,e=w.toast.currentStyle||window.getComputedStyle(w.toast),n=e.marginTop;n=n.split("px"),n=parseInt(n[0]);var o=e.marginBottom;o=o.split("px"),o=parseInt(o[0]),w.toastCapsule.style.visibility="",w.toastCapsule.style.height=t+o+n+"px",setTimeout((function(){w.toastCapsule.style.height="auto",s.target&&(w.toastCapsule.style.overflow="visible")}),500),s.timeout&&i.progress(s,w.toast).start()}),100)}(),function(){var t=s.position;if(s.target)w.wrapper=document.querySelector(s.target),w.wrapper.classList.add(n+"-target"),s.targetFirst?w.wrapper.insertBefore(w.toastCapsule,w.wrapper.firstChild):w.wrapper.appendChild(w.toastCapsule);else{if(-1==r.indexOf(s.position))return void console.warn("["+n+"] Incorrect position.\nIt can be › "+r);t=o||window.innerWidth<=c?"bottomLeft"==s.position||"bottomRight"==s.position||"bottomCenter"==s.position?n+"-wrapper-bottomCenter":"topLeft"==s.position||"topRight"==s.position||"topCenter"==s.position?n+"-wrapper-topCenter":n+"-wrapper-center":n+"-wrapper-"+t,w.wrapper=document.querySelector("."+n+"-wrapper."+t),w.wrapper||(w.wrapper=document.createElement("div"),w.wrapper.classList.add(n+"-wrapper"),w.wrapper.classList.add(t),document.body.appendChild(w.wrapper)),"topLeft"==s.position||"topCenter"==s.position||"topRight"==s.position?w.wrapper.insertBefore(w.toastCapsule,w.wrapper.firstChild):w.wrapper.appendChild(w.toastCapsule)}isNaN(s.zindex)?console.warn("["+n+"] Invalid zIndex."):w.wrapper.style.zIndex=s.zindex}(),function(){s.overlay&&(null!==document.querySelector("."+n+"-overlay.fadeIn")?(w.overlay=document.querySelector("."+n+"-overlay"),w.overlay.setAttribute("data-iziToast-ref",w.overlay.getAttribute("data-iziToast-ref")+","+s.ref),isNaN(s.zindex)||null===s.zindex||(w.overlay.style.zIndex=s.zindex-1)):(w.overlay.classList.add(n+"-overlay"),w.overlay.classList.add("fadeIn"),w.overlay.style.background=s.overlayColor,w.overlay.setAttribute("data-iziToast-ref",s.ref),isNaN(s.zindex)||null===s.zindex||(w.overlay.style.zIndex=s.zindex-1),document.querySelector("body").appendChild(w.overlay)),s.overlayClose?(w.overlay.removeEventListener("click",{}),w.overlay.addEventListener("click",(function(t){i.hide(s,w.toast,"overlay")}))):w.overlay.removeEventListener("click",{}))}(),function(){if(s.animateInside){w.toast.classList.add(n+"-animateInside");var t=[200,100,300];"bounceInLeft"!=s.transitionIn&&"bounceInRight"!=s.transitionIn||(t=[400,200,400]),s.title.length>0&&setTimeout((function(){w.strong.classList.add("slideIn")}),t[0]),s.message.length>0&&setTimeout((function(){w.p.classList.add("slideIn")}),t[1]),(s.icon||s.iconUrl)&&setTimeout((function(){w.icon.classList.add("revealIn")}),t[2]);var e=150;s.buttons.length>0&&w.buttons&&setTimeout((function(){m(w.buttons.childNodes,(function(t,n){setTimeout((function(){t.classList.add("revealIn")}),e),e+=150}))}),s.inputs.length>0?150:0),s.inputs.length>0&&w.inputs&&(e=150,m(w.inputs.childNodes,(function(t,n){setTimeout((function(){t.classList.add("revealIn")}),e),e+=150})))}}(),s.onOpening.apply(null,[s,w.toast]);try{var C=new CustomEvent(n+"-opening",{detail:s,bubbles:!0,cancelable:!0});document.dispatchEvent(C)}catch(L){console.warn(L)}setTimeout((function(){w.toast.classList.remove(n+"-opening"),w.toast.classList.add(n+"-opened");try{var t=new CustomEvent(n+"-opened",{detail:s,bubbles:!0,cancelable:!0});document.dispatchEvent(t)}catch(e){console.warn(e)}s.onOpened.apply(null,[s,w.toast])}),1e3),s.drag&&(a?(w.toast.addEventListener("touchstart",(function(t){b.startMoving(this,i,s,t)}),!1),w.toast.addEventListener("touchend",(function(t){b.stopMoving(this,t)}),!1)):(w.toast.addEventListener("mousedown",(function(t){t.preventDefault(),b.startMoving(this,i,s,t)}),!1),w.toast.addEventListener("mouseup",(function(t){t.preventDefault(),b.stopMoving(this,t)}),!1))),s.closeOnEscape&&document.addEventListener("keyup",(function(t){t=t||window.event,27==t.keyCode&&i.hide(s,w.toast,"esc")})),s.closeOnClick&&w.toast.addEventListener("click",(function(t){i.hide(s,w.toast,"toast")})),i.toast=w.toast},e}))},5599:function(t,e,n){"use strict";var o=n(3233),i=n(3396);function s(t,e){const n=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(n)])}var a=n(89);const r={},l=(0,a.Z)(r,[["render",s]]);var c=l,d=n(2483);function u(t,e,n,o,s,a){const r=(0,i.up)("Inicio");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(r)])}var p=n(7156);const m=t=>((0,i.dD)("data-v-5ae22a87"),t=t(),(0,i.Cn)(),t),g={class:"background1"},f=m((()=>(0,i._)("p",{class:"item1"},"Actividades Diarias",-1))),v={class:"item2"},h={class:"background2"};function y(t,e,n,o,s,a){const r=(0,i.up)("ListaTareas");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",g,[f,(0,i._)("p",v,(0,p.zw)(o.state.dia),1)]),(0,i._)("div",h,[(0,i.Wm)(r)])])}var b=n(4958);const w={class:"container-lista"},C={key:0},L={class:"card"},E={class:"card-body"},I={class:"alert alert-danger",role:"alert"},x=(0,i._)("div",{class:"contenedor-error"},[(0,i._)("i",{class:"fa fa-circle-xmark"}),(0,i._)("h6",null,[(0,i._)("strong",null,"Upps! ha ocurrido un error")])],-1),T={key:1},S={class:"card-body lista"},M={class:"icon-width"},N=["onClick"],O={class:"task-width"},_={class:"paginacion"},k={class:"pagination"},z={class:"page-item"},A=(0,i._)("span",{class:"boton-paginacion"},"«",-1),R=[A],D={class:"page-item"},B={class:"page-link"},H={class:"page-item"},q=(0,i._)("span",null,"»",-1),W=[q];function j(t,e,n,s,a,r){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",w,[s.state.error?((0,i.wg)(),(0,i.iD)("div",C,[(0,i._)("div",L,[(0,i._)("div",E,[(0,i._)("div",I,[x,(0,i._)("p",null,(0,p.zw)(s.state.msgError),1)])])])])):((0,i.wg)(),(0,i.iD)("div",T,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.state.listaActividades,((t,e)=>(0,i.wy)(((0,i.wg)(),(0,i.iD)("div",{class:"card",key:e},[(0,i._)("div",S,[(0,i._)("div",M,[(0,i._)("button",{onClick:()=>s.completarActividad(t.id),class:"boton-estado"},[(0,i._)("i",{class:(0,p.C_)(t.estado?"fa fa-circle-check completada":"fa fa-circle-info incompleta")},null,2)],8,N)]),(0,i._)("div",O,[(0,i._)("h6",{class:(0,p.C_)(t.estado?"estilo-texto":"")},(0,p.zw)(t.actividadDiariaId.descripcion),3)])])])),[[o.F8,(s.state.pag-1)*s.state.num_results<=e&&s.state.pag*s.state.num_results>e]]))),128))])),(0,i._)("nav",_,[(0,i._)("ul",k,[(0,i._)("li",z,[(0,i.wy)((0,i._)("a",{class:"page-link boton-paginacion",onClick:e[0]||(e[0]=(0,o.iM)((t=>s.state.pag-=1),["prevent"]))},R,512),[[o.F8,1!=s.state.pag]])]),(0,i._)("li",D,[(0,i._)("a",B,(0,p.zw)(s.state.pag),1)]),(0,i._)("li",H,[(0,i.wy)((0,i._)("a",{class:"page-link boton-paginacion",onClick:e[1]||(e[1]=(0,o.iM)((t=>s.state.pag+=1),["prevent"]))},W,512),[[o.F8,s.state.pag*s.state.num_results/s.state.listaActividades.length<1]])])])]),(0,i._)("div",null,[(0,i._)("button",{class:"btn btn-outline-primary",onClick:e[2]||(e[2]=()=>s.resetearEstadoActividades())},"Resetear")])])])}var U=n(4311),G=n(586),F=n.n(G),Z={setup(){const t=(0,b.qj)({api:"https://apitareasdiarias.fly.dev/api/",dia:"",listaActividades:[],num_results:5,pag:1,msgError:"",error:!1}),e=async()=>{try{const e=await U.Z.get(t.api+"obtener-actividades");t.listaActividades=e.data.datos}catch(e){t.error=!0,t.msgError=e.message}},n=()=>{const e=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],n=new Date,o=n.getDay();t.dia=e[o]},o=async e=>{try{const n=await U.Z.get(t.api+"completar-actividad/"+e),o=n.data;200===n.status&&F().show({title:"SUCCESS",titleColor:"#1dc74c",color:"#fff",class:"text-success",position:"topRight",message:o.mensaje})}catch(n){console.error(n)}},s=async()=>{try{const e=await U.Z.put(`${t.api}resetear-actividades`),n=e.data;200===e.status&&F().show({title:"SUCCESS",titleColor:"#1dc74c",color:"#fff",class:"text-success",position:"topRight",message:n.mensaje})}catch(e){console.error(e)}};return(0,i.bv)((async()=>{await e(),n()})),(0,i.ic)((async()=>{await e()})),{state:t,completarActividad:o,resetearEstadoActividades:s}}};const X=(0,a.Z)(Z,[["render",j]]);var P=X,V={components:{ListaTareas:P},setup(){const t=(0,b.qj)({api:"https://apitareasdiarias.fly.dev/api/",dia:""}),e=()=>{const e=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],n=new Date,o=n.getDay();t.dia=e[o]};return(0,i.bv)((async()=>{e()})),{state:t}}};const J=(0,a.Z)(V,[["render",y],["__scopeId","data-v-5ae22a87"]]);var K=J,Y={name:"InicioView",components:{Inicio:K}};const $=(0,a.Z)(Y,[["render",u]]);var Q=$;const tt=[{path:"/",name:"inicio",component:Q}],et=(0,d.p7)({history:(0,d.PO)(),routes:tt});var nt=et;n(8665);(0,o.ri)(c).use(nt).mount("#app")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var s=e[o]={exports:{}};return t[o].call(s.exports,s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,s){if(!o){var a=1/0;for(d=0;d<t.length;d++){o=t[d][0],i=t[d][1],s=t[d][2];for(var r=!0,l=0;l<o.length;l++)(!1&s||a>=s)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(r=!1,s<a&&(a=s));if(r){t.splice(d--,1);var c=i();void 0!==c&&(e=c)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[o,i,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,s,a=o[0],r=o[1],l=o[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(l)var d=l(n)}for(e&&e(o);c<a.length;c++)s=a[c],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(d)},o=self["webpackChunktareas_diarias"]=self["webpackChunktareas_diarias"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(5599)}));o=n.O(o)})();
//# sourceMappingURL=app.25eaa753.js.map