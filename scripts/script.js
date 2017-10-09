module.exports = function(bb8) {
	bb8.respond(/Please welcome (.*) and (.*)/i, function(msg) {
		var name1;
		var name2;
		name1 = msg.match[1];
		name2 = msg.match[2];
	  return msg.reply("Welcome " + name1 + " and " + name2 + ". Have a glorious day");
	});
}