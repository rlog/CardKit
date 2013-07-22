/**
 * Moui
 * OO-based UI behavior modules behind CardKit(mobile webapp framework)'s view components
 * 
 * using AMD (Asynchronous Module Definition) API with OzJS
 * see http://ozjs.org for details
 *
 * Copyright (C) 2010-2013, Dexter.Yy, MIT License
 * vim: et:ts=4:sw=4:sts=4
 */
define('moui/adview', [
    'dollar',
    'mo/lang',
    'mo/template',
    'moui/overlay'
], function($, _, tpl, overlay) {

    var NS = 'mouiAdView',
        TPL_VIEW =
           '<div id="{{id}}" class="moui-adview">\
                <header><h2></h2></header>\
                <article></article>\
            </div>',

        default_config = {
            className: 'moui-adview'
        };

    var AdView = _.construct(overlay.Overlay);

    _.mix(AdView.prototype, {

        _ns: NS,
        _template: TPL_VIEW,
        _defaults: _.merge({}, default_config, AdView.prototype._defaults),

        applyOpen: function(){
            this.superClass.applyOpen.apply(this, arguments);
        },

        applyClose: function(){
            this.superClass.applyClose.apply(this, arguments);
        }

    });

    function exports(opt){
        return new exports.AdView(opt);
    }

    exports.AdView= AdView;

    return exports;

});
