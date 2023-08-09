function encontrarIndicesMaiorEMenor(array) {
    let indiceMaior = 0;
    let indiceMenor = 0;
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] > array[indiceMaior]) {
        indiceMaior = i;
      }
  
      if (array[i] < array[indiceMenor]) {
        indiceMenor = i;
      }
    }
  
    return { indiceMaior, indiceMenor };
  }
  
  const numeros = [15, 8, 23, 7, 40, 12];
  const { indiceMaior, indiceMenor } = encontrarIndicesMaiorEMenor(numeros);
  
  console.log(`O maior valor está no índice ${indiceMaior}`);
  console.log(`O menor valor está no índice ${indiceMenor}`);
  