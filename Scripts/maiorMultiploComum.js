function MDC(num1,num2,num3){
    rep = 0
    for(let i = 0; i < num3/2; i++){
      if(num1%i == 0 && num2%i == 0 && num3%i ==0){
        rep = i
      }
    }
    return rep
  }

module.exports = MDC;