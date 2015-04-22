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
		$("#peopleList").prepend("<div class='thisPerson' id=\"personName" + i + "\"><li>" + newPerson.name + "<ul id=\"person" + i + "\"></ul></li>");	
		attributeArray = ["", " years", " pounds"]	
		for (var attribute in newPerson) {
			if (attribute != "name") {
				$("#person" + i).append("<li>" + attribute + ": " + eval("newPerson." + attribute) + " " 
					+ attributeArray[j] + "</li>");
				j++;
			}
		}
		$("#person" + i).append("<li><button class='removeButton'>Remove</button></li>");
	});

//Use .empty() jQuery function to empty list of people
	$(".removeAllButton").on("click", function(){
		$("#peopleList").empty();
		i = 0;
		//console.log("this button worked at least");
	});

//Use .closest() jQuery to avoid doom chain of parents
//Use .css() jQuery to change background color
	$("#peopleList").on("click", ".removeButton", function(){
		$(this).closest(".thisPerson").css("background-color", "#FF6666");
		$(this).closest("ul").append("<li><button class='dblRemoveButton'>Double Click to Remove</button>&nbsp;<button class='resetButton'>Cancel</button></li>");
		$(this).parent().remove();
	});

	$("#peopleList").on("click", ".resetButton", function(){
		$(this).closest(".thisPerson").css("background-color", "#ffffff");
		$(this).closest("ul").append("<li><button class='removeButton'>Remove</button></li>");
		$(this).parent().remove();;
	});

//Use .on("dblclick"), which can also can be used as .dblclick, but not sure how to specify ".dblRemoveButton" in that case. 
	$("#peopleList").on("dblclick", ".dblRemoveButton", function(event){
		$(this).closest($(".thisPerson")).remove(); 
		i--;
		/*console.log("Here is 'this' : " , $(this).parent().parent().parent().parent());
		console.log("Closest Test : " , $(this).closest($(".thisPerson")));*/
		//$(this).parent().parent().parent().parent().remove(); //this works, but ...
		//$(this).parent('.thisPerson').remove(); //Why didn't this work? PERIOD IN DEFINED CLASS NAME.
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
}


//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}