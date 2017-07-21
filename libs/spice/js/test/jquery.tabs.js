/**
 *
 * 插件模版
 * 详细用法请参考：http://xxxx/
 *
 * @ author 
 * @ version 
 *
 */
!function(a){"use strict";function b(b){var c=[];return this.each(function(e,f){var g=a(f),h=g.data("spice.tabs");h||g.data("spice.tabs",h=new d(g,b)),c.push(h)}),c}var c={},d=function(b,d){this.opt=a.extend({},c,d)};d.prototype={},a.fn.tabs=b,a.fn.tabs.Constructor=d}(jQuery);