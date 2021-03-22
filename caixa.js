const caixa = {
    receitas: [2500, 3200, 250.43, 360.45],
    despesas: [320.34, 128.45, 176.87, 1450.00],    
}

function soma(array){
    let total = 0;

    for(let i = 0; i < array.length; i++){
        total += array[i]
    }
    
    return total
}

function calculo(){
    const calculoReceitas = soma(caixa.receitas)
    const calculoDespesas = soma(caixa.despesas)
    const result = calculoReceitas - calculoDespesas

    const itsOK = result >= 0

    let balanceText = "negativo"

    if(itsOK){
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: ${result}`)
}

calculo()