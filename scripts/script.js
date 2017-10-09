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
bb8.respond(/Who started the war?/i, function() {
	return res.send("Rebel scum");
});

// Conditional user input to output quotes based on character
bb8.respond(/(.*)/, function(msg) {
	var input = msg.match[1].toLowerCase();

	if (input == "leia") {
		return res.send('"Help me, Obi-Wan Kenobi. You’re my only hope.” — ' + input);
	}
	else if (input == "vader" || input = "darth vader") {
		return res.send('“I find your lack of faith disturbing.” — ' + input);
	}
	else if (input == "yoda") {
		return res.send('“Do. Or do not. There is no try.” - ' + input);
	}
	else if (input == "solo" || input = "han solo" || input == "han") {
		return res.send('“Never tell me the odds! — ”' + input);
	}
	else if (input == "luke" || input = "skywalker" || input == "luke skywalker") {
		return res.send('“I find your lack of faith disturbing.” — ' + input);
	} else {
		return res.send(input + ' is not included, Please try again.');
	}
});

// Random output
// Is user Jedi or Sith lord?
bb8.respond(/Is (.*) to be trusted?/i, function(msg) {
	var name = msg.match[1];
	var side = ['sith lord', 'jedi knight', 'path has yet to be found'];

	var fate = res.random(side);
	if (fate == 'sith lord') {
		return res.send(name + " is a " + fate + ". Do not fall to their power.");
	}
	else if (fate == 'jedi knight') {
		return res.send(name + " is a " + fate + ". They will be faithful.");
	}
	else if (fate == 'path has yet to be found') {
		return res.send(name + "'s " + fate + ". Guide them.");
	}
});



}