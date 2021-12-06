var codificaBtn = document.getElementById("codificar");

var decodificaBtn = document.getElementById("decodificar");

var botao = document.getElementById("envio");

var divValorImput = document.getElementById("valorImput");

var alfabeto = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";

var select = document.getElementById("select");

var divInputNumber = document.getElementById('divInputNumber');



codificaBtn.addEventListener("click", function () {
  botao.innerText = "Codificar menssagem";
});

decodificaBtn.addEventListener("click", function () {
  botao.innerText = "Decodificar menssagem";
});

select.addEventListener('change', function(){
  if (select.value == "Cifra de Cesar"){
    divInputNumber.style.display = 'block'
  }else{
    divInputNumber.style.display = 'none'
  }
} )

botao.addEventListener("click", function (e) {
  e.preventDefault();
  var inputNumber = document.getElementById('inputNumber').value;
  if (select.value == "Cifra de Cesar") {
    if (codificaBtn.checked) {
      console.log(codificaBtn.value);
      var codificarTexto = document.getElementById("text").value;
      var textoMinusculo = codificarTexto.toLowerCase();
      var textoCodificado = "";
      for (var i = 0; i < textoMinusculo.length; i++) {
        for (var j = 0; j < alfabeto.length; j++) {
          if (textoMinusculo[i] == alfabeto[j]) {
            textoCodificado += alfabeto[j + parseInt(inputNumber)];
            break;
          } else if (textoMinusculo[i] == " ") {
            textoCodificado += " ";
          }
        }
      }
    } else {
      var codificarTexto = document.getElementById("text").value;
      var textoMinusculo = codificarTexto.toLowerCase();
      var textoCodificado = "";
      for (var i = 0; i < textoMinusculo.length; i++) {
        for (var j = alfabeto.length; j >= 0; j--) {
          if (textoMinusculo[i] == alfabeto[j]) {
            textoCodificado += alfabeto[j - parseInt(inputNumber)];
            break;
          } else if (textoMinusculo[i] == " ") {
            textoCodificado += " ";
          }
        }
      }
    }
  } else {
    if (codificaBtn.checked) {
      var codificarTexto = document.getElementById("text").value;
      var textoCodificado = btoa(codificarTexto);
    } else {
      var codificarTexto = document.getElementById("text").value;
      var textoCodificado = atob(codificarTexto);
    }
  }

  divValorImput.innerHTML = `<h1>Cifra de Cesar</h1><h2>${textoCodificado}</h2>`;
});
