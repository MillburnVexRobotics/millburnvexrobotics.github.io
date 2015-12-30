var mostInterestingManQuotes = [
	"Alien Abductors ask him to probe them.",
	"Cuba imports cigars from him. Mosquitos refuse to bite him purely out of respect. In museums, he is allowed to touch the art.",
	"Dicing onions doesn’t make him cry, it only makes him stronger.",
	"Even his enemies list him as their emergency contact number.",
	"Every time he goes for a swim dolphins appears.",
	"Find out what it is in life you don’t do well and then don’t do that thing.",
	"He bowls overhand.",
	"He can identify UFOs",
	"He can open a Piñata with a wink and a smile.",
	"He can speak french in russian.",
	"He divorced his wife because he caught her littering.",
	"He doesn’t believe in using oven mitts, nor potholders.",
	"He has amassed an incredibly large DVD library and it is said he never once alphabetized i.",
	"He has been known to cure narcolepsy just by walking into the room.",
	"He has crossed the point of no return – on several occasions.",
	"He has inside jokes with complete strangers.",
	"He has never filled up on chips.",
	"He has never relied on Mistletoe.",
	"He has won the lifetime achievement award, twice.",
	"He is fluent in all languages, including three that he only speaks.",
	"He once killed 5 birds with one stone.",
	"When he dines at a fine restaurant ...... The waiter tips him.",
	"Elephants visit his dead ancestors.",
	"When he goes to confession, the priest confides in him...",
	"His 2 cents is worth $37.00 and change.",
	"Two countries went to war to dispute HIS nationality.",
	"When his wife gave birth to their 1st child, everyone congratulated...the child.",
	"UFOs report sightings of HIM.",
	"Jesus wears a bracelet saying what would HE do....",
	"He lives vicariously through himself.",
	"He once had an awkward moment, just to see how it feels.",
	"His beard alone has experienced more than a lesser man’s entire body.",
	"When it is raining, it is because he is thinking of something sad.",
	"His shirts never wrinkle.",
	"He is left-handed and right-handed.",
	"If he were to mail a letter without postage, it would still get there.",
	"The police often question him just because they find him interesting.",
	"His blood smells like cologne.",
	"On every continent in the world, there is a sandwich named after him. His hands feel like rich brown suede.",
	"Cuba imports cigars from him. Mosquitos refuse to bite him purely out of respect. In museums, he is allowed to touch the art.",
	"His business card simply says “I’ll call you.",
	"He has won the lifetime achievement award, twice.",
	"If he were to punch you in the face, you would have to fight off the urge to thank him.",
	"He bowls overhand.",
	"He is fluent in all languages, including three that he only speaks.",
	"He tips an astonishing 100%. Once while sailing around the world, he discovered a short cut.",
	"Panhandlers give him money.",
	"He divorced his wife because he caught her littering.",
	"His passport requires no photograph.",
	"When he drives a new car off the lot, it increases in value.",
	"He is left-handed and right-handed.",
	"He is the life of parties he has never attended.",
	"He is the only man to have ever aced a Rorschach test.",
	"He is the reason those nine ladies are dancing.",
	"He lives vicariously through him self.",
	"He never says something tastes like chicken, not even chicken.",
	"He once challenged his own reflection to a staring contest on the third day he won.",
	"He once had an awkward moment, just to see how it feels.",
	"He once punched a magician – that’s right you heard me.",
	"He tips an astonishing 100%.",
	"He wouldn’t be afraid to show his feminine side if he had one.",
	"He’s won trophies for his game face alone.",
	"His beard alone has experienced more than a lesser man’s entire body.",
	"His blood smells like cologne.",
	"His business card simply says “I’ll call you.”",
	"His cereal never gets soggy. It sits there, staying crispy, just for him.",
	"His charm is so contagious vaccines have been created for it.",
	"His hands feel like rich brown suede.",
	"His legend proceeds him the way lighting proceeds thunder.",
	"His mother has a tattoo that says son.",
	"His New Year Resolutions will blow your mind thats why he never tells anyone.",
	"His passport requires no photograph.",
	"His personality is so magnetic he is unable to carry credit cards.",
	"His pillow talk is years ahead of it’s time.",
	"His Pinatas fight back.",
	"His reputation is expanding faster than the universe.",
	"His shirts never wrinkle.",
	"His snow globe gets 24 inches of powder annually.",
	"His words carry weight that would break a less interesting mans jaw.",
	"If at first he does not succeed, then it is impossible.",
	"If he were to give you directions you would never get lost and arrive at least 5 minutes early.",
	"If he were to mail a letter without postage, it would still get there.",
	"If he were to punch you in the face, you would have to fight off the urge to thank him.",
	"If here were to mail a letter with out postage it would still get there.",
	"If you were to see him walking a Chihuahua it would still look masculine.",
	"In museums, he is allowed to touch the art.",
	"Mosquitos refuse to bite him purely out of respect.",
	"On every continent in the world, there is a sandwich named after him.",
	"Once while sailing around the world, he discovered a short cut.",
	"One should never shake his gifts (just trust me on this one).",
	"Panhandlers give him money.",
	"Regardless of temperature you can never see his breath.",
	"Respected archaeologists fight over his discarded apple cores.",
	"Several saints share his likeness or vice versa depending on who you ask.",
	"Some say he found the fountain of youth but didn’t drink because he wasn’t thirsty.",
	"The aztec calendar has his cinco de mayo party chiseled in.",
	"The contents of his tacos refuse to fall from their shells.",
	"The front of his house looks like it was built by the Mayans because it was.",
	"The pheromones he secrets have been known to affect people miles away in a slight but measurable way.",
	"The police often question him just because they find him interesting.",
	"When he drives a new car off the lot, it increases in value.",
	"When it is raining it is because he thinking about something sad.",
	"Years ago he Built city of of blocks – today over 600,000 people live and work there."
]

var otherQuotes = [
	"The second biggest part of him is his ego"
]

var quotes = mostInterestingManQuotes.concat(otherQuotes);

var isAscii = function(text) {
	for (var i = 0; i < text.length; i++)
		if (text[i].charCodeAt(0) > 127)
			return false;
	return true;
}
var random = function(values) {
	var i = Math.floor(Math.random() * values.length);
	return values[i];
}

var randomQuote = function() {
	var selected = random(quotes);
	if (isAscii(selected))
		return selected;
	else
		return randomQuote();
}

$(document).ready(function() {
	var unfinishedDescriptions = $(".unfinished-description");
	unfinishedDescriptions.each(function(i) {
		var quote = "";
		for (var n = 0; n < 4; n++)
			quote += randomQuote() + " ";
		quote += "He is the most interesting man in the world";
		unfinishedDescriptions[i].innerHTML = quote;
	});
})
