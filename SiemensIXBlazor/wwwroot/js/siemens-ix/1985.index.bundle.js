"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[1985],{1985:(e,t,i)=>{i.r(t),i.d(t,{ix_kpi:()=>a});var o=i(6969);const a=class{constructor(e){(0,o.r)(this,e),this.label=void 0,this.value=void 0,this.unit=void 0,this.state="neutral",this.orientation="horizontal"}getStateIcon(){switch(this.state){case"alarm":return(0,o.h)("ix-icon",{color:"kpi-display-icon--color",name:"alarm",size:"16"});case"warning":return(0,o.h)("ix-icon",{color:"kpi-display-icon--color",name:"warning",size:"16"});default:return""}}getTooltipText(){let e=`${this.label}: ${this.value}`;return this.unit&&(e=e.concat(` ${this.unit}`)),e}render(){return(0,o.h)(o.H,{key:"dfc10eb1b32999417bfcfe2b13318733468c2b8d",title:this.getTooltipText(),tabindex:"1",class:{stacked:"vertical"===this.orientation}},(0,o.h)("div",{key:"42ae8899123702f27d437b1002d19ecca635c827",class:{"kpi-container":!0,alarm:"alarm"===this.state,warning:"warning"===this.state}},(0,o.h)("span",{key:"97fd8b58beb66d4071a0a00247d73909bb15ac9c",class:"kpi-label"},this.getStateIcon(),(0,o.h)("span",{key:"c94f2356c26f267f42427b8dd854dd50a5aaa075",class:"kpi-label-text"},this.label)),(0,o.h)("span",{key:"dd33de51b6d73d1fd53715bcfa0b90d4b09fa0e0",class:"kpi-value-container"},(0,o.h)("span",{key:"b6172821e5cec47954289a183f37284f9c9c4032",class:"kpi-value"},this.value),this.unit?(0,o.h)("span",{class:"kpi-unit"},this.unit):"")))}};a.style=":host{display:flex;flex-grow:1;height:2.5rem;border-radius:var(--theme-kpi--border-radius);padding:0.375rem 0.25rem;min-width:0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .kpi-container{display:flex;height:100%;width:100%;border-block-end:2px solid grey}:host .kpi-container.alarm{border-block-end-color:var(--theme-color-alarm)}:host .kpi-container.warning{border-block-end-color:var(--theme-color-warning)}:host .kpi-container .kpi-label{display:flex;align-items:center;color:var(--theme-kpi-display-label--color);flex-grow:1;flex-shrink:9999}:host .kpi-container .kpi-label ix-icon{margin-inline-end:0.25rem}:host .kpi-container .kpi-value-container{display:flex;align-items:flex-end}:host .kpi-container .kpi-value{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text);color:var(--theme-kpi-display-value--color)}:host .kpi-container .kpi-unit{margin-inline-start:0.5rem;color:var(--theme-kpi-display-units--color)}:host .kpi-container .kpi-label,:host .kpi-container .kpi-unit{margin-block-start:0.125rem}:host:not(.disabled):not(:disabled){cursor:pointer}:host:not(.disabled):not(:disabled):hover{background-color:var(--theme-kpi-display--background--hover)}:host:not(.disabled):not(:disabled){cursor:pointer}:host:not(.disabled):not(:disabled):active,:host:not(.disabled):not(:disabled).active{background-color:var(--theme-kpi-display--background--active)}:host:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--focus--border-color)}:host(.stacked){height:3.75rem}:host(.stacked) .kpi-container{justify-content:center;flex-wrap:wrap}:host(.stacked) .kpi-container .kpi-label{width:100%;justify-content:center}"}}]);