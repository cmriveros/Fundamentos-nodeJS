const { exec, spawn } = require('child_process');

// exec('node modulos/consola.js', (err, stdout, sterr) => {
//     if(err) {
//         console.error(err);
//         return false;        
//     }

//     console.log(stdout);
// })

let proceso = spawn('dir')

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function (dato){
    console.log('esta muerto?');
    console.log(process.killed);
    console.log(dato.toString());
});

proceso.on('exit', function(){
    console.log('el preceso termino');
    console.log(proceso.killed);
})