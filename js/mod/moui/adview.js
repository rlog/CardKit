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

    var NS = 'mouiAdview',
        TPL_VIEW =
           '<div id="{{id}}" class="moui-adview">\
                <header><h2></h2></header>\
                <article></article>\
            </div>',

        default_config = {
            className: 'moui-adview'
        };

    var Adview = _.construct(overlay.Overlay);

    _.mix(Adview.prototype, {

        _ns: NS,
        _template: TPL_VIEW,
        _defaults: _.merge({}, default_config, Adview.prototype._defaults),

        applyOpen: function(){
            this.superClass.applyOpen.apply(this, arguments);
        },

        applyClose: function(){
            this.superClass.applyClose.apply(this, arguments);
        }

    });

    function exports(opt){
        return new exports.Adview(opt);
    }

    exports.Adview= Adview;

    return exports;

});
