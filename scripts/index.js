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
	
	var textoResultado = `Hola ${nombre}, tienes ${edad} años.</br>`;
	var divColor = `<div class="color_favorito">Tu color favorito es el <div style="height:20px; width:20px; background-color:${color}; margin-left:10px"></div>.</div>`;
	
	if (miedoVolar) {
		textoResultado += "Tienes miedo a volar.</br>"
	} else {
		textoResultado += "No tienes miedo a volar.</br>"
	}
	
	if (tieneCarnet) {
		textoResultado += "Tienes carnet de conducir.</br>"
	} else {
		textoResultado += "No tienes carnet de conducir.</br>"
	}
	
	textoResultado += `Vives en ${vivoEn}.</br>Viajas ${viajo}.</br>` +
						`Tu comida favorita es ${comida}.</br>${divColor}` +
						`Tu texto favorito es: "${texto}".</br>Tu mes favorito es ${mes}.`;
	document.getElementById('resultado').innerHTML = textoResultado;
}

function borrar() {
	document.getElementById("form_vehiculo").reset();
}

function ejemplo() {
	var num1 = parseInt(document.getElementById('numero1').value);
	var num2 = parseInt(document.getElementById('numero2').value);
	document.getElementById('resultado').value = (num1 ? num1 : 0) + (num2 ? num2 : 0);
}