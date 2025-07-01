const express = require('express');
const router = express.Router();

let games = [
    { id: 1, name: "Challenge & Connect", entryFee: 10, players: 5 },
    { id: 2, name: "Snake & Ladder", entryFee: 10, players: 3 }
];

router.get('/', (req, res) => {
    res.json(games);
});

router.post('/join/:id', (req, res) => {
    const gameId = parseInt(req.params.id);
    const game = games.find(g => g.id === gameId);
    if (game) {
        res.status(200).json({ message: 'Joined game successfully!' });
    } else {
        res.status(404).json({ message: 'Game not found' });
    }
});

module.exports = router;
