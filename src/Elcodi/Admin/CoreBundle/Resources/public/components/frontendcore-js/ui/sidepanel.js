!function(a){"use strict";a.fn.bigSlide=function(b){var c=this,d=a.extend({menu:"#menu",push:".push",side:"left",menuWidth:"15.625em",speed:"300",state:"closed"},b),e={state:d.state},f={init:function(){g.init()},changeState:function(){e.state="closed"===e.state?"open":"closed"},getState:function(){return e.state}},g={init:function(){this.$menu=a(d.menu),this.$push=a(d.push),this.width=d.menuWidth;var b={position:"fixed",top:"0",bottom:"0","settings.side":"-"+d.menuWidth,width:d.menuWidth,height:"100%"},e={"-webkit-transition":d.side+" "+d.speed+"ms ease","-moz-transition":d.side+" "+d.speed+"ms ease","-ms-transition":d.side+" "+d.speed+"ms ease","-o-transition":d.side+" "+d.speed+"ms ease",transition:d.side+" "+d.speed+"ms ease"};this.$menu.css(b),this.$push.css(d.side,"0"),this.$menu.css(e),this.$push.css(e),c.on("click.bigSlide touchstart.bigSlide",function(a){a.preventDefault(),"open"===f.getState()?g.toggleClose():g.toggleOpen()})},toggleOpen:function(){f.changeState(),this.$menu.css(d.side,"0"),this.$push.css(d.side,this.width)},toggleClose:function(){f.changeState(),this.$menu.css(d.side,"-"+this.width),this.$push.css(d.side,"0")}};f.init()}}(jQuery),FrontendCore.define("sidepanel",[],function(){return{sPathCss:oGlobalSettings.sPathCssUI+"?v="+oGlobalSettings.sHash,oDefault:{menu:"#side-panel",push:".push",side:"left",menuWidth:"15.6em",speed:300,"class":"side-panel-default"},onStart:function(){var a=FrontendTools.getDataModules("sidepanel"),b=this;FrontendTools.loadCSS(this.sPathCss),FrontendTools.trackModule("JS_Libraries","call","sidepanel"),$(a).each(function(a){b.autobind(this,a)})},autobind:function(a){var b,c=this,d=a.href,e={};if(null!==a.getAttribute("data-fc-width")&&(e.menuWidth=a.getAttribute("data-fc-width")),null!==a.getAttribute("data-fc-position")&&(e.side=a.getAttribute("data-fc-position")),null!==a.getAttribute("data-fc-class")&&(e["class"]=a.getAttribute("data-fc-class")),-1!==d.indexOf("#")&&(e.menu="#"+d.split("#")[1]),b=FrontendTools.mergeOptions(c.oDefault,e),$(b.menu).addClass(b["class"]),$(a).bigSlide(b),$(a).on("click",function(){"right"===b.side&&"0px"===$(b.menu).css("right")?$(b.menu).css("z-index","100"):$(b.menu).css("z-index","200")}),$(a).parent(b.menu).length>0){var f=$(a).outerWidth();$(a).css("right"===b.side?{left:"-"+f+"px"}:{right:"-"+f+"px"}),null!==a.getAttribute("data-fc-tab-top")&&$(a).css("top",a.getAttribute("data-fc-tab-top"))}"right"===b.side?$(b.menu).css({right:"-"+b.menuWidth}).addClass("side-panel-right"):$(b.menu).css({left:"-"+b.menuWidth}).addClass("side-panel-left")},onStop:function(){this.sPathCss=null},onDestroy:function(){delete this.sPathCss}}});