var requireUrl = window._deel && window._deel.requireUrl ? window._deel.requireUrl : '';
require.config({
    baseUrl: requireUrl
    , urlArgs: "bust=" +  (new Date()).getTime()
    //配置 js 插件
    , paths: {
        kvscroll                : requireUrl + 'libs/spice/js/kvScroll/jquery.kvScroll'
        , placeholder           : requireUrl + 'libs/spice/js/placeholder/jquery.placeholder'
        , lazyload              : requireUrl + 'libs/spice/js/lazyLoad/jquery.lazyLoad'
        , cloudzoom             : requireUrl + 'libs/spice/js/cloudzoom/jquery.cloudzoom'
        , masonry               : requireUrl + 'libs/spice/js/masonry/jquery.masonry'
        , tinyscrollbar         : requireUrl + 'libs/spice/js/tinyscrollbar/jquery.tinyscrollbar'
        , menus                 : requireUrl + 'libs/spice/js/menus/jquery.menus'
        , dropdown              : requireUrl + 'libs/spice/js/dropdown/jquery.dropdown'
        , calculateNum          : requireUrl + 'libs/spice/js/calculateNum/jquery.calculateNum'
        , areaZH                : requireUrl + 'libs/spice/js/citySelect/json/area.zh'
        , areaEN                : requireUrl + 'libs/spice/js/citySelect/json/area.en'
        , citySelect            : requireUrl + 'libs/spice/js/citySelect/jquery.citySelect'
        , msgChange             : requireUrl + 'libs/spice/js/msgChange/jquery.msgChange'
        , drag360               : requireUrl + 'libs/spice/js/drag360/jquery.drag360'
        , smartZoom             : requireUrl + 'libs/spice/js/smartZoom/jquery.smartZoom'
        , ymdSelect             : requireUrl + 'libs/spice/js/ymdSelect/jquery.ymdSelect'
        , messageLimit          : requireUrl + 'libs/spice/js/messageLimit/jquery.messageLimit'
        , starRank              : requireUrl + 'libs/spice/js/starRank/jquery.starRank'
        , checkBox              : requireUrl + 'libs/spice/js/checkBox/jquery.checkBox'
        , searchBox             : requireUrl + 'libs/spice/js/searchBox/jquery.searchBox'

        , rescloudzoom          : requireUrl + 'libs/spice/modules/rescloudzoom/rescloudzoom'
        , rollingload           : requireUrl + 'libs/spice/modules/rollingload/rollingload'

        , handlebars            : requireUrl + 'libs/handlebars/handlebars-v4.0.5'
        , highlight             : requireUrl + 'libs/highlight/highlight.pack'
        , html5shiv             : requireUrl + 'libs/html5shiv/html5shiv.min'
        , iscroll               : requireUrl + 'libs/iscroll/iscroll'
        , jquery                : requireUrl + 'libs/jquery/jquery'
        , zeroclipboard         : requireUrl + 'libs/zeroclipboard/ZeroClipboard'
        , slider                : requireUrl + 'libs/spice/js/slider/slider'
        , velocity              : requireUrl + 'libs/velocity/velocity'
        , tabs                  : requireUrl + 'libs/spice/js/tabs/jquery.tabs'
        , moveCenter            : requireUrl + 'libs/spice/js/moveCenter/jquery.moveCenter'

        // 日历
        , datetime              : requireUrl + 'libs/spice/js/datetime/jquery.datetime'
        , datetimeCN            : requireUrl + 'libs/spice/js/datetime/json/jquery.datetime_zh_CN'
        , datetimeHK            : requireUrl + 'libs/spice/js/datetime/json/jquery.datetime_zh_HK'
        , datetimeUS            : requireUrl + 'libs/spice/js/datetime/json/jquery.datetime_en_US'

        , mobiscrollCore        : requireUrl + 'libs/spice/js/mobiscroll/mobiscroll.core-2.6.2'
        , mobiscrollSpice       : requireUrl + 'libs/spice/js/mobiscroll/mobiscroll.core.spice'
        , mobiscrollList        : requireUrl + 'libs/spice/js/mobiscroll/extend/mobiscroll.list'
        , mobiscrollCitySelect  : requireUrl + 'libs/spice/js/mobiscroll/extend/mobiscroll.citySelect'
        , mobiscrollDatetime    : requireUrl + 'libs/spice/js/mobiscroll/extend/mobiscroll.datetime'

        , common                : requireUrl + 'js/common'
        , mixScrollZoom         : requireUrl + 'libs/spice/modules/mixscrollzoom/mixscrollzoom'
        , imgChange             : requireUrl + 'libs/spice/modules/imgchange/imgchange'
    }
    , map: {
      '*': {
        'css': requireUrl + 'libs/require/require.css.js'
      }
    }
    //配置js插件需要依赖的js或css文件
    , shim : {
        cloudzoom             : ['css!' + requireUrl + 'libs/spice/js/cloudzoom/css/cloudzoom.css']
        , tinyscrollbar       : ['masonry', 'css!' + requireUrl + 'libs/spice/js/tinyscrollbar/css/tinyscrollbar.css']
        , citySelect          : ['tinyscrollbar']
        , datetime            : ['css!' + requireUrl + 'libs/spice/js/datetime/css/datetime.css']
        , slider              : ['css!' + requireUrl + 'libs/spice/js/slider/css/slider.css']
        , ymdSelect           : ['tinyscrollbar']
        , common              : ['kvscroll', 'lazyload', 'cloudzoom', 'dropdown', 'calculateNum']
        , rescloudzoom        : ['cloudzoom']
        , rollingload         : ['lazyload','handlebars']
        , msgChange           : ['cloudzoom', 'calculateNum']
        , mobiscrollList      : ['mobiscrollCore']
        , mobiscrollCitySelect: ['mobiscrollCore']
        , mobiscrollDatetime  : ['mobiscrollCore']
        , mobiscrollSpice     : [
                                    'css!' + requireUrl + 'libs/spice/js/mobiscroll/css/mobiscroll-core.css'
                                    , 'css!' + requireUrl + 'libs/spice/js/mobiscroll/css/mobiscroll-animation.css'
                                    , 'css!' + requireUrl + 'libs/spice/js/mobiscroll/extend/css/mobiscroll-spice.css'
                                    , 'mobiscrollList'
                                    , 'areaZH'
                                    , 'mobiscrollCitySelect'
                                    , 'mobiscrollDatetime'
                                ]
        , mixScrollZoom       :['kvscroll','cloudzoom']
        , tabs                : ['css!' + requireUrl + 'libs/spice/modules/tabs/tabs.css']
        , moveCenter          : ['css!' + requireUrl + 'libs/spice/modules/moveCenter/moveCenter.css']
    }
});
