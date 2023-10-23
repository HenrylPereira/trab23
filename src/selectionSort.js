// Função de ordenação Selection Sort
export function selectionSort(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
  
      // Encontrar o índice do menor elemento restante no array não ordenado
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      // Trocar o elemento atual com o menor elemento encontrado
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
  
    return arr;
  }
  
  // Exemplo de uso
  const array = [38, 27, 43, 3, 9, 82, 10];
  const sortedArray = selectionSort(array);
  console.log("Array ordenado:", sortedArray);
  