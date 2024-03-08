const { resolvePlay } = require("../utils.js");

module.exports = {
	name: "aktual",
	async execute(message, audioPlayer) {
		await resolvePlay(message, audioPlayer, "live.radio.si", "/Aktual");
	},
};