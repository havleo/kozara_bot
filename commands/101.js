const { execute } = require("../utils.js");

module.exports = {
	name: "101",
	async execute(message, audioPlayer) {
		execute(message, audioPlayer, "live.radio101.hr", ":9531/;");
	},
};