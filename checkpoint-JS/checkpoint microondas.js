/*let dia = "terca";

switch(dia){
    case "segunda":
        console.log("tomar cafe");
        break;
        default:
            console.log("Nao vou fazer nada");
}*/

/*- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".*/


/**
 * Funcao alterada
 */
    let PratoPronto = "Prato pronto, bom apetite!!!"

  function mensagemMicroondas(tempo){
    if(tempo <= 10 && tempo >= 1){
        return console.log("Tempo Insuficiente para Pipoca");
    }
    if(tempo >=30){
        return console.log("Kabooom");
    }

    if(tempo <= 29 && tempo >= 20){
    return console.log("A pipoca queimou");
}
    if(tempo = "null"){
        return console.log("Nada Selecionado");
            }           
            
             
}
mensagemMicroondas('null', false);
console.log(PratoPronto);
mensagemMicroondas(8,false);
console.log(PratoPronto);
mensagemMicroondas(31,false);
console.log(PratoPronto);
mensagemMicroondas(29,false); 
console.log(PratoPronto);


