const { resolvePlay } = require("../utils.js");

module.exports = {
	name: 'zapresic',
	async execute(message, audioPlayer) {
		await resolvePlay(message, audioPlayer, "ec2s.crolive.com.hr", ":7015/stream");
	},
};