/* Assim que encontra o verdadeiro ele encerra se tiver 
código fora do if e else ele inicia separadamente.*/

const numero = 10;

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.');
}else if (numero >= 6 && numero <= 8){
    console.log('O número está entre 6 e 8.');
}else if (numero >= 9 && numero <= 11){         //Verdadeiro
    console.log('O número está entre 9 e 11.');
} else {
    console.log('O número não está entre 0 e 11');
}

console.log('...Aqui vai outro código') //Aqui só mostra depois de ter feito os de cima