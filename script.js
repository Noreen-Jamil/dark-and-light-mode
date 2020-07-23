let buttonClickCount = 0;
let totalCodeTags;
let codeArray;
let codeTextArray;

// darkmode variables
let darkBackground = "#131415";
let darkBackgroundText = "white";
let darkHeaderSpanColor = "#ffe77a";
let darkCodeBackgroundColor = "#1a1a1a";
let darkButtonIcon = '<i class="fas fa-sun"></i>';

// light mode variables
let lightBackground = "white";
let lightBackgroundText = "black";
let lightHeaderSpanColor = "#0493d3";
let lightCodeBackgroundColor = "#fafafa";
let lightButtonIcon = '<i class="fas fa-moon"></i>';


function change(){
	totalCodeTags = document.querySelectorAll('.code').length;
	codeArray = document.querySelectorAll('.code');
	codeTextArray = document.querySelectorAll('.code code');

	++buttonClickCount;

	if(buttonClickCount % 2 == 0){

		console.log(buttonClickCount+ " dark theme");

		changeValues(darkBackground,darkBackgroundText,darkHeaderSpanColor,darkCodeBackgroundColor,darkButtonIcon);

	}else{
		console.log(buttonClickCount+ " light theme");

		changeValues(lightBackground,lightBackgroundText,lightHeaderSpanColor,lightCodeBackgroundColor,lightButtonIcon);
		
	}

}
function changeValues(backgroundColor,textColor,headerSpanColor,codeBackgroundColor,buttonIcon){
	document.body.style.backgroundColor = backgroundColor;
	document.body.style.color = textColor;
	document.querySelector('header span').style.color = headerSpanColor;
	document.querySelector('header').style.backgroundColor = backgroundColor;
	document.querySelector('button').style.backgroundColor = codeBackgroundColor;
	document.querySelector('button').innerHTML = buttonIcon;
	document.querySelector('button i').style.color = textColor;

	
	for(let i=0; i < totalCodeTags; i++){
		codeArray[i].style.backgroundColor = codeBackgroundColor;
		codeTextArray[i].style.color = headerSpanColor;
	}

}