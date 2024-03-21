"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[8590],{8590:(t,e,o)=>{o.r(e),o.d(e,{ix_tab_item:()=>a,ix_tabs:()=>i});var r=o(6969);const a=class{constructor(t){(0,r.r)(this,t),this.tabClick=(0,r.c)(this,"tabClick",7),this.selected=!1,this.disabled=!1,this.small=!1,this.icon=!1,this.rounded=!1,this.counter=void 0,this.layout="auto",this.placement="bottom"}tabItemClasses(t){return{selected:t.selected,disabled:t.disabled,"small-tab":t.small,icon:t.small,stretched:"stretched"===t.layout,bottom:"bottom"===t.placement,top:"top"===t.placement,circle:t.circle}}render(){return(0,r.h)(r.H,{key:"77688f6b83f53ba0de891d2ed529c7b82941930a",class:this.tabItemClasses({selected:this.selected,disabled:this.disabled,small:this.small,icon:this.icon,layout:this.layout,placement:this.placement,circle:this.rounded}),tabIndex:0,onClick:t=>{this.tabClick.emit({nativeEvent:t}).defaultPrevented&&t.stopPropagation()}},(0,r.h)("div",{key:"d1790baee81972038f8a09c0e7a0ee3124e828a6",class:{circle:this.rounded,text:!this.rounded,selected:this.selected,disabled:this.disabled}},(0,r.h)("slot",{key:"7dcd5bcd496e9955b45f00b570fb935a0e9a8969"})),(0,r.h)("div",{key:"435deec3155b879b5f8a397124bf9a198283c2bd",class:{counter:!0,selected:this.selected,hidden:!(this.rounded&&void 0!==this.counter),disabled:this.disabled}},this.counter))}};a.style='@charset "UTF-8";:host{position:relative;display:flex;align-items:center;justify-content:center;padding:10px 1.5rem;line-height:20px;font-size:14px;font-weight:bold;background-color:var(--theme-tab--background);color:var(--theme-tab--color)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ::after{content:"";position:absolute;background-color:var(--theme-tab-indicator--background);width:100%;height:var(--theme-tab-indicator--height);left:0}:host .text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:middle}:host .text span,:host .text span::before{pointer-events:none}:host .circle{display:flex;justify-content:center;align-items:center;height:3rem;width:3rem;background-color:var(--theme-animated-tab-indicator--background);border-radius:50%;border:2px solid var(--theme-animated-tab-circle--border-color);color:var(--theme-an…icon--color);cursor:pointer}:host .circle.selected:not(.disabled){background-color:var(--theme-animated-tab-circle--background--selected);color:var(--theme-animated-tab-icon--color--selected);border-color:var(--theme-animated-tab-circle--border-color--selected)}:host .circle.selected:not(.disabled):hover{background-color:var(--theme-animated-tab-circle--background--selected)}:host .circle:hover{background-color:var(--theme-animated-tab-circle--background--hover)}:host .circle:active{background-color:var(--theme-animated-tab-circle--background--active)}:host .circle:active{background-color:var(--theme-animated-tab-circle--background--active)}:host .circle.disabled{background-color:var(--theme-animated-tab-circle--background--disabled);border-color:var(--theme-animated-tab-circle--border-color--disabled)}:host .counter{position:absolute;z-index:1;height:16px;width:auto;background-color:var(--theme-pill-outline--background);border:1px solid var(--theme-tab-pill--border-color);border-radius:100px;bottom:6px;display:flex;justify-content:center;align-items:center;padding-left:0.25rem;padding-right:0.25rem;font-size:12px;line-height:14px;color:var(--theme-pill-outline--color);cursor:pointer}:host .counter.selected{border-color:var(--theme-tab-pill--border-color--selected)}:host .counter.selected::after{display:none}:host .counter.disabled{border-color:var(--theme-tab-pill--border-color--disabled)}:host .counter::after{display:none}:host .hidden{display:none}:host(.circle){height:72px}:host(.top) ::after{top:0}:host(.bottom) ::after{bottom:0}:host(.stretched){flex-basis:100%;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(:hover:not(.circle)){background-color:var(--theme-tab--background--hover);color:var(--theme-tab-color-hover);cursor:pointer}:host(:hover:not(.circle)) ::after{background-color:var(--theme-tab-indicator--background--hover)}:host(:active:not(.circle)){background-color:var(--theme-tab--background--active);color:var(--theme-tab-color--active)}:host(:active:not(.circle)) ::after{background-color:var(--theme-tab-indicator--background--active)}:host(:focus-visible){outline:0px solid var(--focus--border-color)}:host(:focus-visible) .circle{outline:1px solid var(--focus--border-color)}:host(:focus-visible:not(.circle)){outline:1px solid var(--focus--border-color)}:host(.disabled){pointer-events:none;color:var(--theme-tab--color--disabled);background-color:var(--theme-tab--background--disabled)}:host(.disabled) ::after{background-color:var(--theme-tab-indicator--background--disabled)}:host(.selected:not(.disabled)){background-color:var(--theme-tab--background--selected);color:var(--theme-tab--color--selected)}:host(.selected:not(.disabled)) ::after{background-color:var(--theme-tab-indicator--background--selected)}:host(.icon){padding:1.5rem 0.5rem}:host(.small-tab){height:32px;padding:1rem}:host(.small-tab.icon){padding:1rem 0.25rem}';const i=class{constructor(t){(0,r.r)(this,t),this.selectedChange=(0,r.c)(this,"selectedChange",7),this.windowStartSize=window.innerWidth,this.clickAction={timeout:null,isClick:!0},this.small=!1,this.rounded=!1,this.selected=0,this.layout="auto",this.placement="bottom",this.totalItems=0,this.currentScrollAmount=0,this.scrollAmount=100,this.scrollActionAmount=0}get arrowLeftElement(){return this.hostElement.shadowRoot.querySelector("[data-arrow-left]")}get arrowRightElement(){return this.hostElement.shadowRoot.querySelector("[data-arrow-right]")}onWindowResize(){if(this.totalItems=0,this.totalItems=this.getTabs().length,0===this.windowStartSize)return this.windowStartSize=window.innerWidth;this.move(this.windowStartSize-window.innerWidth),this.windowStartSize=window.innerWidth}getTabs(){return Array.from(this.hostElement.querySelectorAll("ix-tab-item"))}getTab(t){return this.getTabs()[t]}getTabsWrapper(){return this.hostElement.shadowRoot.querySelector(".items-content")}showArrows(){try{const t=this.getTabsWrapper();return t.scrollWidth>Math.ceil(t.getBoundingClientRect().width)&&"auto"===this.layout}catch(t){return!1}}showPreviousArrow(){try{return this.showArrows()&&this.scrollActionAmount<0}catch(t){return!1}}showNextArrow(){try{const t=this.getTabsWrapper(),e=t.getBoundingClientRect();return this.showArrows()&&this.scrollActionAmount>-1*(t.scrollWidth-e.width)}catch(t){return!1}}getArrowStyle(t){return{opacity:t?"1":"0",zIndex:t?"1":"-1"}}move(t,e=!1){const o=this.getTabsWrapper(),r=-1*(o.scrollWidth-o.getBoundingClientRect().width),a=[`transform: translateX(${t=(t=this.currentScrollAmount+t)>0?0:t<r?r:t}px);`,e?"transition: all ease-in-out 400ms;":""].join("");o.setAttribute("style",a),e?this.currentScrollAmount=this.scrollActionAmount=t:this.scrollActionAmount=t}moveTabToView(t){if(!this.showArrows())return;const e=-1*this.getTab(t).getBoundingClientRect().x;this.move(e,!0)}setSelected(t){this.selected=t}clickTab(t){if(this.dragStop())return;const{defaultPrevented:e}=this.selectedChange.emit(t);e||(this.setSelected(t),this.moveTabToView(t))}dragStart(t,e){if(!this.showArrows())return;if(e.button>0)return;this.clickAction.timeout=null===this.clickAction.timeout?setTimeout((()=>this.clickAction.isClick=!1),300):null;const o=parseFloat(window.getComputedStyle(t).left),r=e.clientX,a=t=>this.dragMove(t,o,r);window.addEventListener("mouseup",(()=>{window.removeEventListener("mousemove",a,!1),this.dragStop()})),window.addEventListener("mousemove",a,!1)}dragMove(t,e,o){this.move(t.clientX+e-o)}dragStop(){return clearTimeout(this.clickAction.timeout),this.clickAction.timeout=null,!this.clickAction.isClick&&(this.currentScrollAmount=this.scrollActionAmount,this.clickAction.isClick=!0,!0)}componentWillLoad(){this.getTabs().map(((t,e)=>{this.small&&t.setAttribute("small","true"),this.rounded&&t.setAttribute("rounded","true"),t.setAttribute("layout",this.layout),t.setAttribute("selected",e===this.selected?"true":"false"),t.setAttribute("placement",this.placement)}))}componentDidRender(){const t=this.getTabs();this.totalItems=t.length,t.map(((t,e)=>{t.setAttribute("selected",e===this.selected?"true":"false")}))}componentWillRender(){var t;t=()=>{const t=this.showNextArrow(),e=this.showPreviousArrow();Object.assign(this.arrowLeftElement.style,this.getArrowStyle(e)),Object.assign(this.arrowRightElement.style,this.getArrowStyle(t))},"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(t):"function"==typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t)}componentDidLoad(){this.getTabs().forEach((t=>{t.addEventListener("mousedown",(e=>this.dragStart(t,e)))}))}onTabClick(t){if(t.defaultPrevented)return;const e=t.target;this.getTabs().forEach(((t,o)=>{t.disabled||t!==e||this.clickTab(o)}))}render(){return(0,r.h)(r.H,{key:"f98d2ee11257c6e5879f25404379e8be5a535d31"},(0,r.h)("div",{key:"a1230a4cac929390e9415fcfe25362c029a0e22a",class:"arrow","data-arrow-left":!0,onClick:()=>this.move(this.scrollAmount,!0)},(0,r.h)("ix-icon",{key:"f34a2391bd3bd96c11251df77b379958be1411bf",name:"chevron-left-small"})),(0,r.h)("div",{key:"66ce38113880297fac297678a05d6abf3d01a28e",class:{"tab-items":!0,"overflow-shadow":!0,"shadow-left":this.showPreviousArrow(),"shadow-right":this.showNextArrow(),"shadow-both":this.showNextArrow()&&this.showPreviousArrow()}},(0,r.h)("div",{key:"7f11e3d666b5a80a7faef2a0bf80b6a00e14c3e8",class:"items-content"},(0,r.h)("slot",{key:"5e5d4c50d3c0fa30527f02a32dab998ad2d7aa5b"}))),(0,r.h)("div",{key:"fbcfce76ec9d1fb48beb35ba7e62a7cc4cac7946",class:"arrow right","data-arrow-right":!0,onClick:()=>this.move(-this.scrollAmount,!0)},(0,r.h)("ix-icon",{key:"7f7a80642127bff14a1c182468bec101152218ae",name:"chevron-right-small"})))}get hostElement(){return(0,r.g)(this)}};i.style=":host{width:auto;display:flex;align-items:center;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .tab-items{overflow:hidden;scroll-behavior:smooth;width:100%}:host .tab-items .items-content{display:flex;align-items:center}:host .arrow{position:absolute;display:flex;align-items:center;justify-content:center;width:32px;height:32px;top:0;bottom:0;left:0;margin:auto 0;border-radius:4px;color:var(--theme-btn-invisible-primary--color);background-color:var(--theme-btn-invisible-primary--background);z-index:2}:host .arrow:hover{color:var(--theme-btn-invisible-primary--color--hover);background-color:var(--theme-btn-invisible-primary--background--hover)}:host .arrow:active{color:var(--theme-btn-invisible-primary--color--active);background-color:var(--theme-btn-invisible-primary--background--active)}:host .arrow.right{left:auto;right:0}:host .overflow-shadow{display:block;position:relative;height:100%;width:100%;pointer-events:all}:host .overflow-shadow.shadow-left{-webkit-mask-image:linear-gradient(90deg, transparent 0px, black 45px);mask-image:linear-gradient(90deg, transparent 0px, black 45px)}:host .overflow-shadow.shadow-right{-webkit-mask-image:linear-gradient(90deg, black calc(100% - 45px), transparent 100%);mask-image:linear-gradient(90deg, black calc(100% - 45px), transparent 100%)}:host .overflow-shadow.shadow-both{-webkit-mask-image:linear-gradient(90deg, transparent 0px, black 45px, black calc(100% - 45px), transparent 100%);mask-image:linear-gradient(90deg, transparent 0px, black 45px, black calc(100% - 45px), transparent 100%)}"}}]);