const { execute } = require("../utils.js");

module.exports = {
	name: "banovina",
	async execute(message, audioPlayer) {
		execute(message, audioPlayer, "audio.radio-banovina.hr", ":9998/stream");
	},
};