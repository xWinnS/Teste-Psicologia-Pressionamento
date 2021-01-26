//Variáveis universais.
let params;
let box = document.getElementById('box');
let disabled = document.createAttribute("disabled");
let tempo;


//Variáveis nivelamento.
let btn = document.getElementById('btn');
let nivelamento_name = document.getElementById('nivelamento_name') ;
let nivelamento_tel = document.getElementById('nivelamento_tel');
let nivelamento_city = document.getElementById('nivelamento_city');

//Variáveis questões.
let questao1, resposta1;
let questao2, resposta2;
let questao3, resposta3;
let questao4, resposta4;
let questao5, resposta5;
let questao6, resposta6;
let questao7, resposta7;
let questao8, resposta8;
let questao9, resposta9;
let questao10, resposta10;
let questao11, resposta11;
let questao12, resposta12;
let questao13, resposta13;
let questao14, resposta14;
let questao15, resposta15;
let questao16, resposta16;
let questao17, resposta17;
let questao18, resposta18;
let questao19, resposta19;
let questao20, resposta20;


function resultado_questoes() {
  questao1 = document.getElementsByName("questao_1");
  questao2 = document.getElementsByName("questao_2");
  questao3 = document.getElementsByName("questao_3");
  questao4 = document.getElementsByName("questao_4");
  questao5 = document.getElementsByName("questao_5");
  questao6 = document.getElementsByName("questao_6");
  questao7 = document.getElementsByName("questao_7");
  questao8 = document.getElementsByName("questao_8");
  questao9 = document.getElementsByName("questao_9");
  questao10 = document.getElementsByName("questao_10");
  questao11 = document.getElementsByName("questao_11");
  questao12 = document.getElementsByName("questao_12");
  questao13 = document.getElementsByName("questao_13");
  questao14 = document.getElementsByName("questao_14");
  questao15 = document.getElementsByName("questao_15");
  questao16 = document.getElementsByName("questao_16");
  questao17 = document.getElementsByName("questao_17");
  questao18 = document.getElementsByName("questao_18");
  questao19 = document.getElementsByName("questao_19");
  questao20 = document.getElementsByName("questao_20");
}

//Variáveis XMLHttpRequest.
let request_nivelamento = new XMLHttpRequest();


//Requisição nivelamento.
request_nivelamento.onreadystatechange = function() {
  if(request_nivelamento.readyState === 4) {
    if(request_nivelamento.status === 200) { 
      console.log(request_nivelamento.responseText);
      box_mensagem('Seu teste foi enviado para avaliação, em breve retornaremos o contato!');
      limpa_campos();
      radio_clear();
      btn_sucesso();
    } else {
      console.log('An error occurred during your request: ' +  request_nivelamento.status + ' ' + request_nivelamento.statusText);
      box_mensagem('Ocorreu um erro ao enviar o teste, entre em contato pelo whatsapp.');
      enable_btn();
    } 
  }
}

//Abre o aquivo .php e seta o cabeçalho.
function open_nivelamento() {
  request_nivelamento.open('POST', 'teste_send.php', true);
  request_nivelamento.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
}

//Escutador no botão do form_nivelamento.
btn.addEventListener('click', function() {
  if ( verifica_nivelamento() ) {
    verifica_questoes();
  }else {
    box_mensagem('Preencha os campos nome, telefone e cidade para validar o teste.');
    hash('#cabecalho');
  }
});

//Verifica se há conteúdo nos campos de contato ao pressionar o botão enviar.
function verifica_nivelamento(){
  if (nivelamento_name.value < 3){
    return false;
  }else if (nivelamento_tel.value < 9){
    return false;
  }else if (nivelamento_city.value < 3) {
    return false;
  }else {
    return true;
  }
}

function verifica_questoes() {
  resultado_questoes();

  for (var i = 0 in questao1){
    if (questao1[i].checked){
      resposta1 = questao1[i].value;
    }
  }if (resposta1 == undefined){
    hash('01');
    box_mensagem("Selecione uma resposta para cada uma das questões.");
    return false
  }

  for (var i = 0 in questao2){
    if (questao2[i].checked){
      resposta2 = questao2[i].value;
    }
  }if (resposta2 == undefined){
    hash('02');
    box_mensagem("Selecione uma resposta para cada uma das questões.");
    return false
  }

  for (var i = 0 in questao3){
    if (questao3[i].checked){
      resposta3 = questao3[i].value;
    }
  }if (resposta3 == undefined){
    hash('03');
    box_mensagem("Selecione uma resposta para cada uma das questões.");
    return false
  }

  for (var i = 0 in questao4){
    if (questao4[i].checked){
      resposta4 = questao4[i].value;
    }
  }if (resposta4 == undefined){
    hash('04');
    box_mensagem("Selecione uma resposta para cada uma das questões.");
    return false
  }

  for (var i = 0 in questao5){
    if (questao5[i].checked){
      resposta5 = questao5[i].value;
    }
  }if (resposta5 == undefined){
    hash('05');
    box_mensagem("Selecione uma resposta para cada uma das questões.");
    return false
  }

  for (var i = 0 in questao6){
    if (questao6[i].checked){
      resposta6 = questao6[i].value;
    }
  }if (resposta6 == undefined){
    hash('06');
    box_mensagem("Selecione uma resposta para cada uma das questões.");
    return false
  }

  for (var i = 0 in questao7){
    if (questao7[i].checked){
      resposta7 = questao7[i].value;
    }
  }if (resposta7 == undefined){
    hash('07');
    box_mensagem("Selecione uma resposta para cada uma das questões.");
    return false
  }

  for (var i = 0 in questao8){
    if (questao8[i].checked){
      resposta8 = questao8[i].value;
    }
  }if (resposta8 == undefined){
    hash('08');
    box_mensagem("Selecione uma resposta para cada uma das questões.");
    return false
  }

  for (var i = 0 in questao9){
    if (questao9[i].checked){
      resposta9 = questao9[i].value;
    }
  }if (resposta9 == undefined){
    hash('09');
    box_mensagem("Selecione uma resposta para cada uma das questões.");
    return false
  }

  for (var i = 0 in questao10){
    if (questao10[i].checked){
      resposta10 = questao10[i].value;
    }
  }if (resposta10 == undefined){
    hash('10');
    box_mensagem("Selecione uma resposta para cada uma das questões.");
    return false
  }

  for (var i = 0 in questao11){
    if (questao11[i].checked){
      resposta11 = questao11[i].value;
    }
  }if (resposta11 == undefined){
    hash('11');
    box_mensagem("Selecione uma resposta para cada uma das questões.");
    return false
  }

  for (var i = 0 in questao12){
    if (questao12[i].checked){
      resposta12 = questao12[i].value;
    }
  }if (resposta12 == undefined){
    hash('12');
    box_mensagem("Selecione uma resposta para cada uma das questões.");
    return false
  }

  for (var i = 0 in questao13){
    if (questao13[i].checked){
      resposta13 = questao13[i].value;
    }
  }if (resposta13 == undefined){
    hash('13');
    box_mensagem("Selecione uma resposta para cada uma das questões.");
    return false
  }

  for (var i = 0 in questao14){
    if (questao14[i].checked){
      resposta14 = questao14[i].value;
    }
  }if (resposta14 == undefined){
    hash('14');
    box_mensagem("Selecione uma resposta para cada uma das questões.");
    return false
  }

  for (var i = 0 in questao15){
    if (questao15[i].checked){
      resposta15 = questao15[i].value;
    }
  }if (resposta15 == undefined){
    hash('15');
    box_mensagem("Selecione uma resposta para cada uma das questões.");
    return false
  }

  for (var i = 0 in questao16){
    if (questao16[i].checked){
      resposta16 = questao16[i].value;
    }
  }if (resposta16 == undefined){
    hash('16');
    box_mensagem("Selecione uma resposta para cada uma das questões.");
    return false
  }

  for (var i = 0 in questao17){
    if (questao17[i].checked){
      resposta17 = questao17[i].value;
    }
  }if (resposta17 == undefined){
    hash('17');
    box_mensagem("Selecione uma resposta para cada uma das questões.");
    return false
  }

  for (var i = 0 in questao18){
    if (questao18[i].checked){
      resposta18 = questao18[i].value;
    }
  }if (resposta18 == undefined){
    hash('18');
    box_mensagem("Selecione uma resposta para cada uma das questões.");
    return false
  }

  for (var i = 0 in questao2){
    if (questao19[i].checked){
      resposta19 = questao19[i].value;
    }
  }if (resposta19 == undefined){
    hash('19');
    box_mensagem("Selecione uma resposta para cada uma das questões.");
    return false
  }

  for (var i = 0 in questao20){
    if (questao20[i].checked){
      resposta20 = questao20[i].value;
    }
  }if (resposta20 == undefined){
    hash('20');
    box_mensagem("Selecione uma resposta para cada uma das questões.");
    return false
  }

  prepara_envio();
}

function prepara_envio(){;
  disable_btn();
  box_mensagem('Aguarde, enviando teste...')
  open_nivelamento();
  set_params_nivelamento();
  request_nivelamento.send(params)
};

//Pega o conteúdo do campo do formulário do contato e armazena na variável params.
function set_params_nivelamento(){
  params = 
    'form_nivelamento=&txt_name=' + nivelamento_name.value + 
    '&txt_tel=' + nivelamento_tel.value + 
    '&txt_city=' + nivelamento_city.value + 
    '&questao1=' + resposta1 +
    '&questao2=' + resposta2 +
    '&questao3=' + resposta3 +
    '&questao4=' + resposta4 +
    '&questao5=' + resposta5 +
    '&questao6=' + resposta6 +
    '&questao7=' + resposta7 +
    '&questao8=' + resposta8 +
    '&questao9=' + resposta9 +
    '&questao10=' + resposta10 +
    '&questao11=' + resposta11 +
    '&questao12=' + resposta12 +
    '&questao13=' + resposta13 +
    '&questao14=' + resposta14 +
    '&questao15=' + resposta15 +
    '&questao16=' + resposta16 +
    '&questao17=' + resposta17 +
    '&questao18=' + resposta18 +
    '&questao19=' + resposta19 +
    '&questao20=' + resposta20;
    console.log(params);
}


//Desabilita os botões de enviar email.
function disable_btn() {
  btn.innerHTML = 'Aguarde...';
  btn.setAttributeNode(disabled);
}

//Limpa os dados dos campos.
function limpa_campos() {
  nivelamento_name.value = '';
  nivelamento_tel.value = '';
  nivelamento_city.value = '';
}

//Habilita os botões de enviar email.
function enable_btn() {
  btn.innerHTML = "FINALIZAR TESTE";
  btn.removeAttributeNode(disabled);
}

function btn_sucesso() {
  btn.innerHTML = "TESTE ENVIADO COM SUCESSO";
  btn.style.backgroundColor = '#c94622'
  btn.style.color = '#FFFFFF'
}

//Função que desmarca todos os radios 
function radio_clear(){
  for (var i = 0 in questao1){
     questao1[i].checked = false;
  }
  for (var i = 0 in questao2){
     questao2[i].checked = false;
  }
  for (var i = 0 in questao3){
    questao3[i].checked = false;
  }
  for (var i = 0 in questao4){
    questao4[i].checked = false;
  }
  for (var i = 0 in questao5){
    questao5[i].checked = false;
  }
  for (var i = 0 in questao6){
    questao6[i].checked = false;
  }
  for (var i = 0 in questao7){
    questao7[i].checked = false;
  }
  for (var i = 0 in questao8){
    questao8[i].checked = false;
  }
  for (var i = 0 in questao9){
    questao9[i].checked = false;
  }
  for (var i = 0 in questao10){
    questao10[i].checked = false;
  }
  for (var i = 0 in questao11){
    questao11[i].checked = false;
  }
  for (var i = 0 in questao12){
    questao12[i].checked = false;
  }
  for (var i = 0 in questao13){
    questao13[i].checked = false;
  }
  for (var i = 0 in questao13){
    questao13[i].checked = false;
  }
  for (var i = 0 in questao14){
    questao14[i].checked = false;
  }
  for (var i = 0 in questao15){
    questao15[i].checked = false;
  }
  for (var i = 0 in questao16){
    questao16[i].checked = false;
  }
  for (var i = 0 in questao17){
    questao17[i].checked = false;
  }
  for (var i = 0 in questao18){
    questao18[i].checked = false;
  }
  for (var i = 0 in questao19){
    questao19[i].checked = false;
  }
  for (var i = 0 in questao20){
    questao20[i].checked = false;
  }
}


//Função que habilita box de mensagem flutuante por 5 segundos.
function box_mensagem(mensagem){
  clearTimeout(tempo);
  box.innerHTML = mensagem;
  box.classList.remove('animate__fadeOut');
  box.classList.add('animate__fadeIn');
  box.classList.remove('box_hidden');
  tempo = setTimeout(box_hidden, 5000);
}

//Função que desabilita box de mensagem flutuante após 5 segundos.
function box_hidden(){
  box.classList.remove('animate__fadeIn');
  box.classList.add('animate__fadeOut');
  setTimeout(function(){
    box.classList.add('box_hidden');
  }, 1500);
  box.innerHTML = "";
}

function hash(div) {
  window.location.hash = div;
  setTimeout(function(){
    window.location.hash = undefined;
  },2000);
}