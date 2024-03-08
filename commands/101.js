const { resolvePlay } = require("../utils.js");

module.exports = {
	name: "101",
	async execute(message, audioPlayer) {
		await resolvePlay(message, audioPlayer, "live.radio101.hr", ":9531/;");
	},
};