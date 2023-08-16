const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json(['note1', 'note2']);
});

module.exports = router;