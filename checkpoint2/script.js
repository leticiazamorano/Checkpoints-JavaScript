let pontosA = 0;
let pontosB = 0;

function alterarPlacar(time, acao) {

    
    if (time === 'timeA') {
        if (acao === 'somar') {
            pontosA = pontosA + 1;
        } else if (acao === 'subtrair' && pontosA > 0) {
            pontosA = pontosA - 1;
        }
        
        document.getElementById('placarA').innerText = pontosA;
    }

    
    else if (time === 'timeB') {
        if (acao === 'somar') {
            pontosB = pontosB + 1;
        } else if (acao === 'subtrair' && pontosB > 0) {
            pontosB = pontosB - 1;
        }
       
        document.getElementById('placarB').innerText = pontosB;
    }
}