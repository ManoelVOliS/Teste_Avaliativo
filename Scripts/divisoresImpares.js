function divisoresImpares(num){
  cont = 0;

  for(let i = 0; i < num; i++){
    if((i%2 == 1) && (num%i == 0)){
      cont++;
    }
  }
  return cont;
}

module.exports = divisoresImpares;