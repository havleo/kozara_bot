const { execute } = require("../utils.js");

module.exports = {
	name: 'sljeme',
	async execute(message, audioPlayer) {
			execute(message, audioPlayer, "25433.live.streamtheworld.com", "/SLJEME.mp3");
	},
};