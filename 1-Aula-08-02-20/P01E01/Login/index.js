function Clear() {
    document.getElementById('email').value = "";
    document.getElementById('senha').value = "";
}
const clear = document.getElementById('clear');
clear.onclick = Clear;