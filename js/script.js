let texto = document.getElementById("texto");
let btn = document.getElementById("btn");
let informacao = document.getElementById("informacao");
let form = document.getElementById("form");
let alert = document.getElementById("alert");
let fnome = document.getElementById("fnome");
let ftel = document.getElementById("ftel");
let btn_form = document.getElementById("btn_form");
let tempo, enter, params, primeiro_tempo, segundo_tempo;
let contador = 3, quantidade_primeiro = 0, quantidade_segundo = 0;


texto.style.display = "none";
form.style.display = "none";

btn.addEventListener("click",start);
window.addEventListener('keyup', enter_pressionado);
btn_form.addEventListener("click", submeter)

function enter_pressionado(){
    let key = window.event.keyCode;
    if(primeiro_tempo == true && enter == true) {
        quantidade_primeiro++;
    }else if(segundo_tempo == true && enter == true) {
        quantidade_segundo++;
    }
}

function start(){
    btn.style.display ="none";
    informacao.innerHTML = contador;
    tempo = setInterval(temporizador, 1000)
}

function temporizador() {
    if(contador <= 1){
        clearInterval(tempo);
        informacao.style.display = "none";
        start_primeiro_tempo();
    }else {
        contador -= 1;
        informacao.innerHTML = contador;
    }
}

function start_primeiro_tempo(){
    setTimeout(function(){ 
        enter = true;
        primeiro_tempo = true;
        texto.style.display = "block";
        fim_primeiro_tempo();
    }, 2000);
}

function fim_primeiro_tempo(){
    setTimeout(function(){
        enter = false;
        primeiro_tempo = false;
        texto.style.display = "none";
        start_segundo_tempo();
    }, 4000);
}

function start_segundo_tempo(){
    setTimeout(function(){ 
        enter = true;
        segundo_tempo = true;
        texto.style.display = "block";
        fim_segundo_tempo();
    }, 3000);
}

function fim_segundo_tempo(){
    setTimeout(function(){
        enter = false;
        segundo_tempo = false;
        texto.style.display = "none";
        fim_teste();
    }, 7000);
}

function fim_teste(){
    setTimeout(function(){
        form.style.display = "flex";
        console.log("Quantidade 01 tempo: " + quantidade_primeiro);
        console.log("Quantidade 02 tempo: " + quantidade_segundo);
    }, 2000);
}

function submeter() {
    if(valida_dados()){
        envia_dados();
    }else {
        alert.style.display = "block";
    }
}

function valida_dados() {
    console.log(fnome.value.length);
    console.log(ftel.value.length);
    if (fnome.value.length >= 3 && ftel.value.length >= 8) {
        return true;
    }else {
        return false;
    }
}

function envia_dados() {
    form.style.display = "none";
    informacao.innerHTML = "Enviando dados, aguarde...";
    informacao.style.display = "block";
    open_teste();
}

//Variáveis XMLHttpRequest.
let request_teste = new XMLHttpRequest();


//Requisição teste.
request_teste.onreadystatechange = function() {
  if(request_teste.readyState === 4) {
    if(request_teste.status === 200) { 
      console.log(request_teste.responseText);
      informacao.innerHTML = "Teste finalizado e dados enviados, obrigado por participar.";
    } else {
      console.log('An error occurred during your request: ' +  request_nivelamento.status + ' ' + request_teste.statusText);
      informacao.innerHTML = "Algo de errado aconteceu, dados não foram enviados...";
    } 
  }
}

//Abre o aquivo .php e seta o cabeçalho.
function open_teste() {
  request_teste.open('POST', 'teste_send.php', true);
  request_teste.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  set_params_teste();
  request_teste.send(params)
}

function set_params_teste(){
    params = 'nome=' + fnome.value +
    '&tel=' + ftel.value +
    '&qtd_primeiro_tempo=' + quantidade_primeiro +
    '&qtd_segundo_tempo=' + quantidade_segundo;
    console.log(params);
}