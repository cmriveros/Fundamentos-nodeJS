function otraFuncion() {
    serompe();
}

function seRompe() {
    return 3 + z;

}
function seRompeAsyncrona() {
    setTimeout(function (){
        return 3 + z;
    })
}
try {
    seRompe();  
} catch(err) {
    console.error('Uy algo se rompio...');
    console.error(err.message);
}
console.log('esto va al final');