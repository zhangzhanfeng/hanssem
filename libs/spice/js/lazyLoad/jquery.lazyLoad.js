/**
 *
 * 图片延迟加载
 * 详细用法请参考：http://v3.spice.lh/javascript/lazyload
 * 如果链接无法访问，请联系QQ：1515110755 或 RTX：hong.liang
 *
 * @ author Razy
 * @ version 1.0
 *
 */
!function(a,b,c){"object"==typeof module&&"object"==typeof module.exports?module.exports=b(a):a.spice.lazyLoad=b(a)}(jQuery,function(a){return function(b,c){if(!b||a.isPlainObject(b))return!1;var d=a.extend({attr:"lazy-src",timeout:200,parents:null,prestrain:0,callBack:null},c||{}),e=a(b),f=a(window),g=a.spice.throttle(function(){var b=f.height(),c=f.scrollTop()+b;e.each(function(b,e){var f=a(e);a('<img src="'+f.attr("src")+'" />').on("load",function(){var b=d.parents?f.parents(d.parents):f,e=b.offset().top,g=b.height();if(c>e-g*d.prestrain){var h=f.attr(d.attr);if(!h)return;a("<img src='"+h+"' />").on("load",function(){f.css({opacity:0}).attr("src",h).removeAttr(d.attr).animate({opacity:1},d.timeout),d.callBack&&a.isFunction(d.callBack)&&d.callBack(f)})}})})},a.spice.config.throttleTime),h=a.spice.debounce(function(){f.trigger("scroll.lazyLoad")},a.spice.config.debounceTime);f.off("scroll.lazyLoad").on("scroll.lazyLoad",g).resize(h).trigger("scroll.lazyLoad")}});