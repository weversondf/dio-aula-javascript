function clicou(){
	document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
	//console.log(document.getElementById("Agradecimento"));
	//alert("Obrigado por clicar")
}

function redirecionar(elemento){
	window.open("https://globallabs.academy/");
	//window.location.href = "https://globallabs.academy/";
}

function trocar(elemento){
	//document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse</b>";
	elemento.innerHTML = "<b>Obrigado por passar o mouse</b>";
	//alert("trocar texto");
}

function voltar(elemento){
	//document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse</b>";
	elemento.innerHTML = "<b>Passe o mouse aqui</b>";
	//alert("trocar texto");
}

function load(){
	alert("Página carregada");
}

function funcaoChange(elemento){
	console.log(elemento.value);
}