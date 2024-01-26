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

let numeroSecreto = 6;
// alert('Hola Mundo');
let numeroUsuario;
let x = 1;
let veces = 'intento';
while (numeroUsuario != numeroSecreto) {
    console.log(numeroUsuario);
    numeroUsuario = prompt('Digita un numero: ');

    if(numeroUsuario == numeroSecreto) {
        alert(`ACERTASTE!! con ${x} ${veces}`);
        
    } else {
        // alert('Fallaste');
        if(numeroUsuario > numeroSecreto) {
            alert('es menor');
        } else {
            alert('es mayor');
        }
        x++;
        veces = 'intentos';
    }
    
}

