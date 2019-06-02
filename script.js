function solucao(n1, n2) {
    if (document.getElementById('adição').checked) {
        var n1 = Number(document.getElementById('n1').value)
        var n2 = Number(document.getElementById('n2').value)
        var resposta = n1 + n2
        if (isNaN(resposta)){
            alert("A resposta não é um número ;-;")
        } else {
            document.getElementById('resposta').innerHTML = `O resultado da operação é ${resposta}.`
        }    
    } else if (document.getElementById('subtração').checked) {
        var n1 = Number(document.getElementById('n1').value)
        var n2 = Number(document.getElementById('n2').value)
        var resposta = n1 - n2
        if (isNaN(resposta)){
            alert("A resposta não é um número ;-;")
        } else {
            document.getElementById('resposta').innerHTML = `O resultado da operação é ${resposta}.`
        }  
    } else if (document.getElementById('multiplicação').checked) {
        var n1 = Number(document.getElementById('n1').value)
        var n2 = Number(document.getElementById('n2').value)
        var resposta = n1 * n2
        if (isNaN(resposta)){
            alert("A resposta não é um número ;-;")
        } else {
            document.getElementById('resposta').innerHTML = `O resultado da operação é ${resposta}.`
        }  
    } else if (document.getElementById('divisão').checked) {
        var n1 = Number(document.getElementById('n1').value)
        var n2 = Number(document.getElementById('n2').value)
        var resposta = n1 / n2
        if (isNaN(resposta)){
            alert("A resposta não é um número ;-;")
        } else {
            document.getElementById('resposta').innerHTML = `O resultado da operação é ${resposta}.`
        }
    } else {
        alert("Tem algo errado, verifique se você selecionou a operação! e.e")
    }
}
