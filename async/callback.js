function hola(nombre, miCallback) {
    setTimeout(function () {
           console.log('Hola, ' + nombre);
           miCallback(nombre); 
    }, 1500);
}

function chau(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Chau,', nombre);
        otroCallback();
    }, 1000);
}

    console.log('Iniciando proceso...');
    hola('Carlos', function (nombre) {
        chau(nombre, function() {
            console.log('Terminando proceso...');
        });
    });

    // hola('Carlos', function() {});
    // chau('Carlos', function () {});