# Jokify Slack Bot

A 24/7 interactive Slack bot **Jokify** brings entertainment,  facts, and weather information through simple slash commands.

Jokify Demo Screenshot

<img width="843" height="312" alt="Screenshot 2026-09-07 at 8 27 04 PM" src="https://github.com/user-attachments/assets/e75c122b-b33a-492d-8dcd-9e6c6907911e" />




---

##  Public Demo Channel

Test the bot live inside the Hack Club Slack workspace:
* **Demo Channel Link:** [Join & Test Jokify](https://hackclub.enterprise.slack.com/archives/C0C01DE8Q1J)

---

## 🛠️ Slash Commands Catalog

| Slash Command | Description | 
| :--- | :--- |
| `/jokify-joke` | Returns a random joke to brighten your day | 
| `/jokify-fact` | Fetches an interesting random general fact | 
| `/jokify-catfact` | Get a fun fact about cats | 
| `/jokify-weather` | Fetches real-time weather reports for a location | 
| `/jokify-ping` | Health check to confirm if the bot is online | 

---

## 🌟 Project Origin & Architecture

Jokify was created as part of **Hack Club Stardance SLACK BOT Mission**. It is built using **Node.js** and  **slack** framework to use real-time socket events and slash commands. It is also hosted 24/7 on **Hack Club Nest** containers for 24hours everyday.

---

## 🔧 Local Installation & Setup

If you want to run your own copy of Jokify locally, follow these steps:

### Prerequisites
* [Node.js](https://nodejs.org/) v18 or newer
* A Slack workspace where you have permission to install apps like Hackclub Slack

### 1. Slack App Configuration
1. Go to the [Slack API Console](https://api.slack.com/apps) and create a new app from scratch.
2. Under **Socket Mode**, toggle **Enable Socket Mode**.
3. Under **Basic Information → App-Level Tokens**, generate a token with the `connections:write` scope (starts with `xapp-`).
4. Under **OAuth & Permissions → Bot Token Scopes**, add:
   * `chat:write`
   * `commands`
5. Install the app to your workspace and copy the **Bot User OAuth Token** (starts with `xoxb-`).
6. Register all 5 slash commands under the **Slash Commands** tab in your Slack app dashboard.

### 2. Environment Setup & Running
1. Clone the repository:
   ```bash
https://github.com/Pratham14767/Slack-Bot-Jokify.git
   cd Jokify

   ------------------------------------------------------------
   Ai assistance was used for this Readme.md (Gemini) for formatting the text and few grammar refinements.
