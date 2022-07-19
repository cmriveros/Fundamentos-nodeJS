function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
                console.log('Hola, ' + nombre);
                resolve(nombre);
        }, 1500);
    });
   
}

function hablar(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function () {
            console.log('la la la la ');
           // resolve(nombre);
            reject('hay un error');
        }, 1000);
    }); 
}

function chau(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log('Chau,', nombre);
            resolve();
        }, 1000);
    });
}

//..

console.log('Iniciando el proceso');
hola('Carlos')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(chau)
    .then((nombre) => {
        console.log('Terminado el proceso');
    })
    .catch(error => {
        console.error('Ha habido un eror :(');
        console.error(error);
    })