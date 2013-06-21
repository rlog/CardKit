define([], function(){

    return {"template":"\n{% function hd(){ %}\n    {% if (data.hd) { %}\n    <header class=\"ck-hd-wrap\">\n\n        <span class=\"ck-hd {%= (data.hd_url && 'clickable' || '') %}\">\n            {% if (data.hd_url) { %}\n            <a href=\"{%= data.hd_url %}\" class=\"ck-link ck-link-mask {%= (data.hd_url_extern ? 'ck-link-extern' : '') %}\"></a>\n            {% } %}\n            <span>{%= data.hd %}</span>\n        </span>\n\n        {% if (data.hd_opt) { %}\n        <div class=\"ck-hdopt-wrap\">{%=data.hd_opt%}</div>\n        {% } %}\n\n    </header>\n    {% } %}\n{% } %}\n\n{% if (data.config.plain || data.config.plainhd) { %}\n    {%= hd() %}\n{% } %}\n\n<article class=\"ck-unit-wrap\">\n\n    {% if (!data.config.plain && !data.config.plainhd) { %}\n        {%= hd() %}\n    {% } %}\n\n    {% if (data.hasContent) { %}\n    <section>\n        {%= data.content %}\n    </section>\n    {% } %}\n\n    {% if (data.ft) { %}\n    <footer>{%= data.ft %}</footer>\n    {% } %}\n\n</article>\n"}; 

});