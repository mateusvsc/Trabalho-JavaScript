let numero1 = 158
let numero2 = 29
let operacao = "*"

switch (operacao) {
  case '/':
    console.log(numero1/numero2)
    break;
    
  case '+':
    console.log(numero1+numero2)
    break;
    
  case '-':
    console.log(numero1-numero2)
    break;
  
  default:
    console.log("Operação inválida");
}