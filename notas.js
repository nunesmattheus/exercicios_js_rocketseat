function notas(nota){
   if(nota >= 90){
       console.log(`${nota}: A`)
   } else if(nota >= 80 && nota < 90){
       console.log(`${nota}: B`)
   } else if(nota >= 70 && nota < 80){
       console.log(`${nota}: C`)
   }else if(nota >= 60 && nota < 70){
       console.log(`${nota}: D`)
   } else{
       console.log(`${nota}: E`)
   }
}

notas(84)