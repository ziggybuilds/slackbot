module.exports = function(bb8) {
	/*bb8.respond(/Please welcome (.*) and (.*)/i, function(msg) {
		var name1;
		var name2;
		name1 = msg.match[1];
		name2 = msg.match[2];
	  return msg.reply("Welcome " + name1 + " and " + name2 + ". Have a glorious day");
	});*/


/*
Have a message post to Slack based on user input
Do at least 3 different things.
One of the commands must utilize the list of people in the class to send a direct message or reply.
Leverage Hubot
Use at least 1 conditional to change the outcome of a Slackbot.

BONUS 
Leverage a for loop to iterate over a collection
Introduce a random component
Include an image in the response in addition to text
*/


// Star wars and space themed bot


// Confirm @bb8 is alive
bb8.hear(/The force?/, function(res) {
	return res.send("*droid noises*");
});

// Who started the war?
bb8.respond(/Who started the war?/i, function(res) {
	return res.send("Rebel scum");
});

/*
// Conditional user input to output quotes based on character
bb8.respond(/Quote: (.*)/i, function(msg) {
	var input = msg.match[1];
	var filtered = input.toLowerCase();

	if (filtered == "leia") {
		return msg.send('"Help me, Obi-Wan Kenobi. You’re my only hope.” — ' + filtered);
	} else if (filtered == "vader" || filtered = "darth vader") {
		return msg.send('“I find your lack of faith disturbing.” — ' + filtered);
	} else if (filtered == "yoda") {
		return msg.send('“Do. Or do not. There is no try.” - ' + filtered);
	} else if (filtered == "solo" || filtered = "han solo" || filtered == "han") {
		return msg.send('“Never tell me the odds! — ”' + filtered);
	} else if (filtered == "luke" || filtered = "skywalker" || filtered == "luke skywalker") {
		return msg.send('“I find your lack of faith disturbing.” — ' + filtered);
	} else {
		return msg.send(filtered + ' is not included, Please try again.');
	}
});
*/

// Random output
// Is user Jedi or Sith lord?
/*
bb8.respond(/Is (.*) to be trusted?/i, function(msg) {
	var name = msg.match[1];
	var side = ['sith lord', 'jedi knight', 'path has yet to be found'];

	var fate = res.random(side);
	if (fate == 'sith lord') {
		return msg.send(name + " is a " + fate + ". Do not fall to their power.");
	}
	else if (fate == 'jedi knight') {
		return msg.send(name + " is a " + fate + ". They will be faithful.");
	}
	else if (fate == 'path has yet to be found') {
		return msg.send(name + "'s " + fate + ". Guide them.");
	}
});
*/


}