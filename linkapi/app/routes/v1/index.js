const router = require("express").Router();

router.use("/pipedrive", require("./pipedrive"));
router.use("/bling", require("./bling"));


module.exports = router;