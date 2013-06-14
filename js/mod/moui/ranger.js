
define('moui/ranger', [
    'mo/lang',
    'dollar',
    'eventmaster'
], function(_, $, event){

    var default_config = {
            max: 100,
            min: 0,
            step: 1
        };

    function Ranger(elm, opt){
        this.init(elm, opt);
        this.set(this._config);
    }

    Ranger.prototype = {

        _defaults: default_config,

        init: function(elm, opt){
            this.event = event();
            var node = this._node = $(elm);
            opt = _.mix({
                max: node.attr('max') || undefined,
                min: node.attr('min') || undefined,
                step: node.attr('step') || undefined
            }, this.data(), opt);
            this._config = _.config({}, opt, this._defaults);
            this.val(node.val());
            return this;
        },

        set: function(opt){
            if (!opt) {
                return this;
            }
            _.config(this._config, opt, this._defaults);
            return this;
        },

        data: function(){
            return this._node.data();
        },

        val: function(v){
            if (v !== undefined) {
                var l = this._config.step.toString().replace(/.*\./, '').length;
                v = Math.floor(v * Math.pow(10, l)) / Math.pow(10, l);
                this._value = v;
                this.event.fire('change', [this.val(), this]);
            }
            return this._value;
        },

        progress: function(v){
            if (v !== undefined) {
                var cfg = this._config;
                if (v == 0) {
                    this.val(cfg.min);
                } else if (v == 1) {
                    this.val(cfg.max);
                } else {
                    var current = (cfg.max - cfg.min) * v + parseFloat(cfg.min);
                    current = Math.round(current / cfg.step) * cfg.step;
                    this.val(current);
                }
            }
            return this.val();
        }

    };

    function exports(elm, opt){
        return new exports.Ranger(elm, opt);
    }

    exports.Ranger = Ranger;

    return exports;

});
