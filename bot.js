const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');

// Enter your bot token obtained from BotFather
const token = 'YOUR_TELEGRAM_BOT_TOKEN';

// Enter the ID of your chat where ideas will be sent
const chatId = 'YOUR_CHAT_ID';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
     const chatId = msg.chat.id;
     bot.sendMessage(chatId, 'Hi! I'm your idea bot. Just send me your idea and I'll save it.');
});

bot.on('text', (msg) => {
     const chatId = msg.chat.id;
     const idea = msg.text;

     // Save the idea to a file
     saveIdea(idea);

     bot.sendMessage(chatId, 'Idea saved successfully!');

     // Additional processing of ideas if necessary
     // ...

});

function saveIdea(idea) {
     const timestamp = new Date().toISOString().replace(/:/g, '-');
     const filename = `idea_${timestamp}.txt`;

     fs.writeFile(`ideas/${filename}`, idea, (err) => {
         if (err) {
             console.error('Error saving idea:', err);
         } else {
             console.log('Idea saved successfully.');
         }
     });
}
