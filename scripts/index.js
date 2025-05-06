function enviar() {
	
	var nombre = document.getElementById('nombre').value;
	var edad = document.getElementById('edad').value;
	var miedoVolar = document.getElementById('volar').checked;
	var tieneCarnet = document.getElementById('carnet').checked;
	var vivoEn = document.querySelector('input[name="vivo_en"]:checked').value;
	var viajo = document.querySelector('input[name="viajo"]:checked').value;
	var comida = document.getElementById('comidas').value;
	var color = document.getElementById('color').value;
	var texto = document.getElementById('multilinea').value;
	var mes = document.getElementById('mes').value;
	
	var textoResultado = `Hola ${nombre}, tienes ${edad} años.\n`;
	
	if (miedoVolar) {
		textoResultado += "Tienes miedo a volar.\n"
	} else {
		textoResultado += "No tienes miedo a volar.\n"
	}
	
	if (tieneCarnet) {
		textoResultado += "Tienes carnet de conducir.\n"
	} else {
		textoResultado += "No tienes carnet de conducir.\n"
	}
	
	textoResultado += `Vives en ${vivoEn}.\nViajas ${viajo}.\n` +
						`Tu comida favorita es ${comida}.\nTu color favorito es el ${color}.\n` +
						`Tu texto favorito es: "${texto}".\nTu mes favorito es ${mes}.`;
	document.getElementById('resultado').innerText = textoResultado;
}

function borrar() {
	document.getElementById("form_vehiculo").reset();
}

function ejemplo() {
	var num1 = parseInt(document.getElementById('numero1').value);
	var num2 = parseInt(document.getElementById('numero2').value);
	document.getElementById('resultado').value = (num1 ? num1 : 0) + (num2 ? num2 : 0);
}