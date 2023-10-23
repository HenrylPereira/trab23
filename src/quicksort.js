// Função de partição para o algoritmo Quick Sort
export function partition(arr, low, high) {
    const pivot = arr[high]; // Escolhendo o último elemento como pivô
    let i = low - 1;
  
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        // Trocar arr[i] e arr[j]
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  
    // Trocar arr[i + 1] e arr[high] (o pivô)
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
  }
  
  // Função de ordenação Quick Sort
  export function quickSort(arr, low, high) {
    if (low < high) {
      const pivotIndex = partition(arr, low, high);
  
      // Ordenar os elementos antes e depois da partição
      quickSort(arr, low, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
  }