let button = document.querySelector('button');

function convertBinaryToDecimal() {
	let binaryElement = document.getElementById('binary');
	let binary = binaryElement.value;
	let binaryArray = binary.split('');

	for (let i = 0; i < binaryArray.length; i++) {
		if ((binaryArray[i] != 0 && binaryArray[i] != 1) || isNaN(binary)) {
			alert('Insira um número válido!');
			binaryElement.value = '';
			binaryElement.focus();
			return;
		}
	}

	let binaryResult = parseInt(binary, 2).toString(10);

	createElementOnScreen(binaryResult);
}

function createElementOnScreen(resultDecimal) {
	let resultElement = document.getElementById('result');
	
	resultElement.innerHTML = `
		<div class="alert alert-primary d-flex align-items-center gap-3" role="alert">
		 	<p class="my-0">Número convertido em binário: ${resultDecimal}</p>
		</div>
	`
}

button.addEventListener('click', convertBinaryToDecimal)