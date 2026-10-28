function multiplicar() {
    let n1 = Number(document.getElementById('n1').value);
    let n2 = Number(document.getElementById('n2').value);

    let resultado = n1 * n2;
    document.getElementById('resultado').innerText = 'Valor a Pagar: ' + resultado;
}

function limpar() {
    document.getElementById('n1').value = '';
    document.getElementById('n2').value = '';
    document.getElementById('resultado').innerText = 'Valor a Pagar: ';
     document.getElementById('n1').focus(); }