function hola(nombre, miCallback) {
    setTimeout(function () {
           console.log('Hola, ' + nombre);
           miCallback(nombre);
    }, 1500);
}

function hablar(callbackHablar) {
    setTimeout(function () {
        console.log('la la la la ');
        callbackHablar()
    }, 1000);
}

function chau(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Chau,', nombre);
        otroCallback();
    }, 1000);
}

    function conversacion(nombre, veces, callback) {
        if (veces > 0) {
            hablar(function() {
                conversacion(nombre, --veces, callback);
            })
        } else {
            chau(nombre, callback);
        }
    }

    //..
    console.log('Iniciando proceso...');
    hola('Carlos', function (nombre){
        conversacion(nombre, 3, function() {
            console.log('Proceso terminado');
        });
    });


    // hola('Carlos', function (nombre) {
    //     hablar(function (){
    //         hablar(function (){
    //             hablar(function (){
    //                 hablar(function (){
    //                     hablar(function (){
    //                         hablar(function (){
    //                             hablar(function (){
    //                                 hablar(function (){
    //                                     chau(nombre, function() {
    //                                         console.log('Terminando proceso...');
    //                                     });
    //                                 });
    //                             });
    //                         });
    //                     });
    //                 });
    //             });
    //         });
    //     });
    // });

