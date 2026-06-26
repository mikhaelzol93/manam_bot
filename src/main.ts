import { Bot } from "grammy";

function main() {
  const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
  if (!telegramBotToken) return;

  const bot = new Bot(telegramBotToken);

  bot.start({ timeout: 90 });
}

main();
