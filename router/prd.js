const express = require("express");
const router = express.Router();

/* Get */
router.get("/", getPrd);

/* Post */

/* Router Cb */
function getPrd(req, res) {
	res.json({hello: "world"});
}

module.exports = router;