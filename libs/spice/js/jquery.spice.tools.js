/**
 *
 * 结合现有插件封装的可多次重复利用的插件代码段
 * 详细用法请参考：http://v3.spice.lh/javascript/tools
 * 如果链接无法访问，请联系QQ：1515110755 或 RTX：hong.liang
 *
 * @ author Razy
 * @ version 1.0 
 *
 */
!function(a){function b(){i.calculateNum&&i.calculateNum(arguments[0].elem,arguments[0].options)}function c(){i.cloudZoom&&i.cloudZoom(arguments[0].elem,arguments[0].options)}function d(){i.dropdown&&i.dropdown(arguments[0].elem,arguments[0].options)}function e(){i.kvScroll&&i.kvScroll(arguments[0].elem,arguments[0].options)}function f(){i.lazyLoad&&i.lazyLoad(arguments[0].elem,arguments[0].options)}function g(){i.placeholder&&i.placeholder(arguments[0].elem,arguments[0].options)}function h(){if(arguments[0].isIscroll&&a.spice.hasTouch){var b=a(arguments[0].elem),c=a.extend(!0,{},{preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/},scrollbars:!0,interactiveScrollbars:!0},arguments[0].isIscroll.options);b.data("iscroll")?b.data("iscroll").refresh():b.data("iscroll",new IScroll(a(".viewport",b)[0],c))}else if(i.tinyscrollbar){var b=a(arguments[0].elem);if(0!=b.length){var d=a(".viewport",b),e=a(".overview",b);e.removeAttr("style"),e.height()>d.height()?b.data("spice.tinyscrollbar")?a(window).trigger("resize.tinyscrollbar"):i.tinyscrollbar(b,arguments[0].options):a(window).trigger("resize.tinyscrollbar")}}}var i=a.spice,j=i.tools={};j.calculateNum=function(c){a.isPlainObject(c)||(c={}),c.options=a.extend({},{btnMinus:".events-minus",btnPlus:".events-plus",textInput:".events-input",max:10,min:0},c.options),c.elem=c.elem||".events-calculate-num",b.apply(this,[c])},j.changeImageSrc=function(b){if(!(this instanceof arguments.callee))return new i.tools.changeImageSrc(b);a.isPlainObject(b)||(b={}),this.opt=a.extend({},this.opt,b),this.init()},j.changeImageSrc.prototype={opt:{elem:"img[data-image]",lazyData:"lazysrc",highName:"high",normalName:"normal",callBack:null},init:function(){var b=this,c=b.opt;a(b.opt.elem);b.preMedia=null,a(window).on("resize.changeSrc",function(){var d=a(b.opt.elem),e=b._checkMedia(b,c);e.isChanged&&b._setSrc(b,d,e.mediaNow)}).trigger("resize.changeSrc")},_checkMedia:function(b,c){var d,e,f=c.config?c.config:a.spice.config.resize,g=i.sortBy(f),h=i.invert(f),j=i.getWindowWidth();return a.each(g,function(a,b){0===a&&j<=b&&(e=h[b]),g[a+1]?j<=g[a+1]&&j>=b&&(e=h[b]):j>b&&(e=h[b])}),d=b.preMedia!=e,b.preMedia=e,{isChanged:d,mediaNow:e}},_setSrc:function(b,c,d){c.each(function(c,e){var f=a(e),g=a.parseJSON(f.attr("data-image")),h=window.devicePixelRatio,i=h>1?b.opt.highName:b.opt.normalName,j=g[d],k=a.isPlainObject(j)?j[i]?j[i]:j[b.opt.normalName]:j;if(b.media=d,f.attr(b.opt.lazyData))f.attr(b.opt.lazyData,k),b.opt.callBack&&a.isFunction(b.opt.callBack)&&b.opt.callBack(f,b);else{var l=f.clone(!0);l.attr({src:k}),f.replaceWith(l),b.opt.callBack&&a.isFunction(b.opt.callBack)&&b.opt.callBack(l,b)}})}},j.cloudZoom=function(b){a.isPlainObject(b)||(b={}),b.options=a.extend({},{animationTime:300,easeTime:0,zoomWidth:200,zoomHeight:350,zoomOffsetX:0},b.options),b.elem=b.elem||".events-cloudzoom";var d=a(b.elem);0!=d.length&&(a(".cloudzoom-blank").remove(),a.each(d,function(d,e){var f=a(e).data("CloudZoom");f&&f.destroy(),c.apply(this,[b])}))},j.cloudZoomInside=function(b){a.isPlainObject(b)||(b={}),b.options=a.extend({},{animationTime:300,easeTime:0,zoomWidth:200,zoomHeight:350,zoomOffsetX:20,zoomPosition:"inside"},b.options),b.elem=b.elem||".events-cloudzoom-inside";var d=a(b.elem);0!=d.length&&(a(".cloudzoom-blank").remove(),a.each(d,function(d,e){var f=a(e).data("CloudZoom");f&&f.destroy(),c.apply(this,[b])}))},j.dropdown=function(b){a.isPlainObject(b)||(b={}),b.options=a.extend({},{},b.options),b.elem=b.elem||".events-dropdown",d.apply(this,[b])},j.kvScroll=function(b){a.isPlainObject(b)||(b={}),b.options=a.extend({},{type:"scroll-loop",autoPlay:!0,loop:!0,dot:{style:"dot"}},b.options),b.elem=b.elem||".events-kvScroll",e.apply(this,[b])},j.kvScrollX=function(b){a.isPlainObject(b)||(b={}),b.options=a.extend({},{type:"scroll-loop",autoPlay:!0,loop:!0,dot:{style:"dot"}},b.options),"scroll"!=b.options.type&&"scroll-loop"!=b.options.type&&(b.options.type="scroll-loop"),b.options.axis="x",b.elem=b.elem||".events-kvScroll-x",e.apply(this,[b])},j.kvScrollY=function(b){a.isPlainObject(b)||(b={}),b.options=a.extend({},{type:"scroll-loop",autoPlay:!0,loop:!0,axis:"y"},b.options),"scroll"!=b.options.type&&"scroll-loop"!=b.options.type&&(b.options.type="scroll-loop"),b.options.axis="y",b.elem=b.elem||".events-kvScroll-y",e.apply(this,[b])},j.kvScrollFade=function(b){a.isPlainObject(b)||(b={}),b.options=a.extend({},{type:"fade",autoPlay:!0,loop:!0,dot:{style:"dot"}},b.options),b.options.type="fade",b.elem=b.elem||".events-kvScroll-fade",e.apply(this,[b])},j.scrollGallery=function(b){a.isPlainObject(b)||(b={}),b.options=a.extend({},{type:"gallery",autoPlay:!1,loop:!1,moveNum:2},b.options),b.options.type="gallery",b.elem=b.elem||".events-kvScroll-gallery",e.apply(this,[b])},j.scrollGalleryX=function(b){a.isPlainObject(b)||(b={}),b.options=a.extend({},{type:"gallery",autoPlay:!1,loop:!1,moveNum:2,axis:"x"},b.options),b.options.type="gallery",b.options.axis="x",b.elem=b.elem||".events-kvScroll-gallery-x",e.apply(this,[b])},j.scrollGalleryY=function(b){a.isPlainObject(b)||(b={}),b.options=a.extend({},{type:"gallery",autoPlay:!1,loop:!1,moveNum:2,axis:"y"},b.options),b.options.type="gallery",b.options.axis="y",b.elem=b.elem||".events-kvScroll-gallery-y",e.apply(this,[b])},j.scrollGalleryRes=function(b){a.isPlainObject(b)||(b={}),b.options=a.extend({},{type:"gallery",autoPlay:!1,loop:!1,moveNum:1,axis:"x"},b.options),b.options.type="gallery",b.options.axis="x",b.elem=b.elem||".events-kvScroll-gallery-res";var c=a(b.elem),d=a("li",c),f=a("li:not([class*=none])",c).length,g=d.length;e.apply(this,[b]),a("ul",c).css({width:g/f*100+"%"}),d.css({width:100/g+"%"}).removeClass("none")},j.lazyLoad=function(b){a.isPlainObject(b)||(b={}),b.options=a.extend({},{},b.options),b.elem=b.elem||"img[lazy-src]",f.apply(this,[b])},j.placeholder=function(b){a.isPlainObject(b)||(b={}),b.options=a.extend({},{},b.options),b.elem=b.elem||"input[type=text], textarea",g.apply(this,[b])},j.tinyscrollbar=function(b){a.isPlainObject(b)||(b={}),b.options=a.extend({},{wheelLock:!1,touchLock:!1},b.options),b.elem=b.elem||".events-tinyscrollbar",h.apply(this,[b])},j.tinyscrollbar.destroy=function(b){var c=a(b);0!=c.length&&a.spice.tinyscrollbar&&c.data("spice.tinyscrollbar")&&(c.data("spice.tinyscrollbar").remove(),c.removeData("spice.tinyscrollbar"))};var k=a(".events-top");k.on("tap",function(){return a("body, html").animate({scrollTop:0},300),!1});var l=a.spice.throttle(function(){var b=a(window),c=b.scrollTop();k[c>b.height()?"show":"hide"]()},a.spice.config.throttleTime);a(window).on("scroll.scrollTop",l).trigger("scroll.scrollTop")}(jQuery);