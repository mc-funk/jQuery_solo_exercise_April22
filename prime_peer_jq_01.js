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
		var j = 0;
		var newPerson = new Person();
		/*$("#people").prepend("<li>Person " + i + ": <br>" 
			+ newPerson.name + " is a " + newPerson.age + "-year-old " + newPerson.sex + 
			" who weighs " + newPerson.weight + " pounds.</li>");*/
		$("#peopleList").prepend("<li id=\"personName" + i + "\">" + newPerson.name + "<ul id=\"person" + i + "\"></ul></li>");	
		attributeArray = ["", " years", " pounds"]	
		for (var attribute in newPerson) {
			if (attribute != "name") {
				$("#person" + i).append("<li>" + attribute + ": " + eval("newPerson." + attribute) + " " 
					+ attributeArray[j] + "</li>");
				j++;
			}
		}
	});
	$(".removeButton").on("click", function(){
			$("#personName" + i).remove();
			i--;
			//$('#list li').first().remove();
	});
});

//$("#peopleTable").prepend("<li id='person" + i + "'Person "+ i + "<td></tr>");

function Person(){
	var tempSex = binarySexes[randomNumber(0, 1)];
	if (tempSex == "Male") {
		firstName = maleFirstName[randomNumber(0,9)];
	} else {
		firstName = femaleFirstName[randomNumber(0,9)];
	}
	lastName = lastNames[randomNumber(0,9)];
	this.name = firstName + " " + lastName;
	this.sex = tempSex;
	this.age = randomNumber(1, 100);
	this.weight = randomNumber(1, 500);
	/*this.remove = function() {

	}*/
}


//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}