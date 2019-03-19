function takeValue(x) {
	document.getElementById('inputwindow').value += x;
}

function clearInput() {
	document.getElementById('inputwindow').value = "";
}

function calculateResult() {
	var result = eval(document.getElementById('inputwindow').value);
	document.getElementById('inputwindow').value = result;
}