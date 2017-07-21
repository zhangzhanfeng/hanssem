/**
 *
 * 插件模版
 * 详细用法请参考：http://xxxx/
 * 如果链接无法访问，请联系：xxxx
 *
 * @ author 
 * @ version 
 *
 */
!function(a){"use strict";function b(b){var c=[];return this.each(function(e,f){var g=a(f),h=g.data("spice.dropdown");h||g.data("spice.dropdown",h=new d(g,b)),c.push(h)}),c}var c={},d=function(b,d){var e=this;e.opt=a.extend({},c,d),e.elem=b,e.init()};d.prototype={init:function(){}},a.fn.dropdown=b,a.fn.dropdown.Constructor=d}(jQuery);