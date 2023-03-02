function indiceImpar(vetor1,vetor2){

    for(let i = 0; i < vetor1.length; i++){
      if(i%2 == 1){
        vetor2[i] = vetor1[i]
      }
      
    }
        return vetor2;
  }

  
// ou pode ser feito desse jeito: 


//   function indiceImpar(a, b) {
//     for (let i = 1; i < a.length; i = i + 2) {
//         b[i] = a[i]
//     }
// }

  module.exports = indiceImpar;