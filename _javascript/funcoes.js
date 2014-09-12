
function calc_total()
{
    var tipo = document.getElementById('cTipo').value;

    if ((tipo == "Pizza Tracional") ||(tipo == "Pizza Parallax")||(tipo == "Pizza de Cogumelo") ||(tipo == "Pizza Margherita") ){
        var preco = 1000.00;
        var qtd = parseInt(document.getElementById('cQtd').value);
        tot = qtd * preco;
        document.getElementById('cPrec').value = preco;
        document.getElementById('cTot').value = tot;
    }
    else if((tipo == "Pizza Tutto Italia") ||(tipo == "Pizza Doce")){
        var preco = 1500.00;
        var qtd = parseInt(document.getElementById('cQtd').value);
        tot = qtd * preco;
        document.getElementById('cPrec').value = preco;
        document.getElementById('cTot').value = tot;
    }

    else if(tipo == "Pizza Acebolada"){
        var preco = 2000.00;
        var qtd = parseInt(document.getElementById('cQtd').value);
        tot = qtd * preco;
        document.getElementById('cPrec').value = preco;
        document.getElementById('cTot').value = tot;
    }

    else{
        var preco = 3000.00;
        var qtd = parseInt(document.getElementById('cQtd').value);
        tot = qtd * preco;
        document.getElementById('cPrec').value = preco;
        document.getElementById('cTot').value = tot;
    }
}