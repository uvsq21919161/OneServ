const Player = require("./Player");

module.exports = class Bot extends Player {
    static BotCount = 1;

    constructor() {
        super();
        Bot.BotCount++;
        this.name = "Bot" + Bot.BotCount;
    }

    getBotname() {
        return this.name;
    }
}