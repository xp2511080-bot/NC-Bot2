const { Client, GatewayIntentBits } = require('discord.js');
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('NC-Bot is alive and running!\n');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}! البوت اشتغل وصار جاهز لأنظمة الـ RP والبنك!`);
});

client.on('messageCreate', message => {
  if (message.content === '!ping') {
    message.reply('🏓 Pong يا إبراهيم! البوت شغال ومية مية.');
  }
});

client.login(process.env.TOKEN);
