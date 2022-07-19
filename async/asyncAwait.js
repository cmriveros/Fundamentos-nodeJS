async function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
                console.log('Hola, ' + nombre);
                resolve(nombre);
        }, 1500);
    });
   
}

async function hablar(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function () {
            console.log('la la la la ');
           // resolve(nombre);
            resolve('hay un error');
        }, 1000);
    }); 
}

async function chau(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log('Chau,', nombre);
            resolve();
        }, 1000);
    });
}

async function main() {
    let nombre = await hola('Carlos');
    await hablar();
    await hablar();
    await hablar();
    await chau(nombre);
    console.log('Termino todo');

}

console.log('Arrancamos todo');
main();
console.log('Va a ser la segunda instancia');