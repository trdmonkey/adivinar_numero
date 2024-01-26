/* let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un n�mero por favor:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert('Acertaste el n�mero');
} */

// alert('Hola Mundo');
/* let random = Math.random() + 1;
let r = Math.ceil(random);
// console.log(random);
let n = prompt('un num: ');

if(n != r) {
    alert('mal.');
} else {
    alert('BIENNNN');
}

alert(r); */

// let num = prompt('Ingrese un numero: ');

let numeroSecreto = Math.floor(Math.random()*10+1); // SI SE QUIERE AUMENTAR EL NUMERO A ADIVINAR, SE MULTIPLICA POR 100 O POR 1000
console.log(numeroSecreto);
let numeroUsuario;
let x = 1;
let veces = 'intento';
let limite = parseInt(prompt('INGRESA LA CANTIDAD DE INTENTOS A REALIZAR: '));
while (numeroUsuario != numeroSecreto) {
    console.log(numeroUsuario);
    numeroUsuario = prompt('Digita un numero: ');

    if(numeroUsuario == numeroSecreto) {
        alert(`ACERTASTE!! con ${x} ${x==1?'intento':'intentos'}`);
        
    } else {
        // alert('Fallaste');
        if(numeroUsuario > numeroSecreto) {
            alert('es menor');
        } else {
            alert('es mayor');
        }
        // x = x + 1;
        // x += 1;
        x++;
        veces = 'intentos';
        if(x > limite) {
            alert('Limite de intentos permitido!! Adios.');
            break;
        }
    }
    
}

