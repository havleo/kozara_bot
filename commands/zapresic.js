const { execute } = require("../utils.js");

module.exports = {
	name: 'zapresic',
	async execute(message, audioPlayer) {
			execute(message, audioPlayer, "ec2s.crolive.com.hr", ":7015/stream");
	},
};