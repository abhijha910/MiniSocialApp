const express = require('express');
const gameRoutes = require('./routes/game');
const walletRoutes = require('./routes/wallet');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/games', gameRoutes);
app.use('/api/wallet', walletRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
