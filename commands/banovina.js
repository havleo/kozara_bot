const { resolvePlay } = require("../utils.js");

module.exports = {
	name: "banovina",
	async execute(message, audioPlayer) {
		await resolvePlay(message, audioPlayer, "audio.radio-banovina.hr", ":9998/stream");
	},
};