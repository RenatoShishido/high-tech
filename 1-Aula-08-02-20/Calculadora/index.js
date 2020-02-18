function Clear() {
    if(document.calc.visor.value === '0'){
        document.getElementById('texto').value = "";
        array = [];
    }else {
        document.getElementById('texto').value = "";
        array = [];
        document.calc.visor.value = '0';
    }
}
const clear = document.getElementById('C');
clear.onclick = Clear;
var array = [];
var array2 = [];

function pegavalor() {
    const valor = document.calc.visor.value;
    array.push(valor);
    console.log(array);
    document.getElementById('texto').value = "";
}
function Historico(){
    document.getElementById('historico').value = array[0] + array[1] + array[2];
}

function insert(num) {
    if(num === '-'){
        pegavalor();
        array.push('-');
    }else if(num === '/'){
        pegavalor();
        array.push('/');
    }else if(num === 'X'){
        pegavalor();
        array.push('X');
    }else if(num === '+'){
        pegavalor();
        array.push('+');
    }else if(num == '%'){
        pegavalor();
        array.push('%');
    }
    else if( num === '='){
        const valor = document.calc.visor.value;
        array.push(valor);
        Historico();
            if(array[1] === '+'){
                let total = parseFloat(array[0]) + parseFloat(array[2]);
                document.getElementById('texto').value = total
                array = [];
                
                console.log(array);
            }else if(array[1] === 'X'){
                let total = parseFloat(array[0]) * parseFloat(array[2]);
                document.getElementById('texto').value = total
                array = [];
               
            }else if(array[1] === '-'){
                let total = parseFloat(array[0]) - parseFloat(array[2]);
                document.getElementById('texto').value = total
                array = [];
                array.push(total);
               
            }else if(array[1] === '/'){
                let total = parseFloat(array[0]) / parseFloat(array[2]);
                document.getElementById('texto').value = total
                array = [];
            }else if(array[1] === '%'){
                let total = (parseFloat(array[0]) * parseFloat(array[2])) / 100;
                document.getElementById('texto').value = total
                array = [];
            }
    }
    else{
        if(document.calc.visor.value === '0'){
            Clear();
            var salvo = document.calc.visor.value;
            document.calc.visor.value = salvo + num;
        }else{
            var salvo = document.calc.visor.value;
            document.calc.visor.value = salvo + num;
        }
    }



    
}

function valor(num){
    array.push(num);
    console.log(array);
    if(num === '='){
        if(array[1] === '+'){
            let total = array[0] + array[2];
            document.getElementById('texto').value = total;
            array = [];
            array.push(total);
            console.log(array);
        }else if(array[1] === 'X'){
            let total = array[0] * array[2];
            document.getElementById('texto').value = total;
            array = [];
            array.push(total);
            console.log(array);
        }else if(array[1] === '-'){
            let total = array[0] - array[2];
            document.getElementById('texto').value = total;
            array = [];
            array.push(total);
            console.log(array);
        }else if(array[1] === '/'){
            let total = array[0] / array[2];
            document.getElementById('texto').value = total;
            array = [];
            array.push(total);
            console.log(array);
        }
    }else{
        document.getElementById('texto').value = num;
    }
}

