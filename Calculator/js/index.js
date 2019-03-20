function takeValue(x) {
	document.getElementById('inputwindow').value += x;
}

function clearInput() {
	document.getElementById('inputwindow').value = "";
}

function calculateResult() {
	var result = eval(document.getElementById('inputwindow').value.toFixed(2));
	if(result == "Infinity")
		result = "Divide by Zero";
	document.getElementById('inputwindow').value = result;
}