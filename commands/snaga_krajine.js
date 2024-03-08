const { resolvePlay } = require("../utils.js");

module.exports = {
	name: "snaga_krajine",
	async execute(message, audioPlayer) {
		await resolvePlay(message, audioPlayer, "s7.voscast.com", ":7096/;", "http");
	},
};