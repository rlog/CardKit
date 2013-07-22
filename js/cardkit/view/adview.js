define([
    'mo/lang',
    'dollar',
    'moui/adview'
], function(_, $, adview) {

    var UID = '_ckAdviewUid',
        uid = 0,
        lib = {};

    function exports(elm, opt){
        var id;
        if (elm.nodeName) {
            elm = $(elm);
            id = elm[0][UID];
            if (id && lib[id]) {
                lib[id].close();
            }
            id = elm[0][UID] = ++uid;
            opt = _.mix(defaults, elm.data(), opt);
        } else {
            opt = _.mix(defaults, elm);
        }
        opt.className = 'ck-adview';
        var g = adview(opt);
        if (id) {
            lib[id] = g;
        }
        return g;
    }

    return exports;

});
