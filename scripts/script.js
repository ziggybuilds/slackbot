module.exports = function(bb8) {
	bb8.respond(/Please welcome (.*) and (.*)/, function(res) {
		var name1;
		var name2;
		naem1 = msg.match[1];
		naem2 = msg.match[2];
	  return res.send("Welcome " + name1 + " and " + name2 + ". Have a glorious day");
	});


}