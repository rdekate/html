var selectedColor = 'blue';
var selectedColor2 = 'orange';

function change(){
	if (selectedColor === 'blue'){
		selectedColor = 'red';
	}
	else{
		selectedColor = 'blue';
	}
	document.getElementById('staging').style.backgroundColor = selectedColor;
	
}

function change2(){
	if (selectedColor2 === 'orange'){
		selectedColor2 = 'black';
	}
	else{
		selectedColor2 = 'orange';
	}
	document.getElementById('staging2').style.backgroundColor = selectedColor2;
	
}