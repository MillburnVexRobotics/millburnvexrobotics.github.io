$(document).ready(function() {
	var unfinishedDescriptions = $(".unfinished-description");
	unfinishedDescriptions.each(function(i) {
		var quote = "";
		while (quote.length < 190)
			quote += randomQuote() + " ";
		quote += "He is the most interesting man in the world";
		unfinishedDescriptions[i].innerHTML = quote;
	});
})
