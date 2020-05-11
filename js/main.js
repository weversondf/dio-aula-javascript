function clicou(){
	document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
	//console.log(document.getElementById("Agradecimento"));
	//alert("Obrigado por clicar")
}

function redirecionar(){
	//windows.open("https://globallabs.academy/");
	//windows.location.href = "https://globallabs.academy/";
	windows.location.href = "https://www.google.com.br/";
}

/*
var validar = 0; //global
function soma(n1, n2){
	return n1 + n2;
}

function validaIdade(idade){
	//var validar; //local
	if (idade >= 18){
		validar = true
	}else{
		validar = false
	}
	return validar;
}
var idade = prompt("Qual sua idade");
validaIdade(idade)
console.log(validar);
*/


/*

function setReplace(frase, nome, novo_nome){
	return frase.replace(nome, novo_nome)
}

alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));

var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getMinutes());
alert(d.getHours());
*/


/*
var count;
for (count=0; count <= 5; count++){
	alert(count);
};
*/

/*
var count = 0;
while (count <= 5){
	console.log(count);
	alert(count);
	//count = count + 1;
	count++;
};


var idade = prompt("Qual sua idade?");
if (idade >=18){
	alert("maior de idade");
}else{
	alert("menor de idade");
}


var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/

//var lista = ["maça", "pera", "laranja"];
//lista.push("uva"); // adiciona elemento

//lista.pop(); // retira elemento
//console.log(lista.length);
//console.log(lista.reverse);
//console.log(lista.ToString());
//console.log(lista.join(" - "));
//console.log(lista);
//console.log(lista[1]);


//var nome "Weverson Pereira";
//var n1 = 5;
//var n2 = 3;

//var idade = 41;
//var idade2 = 10;

//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(n1 + n2);
//alert(idade * idade2);

//console.log(nome);
//console.log(idade + idade2);
//console.log(n1 + n2);
//console.log(frase.replace("Japão","Brasil"));
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão","Brasil"));