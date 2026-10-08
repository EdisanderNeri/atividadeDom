// // if e else, else if, switch
// // looping
// // array(FUNÇÕES NATIVAS)
// // (OBJETO)
// // FUNÇÕES
// // VAR, LET E CONST
// // DICAS: +=
// // CONCATENÇÃO
// // DEFER 

// let nome ="Edisander"
// let idade = 19
// let maiorDeIdade = true
// let saldo = 10000

// if (true) {
//     console.log("Sou maior de idade")
//     //acontece algo
// }
// else{
//     console.log ("Sou menor de idade")
//     // acontece algo
// }

// if(saldo < 1000) {
//     console.log (" Fique em casa ");
// }
// else if(saldo >= 1000 && <=5000 ){
//     console.log ("Sair pra festa ")
// }
// else{
//     console.log ("Guardar dinheiro")
// }

// let idade = prompt ("Digite sua idade")

// if (idade <= 12) {
//     alert ("Voce e uma criança")
// }
// else if (idade <=17){
//     alert ("Voce e um adolecente")
// }
// else if (idade < 60) {
//     alert ("Voce e um adulto")
// }
// else{
//     alert ("Voce e um idoso")
// }


// let userAge = Number(prompt("Digite a sua idade: "));

// if (userAge <= 0) {
//     alert("Número inválido");
// }
// else if (userAge > 0 && userAge < 12) {
//     alert("Você é uma criança");
// }
// else if (userAge >= 12 && userAge < 18) {
//     alert("Você é um adolescente");
// }
// else if (userAge >= 18 && userAge < 60) {
//     alert("Você é um adulto");
// }
// else if (userAge >= 60) {
//     alert("Você é um idoso");
// }

// let peso = Number(prompt("Digite seu peso: ex 70.5 kg"));
// let altura = Number(prompt("Digite sua altura: ex 1.75")); 

// let imc = peso / (altura * altura);

// if (imc < 18.5) {
//     alert("Abaixo do peso");
// } else if (imc >= 18.5 && imc < 24.9) {
//     alert("Peso normal" + "Seu imc é:" + imc);
// } else if (imc >= 24.9 && imc < 29.9) { 
//     alert("Acima do peso" + "Seu imc é:" + imc);
// } else if (imc >= 29.9 && imc < 34.9) { 
//     alert("Obesidade grau 1" + "Seu imc é:" + imc );
// } else if (imc >= 34.9 && imc < 39.9) { 
//     alert("Obesidade grau 2" +  "Seu imc é:" + imc );
// } else if (imc >= 39.9) {                
//     alert("Obesidade grau 3" + "Seu imc é:" + imc);
// }

// let height = Number(prompt("Digite a sua altura(em metros)"));
// let weight = Number(prompt("Digite o seu peso(em quilogramas)"));

// let imc = weight / (height * height);
// imc = imc.toFixed(2);

// if(imc < 18.5){
//     alert("Abaixo do peso normal");
// }
// else if(imc >= 18.5 && imc <= 24.9){
//     alert("Peso normal");
// }
// else if(imc >= 25 && imc <= 29.9){
//     alert("Excesso de peso");
// }
// else if(imc >= 30 && imc <= 34.9){
//     alert("Obesidade classe 1")
// }
// else if(imc >= 35 && imc <= 39.9){
//     alert("Obesidade classe 2")
// }
// else if(imc >= 40){
//     alert("Obesidade classe 3")
// }


// let opcao = Number(prompt("Digite uma opção de 1 a 3"));
// switch (opcao) {
//     case 1:
//         console.log ("Domingo")
//         break;
//         case 2:
//             console.log ("Segunda")
//             break;
//             case 3:
//                 console.log ("Terça")
//                 break;
//                 case 4:
//                 console.log ("Quarta")
//                 break;
//                 case 5:
//                 console.log ("Quinta")
//                 break;
//                 case 6:
//                 console.log ("Sexta")
//                 break;
//                 case 7:
//                 console.log ("Sabado")
//                 break;
//                 default:
//                     console.log ("Opção Invalida")
//                     break;
// }

// let opcao = Number(prompt("Digite uma opção de 1 a 3"));
// switch (opcao) {
//     case 1:
//         alert ("Domingo")
//         break;
//         case 2:
//             alert ("Segunda")
//             break;
//             case 3:
//                 alert ("Terça")
//                 break;
//                 case 4:
//                 alert ("Quarta")
//                 break;
//                 case 5:
//                 alert ("Quinta")
//                 break;
//                 case 6:
//                 alert ("Sexta")
//                 break;
//                 case 7:
//                 alert ("Sabado")
//                 break;
//                 default:
//                     alert ("Opção Invalida")
//                     break;
// 


let height = Number(prompt("Digite a sua altura(em metros)"));
let weight = Number(prompt("Digite o seu peso(em quilogramas)"));


let imc = weight / (height * height);

switch (true) {
    case (imc < 18.5):
    
        alert("Abaixo do peso normal. Seu IMC é: " + imc.toFixed(2));
        break;

    case (imc >= 18.5 && imc <= 24.9):
        alert("Peso normal. Seu IMC é: " + imc.toFixed(2));
        break;

    case (imc >= 25 && imc <= 29.9):
        alert("Excesso de peso. Seu IMC é: " + imc.toFixed(2));
        break;

    case (imc >= 30 && imc <= 34.9):
        alert("Obesidade classe 1. Seu IMC é: " + imc.toFixed(2));
        break;

    case (imc >= 35 && imc <= 39.9):
        alert("Obesidade classe 2. Seu IMC é: " + imc.toFixed(2));
        break;

    case (imc >= 40):
        alert("Obesidade classe 3. Seu IMC é: " + imc.toFixed(2));
        break;

    default:
        alert("Valor inválido inserido.");
}
