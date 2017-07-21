/**
 *
 * 水印文字插件
 * 详细用法请参考：http://v3.spice.lh/javascript/placeholder
 * 如果链接无法访问，请联系QQ：1515110755 或 RTX：hong.liang
 *
 * @ author Razy
 * @ version 1.0
 *
 */
!function(a){a.spice.placeholder=function(b,c){return!(!b||a.isPlainObject(b))&&a(b).each(function(){var b=a(this),d=a.extend({text:b.attr("placeholder"),cssClass:"placeholder"},"string"===a.type(c)?{text:c}:c||{});if(b.attr("placeholder",d.text),!("placeholder"in document.createElement("input"))){if("password"==b.attr("type")){var e=function(){""==a(this).val()&&a(this).next(".placeholder-text").show()},f=function(){a(this).next(".placeholder-text").hide()},g=function(a){var b=a.parent(),c=b.css("position");return"relative"==c||"absolute"==c?b:g(b)},h=g(b);a('<span class="placeholder-text">'+d.text+"</span>").css({width:b.outerWidth(),height:b.outerHeight(),"padding-left":b.css("padding-left"),"padding-top":Math.ceil((b.outerHeight()-parseInt(b.css("font-size")))/2),"font-size":b.css("font-size"),"line-height":b.css("font-size"),top:b.offset().top-h.offset().top,left:b.offset().left-h.offset().left}).bind("tap",function(){b.trigger("focus")}).insertAfter(b)}else{var e=function(){""!==a.trim(b.val())&&a.trim(b.val())!=b.attr("placeholder")||b.addClass(d.cssClass).val(d.text)},f=function(){b.val()===d.text&&b.val(""),b.removeClass(d.cssClass)};e()}b.unbind(".placeholder").bind({"focus.placeholder":f,"blur.placeholder":e})}})}}(jQuery);