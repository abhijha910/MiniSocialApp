# Mini Social App Feature Module

## 👨‍💻 Project Overview

This project implements a simplified version of a social gaming app's **Game Lobby** and **Wallet Module**.

---

## 🔧 Tech Stack

- **Frontend:** React.js (mobile-first design)
- **Backend:** Node.js + Express
- **Data Simulation:** JSON files / mock API
- **UI Tools:** Bootstrap / TailwindCSS (optional)
- **API Simulation:** Express Router + local mocks

---

## 🎮 Features

### Game Lobby
- Display two mock games: `Challenge & Connect` and `Snake & Ladder`
- Show entry coin requirements, join buttons, and mocked current players
- On Join: Deduct coins and show a placeholder game screen
- Show error if user doesn't have enough coins

### Wallet System
- Display total coin balance
- Add coins via fixed recharge packs
- Show transaction history (mocked)
- Deduct coins when joining a game

---

## 🚀 How to Run the App

### 1. Clone the repo

```bash
git clone https://github.com/your-username/mini-social-app.git
cd mini-social-app

### Setup Frontend
1. Navigate to the `frontend` directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the React app.

### Setup Backend
1. Navigate to the `backend` directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the Express server.

### Project Structure
MiniSocialApp/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── GameLobby.js
│   │   │   ├── Wallet.js
│   │   ├── App.js
│   │   ├── index.js
├── backend/
│   ├── routes/
│   │   ├── game.js
│   │   ├── wallet.js
│   ├── server.js
├── README.md
├── answers.pdf
