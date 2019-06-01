var n1 = 0
var n2 = 0

function solucao(n1, n2, ) {
    if (document.getElementById('adição').checked) {
        var n1 = Number(document.getElementById('n1').value)
        var n2 = Number(document.getElementById('n2').value)
        var resposta = n1 + n2;
        if (isNaN(resposta)){
            alert("Sabe usar número não, é? >:C")
        } else {
            document.getElementById('resposta').innerHTML = `O resultado da operação é ${resposta} `
        }    
    } else if (document.getElementById('subtração').checked) {
        var n1 = Number(document.getElementById('n1').value)
        var n2 = Number(document.getElementById('n2').value)
        var resposta = n1 - n2;if (isNaN(resposta)){
            alert("Sabe usar número não, é? >:C")
        } else {
            document.getElementById('resposta').innerHTML = `O resultado da operação é ${resposta} `
        }  
    } else if (document.getElementById('multiplicação').checked) {
        var n1 = Number(document.getElementById('n1').value)
        var n2 = Number(document.getElementById('n2').value)
        var resposta = n1 * n2;if (isNaN(resposta)){
            alert("Sabe usar número não, é? >:C")
        } else {
            document.getElementById('resposta').innerHTML = `O resultado da operação é ${resposta} `
        }  
    } else if (document.getElementById('divisão').checked) {
        var n1 = Number(document.getElementById('n1').value)
        var n2 = Number(document.getElementById('n2').value)
        var resposta = n1 / n2;if (isNaN(resposta)){
            alert("Sabe usar número não, é? >:C")
        } else {
            document.getElementById('resposta').innerHTML = `O resultado da operação é ${resposta} `
        }  
    } else {
        alert("Tu não colocou a operação, anta!")
    }
}


