/**
 *
 * 图片放大
 * 详细用法请参考：http://v3.spice.lh/javascript/smartZoom
 * 如果链接无法访问，请联系QQ：1515110755 或 RTX：hong.liang
 *
 * @ version 1.0
 *
 */
function transitionEnd(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}!function(a){a.fn.smartZoom=function(b){function c(a){}function d(a,b){var c=C.data("smartZoomData");c.currentWheelDelta*b<0&&(c.currentWheelDelta=0),c.currentWheelDelta+=b,D.zoom(c.mouseWheelDeltaFactor*c.currentWheelDelta,{x:a.pageX,y:a.pageY})}function e(a){a.preventDefault()}function f(){var a=C.data("smartZoomData");if(1==a.settings.mouseMoveEnabled&&1==a.settings.moveCursorEnabled){var b=u(),c=b.width/a.originalSize.width;parseInt(100*c)>parseInt(100*a.adjustedPosInfos.scale)?C.css({cursor:"move"}):C.css({cursor:"default"})}}function g(a){o(a.pageX,a.pageY)}function h(b){b.preventDefault(),a(document).on("mousemove.smartZoom",i),a(document).bind("mouseup.smartZoom",j);var c=C.data("smartZoomData");c.moveCurrentPosition=new B(b.pageX,b.pageY),c.moveLastPosition=new B(b.pageX,b.pageY)}function i(a){var b=C.data("smartZoomData");(b.mouseMoveForPan||!b.mouseMoveForPan&&b.moveCurrentPosition.x!=a.pageX&&b.moveCurrentPosition.y!=a.pageY)&&(b.mouseMoveForPan=!0,n(a.pageX,a.pageY,0,!1))}function j(b){var c=C.data("smartZoomData");if(c.mouseMoveForPan)if(c.mouseMoveForPan=!1,c.moveLastPosition.distance(c.moveCurrentPosition)>4){var d=c.moveLastPosition.interpolate(c.moveCurrentPosition,-4);n(d.x,d.y,500,!0)}else n(c.moveLastPosition.x,c.moveLastPosition.y,0,!0);else c.settings.zoomOnSimpleClick&&o(b.pageX,b.pageY);a(document).unbind("mousemove.smartZoom"),a(document).unbind("mouseup.smartZoom")}function k(b){b.preventDefault(),a(document).unbind("touchmove.smartZoom"),a(document).unbind("touchend.smartZoom"),a(document).bind("touchmove.smartZoom",l),a(document).bind("touchend.smartZoom",m);var c=b.originalEvent.touches,d=c[0],e=C.data("smartZoomData");e.touch.touchMove=!1,e.touch.touchPinch=!1,e.moveCurrentPosition=new B(d.pageX,d.pageY),e.moveLastPosition=new B(d.pageX,d.pageY),e.touch.lastTouchPositionArr=new Array;for(var f,g=c.length,h=0;h<g;++h)f=c[h],e.touch.lastTouchPositionArr.push(new B(f.pageX,f.pageY))}function l(a){a.preventDefault();var b=C.data("smartZoomData"),c=a.originalEvent.touches,d=c.length,e=c[0];if(1!=d||b.touch.touchPinch||1!=b.settings.touchMoveEnabled){if(2==d&&!b.touch.touchMove&&1==b.settings.pinchEnabled){b.touch.touchPinch=!0;var f=c[1],g=b.touch.lastTouchPositionArr[0],h=b.touch.lastTouchPositionArr[1],i=new B(e.pageX,e.pageY),j=new B(f.pageX,f.pageY),k=i.distance(j),l=g.distance(h),m=k-l;if(Math.abs(m)<3)return;var o=new B((i.x+j.x)/2,(i.y+j.y)/2),p=u(),q=b.originalSize,r=p.width/q.width,s=k/l,t=p.width*s/q.width;D.zoom(t-r,o,0),b.touch.lastTouchPositionArr[0]=i,b.touch.lastTouchPositionArr[1]=j}}else{if(!b.touch.touchMove){if(b.touch.lastTouchPositionArr[0].distance(new B(e.pageX,e.pageY))<3)return;b.touch.touchMove=!0}n(e.pageX,e.pageY,0,!1)}}function m(b){b.preventDefault(),0==b.originalEvent.touches.length&&(a(document).unbind("touchmove.smartZoom"),a(document).unbind("touchend.smartZoom"));var c=C.data("smartZoomData");if(!c.touch.touchPinch)if(c.touch.touchMove){if(c.moveLastPosition.distance(c.moveCurrentPosition)>2){var d=c.moveLastPosition.interpolate(c.moveCurrentPosition,-4);n(d.x,d.y,500,!0)}}else{if(1==c.settings.dblTapEnabled&&0!=c.touch.lastTouchEndTime&&(new Date).getTime()-c.touch.lastTouchEndTime<400){var e=c.touch.lastTouchPositionArr[0];o(e.x,e.y)}c.touch.lastTouchEndTime=(new Date).getTime()}}function n(a,b,d,e){p(c.PAN);var f=C.data("smartZoomData");f.moveLastPosition.x=f.moveCurrentPosition.x,f.moveLastPosition.y=f.moveCurrentPosition.y;var g=C.offset(),h=u(),i=g.left+(a-f.moveCurrentPosition.x),j=g.top+(b-f.moveCurrentPosition.y),k=q(i,j,h.width,h.height);v(c.PAN,c.START,!1),t(C,k.x,k.y,h.width,h.height,d,1==e?function(){v(c.PAN,c.END,!1)}:null),f.moveCurrentPosition.x=a,f.moveCurrentPosition.y=b}function o(a,b){var c,d=C.data("smartZoomData"),e=d.originalSize,f=u(),g=f.width/e.width,h=d.adjustedPosInfos.scale,i=parseFloat(d.settings.dblClickMaxScale);c=g.toFixed(2)>i.toFixed(2)||Math.abs(i-g)>Math.abs(g-h)?i-g:h-g,D.zoom(c,{x:a,y:b})}function p(b){var c=C.data("smartZoomData");if(c.transitionObject){c.transitionObject.cssAnimHandler&&C.off(a.support.transition,c.transitionObject.cssAnimTimer);var d=c.originalSize,e=u(),g=new Object;g[c.transitionObject.transition]="all 0s",c.transitionObject.css3dSupported?g[c.transitionObject.transform]="translate3d("+e.x+"px, "+e.y+"px, 0) scale3d("+e.width/d.width+","+e.height/d.height+", 1)":g[c.transitionObject.transform]="translateX("+e.x+"px) translateY("+e.y+"px) scale("+e.width/d.width+","+e.height/d.height+")",C.css(g)}else C.stop();f(),null!=b&&v(b,"",!0)}function q(a,b,c,d){var e=C.data("smartZoomData"),f=Math.min(e.adjustedPosInfos.top,b);f+=Math.max(0,e.adjustedPosInfos.top+e.adjustedPosInfos.height-(f+d));var g=Math.min(e.adjustedPosInfos.left,a);return g+=Math.max(0,e.adjustedPosInfos.left+e.adjustedPosInfos.width-(g+c)),new B(g.toFixed(2),f.toFixed(2))}function r(a){C.unbind("load.smartZoom"),D.init.apply(C,[a.data.arguments])}function s(){var a=C.data("smartZoomData"),b=a.containerDiv,c=a.originalSize,d=b.parent().offset(),e=y(a.settings.left,d.left,b.parent().width()),g=y(a.settings.top,d.top,b.parent().height());b.offset({left:e,top:g}),b.width(x(a.settings.width,b.parent().width(),e-d.left)),b.height(x(a.settings.height,b.parent().height(),g-d.top));var h=A(b),i=Math.min(Math.min(h.width/c.width,h.height/c.height),1).toFixed(2),j=c.width*i,k=c.height*i;a.adjustedPosInfos={left:(h.width-j)/2+d.left,top:(h.height-k)/2+d.top,width:j,height:k,scale:i},p(),t(C,a.adjustedPosInfos.left,a.adjustedPosInfos.top,j,k,0,function(){C.css("visibility","visible")}),f()}function t(b,c,d,e,f,g,h){var i=C.data("smartZoomData"),j=i.containerDiv.offset(),k=c-j.left,l=d-j.top;if(null!=i.transitionObject){var m=i.originalSize,n=new Object;n[i.transitionObject.transform+"-origin"]="0 0",n[i.transitionObject.transition]="all "+g/1e3+"s ease-out",i.transitionObject.css3dSupported?n[i.transitionObject.transform]="translate3d("+k+"px, "+l+"px, 0) scale3d("+e/m.width+","+f/m.height+", 1)":n[i.transitionObject.transform]="translateX("+k+"px) translateY("+l+"px) scale("+e/m.width+","+f/m.height+")",null!=h&&(i.transitionObject.cssAnimHandler=h,b.one(a.support.transition.end,i.transitionObject.cssAnimHandler)),b.css(n)}else b.animate({"margin-left":k,"margin-top":l,width:e,height:f},{duration:g,easing:i.settings.easing,complete:function(){null!=h&&h()}})}function u(a){var b=C.data("smartZoomData"),c=C.width(),d=C.height(),e=C.offset(),f=parseInt(e.left),g=parseInt(e.top),h=b.containerDiv.offset();if(1!=a&&(f=parseInt(f)-h.left,g=parseInt(g)-h.top),null!=b.transitionObject){var i=C.css(b.transitionObject.transform);if(i&&""!=i&&-1!=i.search("matrix")){var j,k;-1!=i.search("matrix3d")?(k=i.replace("matrix3d(","").replace(")","").split(","),j=k[0]):(k=i.replace("matrix(","").replace(")","").split(","),j=k[3],f=parseFloat(k[4]),g=parseFloat(k[5]),a&&(f=parseFloat(f)+h.left,g=parseFloat(g)+h.top)),c*=j,d*=j}}return{x:f,y:g,width:c,height:d}}function v(a,b,d){var e=C.data("smartZoomData"),f="";if(1==d&&e.currentActionType!=a?(f=e.currentActionType+"_"+c.END,e.currentActionType="",e.currentActionStep=""):e.currentActionType!=a||e.currentActionStep==c.END?(e.currentActionType=a,e.currentActionStep=c.START,f=e.currentActionType+"_"+e.currentActionStep):e.currentActionType==a&&b==c.END&&(e.currentActionStep=c.END,f=e.currentActionType+"_"+e.currentActionStep,e.currentActionType="",e.currentActionStep=""),""!=f){var g=jQuery.Event(f);g.targetRect=u(!0),g.scale=g.targetRect.width/e.originalSize.width,C.trigger(g)}}function w(){for(var b,c=document.body||document.documentElement,d=c.style,e=["transition","WebkitTransition","MozTransition","MsTransition","OTransition"],f=["transition","-webkit-transition","-moz-transition","-ms-transition","-o-transition"],g=["transform","-webkit-transform","-moz-transform","-ms-transform","-o-transform"],h=e.length,i=0;i<h;i++)if(null!=d[e[i]]){transformStr=g[i];var j=a('<div style="position:absolute;">Translate3d Test</div>');if(a("body").append(j),b=new Object,b[g[i]]="translate3d(20px,0,0)",j.css(b),css3dSupported=j.offset().left-a("body").offset().left==20,j.empty().remove(),css3dSupported)return{transition:f[i],transform:g[i],css3dSupported:css3dSupported}}return null}function x(a,b,c){return a.search&&-1!=a.search("%")?(b-c)*(parseInt(a)/100):parseInt(a)}function y(a,b,c){return a.search&&-1!=a.search("%")?b+c*(parseInt(a)/100):b+parseInt(a)}function z(){s()}function A(a){var b=a.offset();return b?{x:b.left,y:b.top,width:a.outerWidth(),height:a.outerHeight()}:null}function B(a,b){this.x=a,this.y=b,this.toString=function(){return"(x="+this.x+", y="+this.y+")"},this.interpolate=function(a,b){return new B(b*this.x+(1-b)*a.x,b*this.y+(1-b)*a.y)},this.distance=function(a){return Math.sqrt(Math.pow(a.y-this.y,2)+Math.pow(a.x-this.x,2))}}var C=this;c.ZOOM="SmartZoom_ZOOM",c.PAN="SmartZoom_PAN",c.START="START",c.END="END",c.DESTROYED="SmartZoom_DESTROYED";var D={init:function(b){if(!C.data("smartZoomData")){settings=a.extend({top:"0",left:"0",width:"100%",height:"100%",easing:"smartZoomEasing",initCallback:null,maxScale:3,dblClickMaxScale:1.8,mouseEnabled:!0,scrollEnabled:!0,dblClickEnabled:!0,mouseMoveEnabled:!0,moveCursorEnabled:!0,adjustOnResize:!0,touchEnabled:!0,dblTapEnabled:!0,zoomOnSimpleClick:!1,pinchEnabled:!0,touchMoveEnabled:!0,containerBackground:"#FFFFFF",containerClass:""},b);var c=C.attr("style"),f="smartZoomContainer"+(new Date).getTime(),i=a('<div id="'+f+'" class="'+settings.containerClass+'"></div>');C.before(i),C.remove(),i=a("#"+f),i.css({overflow:"hidden"}),""==settings.containerClass&&i.css({"background-color":settings.containerBackground}),i.append(C);var j=new Object;j.lastTouchEndTime=0,j.lastTouchPositionArr=null,j.touchMove=!1,j.touchPinch=!1,C.data("smartZoomData",{settings:settings,containerDiv:i,originalSize:{width:C.width(),height:C.height()},originalPosition:C.offset(),transitionObject:w(),touch:j,mouseWheelDeltaFactor:.15,currentWheelDelta:0,adjustedPosInfos:null,moveCurrentPosition:null,moveLastPosition:null,mouseMoveForPan:!1,currentActionType:"",initialStyles:c,currentActionStep:""}),s(),1==settings.touchEnabled&&C.bind("touchstart.smartZoom",k),1==settings.mouseEnabled&&(1==settings.mouseMoveEnabled&&C.bind("mousedown.smartZoom",h),1==settings.scrollEnabled&&(i.bind("mousewheel.smartZoom",d),i.bind("mousewheel.smartZoom DOMMouseScroll.smartZoom",e)),1==settings.dblClickEnabled&&0==settings.zoomOnSimpleClick&&i.bind("dblclick.smartZoom",g)),document.ondragstart=function(){return!1},1==settings.adjustOnResize&&a(window).bind("resize.smartZoom",z),null!=settings.initCallback&&settings.initCallback.apply(this,C)}},zoom:function(a,b,d){var e,g,h=C.data("smartZoomData");if(b)e=b.x,g=b.y;else{var i=A(h.containerDiv);e=i.x+i.width/2,g=i.y+i.height/2}p(c.ZOOM);var j=u(!0),k=h.originalSize,l=j.width/k.width+a;l=Math.max(h.adjustedPosInfos.scale,l),l=Math.min(h.settings.maxScale,l);var m=k.width*l,n=k.height*l,o=e-j.x,r=g-j.y,s=m/j.width,w=j.x-(o*s-o),x=j.y-(r*s-r),y=q(w,x,m,n);null==d&&(d=700),v(c.ZOOM,c.START,!1),t(C,y.x,y.y,m,n,d,function(){h.currentWheelDelta=0,f(),v(c.ZOOM,c.END,!1)})},pan:function(a,b,d){if(null!=a&&null!=b){null==d&&(d=700);var e=C.offset(),f=u(),g=q(e.left+a,e.top+b,f.width,f.height);g.x==e.left&&g.y==e.top||(p(c.PAN),v(c.PAN,c.START,!1),t(C,g.x,g.y,f.width,f.height,d,function(){v(c.PAN,c.END,!1)}))}},destroy:function(){var b=C.data("smartZoomData");if(b){p();var d=b.containerDiv;C.unbind("mousedown.smartZoom"),C.bind("touchstart.smartZoom"),d.unbind("mousewheel.smartZoom"),d.unbind("dblclick.smartZoom"),d.unbind("mousewheel.smartZoom DOMMouseScroll.smartZoom"),a(window).unbind("resize.smartZoom"),a(document).unbind("mousemove.smartZoom"),a(document).unbind("mouseup.smartZoom"),a(document).unbind("touchmove.smartZoom"),a(document).unbind("touchend.smartZoom"),C.css({cursor:"default"}),d.before(C),t(C,b.originalPosition.left,b.originalPosition.top,b.originalSize.width,b.originalSize.height,5),C.removeData("smartZoomData"),d.remove(),C.attr("style",b.initialStyles),C.trigger(c.DESTROYED),C.removeAttr("style")}},isPluginActive:function(){return void 0!=C.data("smartZoomData")}};if(D[b])return D[b].apply(this,Array.prototype.slice.call(arguments,1));"object"!=typeof b&&b?a.error("Method "+b+" does not exist on e-smartzoom jquery plugin"):"img"!=C[0].tagName.toLowerCase()||C[0].complete?D.init.apply(C,[arguments[0]]):C.bind("load.smartZoom",{arguments:arguments[0]},r)},a.spice.smartZoom=function(b,c){return!(!b||a.isPlainObject(b))&&a.fn.smartZoom.apply(a(b),a.spice.rest(Array.prototype.slice.call(arguments)))}}(jQuery),function(a){a.extend(a.easing,{smartZoomEasing:function(b,c,d,e,f){return a.easing.smartZoomOutQuad(b,c,d,e,f)},smartZoomOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c}})}(jQuery),function(a){function b(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=0,g=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),g=e,void 0!==c.axis&&c.axis===c.HORIZONTAL_AXIS&&(g=0,f=-1*e),void 0!==c.wheelDeltaY&&(g=c.wheelDeltaY/120),void 0!==c.wheelDeltaX&&(f=-1*c.wheelDeltaX/120),d.unshift(b,e,f,g),(a.event.dispatch||a.event.handle).apply(this,d)}var c=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var d=c.length;d;)a.event.fixHooks[c[--d]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=c.length;a;)this.addEventListener(c[--a],b,!1);else this.onmousewheel=b},teardown:function(){if(this.removeEventListener)for(var a=c.length;a;)this.removeEventListener(c[--a],b,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})}(jQuery),$.fn.emulateTransitionEnd=function(a){var b=!1,c=this;$(this).one($.support.transition.end,function(){b=!0});var d=function(){b||$(c).trigger($.support.transition.end)};return setTimeout(d,a),this},$(function(){$.support.transition=transitionEnd()});