'use strict';

module.exports = {

    // ---- Main app configuration
    app: {
        name        : 'MonopolyTwitch',
        url         : 'http://localhost:3000/',
        type        : 'Development',
        version     : 'v0.0.1'
    },

    // ---- Database configuration
    db	: {
        module  : 'mongoDB',
        link      : "mongodb://localhost/myResume"
    },

    // ---- Params Allowed Origins by environment
    allowedOrigins : [ 'localhost:*', '0.0.0.0:*','127.0.0.1:*']
};

