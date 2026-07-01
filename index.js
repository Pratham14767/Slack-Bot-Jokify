const axios = require("axios");
require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});

app.command("/jokify-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();
app.command("/jokify-help", async ({ ack, respond }) => {
    await ack();
    await respond({
      text:
  `Available Commands:
  /jokify-ping - Check bot latency
  /jokify-catfact - Get a cat fact`
    });
  });
  app.command("/jokify-catfact", async ({ ack, respond }) => {
    await ack();
  
    try {
      const response = await axios.get("https://catfact.ninja/fact");
      await respond({ text: `Cat Fact:\n${response.data.fact}` });
    } catch (err) {
      await respond({ text: "Failed to fetch a cat fact." });
    }
  });
  app.command("/jokify-dogfact", async ({ ack, respond }) => {
    await ack();
    try {
      const response = await axios.get("https://dogapi.dog/api/v2/facts?limit=2");
      
      await respond({ text: `Dog Facts: \n${response.data.data[0].attributes.body}` });
    } catch (err) {
      await respond({ text: "Oops! Failed to fetch dog facts." });
    }
  });  
  app.command("/jokify-jokes", async ({ ack, respond }) => {
    await ack();
  
    try {
      const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
      await respond({
        text:
  `${response.data.setup}
  
  ${response.data.punchline}`
      });
    } catch (err) {
      await respond({ text: "Failed to fetch a joke." });
    }
  });