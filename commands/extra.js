const { resolvePlay } = require("../utils.js");

module.exports = {
	name: "extra",
	async execute(message, audioPlayer) {
		await resolvePlay(message, audioPlayer, "streams.extrafm.hr", ":8110/stream?2124", "http");
	},
};