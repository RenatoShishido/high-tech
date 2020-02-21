function Clear() {
        document.getElementById('texto').value = "";
        contador = 0
}
const clear = document.getElementById('C');
clear.onclick = Clear;

function Historico(valor){
    document.hist.historico.value = valor;
}
var contador = 0
var contador2 = 0
function insert(num) {
    var saldo = document.calc.visor.value;
    document.calc.visor.value = saldo + num;
    if(num === '()'){
        document.calc.visor.value = saldo + '(';
        contador += 1
        console.log(contador)
        if( contador > 1){
            document.calc.visor.value = saldo + ')';
            contador = 0
            console.log(contador + 'ola')
        }
    }
    else if(num === '+/-'){
        document.calc.visor.value = saldo + '(-';
    }
    if(num === '='){
        Clear()
        let numeros = eval(saldo);
        document.calc.visor.value = numeros; 
        Historico(numeros);
    }
}
