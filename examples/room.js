(function (process, console) {
    "use strict";

    process.on('uncaughtException', function (err) {
        console.error(err.stack || err);
    });

    var util = require("util");

    if (process.argv.length < 5) {
        console.log("please pass jid, password, and the muc jid as command line params");
        process.exit(1);
    }

    var simpler = require('../index'),
        jid = process.argv[2],
        password = process.argv[3],
        to = process.argv[4],
        client = simpler({
            jid:jid,
            password:password,
            host:'talk.google.com'
        }),
        connection;

    client.on('online', function () {
        console.log('online!');
    });

    client.on('stanza', function (stanza) {
        // console.log("stanza: %j", stanza);
    });

    client.on('chat', function (from, message) {
        console.log("from %s: ", from, message);
    });

    client.on('roster', function (roster) {
        console.log("roster", roster);
    });

    client.on('presence', function (from, presence, presences) {
        console.log("presence", from, presence);
    });

    client.on('error', function (err) {
        console.error("error: %j", err);
    });

    client.discoverRoom(to);
})(process, console);