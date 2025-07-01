const express = require('express');
const router = express.Router();

let transactions = [];

router.get('/transactions', (req, res) => {
    res.json(transactions);
});

module.exports = router;
