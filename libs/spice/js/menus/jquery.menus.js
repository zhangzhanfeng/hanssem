/**
 *
 * 菜单下拉框
 * 详细用法请参考：http://v3.spice.lh/javascript/menus
 * 如果链接无法访问，请联系QQ：1515110755 或 RTX：hong.liang
 *
 * @ author Razy
 * @ version 1.0
 *
 */
!function(a){"use strict";function b(b,c){if(!b||a.isPlainObject(b))return!1;var e=[];return a(b).each(function(b,f){var g=a(f),h=g.data("spice.menus");h||g.data("spice.menus",h=new d(g,c)),e.push(h)}),e}var c={events:a.spice.click,dropElem:".events-menus",showElem:".sub-menu",showAnimate:"show",hideAnimate:"hide",speed:["normal","normal"]},d=function(b,d){var e=this;e.opt=a.extend({},c,d),e.elem=b,e.init()};d.prototype={init:function(){var b=this,c=b.opt,d=b.elem,e=a(c.dropElem,d);"array"==a.type(c.events)?e.on(c.events[0],function(){var d=a(c.showElem,this);b.show(d)}).on(c.events[1],function(){var d=a(c.showElem,this);b.hide(d)}):e.on(c.events,function(){var d=a(this).siblings(c.showElem);0===d.length&&(d=a(this).parent().siblings(c.showElem)),b[d.is(":visible")?"hide":"show"](d)})},stop:function(){a(this.opt.showElem).each(function(b,c){a(c).stop(!0,!0)})},show:function(a){var b=this;b.stop(),a.stop(!0,!0).delay(0)[b.opt.showAnimate](b.opt.speed[0],function(){b.elem.trigger("menuShow",{self:b})})},hide:function(a){var b=this;a.stop(!0,!0)[b.opt.hideAnimate](b.opt.speed[1],function(){b.elem.trigger("menuHide",{self:b})})},destroy:function(){this.stop(),a(this.opt.dropElem,this.elem).off()}},a.spice.menus=b}(jQuery);