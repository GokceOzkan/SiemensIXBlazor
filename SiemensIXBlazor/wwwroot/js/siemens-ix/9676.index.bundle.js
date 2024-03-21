"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[9676],{9798:(t,e,s)=>{s.d(e,{m:()=>o});const i={sm:"(max-width: 48em)",md:"(min-width: 48.0625em) and (max-width: 80em)",lg:"(min-width: 80.0625em)"},o=t=>{if("undefined"!=typeof window&&window.matchMedia){const e=i[t];return window.matchMedia(e).matches}return!1}},9676:(t,e,s)=>{s.r(e),s.d(e,{ix_pane_layout:()=>a});var i=s(6969),o=s(7767),n=s(9798);const a=class{constructor(t){(0,i.r)(this,t),this.panes=[],this.layout="full-vertical",this.variant="inline",this.borderless=!1,this.isMobile=!1,this.paneElements=0}get currentPanes(){return this.hostElement.querySelectorAll("ix-pane")}componentWillLoad(){this.paneElements=this.currentPanes.length,this.observer=new MutationObserver((t=>{var e,s;"IX-PANE"===(null===(e=t[0].addedNodes.item(0))||void 0===e?void 0:e.nodeName)?this.paneElements+=1:"IX-PANE"===(null===(s=t[0].removedNodes.item(0))||void 0===s?void 0:s.nodeName)&&(this.paneElements-=1)})),this.observer.observe(this.hostElement,{childList:!0}),this.isMobile=(0,n.m)("sm"),o.a.onChange.on((()=>{this.isMobile=(0,n.m)("sm")}))}componentDidLoad(){this.setPanes(this.currentPanes)}disconnectedCallback(){var t;null===(t=this.observer)||void 0===t||t.disconnect()}setPaneVariant(t){t.ignoreLayoutSettings||(t.variant=this.variant)}setPaneBorder(t){if(!t.ignoreLayoutSettings)if(this.borderless)t.borderless=!0;else{const e=!!this.panes.find((t=>"left"===t.slot&&!t.hideOnCollapse));"floating"!==t.variant||"full-vertical"!==this.layout||!e||"top"!==t.composition&&"bottom"!==t.composition?t.borderless=!1:t.borderless=!0}}setPaneZIndex(t){const e="top"===t.slot,s="bottom"===t.slot,i="left"===t.slot,o="right"===t.slot;let n=1;this.isMobile?(s||e)&&(n=3):"full-vertical"===this.layout?(i||o)&&(n=3):(s||e)&&(n=3),t.style.zIndex=n.toString()}setPanes(t){this.panes=[],t.forEach((t=>{this.panes.push({slot:t.slot,hideOnCollapse:t.hideOnCollapse,floating:"floating"===t.variant})}))}closeFloatingPanes(){this.currentPanes.forEach((t=>{t.expanded&&"floating"===t.variant&&(t.expanded=!1)}))}configurePanes(){let t=0,e=0,s=0,o=0;this.currentPanes.forEach((i=>{const n="top"===i.slot,a="bottom"===i.slot,h="left"===i.slot,l="right"===i.slot;if(h){if(s)return void(i.slot=void 0);s++}else if(l){if(o)return void(i.slot=void 0);o++}else if(n){if(t)return void(i.slot=void 0);t++}else{if(!a)return void(i.slot=void 0);if(e)return void(i.slot=void 0);e++}this.setPaneVariant(i),this.setPaneBorder(i),this.setPaneZIndex(i)})),this.setPanes(this.currentPanes),(0,i.f)(this.hostElement)}onSlotChanged(){this.configurePanes()}onCollapsibleChanged(t){const{slot:e,hideOnCollapse:s}=t.detail;this.panes.forEach((t=>{t.slot===e&&(t.hideOnCollapse=s)})),(0,i.f)(this.hostElement)}onVariantChanged(t){const{slot:e,variant:s}=t.detail;this.panes.forEach((t=>{t.slot===e&&(t.floating="floating"===s)})),(0,i.f)(this.hostElement)}onPaneElementsChange(){this.configurePanes()}onVariableChange(){this.currentPanes.forEach((t=>{this.setPaneVariant(t),this.setPaneBorder(t)})),this.setPanes(this.currentPanes),(0,i.f)(this.hostElement)}onBorderChange(){this.currentPanes.forEach((t=>{this.setPaneBorder(t)}))}onLayoutChange(){this.currentPanes.forEach((t=>{this.setPaneBorder(t),this.setPaneZIndex(t)}))}onMobileChange(){this.currentPanes.forEach((t=>{this.setPaneZIndex(t)}))}hasPadding(t){const e=this.panes.find((e=>e.slot===t));return!!e&&!e.hideOnCollapse&&e.floating}hasPaddingMobile(t){const e=this.panes.find((e=>e.slot===t));return e&&!e.hideOnCollapse}slotExists(t){return!!this.panes.find((e=>e.slot===t))}isFloating(t){const e=this.panes.find((e=>e.slot===t));return!!e&&e.floating}render(){return(0,i.h)(i.H,{key:"a912976c2f78c0b4e7d88c52d543e1474e53e802"},this.isMobile?(0,i.h)("div",{class:"col"},(0,i.h)("div",{key:"top",style:{minHeight:this.hasPaddingMobile("top")?"48px":"0",display:this.slotExists("top")?"block":"none"}},(0,i.h)("slot",{name:"top"})),(0,i.h)("div",{key:"left",style:{minHeight:this.hasPaddingMobile("left")?"48px":"0",display:this.slotExists("left")?"block":"none"}},(0,i.h)("slot",{name:"left"})),(0,i.h)("div",{key:"content",class:"content",onClick:()=>this.closeFloatingPanes()},(0,i.h)("slot",{name:"content"})),(0,i.h)("div",{key:"right",style:{minHeight:this.hasPaddingMobile("right")?"48px":"0",display:this.slotExists("right")?"block":"none"}},(0,i.h)("slot",{name:"right"})),(0,i.h)("div",{key:"bottom",style:{minHeight:this.hasPaddingMobile("bottom")?"48px":"0",display:this.slotExists("bottom")?"block":"none"}},(0,i.h)("slot",{name:"bottom"}))):"full-vertical"==this.layout?(0,i.h)("div",{class:"side-panes-wrapper"},(0,i.h)("div",{class:{row:!0,"padding-left":this.hasPadding("left"),"padding-right":this.hasPadding("right")}},(0,i.h)("div",{key:"left",class:{"absolute-left":this.isFloating("left")}},(0,i.h)("slot",{name:"left"})),(0,i.h)("div",{class:{col:!0,"padding-top":this.hasPadding("top"),"padding-bottom":this.hasPadding("bottom")}},(0,i.h)("div",{key:"top",class:{"absolute-top":this.isFloating("top")}},(0,i.h)("slot",{name:"top"})),(0,i.h)("div",{key:"content",class:"content",onClick:()=>this.closeFloatingPanes()},(0,i.h)("slot",{name:"content"})),(0,i.h)("div",{key:"bottom",class:{"absolute-bottom":this.isFloating("bottom")}},(0,i.h)("slot",{name:"bottom"}))),(0,i.h)("div",{key:"right",class:{"absolute-right":this.isFloating("right")}},(0,i.h)("slot",{name:"right"})))):(0,i.h)("div",{class:"side-panes-wrapper"},(0,i.h)("div",{class:{col:!0,"padding-top":this.hasPadding("top"),"padding-bottom":this.hasPadding("bottom")}},(0,i.h)("div",{key:"top",class:{"absolute-top":this.isFloating("top")}},(0,i.h)("slot",{name:"top"})),(0,i.h)("div",{class:{row:!0,"padding-left":this.hasPadding("left"),"padding-right":this.hasPadding("right")}},(0,i.h)("div",{key:"left",class:{"absolute-left":this.isFloating("left")}},(0,i.h)("slot",{name:"left"})),(0,i.h)("div",{key:"content",class:"content",onClick:()=>this.closeFloatingPanes()},(0,i.h)("slot",{name:"content"})),(0,i.h)("div",{key:"right",class:{"absolute-right":this.isFloating("right")}},(0,i.h)("slot",{name:"right"}))),(0,i.h)("div",{key:"bottom",class:{"absolute-bottom":this.isFloating("bottom")}},(0,i.h)("slot",{name:"bottom"})))))}get hostElement(){return(0,i.g)(this)}static get watchers(){return{paneElements:["onPaneElementsChange"],variant:["onVariableChange"],borderless:["onBorderChange"],layout:["onLayoutChange"],isMobile:["onMobileChange"]}}};a.style=":host{display:flex;position:absolute;width:100%;height:100%}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .side-panes-wrapper{height:100%;width:100%}:host .row{height:100%;width:100%;overflow:hidden;display:flex;flex-direction:row;justify-content:space-between;position:relative}:host .col{height:100%;width:100%;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;position:relative}:host .content{width:100%;height:100%;overflow:auto}:host .absolute-top{width:100%;position:absolute;top:0}:host .absolute-bottom{width:100%;position:absolute;bottom:0}:host .absolute-left{height:100%;position:absolute;left:0}:host .absolute-right{height:100%;position:absolute;right:0}:host .padding-top{padding-top:2.5rem}:host .padding-bottom{padding-bottom:2.5rem}:host .padding-left{padding-left:2.5rem}:host .padding-right{padding-right:2.5rem}"},7767:(t,e,s)=>{s.d(e,{a:()=>c});var i,o,n,a,h=s(9798),l=s(2483),r=function(t,e,s,i){if("a"===s&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?i:"a"===s?i.call(t):i?i.value:e.get(t)},d=function(t,e,s,i,o){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!o:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?o.call(t,s):o?o.value=s:e.set(t,s),s};i=new WeakMap,o=new WeakMap,n=new WeakMap,a=new WeakMap;const c=new class{constructor(){i.set(this,["sm","md","lg"]),o.set(this,new l.T),n.set(this,"lg"),a.set(this,!0),this.debouncedOnResize=function(t,e){let s;return function(...e){clearTimeout(s),s=setTimeout((()=>{t(...e)}),50)}}(this.onResize.bind(this)),"undefined"!=typeof window&&(window.addEventListener("resize",this.debouncedOnResize.bind(this)),this.debouncedOnResize())}get breakpoint(){return r(this,n,"f")}get onChange(){return r(this,o,"f")}get isDetectionEnabled(){return r(this,a,"f")}onResize(){if(!r(this,a,"f"))return;if(!r(this,i,"f"))return;const t=[];if(r(this,i,"f").forEach((e=>{const s=(0,h.m)(e);t.push([e,s])})),t.every((([t,e])=>!1===e))){let e=0;r(this,i,"f").includes("lg")||(e=t.length-1);const[s,a]=t[e];return r(this,o,"f").emit(s),void d(this,n,s,"f")}for(const[e,s]of t.reverse())if(s){r(this,o,"f").emit(e),d(this,n,e,"f");break}}disableBreakpointDetection(){d(this,a,!1,"f")}enableBreakpointDetection(){d(this,a,!0,"f")}setBreakpoint(t){d(this,n,t,"f"),r(this,o,"f").emit(t)}setBreakpoints(t){d(this,i,t,"f"),this.onResize()}}}}]);