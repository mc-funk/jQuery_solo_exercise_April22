//Utility function
var i = 0;
var maleFirstName = ["Matt", "Joe", "Rick", "Frank", "Fred", "Bob", "Steve", "Enrico", "Hamid", "Hans"];
var femaleFirstName = ["Jo", "Matilda", "Francine", "Bobbi", "Vicky", "Michelle", "Tracy", "Pam", "Sophia", "Gretta"];
var lastNames = ["Schmidt", "Smith", "Doe", "Funk", "Fuller", "Gruber", "Einstein", "Turing", "Stalin", "Mao"];
var binarySexes = ["Male", "Female"];
var firstName = "";
var lastName = "";

$(document).ready(function(){
	$(".personButton").on("click", function(){
		i++;
		var newPerson = new Person();
		$("#people").prepend("<li>Person " + i + ": <br>" 
			+ newPerson.name + " is a " + newPerson.age + "-year-old " + newPerson.sex + 
			" who weighs " + newPerson.weight + " pounds.</li>");
		/*
		$("#peopleTable").prepend("<tr id='person" + i + "'>" + newPerson.name + "</td></tr>");
		$("#peopleTable").prepend("<tr id='person" + i + "'><td>Person "+ i + "<td></tr>");
		for (var attribute in newPerson) {
			$("#person" + i).append("<td>" + attribute + "</td>");
		}*/
		
	});
});
function Person(){
	this.sex = binarySexes[randomNumber(0, 1)];
	if (this.sex == "Male") {
		firstName = maleFirstName[randomNumber(0,9)];
	} else {
		firstName = femaleFirstName[randomNumber(0,9)];
	}
	lastName = lastNames[randomNumber(0,9)];
	this.name = firstName + " " + lastName;
	this.age = randomNumber(1, 100);
	this.weight = randomNumber(1, 500);
}


//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}