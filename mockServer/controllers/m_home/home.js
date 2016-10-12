var express = require('express');
var router = express.Router();
var base = require("../base");
// var logger = require("../helpers/log");

/**
 * For p1 services,it's sample code.
 * 
 */
router.get("/commoninfo/encryptor", function(req, res) {
    var reqBody = req.body;
    // logger.debug("commoninfo_encryptor....", reqBody);
    base.apiOkOutput(res, {
        "code": "1000",
        "msg": "操作成功"
    });
});

module.exports = router;
