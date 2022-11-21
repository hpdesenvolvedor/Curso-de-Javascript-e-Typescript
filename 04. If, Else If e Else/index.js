/* IF, ELSE 
Entre 00h - 11h - Bom dia
Entre 12h - 17h - Boa tarde
Entre 18h - 23h - Boa noite
*/

// Sempre que utilizo a palavra else, preciso do if antes
// Eu posso ter vários else if na checagem
// Só posso ter um else na checagem (final)

const hora = 25;

if (hora >= 0 && hora <= 11){
    console.log('Bom dia')
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde')
} else if ( hora >= 18 && hora <= 23) {
    console.log('Boa noite')
} else {
    console.log('Olá')
}

