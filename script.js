var selectedColor = 'blue';

function change(){
	if (selectedColor === 'blue'){
		selectedColor = 'red';
	}
	else{
		selectedColor = 'blue';
	}
	document.getElementById('staging').style.backgroundColor = selectedColor;
	
}