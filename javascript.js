alert("Feeling hungry?")

window.onload=function(){
var formHandle = document.forms.foodform;
formHandle.onsubmit = processForm;
function processForm(){
	console.log(formHandle.flavor.value);

	var flavorChoice= formHandle.flavor.value;
	var tempChoice= formHandle.temp.value;
	var timeChoice= formHandle.time.value
	console.log(flavorChoice)
	console.log(tempChoice)
	console.log(timeChoice)
	//check for flavor//
	if (flavorChoice === "savory" && tempChoice === "hot" && timeChoice === "15mins"){
		//hide form 
		document.getElementById("links").style.display = 'block';
		document.getElementById("recipe").src="https://www.myrecipes.com/recipe/savory-breakfast-sausage";
		document.getElementById("recipe2").src="https://www.myrecipes.com/recipe/savory-granola";
		document.getElementById("recipe3").src="https://www.myrecipes.com/recipe/savory-mushroom-sauce";
	}	//show selected recipe section


	if (flavorChoice === "sweet" && tempChoice === "cold" && timeChoice === "1hour"){
		//hide form 
		document.getElementById("links").style.display = 'block';
		document.getElementById("recipe").src="https://www.myrecipes.com/recipe/cold-watermelon-soup";
		document.getElementById("recipe2").src="https://www.myrecipes.com/extracrispy/i-tasted-dunkin-donuts-new-sweet-and-salted-cold-brew-coffee";
		document.getElementById("recipe3").src="https://www.myrecipes.com/recipe/cold-tomato-salad";
	}	//show selected recipe section


	if (flavorChoice === "spicy" && tempChoice === "hot" && timeChoice === "3hours"){
		//hide form 
		document.getElementById("links").style.display = 'block';
		document.getElementById("recipe").src="https://www.myrecipes.com/recipe/spicy-green-rice";
		document.getElementById("recipe2").src="https://www.myrecipes.com/recipe/spicy-honey-molasses-wings";
		document.getElementById("recipe3").src="https://www.myrecipes.com/recipe/spicy-moroccan-chickpeas";
	}	//show selected recipe section

	if (flavorChoice === "sour" && tempChoice === "nopreference" && timeChoice === "30mins"){
		//hide form 
		document.getElementById("links").style.display = 'block';
		document.getElementById("recipe").src="https://www.myrecipes.com/recipe/sweet-sour-chicken-2";
		document.getElementById("recipe2").src="https://www.myrecipes.com/recipe/west-fresh-pisco-sour";
		document.getElementById("recipe3").src="https://www.myrecipes.com/recipe/strawberries-whipped-sour-cream";
	}	//show selected recipe section


	return false;
}

}



