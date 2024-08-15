// Jogo Refugiados - Trilha da coragem
 
let pontos = 0;
let inventario = [];
let campeonat;
let fuga;
let sair;
let fim;
let treinarAbrigo;
let disciplina;
let volte;
let final;
let decide;
let finalDorsa;
let acabou;
 
function intro() {
    alert(`Seja bem-vindo à Trilha da coragem! \nVocê realizará uma incrível jornada de Adnan Khankan que é um atleta olímpico que quer fazer parte da seleção de refugiados.`);
    alert(`Lembrando, para você ganhar as olimpíadas de Paris 2024. Você terá que desenvolver as seguintes características:\n➣Competitividade\n➣Disciplina\n➣Responsabilidade\n➣Empatia`);
    let resposta = prompt(`Digite [1] para começar esta linda jornada.`);
 
    if (resposta === `1`) {
        inicio();
    } else if (resposta == 2){
        alert(`Ok! Te aguardo em outro momento.`);
    }else{
        alert(`Resposta não identificada`)
        intro()
    }
}
intro();
 
function inicio() {
    alert(`Adnan, conversando com seus amigos na escola, ouviu seu amigo "Shairo" falando sobre o esporte Judô.\nChegando em casa Adnan foi correndo falar para seus pais que queria fazer um esporte que se chama Judô, mostrou para seus pais e seu pai gostou muito e decidiu levar Adnan para fazer uma aula.`);
    comecando();
}
 
function comecando() {
    
    let aula = prompt(`Voltando da aula de judô, Adnan achou muito interessante. Chegando em casa, seu pai perguntou-lhe se você deseja continuar com as aulas.\nSe você deseja continuar com as aulas, digite (1). Se não deseja mais fazer as aulas, digite (2).`);
    
    if (aula === "1") {
        pontos += 5;
        alert(`Checkpoint: Pontos após decidir continuar com as aulas: ${pontos}`);
        campeonato();
    } else if (aula === "2") {
        alert(`Que pena que você não gostou, mas seu pai se interessou muito e decidiu fazer aula também e levou Adnan junto novamente para a aula.`);
        let novaAula = prompt(`Depois de um mês de treino com seu pai, Adnan chegou à conclusão de que tem talento para o esporte e decidiu investir nisso.\nVocê deseja aumentar sua carga horária de treinamento? Se sim, digite (1). Se não, digite (2).`);
        horas(novaAula);
    } else {
        alert(`Resposta não identificada`);
        inicio(); 
    }
}
 
function campeonato() {
    alert(`UAUU! você é bom nas decisões, Adnan em um mês de treino teve uma ótima performance.`);
    alert(`Portanto a sua boa performance você foi chamado para competir um campeonato estadual. Você prefere ter um treino mais intensivo para ter mais chance no campeonato ou ter um treino mais leve para diminuir as chances de se lesionar.`);
    campeonat = Number(prompt(`[1] para que os treinos sejam intensivos.\n[2] para os treinos serem mais leves.`));
    treino();
}
 
function treino() {
    if (campeonat == 1) {
        inventario[0] = 'Competitividade';
        alert(`Checkpoint: Inventário após escolher treino intensivo: ${inventario}`);
        alert(`Opaa, você ganhou a emoção "Competitividade"`);
        alert(`Portanto pelo seu bom desempenho, seu professor ficou orgulhoso.`);
        alert(`Você estava muito ansioso, então chegou o dia da sua primeira competição.`);
        alert(`Diante suas decisões você ficou em PRIMEIRO LUGAR🏆.`);
        casa(); // CASA GUERRA
    } else if (campeonat == 2) {
        inventario[0] = 'Competitividade';
        alert(`Checkpoint: Inventário após escolher treino leve: ${inventario}`);
        alert(`Boa escolha, você quis se resguardar para ter um melhor desempenho no campeonato.\nVocê ganhou a emoção "Competitividade".`);
        alert(`Você com o sonho alto de um dia participar das olimpíadas, foi dormir muito ansioso.`);
        alert(`Chegando no dia da competição você estava ótimo fisicamente e lutou.`);
        alert(`Portanto suas decisões você ficou em PRIMEIRO LUGAR🏆.`);
        indoCasa(); // INDO PRA CASA E TEVE UMA GUERRA
    }else {
        alert(`Resposta não identificada`)
        treino()
    }
}
 
function horas(valorAula) {
    if (valorAula == 1) {
        alert(`Você aumentou sua carga horária e se dedicou muito, e seu professor escreveu você para um campeonato estadual.`);
        alert(`Seu professor está ansioso para ver seu desempenho.`);
        alert(`Chegando no dia do campeonato, você disputou e ficou em (1.lugar🏆) e conquistou a emoção "Competitividade"`);
        inventario[0] = 'Competitividade';
        casa();
    } else if (valorAula == 2) {
        alert(`Você mesmo não treinando muito estava ganhando de todo mundo lá no judô.`);
        alert(`Seu pai vendo seu bom desempenho, te inscreveu em um campeonato estadual.`);
        alert(`Você ganhou a emoção "Competitividade".`);
        inventario[0] = 'Competitividade';
        alert(`Você e seu pai muito ansiosos foram dormir pois amanhã já era o campeonato.`);
        alert(`Chegando no campeonato você estava muito nervoso, mas suas ótimas decisões você ficou em (PRIMEIRO LUGAR)🏆.`);
        indoCasa();
    }else{
        alert(`Resposta não identificada`)   
    horas() }
}
 
function casa() {
    alert(`Você muito feliz indo para casa com seu troféu de CAMPEÃO, e seu pai com sorriso no rosto. No momento em que viram a esquina de casa, escutam barulhos de tiros, bombas e gritos. Você e seu pai começam a correr sem parar.`);
    fuga = Number(prompt(`Vocês têm a decisão de fugir para casa ou para um abrigo bem longe.\n[1] Para fugir para casa.\n[2] Para fugir para um abrigo.`));
    alert(`Checkpoint: Decisão de fuga: ${fuga}`);
    if (fuga == 1) {
        morre();
    } else if (fuga == 2) {
        abrigo();
    }else{
        alert(`Resposta não identificada`)
        casa()
    }
}
 
function indoCasa() {
    alert(`Após a cerimônia de medalhas, você e seu pai pegam o carro com um sorriso no rosto adiante, vão em direção a sua casa. Chegando em casa eles se deparam com sons de tiros e bombas.`);
    sair = Number(prompt(`Você e seu pai estão apavorados, vocês têm que fugir. Você tem que tomar uma decisão:\n[1] Para fugir para um abrigo bem longe.\n[2] Para se esconder em casa.`));
    if (sair == 1) {
        abrigo();
    } else if (sair == 2) {
        morre();
    }else{
        alert(`Resposta não identificada`)
        indoCasa()
    }
}
 
function morre() {
    alert(`Vocês foram para casa, e não paravam de ouvir sons de bombas e gritos muito altos, você e seu pai foram para a cozinha porque era o local mais protegido da casa, você muito nervoso abraçou seu troféu de campeão muito forte e fechou seus olhos e estava fazendo de tudo para não pensar no caos lá fora. Diante um lugar onde deveria haver paz, a brutalidade da guerra na Síria lhe alcançou. Ele chegou a óbito ali, entre seus sonhos de um futuro que não pode viver.`);

    fim = Number(prompt(`Infelizmente, você não resistiu e se tornou mais uma vida perdida entre as tantas na ocasião na guerra. Sua missão chegou ao fim.\nDigite: [1] Para recomeçar o jogo. \nDigite: [2] Para encerrar o jogo.\nDigite: [3] Para voltar à escolha anterior.`));
    if (fim == 1) {
        alert(`Você irá reiniciar o jogo.`)
        intro();
    } else if (fim == 2) {
        alert(`Obrigado por jogar! Até a próxima.`);
    } else if (fim == 3) {
        alert(`Você irá voltar a questão anterior devido o checkpoint.`)
        casa();
    }else{
        alert(`Resposta não identificada`)
        morre()
    }
}
 
function abrigo() {
    treinarAbrigo = Number(prompt(`Vocês conseguiram chegar ao abrigo e estão seguros por enquanto. Vocês tiram um bom sono e descansam. Após uma semana já estava tudo tranquilo e você viu oportunidade de treinar para seguir seu sonho.\n[1] Para começar a treinar.\n[2] Para não ir treinar, e ficar descansando.`));
    if (treinarAbrigo == 1 ){
        treinando()

    }else if (treinarAbrigo == 2){
    descansando()}
    else {
        alert(`Resposta não identificada`)
        abrigo()

    }



    
}

function treinando(){
    alert(`BOAA! você conquistou a emoção "Responsabilidade".`)
    inventario [1] = `Responsabilidade`
    alert (`Você se dedicou muito e apreciou seus golpes, entretanto após um mês da fuga da Síria para o abrigo de refugiados, você encontra Dorsa Yavarivafa que é uma jogadora de badminton que também conquistou o troféu de primeiro lugar no seu país origem Irã, e teve que fugir para o abrigo por causa da guerra em seu país. Vocês criaram uma amizade muito forte, e cada um foi chamado para representar a seleção de refugiados nas Olimpíadas 2024 em Paris.`)
    alert(`Vocês muito felizes e ansiosos decidem ir viajar juntos para a França.\nVocê ganha a emoção "Empatia" por desejar ir viajar junto com Dorsa. Como a viagem é muito longa, vocês conversaram muito, cada um contando suas histórias de infância e como conheceu seu devido esporte.`)
    inventario [2]= `Empatia`
    alert(`Em toda essa jornada você conquistou os seguinte itens:\n➣${inventario[0]}\n➣${inventario[1]}\n➣${inventario[2]}\n\nVocê para terminar esse percurso com sucesso, você precisa conquistar a característica: "Disciplina"`)
    disciplina = Number(prompt(`Vocês há uma semana já na França. Faltando 2 dias para começar as olimpíadas Dorsa decide ir treinar e pergunta pra você se vai treinar também , você voltando do almoço viu que ia ter uma festa no pé da torre Eiffel.\nVocê decide ir para o treino e se dedicar ainda mais [1].\nVocê decide faltar o treino e ir para a festa [2].  `))
    if (disciplina == 1){
        olimpiadas()
    }else if(disciplina == 2){
      tentednv()

    }else{
        alert(`Resposta não identificada`)
        treinando()
    }
    
    




}

function descansando(){
    alert(`Você decidiu não ir terinar e ficar descansando, quando você estava deitado viu uma mulher linda no abrigo, você foi falar com ela e descobriu que o nome da mulher era Dorsa Yavarivafa, e ela praticava o esporte Badminton. Dorsa também conquistou troféu de primeiro lugar em seu país de origem irã, mas teve que fugir para o abrigo de refugiados devido as guerras que tiveram no país.`)

    alert(`Você e Dorsa construíram uma amizade forte em uma semana no abrigo. Dorsa com um sonho muito distante de participar das Olimpíadas 2024 na França, convidou Adnan para treinar Badminton. Após treinar com Dorsa, você decide treinar judô e fica com os golpes ainda mais aperfeiçoados.`)
    alert(`MUITO BEMM!!!   Com isso você ganhhou a emoção "Responsabilidade".`)
    
    inventario [1] = "Responsabilidade"
    alert(`Após um mês de treino, um olheiro que estava olhando o abrigo chama você e Dorsa para participar da seleção de refugiados Olimpíadas 2024. Vocês ficam muito feliz e sem acreditar.`)
  
   
    alert(`Você decide fazer a viajem para França com Dorsa e ganha emoção "Empatia", você Dorsa devido a viajem longa conversam muito sobre a infância e sobre como teve gosto pelo seu esporte`)
    alert(`PARABÉNS!!! você conquistou a emoção "Empatia"`)
    inventario [2] = "Empatia"

    alert(`Em toda essa jornada você conquistou os seguinte itens:\n➣${inventario[0]}\n➣${inventario[1]}\n➣${inventario[2]}\n\nVocê para terminar esse percurso com sucesso, você precisa conquistar a característica: "Disciplina"`)

    decide = Number(prompt(`Após uma semana em Paris e faltando 3 dias para começar as Olimpíadas. Dorsa convida você para sair para beber, e seu treinador está te chamando para treinar. Escolha qual a sua decisão.\n[1] Para seguir Dorsa e sair para beber.\n[2] Para seguir o treinador e ir treinar. `))

    if(decide === "1"){
        fimDorsa()
    }else if(decide === "2"){
        treinarGanhar()
    }else{
        alert(`Resposta não identificada`)
        descansando()
    }








// adanan vai descançar e acha uma menina mt bonita (dorsa) e conversa com dorsa e faz uma amizade muito forte a dorsa que é uma jogadora de badmintom chama adnan para treinar e adnan começa a treinar judo tbm 
}

function olimpiadas(){

    alert(`PARABÉNS!!! Diante sua esolha, você adquiriu a emoção "Disciplina", tem grande chance de ir muito bem nessas Olimpìadas.`)
    

    alert(`Em toda essa jornada você conseguiu todos os requesitos pedidos. Diante essas Olimpíadas Adnan surpreendeu a todos, passe adiante e veja em qual posição você ficou.`)

    alert(`🎆🎆🎆🎆🎆VOCÊ FICOU EM PRIMEIRO LUGAR.🎆🎆🎆🎆🎆`)

    final = Number(prompt(`Você concluiu o jogo "Trilha da coragem"\nDigitr [1] para encerrar o jogo.\nDigite [2] para recomeçar o jogo.`))

    if (final == 1){
        alert(`Muito obrigado por jogar! espero que tenha gostado.\nJogo feito por: Gabriel Arnold da Silva`)

    }else if(final == 2){
        alert(`Muito obrigado por jogar, diante a sua escolha você irá recomeçar o jogo.\nJogo feito por: Gabriel Arnold da Silva `)

        intro()

    }else{
        alert(`Resposta não identificada`)
    olimpiadas()

    }




}
function tentednv(){
   volte = Number(prompt(`Bom, diante a sua resposta não foi possível obter a emoção "Disciplina". Tente novamente e repense a sua escolha.\nDigite [1] para terminar o jogo.\nDigite [2] para voltar à questão anterior.\nDigite [3] para recomeçar o jogo.`)) 
   
   if (volte == 1){
    
    alert(`Obrigado por jogar! Até a próxima.`)
  
} else if (volte == 2){
    
    treinando()
  
}else if (volte == 3){
   
    alert(`Você irá reiniciar o jogo.`)
   
    intro()
  
}else { alert(`Resposta não identificada`)

    tentednv()
    
   }
}


function fimDorsa(){
   
   finalDorsa = Number(prompt(`Certo, diante sua resposta não foi possível obter a emoção "Disciplina". Tente novamente e repense suas atitudes\nDigite [1] para terminar o jogo.\nDigite [2] para voltar à questão anterior.\nDigite [3] para recomeçar o jogo.`)) 

   if (finalDorsa == 1){
    
    alert(`Obrigado por jogar! Até a próxima.`)
  
} else if (finalDorsa == 2){
    
    fimDorsa()
  
}else if (finalDorsa == 3){
   
    alert(`Você irá reiniciar o jogo.`)
   
    intro()
  
}else { alert(`Resposta não identificada`)

    finalDorsa()
    
   }

   

}
function treinarGanhar(){
    alert(`VOCÊ ESTÁ INDO EM UM BOM CAMINHO!!!  diante a sua escolha você adquiriu a emoção "Disciplina" e tem a maior chance de ir bem nessas Olimpíadas.`)
    alert(`Você conseguiu todos os requesitos pedidos, Diante isso Adnan surpreendeu a todos nessas Olimpíadas, passe adiante e veja como Adnan foi.`)
    alert(`🎆🎆🎆🎆🎆VOCÊ FICOU EM PRIMEIRO LUGAR.🎆🎆🎆🎆🎆`)

    acabou = Number(prompt(`Você concluiu o jogo "Trilha da coragem"\nDigitr [1] para encerrar o jogo.\nDigite [2] para recomeçar o jogo.`))

    if (acabou == 1){
        alert(`Muito obrigado por jogar! espero que tenha gostado.\nJogo feito por: Gabriel Arnold da Silva`)

    }else if(acabou == 2){
        alert(`Muito obrigado por jogar, diante a sua escolha você irá recomeçar o jogo.\nJogo feito por: Gabriel Arnold da Silva `)

        intro()

    }else{
        alert(`Resposta não identificada`)
    treinarGanhar()

    }
    

}