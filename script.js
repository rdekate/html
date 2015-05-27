var selectedColor = 'blue';
var selectedColor1 = 'yellow';
function change(){
	if (selectedColor === 'blue'){
		selectedColor = 'red';
	}
	else{
		selectedColor = 'blue';
	}
	document.getElementById('staging').style.backgroundColor = selectedColor;
	
}

function change1(){
	if (selectedColor1 === 'yellow'){
		selectedColor1 = 'green';
	}
	else{
		selectedColor1 = 'yellow';
	}
	document.getElementById('staging1').style.backgroundColor = selectedColor1;
	
}