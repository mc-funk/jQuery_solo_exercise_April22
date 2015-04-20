//Utility function
var i = 0;

$(document).ready(function(){
	$(".personButton").on("click", function(){
		i++;
		console.log(i);
		var newPerson = new Person();
		$("#people").prepend("<li>Person " + i + ": <br>" 
			+ "A " + newPerson.age + "-year-old " + newPerson.sex + " who weighs " 
			+ newPerson.weight + " pounds.</li>");
	});
});
function Person(){
	this.age = randomNumber(1, 100);
	var binarySexes = ["Male", "Female"];
	this.sex = binarySexes[randomNumber(0, 1)];
	this.weight = randomNumber(1, 500);
}

//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}