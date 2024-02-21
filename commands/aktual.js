const { execute } = require("../utils.js");

module.exports = {
	name: "aktual",
	async execute(message, audioPlayer) {
		execute(message, audioPlayer, "live.radio.si", "/Aktual");
	},
};