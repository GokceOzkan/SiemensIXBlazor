"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[3169],{3169:(t,e,i)=>{i.r(e),i.d(e,{ix_event_list:()=>a});var r=i(6969),s=i(8396),o=i(924);const a=class{constructor(t){(0,r.r)(this,t),this.mutationObserver=(0,s.c)(this.onMutation.bind(this)),this.itemHeight="S",this.compact=!1,this.animated=!0,this.chevron=void 0}watchChevron(t){this.handleChevron(t)}componentDidLoad(){if(this.animated&&this.triggerFadeIn(),!Number.isNaN(Number(this.itemHeight))){const t=(0,o.a)(this.itemHeight);this.hostElement.querySelectorAll("ix-event-list-item").forEach((e=>{this.setCustomHeight(e,t)}))}this.handleChevron(this.chevron),this.mutationObserver.observe(this.hostElement,{childList:!0,subtree:!0})}onMutation(t){this.triggerFadeOut().then((()=>{if("number"==typeof this.itemHeight){const e=(0,o.a)(this.itemHeight);t.filter((t=>"childList"===t.type)).forEach((t=>t.addedNodes.forEach((t=>{const i=t;this.setCustomHeight(i,e)}))))}this.handleChevron(this.chevron),this.triggerFadeIn()}))}setCustomHeight(t,e){t.style.setProperty("--event-list-item-height",e)}triggerFadeOut(){return this.animated?this.hostElement.shadowRoot.querySelector("ul").animate([{opacity:1,easing:"ease-in"},{opacity:0}],{duration:a.fadeOutDuration}).finished:Promise.resolve()}triggerFadeIn(){this.animated&&this.hostElement.querySelectorAll("ix-event-list-item").forEach(((t,e)=>{const i=80*e,r=[{opacity:0},{opacity:0,easing:"ease-out",offset:i/(i+a.fadeInDuration)},{opacity:1}],s={duration:a.fadeInDuration+i,iterations:1};t.animate(r,s)}))}handleChevron(t){this.hostElement.querySelectorAll("ix-event-list-item").forEach((e=>{t?e.setAttribute("chevron","true"):void 0!==t&&e.removeAttribute("chevron")}))}render(){return(0,r.h)(r.H,{key:"89be0fbb595cea7d39e50feedb367108c2a206bb",class:{"item-size-s":"S"===this.itemHeight,"item-size-l":"L"===this.itemHeight,compact:this.compact}},(0,r.h)("ul",{key:"1e14d4602a221795448e7216c0952b29af06c522"},(0,r.h)("slot",{key:"5c55793caf21fb2f76f7019b7813a75b9746b180"})))}get hostElement(){return(0,r.g)(this)}static get watchers(){return{chevron:["watchChevron"]}}};a.fadeOutDuration=50,a.fadeInDuration=150,a.style=":host{display:block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ul{list-style:none;padding:0;margin-top:0;margin-bottom:0}:host(.item-size-l){--event-list-item-height:6.5rem;--event-list-item-content-white-space:normal}:host(.compact){--event-list-item-border-radius:0;--event-list-item-margin-bottom:0}"},8396:(t,e,i)=>{i.d(e,{c:()=>r});const r=t=>new MutationObserver(t)},924:(t,e,i)=>{i.d(e,{a:()=>r});const r=t=>t/16+"rem"}}]);