!function(a){"use strict";function b(b,c){if(!b||a.isPlainObject(b))return!1;var d=[];return a(b).each(function(b,f){var g=a(f),h=g.data("spice.CheckBox");h&&h.destroy(),g.data("spice.CheckBox",h=new e(g,c)),d.push(h)}),d}var c={isBan:!1,tapCheckBoxClass:"form-checkbox",tapRadioClass:"form-radio",tapCheckAllClass:"form-checkall",tapRemoveAllClass:"form-removeall",checkBoxClass:"form-checkbox",radioClass:"form-radio",checkAllClass:"form-checkall",removeAllClass:"form-removeall",activeClass:"on",disableClass:"is-disabled",simulateClass:"form-simulate",checkCallBack:null,checkAllCallBack:null,removeAllCallBack:null},d={setCheckBox:function(a){var b=a.elem,c=a.opt,d={elem:b,opt:c,check:1},e=b.find("."+c.checkBoxClass),f=b.find("."+c.radioClass),g=b.find("."+c.tapCheckBoxClass),h=b.find("."+c.tapRadioClass);0==e.length&&0==f.length&&(d.check=0),d.checkBoxRow=c.isBan?e.filter(":has(input:not(:disabled))"):e;var i=g.filter("input:not(:disabled)");d.checkBoxTap=c.isBan?i.length>0?i:g.filter(":has(input:not(:disabled))"):g,d.checkBox=g,d.checkBoxNoDis=i.length>0?i:g.filter(":has(input:not(:disabled))");var j=g.filter(":disabled");d.checkBoxDis=j.length>0?j:g.filter(":has(input:disabled)"),d.radioRow=c.isBan?f.filter(":has(input:not(:disabled))"):f;var k=h.filter("input:not(:disabled)");d.radioTap=c.isBan?k.length>0?k:h.filter(":has(input:not(:disabled))"):h,d.radio=h,d.radioNoDis=k.length>0?k:h.filter(":has(input:not(:disabled))");var l=h.filter(":disabled");return d.radioDis=l.length>0?l:h.filter(":has(input:disabled)"),d.checkAll=b.find("."+c.checkAllClass),d.checkAllTap=b.find("."+c.tapCheckAllClass),d.removeAll=b.find("."+c.removeAllClass),d.removeAllTap=b.find("."+c.tapRemoveAllClass),d},checkInput:function(a,b){var c={};return c.elem=a.is("input")?a:a.hasClass("form-checkbox-dami")?a.siblings("label").find("input"):a.find("input"),c.isChecked=c.elem.is(":checked"),c.isSimulate=c.elem.closest("."+b.simulateClass).length>0?1:0,c.isRadio=c.elem.is('[type="radio"]'),c.isDisabled=c.elem.is(":disabled"),c},setCheck:function(a,b){d.setActiveClass(a,b),!a.isChecked&&d.removeCheckAll(a,b),b.opt.isBan?0==b.elem.find("."+b.opt.checkBoxClass+" input:not(:checked):not(:disabled)").length&&d.setCheckAll(a,b):0==b.elem.find("."+b.opt.checkBoxClass+" input:not(:checked)").length&&d.setCheckAll(a,b)},setActiveClass:function(a,b){a.isRadio?(d.removeRowAll(a,b),a.isSimulate&&a.elem.closest("."+b.opt.radioClass)[a.isChecked?"addClass":"removeClass"](b.opt.activeClass)):a.isSimulate&&a.elem.closest("."+b.opt.checkBoxClass)[a.isChecked?"addClass":"removeClass"](b.opt.activeClass)},setRowAll:function(a,b){b.checkBoxRow.find("input").attr("checked","checked"),a.isSimulate&&b.checkBoxRow.addClass(b.opt.activeClass)},removeRowAll:function(a,b){a.isRadio?a.isSimulate&&b.radioRow.removeClass(b.opt.activeClass):(b.checkBoxRow.find("input").removeAttr("checked"),a.isSimulate&&b.checkBoxRow.removeClass(b.opt.activeClass))},setCheckAll:function(a,b){b.checkAll.find("input").attr("checked","checked"),a.isSimulate&&b.checkAll.addClass(b.opt.activeClass)},removeCheckAll:function(a,b){b.checkAll.find("input").removeAttr("checked"),a.isSimulate&&b.checkAll.removeClass(b.opt.activeClass)},searchParent:function(a){var b=a.parent(),c=b.css("position");return"relative"==c||"absolute"==c?b:d.searchParent(b)}},e=function(b,d){var e=this;e.opt=a.extend({},c,d),e.elem=b,e.init()};e.prototype={init:function(){var b=this,c=(b.elem,b.opt),e=d.setCheckBox(b);e.check&&(e.checkBoxTap.add(e.radioTap).on("click.checkBox",function(b){b.stopPropagation();var f=a(this),g=d.checkInput(f,c);("INPUT"!=b.target.tagName||f.is(":disabled"))&&(b.preventDefault(),g.isChecked?g.isRadio||(g.elem.removeAttr("checked"),g.isChecked=0):(g.elem.attr("checked","checked"),g.isChecked=1)),d.setCheck(g,e),c.checkCallBack&&a.isFunction(c.checkCallBack)&&c.checkCallBack(f.hasClass(c.tapCheckBoxClass)?{elem:f,selected:e.checkBox.eq(0).is("input")?e.checkBox.filter("input:checked"):e.checkBox.filter(":has(input:checked)"),allBox:e.checkBox,allBoxNoDis:e.checkBoxNoDis}:{elem:f,selected:e.radio.eq(0).is("input")?e.radio.filter("input:checked"):e.radio.filter(":has(input:checked)"),allBox:e.radio,allBoxNoDis:e.radioNoDis})}),e.checkAllTap.on("click.checkBox",function(b){b.stopPropagation();var f=a(this),g=d.checkInput(f,c);("INPUT"!=b.target.tagName||f.is(":disabled"))&&(b.preventDefault(),g.isChecked?(g.elem.removeAttr("checked"),g.isChecked=0):(g.elem.attr("checked","checked"),g.isChecked=1)),g.isSimulate&&g.elem.closest("."+e.opt.checkAllClass)[g.isChecked?"addClass":"removeClass"](e.opt.activeClass),g.isChecked?d.setRowAll(g,e):d.removeRowAll(g,e),c.checkAllCallBack&&a.isFunction(c.checkAllCallBack)&&c.checkAllCallBack({elem:f,selected:e.checkBox.eq(0).is("input")?e.checkBox.filter("input:checked"):e.checkBox.filter(":has(input:checked)"),allBox:e.checkBox,allBoxNoDis:e.checkBoxNoDis})}),e.removeAllTap.on("click.checkBox",function(b){var f=a(this),g=d.checkInput(f,c);g.isSimulate=1,d.removeRowAll(g,e),d.removeCheckAll(g,e),c.removeAllCallBack&&a.isFunction(c.removeAllCallBack)&&c.removeAllCallBack({elem:f,selected:e.checkBox.eq(0).is("input")?e.checkBox.filter("input:checked"):e.checkBox.filter(":has(input:checked)"),allBox:e.checkBox,allBoxNoDis:e.checkBoxNoDis})}),b.opt.isBan||e.checkBoxDis.add(e.radioDis).each(function(b,f){var g=a(f),h=g.is("input"),i=h?g.closest("label"):g.is("label")?g:g.find("label"),j=d.searchParent(i),b=a('<i class="form-checkbox-dami"></i>').css({width:i.outerWidth(),height:i.outerHeight(),top:i.offset().top-j.offset().top,left:i.offset().left-j.offset().left,display:"block",position:"absolute"}).on("tap",function(b){if(b.stopPropagation(),b.preventDefault(),g.is("input")){var f=d.checkInput(g,c);f.isChecked?f.isRadio||(f.elem.removeAttr("checked"),f.isChecked=0):(f.elem.attr("checked","checked"),f.isChecked=1),d.setCheck(f,e),c.checkCallBack&&a.isFunction(c.checkCallBack)&&c.checkCallBack(g.hasClass(c.tapCheckBoxClass)?{elem:g,selected:e.checkBox.eq(0).is("input")?e.checkBox.filter("input:checked"):e.checkBox.filter(":has(input:checked)"),allBox:e.checkBox,allBoxNoDis:e.checkBoxNoDis}:{elem:g,selected:e.radio.eq(0).is("input")?e.radio.filter("input:checked"):e.radio.filter(":has(input:checked)"),allBox:e.radio,allBoxNoDis:e.radioNoDis})}else g.trigger("click.checkBox")});i.after(b)}))},getOptions:function(){var a=this,b=(a.elem,a.opt,d.setCheckBox(a)),c=b.checkBox.eq(0).is("input")?b.checkBox.filter("input:checked"):b.checkBox.filter(":has(input:checked)"),e=b.radio.eq(0).is("input")?b.radio.filter("input:checked"):b.radio.filter(":has(input:checked)"),f=b.checkBox.eq(0).is("input")?b.checkBox.filter(":not(input:checked)"):b.checkBox.filter(":has(input:not(:checked))"),g=b.radio.eq(0).is("input")?b.radio.filter(":not(input:checked)"):b.radio.filter(":has(input:not(:checked))");return{selected:c.add(e),notSelected:f.add(g),allBox:b.checkBox.add(b.radio),allBoxNoDis:b.checkBoxNoDis.add(b.radioNoDis)}},destroy:function(){var a=this,b=d.setCheckBox(a);b.checkBoxTap.off("click.checkBox"),b.radioTap.off("click.checkBox"),b.checkAllTap.off("click.checkBox"),b.removeAllTap.off("click.checkBox"),a.elem.removeData("spice.CheckBox").find(".form-checkbox-dami").remove()}},a.spice.CheckBox=b}(jQuery);