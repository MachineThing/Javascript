document.getElementById('exebutton').onclick = function() {doMath()};

function applyMath(id, res) {
	var span = document.getElementById(id);
	span.innerHTML = res;
}

function doMath() {
	var numx = document.getElementById('xparam');
	var numy = document.getElementById('yparam');
	var valx = parseFloat(numx.value);
	var valy = parseFloat(numy.value);
	if (isNaN(valx)) {
		alert("x is not a vaild number!");
	} else if (isNaN(valy)) {
		alert("y is not a vaild number!");
	} else {
		applyMath("math_min", Math.min(valx, valy));
		applyMath("math_max", Math.max(valx, valy));
		applyMath("math_floor", Math.floor(valx));
		applyMath("math_ceil", Math.ceil(valx));
		applyMath("math_abs", Math.abs(valx));
		applyMath("math_sign", Math.sign(valx));
		applyMath("math_random", Math.random());
		applyMath("math_round", Math.round(valx));
		applyMath("math_trunc", Math.trunc(valx));
		applyMath("math_pow", Math.pow(valx, valy));
		applyMath("math_sqrt", Math.sqrt(valx));
		applyMath("math_cbrt", Math.cbrt(valx));
		applyMath("math_log", Math.log10(valx));
		applyMath("math_sin", Math.sin(valx));
		applyMath("math_cos", Math.cos(valx));
		applyMath("math_tan", Math.tan(valx));
	}
}
