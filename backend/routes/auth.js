const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json(['note11', 'note22']);
});

module.exports = router;