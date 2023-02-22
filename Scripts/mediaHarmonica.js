function mediaHarmonica(mat1,mat2,media) {
    resultado = (2*(mat1*mat2)) / (mat1+mat2);
  
      if (resultado < media) {
      return false;
      } else {
      return true;
    }
    
  }

module.exports = mediaHarmonica;