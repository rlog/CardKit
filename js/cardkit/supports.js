define([
    'mo/browsers'
], function(browsers){

    var window = this,
        history = window.history,
        document = window.document,
        body = document.body,
        is_android = browsers.os === 'android',
        is_ios = browsers.os === 'iphone' || browsers.os === 'ipad',
        is_ios5 = is_ios
            && browsers.engine === 'webkit'
            && parseInt(browsers.engineversion, 10) < 536,
        is_mobilefirefox = browsers.mozilla && is_android,
        is_desktop = browsers.os === 'mac'
            || browsers.os === 'windows'
            || browsers.os === 'linux';

    var exports = {
    
        HISTORY: 'pushState' in history
            && !browsers.crios 
            && !browsers.aosp
            && !is_mobilefirefox
            && !is_ios5,

        NEW_WIN: !is_ios5 && !browsers.aosp,

        CARD_SCROLL: !browsers.aosp 
            && !is_ios5
            && !is_desktop,

        PREVENT_WINDOW_SCROLL: !!browsers.mobilesafari,

        HIDE_TOPBAR: !!browsers.mobilesafari

    };

    exports.SAFARI_OVERFLOWSCROLL = "webkitOverflowScrolling" in body.style
        && (exports.CARD_SCROLL || is_ios5);

    exports.PREVENT_CACHE = browsers.aosp 
        || browsers.mobilesafari && !exports.HISTORY;

    exports.UNIVERSAL_TRANS = exports.HISTORY
        && exports.CARD_SCROLL
        && !browsers.aosp 
        && !is_ios5
        && !is_desktop;

    exports.WINDOW_SCROLL = !exports.CARD_SCROLL 
        || is_android;

    return exports;

});
