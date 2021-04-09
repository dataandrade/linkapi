const router = require("express").Router();

router.use("/", require("./pipedrive"));
router.use("/", require("./bling"));


module.exports = router;