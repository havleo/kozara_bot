const { resolvePlay } = require("../utils.js");

module.exports = {
	name: 'sljeme',
	async execute(message, audioPlayer) {
		await resolvePlay(message, audioPlayer, "25433.live.streamtheworld.com", "/SLJEME.mp3");
	},
};