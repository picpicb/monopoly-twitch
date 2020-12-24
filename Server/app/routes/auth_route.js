// ====================================================
// Route Global  ======================================
// ====================================================

module.exports = function(router) {
    //------ LOAD CONTROLLER
    // --> No controller | just information

    var path = require('path'),
        Util = require('../helpers/appUtils');

    // --------------------------------------------------------------------------------------------------------------
    //                                                                                                  VERSION API
    // --------------------------------------------------------------------------------------------------------------
    // -------- HOMEPAGE
    router.get('/auth', function(req, res){
        Util.info('Someone try to connect to the API');
        res.status(200).json({code : 1, message : "Connection OK"});
    });

};