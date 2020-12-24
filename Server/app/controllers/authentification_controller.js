// ======================================================
// Authentification Main controller =====================
// ======================================================
var AuthController = exports;
const Util = require('../helpers/appUtils');

AuthController.connect = function(req, res){
    Util.info('Executing AuthController.connect');
    res.status(200).json({code : 1, status : 'ok'});
};
