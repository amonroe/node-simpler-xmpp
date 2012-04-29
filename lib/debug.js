/*jslint node: true, vars: true, indent: 4 */
(function (module) {
    "use strict";

    var debug = process.env.NODE_DEBUG && /simpler-xmpp/.test(process.env.NODE_DEBUG),
        logger = debug ?
        function () {
            var args = ['simpler-xmpp:'];

            for (var idx in arguments) {
                args.push(arguments[idx]);
            }
            console.error.apply(this, args);
        } : function () {
    };

    logger.debug = debug;

    return module.exports = logger;
})(module);