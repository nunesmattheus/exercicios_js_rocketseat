function converte(temp){
   const celsiusExists = temp.toUpperCase().includes('C')
   const fahrenheitExists = temp.toUpperCase().includes('F')

   if(!celsiusExists && !fahrenheitExists){
       throw new Error('Grau não identificado')
   }   

   // fluxo ideal
   let novoTemp = Number(temp.toUpperCase().replace("F", ""))
   let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
   let sinal = 'C'

   if(celsiusExists){
    novoTemp = Number(temp.toUpperCase().replace("C", ""))
    formula = (celsius) => celsius * 9/5 + 32
    sinal = 'F'
   }

   return formula(novoTemp) + sinal
}

try{
    console.log(converte('212F'))
    console.log(converte('100C'))
    //converte('50Z')
} catch (error){
    console.log(error)
}

