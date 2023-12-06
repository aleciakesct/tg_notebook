# Guide to using Telegram Bot for Recording Ideas

This bot is designed to record your ideas directly in Telegram.

## Beginning of work

1. Install Node.js and npm on your computer.
2. Clone the repository or create a new project.
3. Install dependencies:

     ```bash
     npm init -y
     npm install node-telegram-bot-api
     ```

4. Insert your Telegram bot token and your chat ID into the `index.js` file.

     ```javascript
     const token = 'YOUR_TELEGRAM_BOT_TOKEN';
     const chatId = 'YOUR_CHAT_ID';
     ```

## Launch

5. Launch the bot:

     ```bash
     node index.js
     ```

6. Send the command `/start` to greet and receive instructions.

## Recording ideas

7. Just send your idea to chat with the bot and it will save it.

8. Receive confirmation that your idea was successfully saved.

## Additional Information

- Ideas are saved in the `ideas` folder as text files.
- Additional idea processing can be added at your discretion to the `saveIdea` function.

Enjoy using Telegram Bot to record ideas!
