---
---
// ripped and adapted from https://www.w3schools.com/howto/howto_js_countdown.asp {% for item in site.data.countdowns %}
var countDownDate{{ item.name }} = new Date("{{ item.date }}").getTime();{% endfor %}
// this file was built with jekyll

// Update the count downs every 1 second
var x = setInterval(function() {

	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and count down dates {% for item in site.data.countdowns %}
	var distance{{ item.name }} = countDownDate{{ item.name }} - now;{% endfor %}

	// Time calculations for days, hours, minutes and seconds {% for item in site.data.countdowns %}
	var days{{ item.name }} = Math.floor(distance{{ item.name }} / (1000 * 60 * 60 * 24));
	var hours{{ item.name }} = Math.floor((distance{{ item.name }} % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes{{ item.name }} = Math.floor((distance{{ item.name }} % (1000 * 60 * 60)) / (1000 * 60));
	var seconds{{ item.name }} = Math.floor((distance{{ item.name }} % (1000 * 60)) / 1000);{% endfor %}
	
	// Set time unit nouns to plural or singular {% for item in site.data.countdowns %}
	var days{{ item.name }}Noun = " days, ";
	var hours{{ item.name }}Noun = " hours, ";
	var minutes{{ item.name }}Noun = " minutes and ";
	var seconds{{ item.name }}Noun = " seconds";{% endfor %}
	{% for item in site.data.countdowns %}
	if (days{{ item.name }} == 1) { days{{ item.name }}Noun = " day, "; }
	if (hours{{ item.name }} == 1) { hours{{ item.name }}Noun = " hour, "; }
	if (minutes{{ item.name }} == 1) { minutes{{ item.name }}Noun = " minute and "; }
	if (seconds{{ item.name }} == 1) { seconds{{ item.name }}Noun = " second"; }{% endfor %}
	
	// Display the result in the element with whatever id {% for item in site.data.countdowns %}
	document.getElementById("{{ item.id }}").innerHTML = "in " + days{{ item.name }} + days{{ item.name }}Noun + hours{{ item.name }} + hours{{ item.name }}Noun + minutes{{ item.name }} + minutes{{ item.name }}Noun + seconds{{ item.name }} + seconds{{ item.name }}Noun;{% endfor %}

	// If a count down is finished, write some text {% for item in site.data.countdowns %}
	if (distance{{ item.name}} < 0) { document.getElementById("{{ item.id }}").innerHTML = "any moment now!"; }{% endfor %}
}, 1000);
