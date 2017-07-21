jq.cityLayer = function(t) {
  return new jq.cityLayer.prototype.init(t)
}, jq.cityLayer.prototype = {
  constructor: jq.cityLayer,
  init: function(t) {
    if (this._r = (new Date).getTime().toString(36), jq.cityLayerPointer = {}, jq.cityLayerPointer[this._r] = this, jq.isInsertMllCityLayerStyle = jq.isInsertMllCityLayerStyle || !1, this.localStorage = window.JSON && window.localStorage, this.setting = jq.extend({
        from: "其它"
      }, t), !this.setting.target || !this.setting.siteName) return void alert("缺少参数！");
    this.insertCss(), this.createUI(), this.getCityData();
    var i = jq("#" + this.setting.siteName);
    if (!this.ready || this.currentCity != i.html().replace("站", "")) {
      this.currentCity = i.html().replace("站", ""), this.handdler = jq("jsCityLayerChar"), this.chars = jq("#jsCityLayerChar a"), this.stage = jq("#jsCityLayerScrollWarrper"), this.lists = jq("#jsCityLayerScrollWarrper tr"), this.setDefaultDom = jq("#jsCityLayerSetDefaultCity"), this.deleteDefaultCityDom = jq("#jsCityLayerDelDefaultCity"), this.nearDom = jq("#jsCityLayerNearExpr"), this.currentBox = jq("#jsCityLayerCurrentCityBox");
      console.log('init');
      var e = this.stage.find("a");
      this.cityData = {};
      for (var r = 0, a = e.length; r < a; r++) {
        var o = e[r],
          n = o.getAttribute("data-region_id"),
          s = o.getAttribute("data-pinyin"),
          c = o.innerHTML;
        this.cityData[c] = this.cityData[s] = this.cityData[n] = {
          regionId: n,
          pinyin: s,
          regionName: c
        }
      }
      e = null, this.defaultCity = {}, jq.cookie("default_rgn_id") && (this.defaultCity = this.cityData[jq.cookie("default_rgn_id")] || {}), jq("#jsCityLayerCurrentCity").html(this.currentCity), this.currentCityData = this.cityData[this.currentCity], this.refreshDefaultCityDom(), this.inputDom = jq("#jsCityLayerSearchInput"), this.tip = jq("#jsCityLayerSearchTip");
      var h = this;
      this.inputDom.keyup(function(t) {
        jq.cityLayerPointer[h._r].tip.hide(), 13 == t.keyCode && jq.cityLayerPointer[h._r].goSearch.call(h)
      }), this.inputDom.click(function(t) {
        t.stopPropagation()
      }), jq("#" + this.setting.target + " ._hide_city_group").click(function(t) {
        t.stopPropagation()
      }), this.inputDom.focus(function() {
        "输入城市名" == this.value && (this.value = ""), jq.cityLayerPointer[h._r].tip.hide()
      }), jq("#jsCityLayerSearchButton").click(function() {
        jq.cityLayerPointer[h._r].goSearch.call(h)
      }), this.bar = jq("#jsCityLayerScrollBar"), this.barBox = jq("#jsCityLayerContainer"), this.size = this.chars.length, this.allHeight = this.stage.height(), this.rate = (this.allHeight - 170) / 144, this.to = 0, this.to2 = 0, this.nowH = 0, this.mouseDown = !1, this.selectByChar(), this.scrollBar(), this.scrollByWheel(), this.ready = !0
    }
  },
  removeCityLayer: function() {
    this.stage = null;
    jq("#" + this.setting.target + " ._hide_city_group").empty(), delete jq.cityLayerPointer
  },
  getCityData: function() {
    var t = this,
      i = this.localStorage && this.localStorage.getItem("cityJson") && jq.parseJSON(this.localStorage.getItem("cityJson")).t || 0,
      e = +new Date,
      r = (e - i) / 36e5;
    this.localStorage && this.localStorage.getItem("cityJson") && r < 2 ? this.formartCityData(jq.parseJSON(this.localStorage.getItem("cityJson"))) : jq.ajax({
      url: "http://10.88.75.188:3000/libs/cityData.json",
      type: "GET",
      async: !1,
      dataType: "json",
      success: function(i) {
        if (i) {
          var e = i;
          e.t = +new Date, t.formartCityData(e), t.localStorage && t.localStorage.setItem("cityJson", JSON.stringify(e))
        }
      }
    })
  },
  formartCityData: function(t) {
    var i = this;
    if (t) {
      var e = "",
        r = "<a href='javascript:;' class=\"site_all\" onclick=\"jq.goExpr('index.html','','','全国');window._gaq.push(['_trackEvent','" + i.setting.from + "','成功切换城市','click']);return !1;\"><strong>全国</strong></a>&nbsp;",
        a = "";
      jq.each(t.city_list, function(t, r) {
        a += '<a href="javascript:;">' + t + "</a>", e += "<tr><th><div>" + t + "</div></th><td>", jq.each(r, function(t, r) {
          if (!r.v && !r.is_virtual) {
            var a = r.p || r.pinyin,
              o = r.i || r.region_id,
              n = r.n || r.region_name;
            e += '<a href="javascript:;" data-region_id="' + o + '" data-pinyin="' + a + '">' + n + "</a>"
          }
        }), e += "</td></tr>"
      }), jq.each(t.host_city_list, function(t, e) {
        var a = e.p || e.pinyin,
          o = e.i || e.region_id,
          n = e.n || e.region_name;
        r += '<a href="javascript:;" data-region_id="' + o + '" data-pinyin="' + a + '">' + n + "</a>"
      }), 
      // console.log(r,jq("#jsCityLayerHotCity"),jq("#jsCityLayerChar"),jq("#jsCityLayerScrollWarrper"));
      console.log('city');
      jq("#jsCityLayerHotCity").html(r), jq("#jsCityLayerChar").html(a), jq("#jsCityLayerScrollWarrper").html(e)
    }
  },
  insertCss: function() {
    if (!jq.isInsertMllCityLayerStyle) {
      var t = ["._hide_city_group{display: block;position:relative;}", "._hide_city_group .selector{padding:0 10px 0 5px;color:#717171;text-decoration:none;display:inline-block;vertical-align:top;background-position: -58px -79px}", "._hide_city_group .hideMap{width:400px;padding:10px 15px;border:solid 1px #eaeaea;background:#fff;position:absolute;top:0;left:-54px;top:0}", "._hide_city_group .hideMap .showPanel{border-bottom:solid 1px #e9e9e9;}", "._hide_city_group .hideMap .showPanel2{padding-top:10px;line-height:28px;}", "._hide_city_group .hideMap .showPanel .near{height:20px;display:inline-block;padding:0 6px 0 6px;text-align: center;line-height:20px;background:#fff;border:1px solid #cf000e;color: #cf000e}", "._hide_city_group .hideMap .showPanel .mycity{line-height:20px}", "._hide_city_group .hideMap .showPanel2 a{color:#434343}", "._hide_city_group .hideMap .showPanel2 .search_city_input{width:220px;height:30px;padding:7px 5px;border:1px solid #cccccc;color:#aaa;vertical-align:middle;line-height:30px;*line-height:30px;font-family: 微软雅黑}", "._hide_city_group .hideMap .showPanel2 .search_city_input:focus{color:#333;outline: none}", "._hide_city_group .hideMap .showPanel2 .search_city_submit{display:inline-block;width:19px;height:19px;cursor:pointer;}", "._hide_city_group .hideMap .showPanel2 .search_city_tip{position:absolute;width:169px;height:20px;text-align: center;color:#ee7001;background:#fffde6;border:1px solid #e5935b;box-shadow: 2px 2px 2px #999;margin-top:25px;line-height:20px;}", "._hide_city_group .hideMap .showPanel2 .city_words a{display:inline-block;width:17px;height:17px;text-align:center;color:#999;font-family: Arial;font-size:14px;line-height: 17px;margin: 3px 0;}", "._hide_city_group .hideMap .showPanel2 .city_words a:hover,._hide_city_group .hideMap .showPanel2 .hot_city a:hover,._hide_city_group .hideMap .cityMap .city_list td a:hover{color:#000!important;text-decoration: none;}", "._hide_city_group .hideMap .showPanel2 .hot_city a{display:inline-block;padding:0 3px;line-height:19px;margin-right:2px;vertical-align: top;}", "._hide_city_group .hideMap .scrollBody{height:180px;margin-top:10px;overflow:hidden;}", "._hide_city_group .hideMap .cityMap{width:385px;height:180px;float:left;}", "._hide_city_group .hideMap .cityMap .city_list{width:385px;}", "._hide_city_group .hideMap .cityMap .city_list th{vertical-align: top}", "._hide_city_group .hideMap .cityMap .city_list th div{width:19px;height:19px;padding-right:2px;text-align: center;line-height: 19px;color: #fff;font-family: Arial;font-size:14px;font-weight: normal;margin-bottom:11px;overflow: hidden;}", "._hide_city_group .hideMap .cityMap .city_list td{line-height:19px;vertical-align: top;padding-bottom:11px;padding-left:5px;}", "._hide_city_group .hideMap .cityMap .city_list td a{display:inline-block;padding:0px 5px;line-height:19px;}", "._hide_city_group .hideMap .scrollBar{width:10px;height:180px;float:right;overflow:hidden;", "._hide_city_group .hideMap .scrollBar span{width:10px;height:36px;overflow:hidden;cursor:pointer;display: inline-block;}", "._hide_city_group.hover .hideMap {display:block;}", "._hide_city_group .i-c {display: block;position: absolute;width: 13px;height: 7px; left: -27px;z-index: 2;overflow:hidden;}", ".near .i-coord {position:relative;float: left;width: 11px;height: 14px;overflow: hidden;top:3px;right:4px;margin-left:4px}"];
      jq.insertStyle(t.join("")), jq.isInsertMllCityLayerStyle = !0
    }
  },
  createUI: function() {
    var t = ['<em class="i-c"></em>', '<div id="jsCityLayerContainer" class="hideMap">', '<div class="showPanel clearfix" style="padding-bottom: 10px;">', '<div class="Left mycity">', '<div id="jsCityLayerCurrentCityBox">', '当前城市：<strong id="jsCityLayerCurrentCity" style="color: #444;"></strong>', '<a class="red" id="jsCityLayerSetDefaultCity" href="javascript:;">[设为默认城市]</a>', "</div>", '<div id="jsCityLayerDelDefaultCity" style="display:none"></div>', "</div>", '<a class="Right near" id="jsCityLayerNearExpr" target="_blank" href="/expr.html"><i class="i-coord"></i>附近的体验馆</a>', "</div>", '<div class="showPanel showPanel2 clearfix">', '<div class="hot_city" id="jsCityLayerHotCity"></div>', '<div class="mt10">', '<div id="jsCityLayerSearchTip" class="search_city_tip" style="display:none;">抱歉，该城市暂无体验馆！</div>', '<input id="jsCityLayerSearchInput" class="search_city_input" placeholder="Search" /><input type="button" id="jsCityLayerSearchButton" class="search_city_submit" >', "</div>", '<div class="city_words" id="jsCityLayerChar"></div>', "</div>", '<div class="scrollBody">', '<div class="cityMap clearfix">', '<table id="jsCityLayerScrollWarrper" class="city_list"></table>', "</div>", '<div class="scrollBar"><span id="jsCityLayerScrollBar"></span>', "</div>", "</div>", "</div>"];
    console.log('creatUI');
    jq("#" + this.setting.target + " ._hide_city_group").html(t.join(""))
  },
  refreshDefaultCityDom: function() {
    "全国" != this.currentCity && this.currentCityData && this.currentCityData.regionId != this.defaultCity.regionId ? (this.setDefaultDom.show(), this.setDefaultDom.attr("href", "javascript:jq.cityLayerPointer." + this._r + ".setDefaultCity('" + jq.cityLayerPointer[this._r].currentCityData.regionId + "')")) : (this.setDefaultDom.hide(), this.nearDom.hide()), "全国" != this.currentCity && this.currentCityData ? (this.nearDom.attr("href", "/" + jq.cityLayerPointer[this._r].currentCityData.pinyin + "/area.html"), this.nearDom.show(), this.currentBox.show()) : (this.nearDom.hide(), this.currentBox.hide()), this.defaultCity && this.defaultCity.regionId ? (this.deleteDefaultCityDom.html('您默认的城市是：<a href="javascript:;" onclick="jq.goExpr(jq.cityLayerPointer.' + this._r + ".defaultCity.pinyin,  jq.cityLayerPointer." + this._r + ".defaultCity.regionId, '{jqgoExprUrlType}', jq.cityLayerPointer." + this._r + '.defaultCity.regionName);return false;" class="red">' + jq.cityLayerPointer[this._r].defaultCity.regionName + '</a> <a href="javascript:jq.cityLayerPointer.' + this._r + '.delDefaultCity();" class="red">[删除]</a>'), this.deleteDefaultCityDom.show()) : this.deleteDefaultCityDom.hide()
  },
  setDefaultCity: function(t) {
    t && this.cityData[t] && (this.defaultCity = this.cityData[t], jq.cookie("default_rgn_id", jq.cityLayerPointer[this._r].cityData[t].regionId, {
      expires: 365
    }), this.refreshDefaultCityDom())
  },
  delDefaultCity: function() {
    this.defaultCity = {}, jq.cookie("default_rgn_id", "", {
      expires: -1
    }), this.refreshDefaultCityDom()
  },
  goSearch: function() {
    var t = (jq.cityLayerPointer[this._r].inputDom.val() + "").replace(/[\s\d]/g, ""),
      i = jq.cityLayerPointer[this._r].cityData[t];
    i ? (jq.cityLayerPointer[this._r].tip.hide(), jq.goExpr(i.pinyin, i.regionId, "{jqgoExprUrlType}", i.regionName)) : jq.cityLayerPointer[this._r].tip.show()
  },
  selectByChar: function() {
    for (var t = 0, i = this, e = 0; e < this.size; e++) this.chars[e]._h = t, this.chars[e].onmouseover = function() {
      var t = this;
      window._cityTimer = setTimeout(function() {
        jq.cityLayerPointer[i._r].move(t._h), jq.cityLayerPointer[i._r].to2 = jq.cityLayerPointer[i._r].to
      }, 300)
    }, this.chars[e].onmouseout = function() {
      if (window._cityTimer) return void clearTimeout(window._cityTimer)
    }, t += this.lists.eq(e).height()
  },
  move: function(t, i) {
    t < 0 && (t = 0), t = t >= this.allHeight - 170 ? this.allHeight - 170 : t;
    var e = parseInt(t / this.rate);
    this.stage = $('#jsCityLayerScrollWarrper');

    i ? (this.stage.css("margin-top", 0 - t + "px"), this.bar.css("margin-top", e + "px")) : 
    (this.stage.stop(!0, !1).animate({
      marginTop: 0 - t + "px"
    },function(){
      console.log('sfd')
    }), 
    this.bar.stop(!0, !1).animate({
      marginTop: e + "px"
    })), this.to = e, this.nowH = t
  },
  scrollBar: function() {
    var t = this,
    barDom,
    boxDom;
    barDom = this.bar = $('#jsCityLayerScrollBar'),
    boxDom = this.barBox = $('#jsCityLayerContainer');
    this.bar.on("mousedown", function(i) {
      return i = i || window.event, jq.cityLayerPointer[t._r].mouseDown = !0, jq.cityLayerPointer[t._r].nowHeight = i.pageY || i.clientY, i.returnValue = !1, !1
    });
    this.bar.on("dragstart", function(t) {
      t = t || window.event, t.returnValue = !1
    });
    $("body").unbind("mouseup").on("mouseup", function(i) {
      if (i = i || window.event, jq.cityLayerPointer) return jq.cityLayerPointer[t._r].mouseDown = !1, jq.cityLayerPointer[t._r].to2 = jq.cityLayerPointer[t._r].to, i.returnValue = !1, !1
    });
    boxDom.on("mousemove", function(i) {
      if (jq.cityLayerPointer[t._r].mouseDown) {
        i = i || window.event;
        var e = i.pageY || i.clientY;
        return jq.cityLayerPointer[t._r].move((e - jq.cityLayerPointer[t._r].nowHeight + jq.cityLayerPointer[t._r].to2) * jq.cityLayerPointer[t._r].rate, !0), i.returnValue = !1, !1
      }
    }); 
    // this.barBox.on('mouseup',function(){
    //   $(this).off('mousemove');
    // })
  },
  scrollByWheel: function(t) {
    var i = this;
    this.addScrollListener(jq.cityLayerPointer[this._r].barBox[0], function(t) {
      t = t || window.event;
      var e;
      e = t.wheelDelta ? (0 - t.wheelDelta) / Math.abs(t.wheelDelta) : t.detail / Math.abs(t.detail), jq.cityLayerPointer[i._r].move(jq.cityLayerPointer[i._r].nowH + 50 * e), jq.cityLayerPointer[i._r].to2 = jq.cityLayerPointer[i._r].to, navigator.userAgent.toLowerCase().indexOf("msie") >= 0 ? event.returnValue = !1 : t.preventDefault()
    })
  },
  addScrollListener: function(t, i) {
    if ("object" == typeof t && "function" == typeof i) {
      if ("undefined" == typeof arguments.callee.browser) {
        var e = navigator.userAgent,
          r = {};
        r.opera = e.indexOf("Opera") > -1 && "object" == typeof window.opera, r.khtml = (e.indexOf("KHTML") > -1 || e.indexOf("AppleWebKit") > -1 || e.indexOf("Konqueror") > -1) && !r.opera, r.ie = e.indexOf("MSIE") > -1 && !r.opera, r.gecko = e.indexOf("Gecko") > -1 && !r.khtml, arguments.callee.browser = r
      }
      t == window && (t = document), arguments.callee.browser.ie ? t.attachEvent("onmousewheel", i) : t.addEventListener(arguments.callee.browser.gecko ? "DOMMouseScroll" : "mousewheel", i, !1)
    }
  },
  exed: !0
}, jq.cityLayer.prototype.init.prototype = jq.cityLayer.prototype;
/*luochao1*248101:2017-01-12 16:17:35*/
