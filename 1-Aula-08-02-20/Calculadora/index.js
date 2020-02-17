

function Clear() {
    document.getElementById('texto').value = "";
    array = [];
}
const clear = document.getElementById('C');
clear.onclick = Clear;
var array = [];
function insert(num){
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

