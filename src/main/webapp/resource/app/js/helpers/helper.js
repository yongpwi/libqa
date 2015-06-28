Handlebars.registerHelper('nl2br', function(text) {
    text = Handlebars.Utils.escapeExpression(text);
    text = text.toString().replace(/(\r\n|\n|\r)/gm, '<br>');
    return new Handlebars.SafeString(text);
});

Handlebars.registerHelper('xif', function (v1, operator, v2, options) {
    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
});

Handlebars.registerHelper('length', function(str) {
    if( str.length ) return str.length;
    else return 0;
});

Handlebars.registerHelper('keywordLink', function(keywordType, keywordName) {
    if( keywordType == null ) return '#';

    if( 'WIKI' == keywordType ){
        return '/wiki/list/keyword/'+keywordName;
    }
    return '#';
});