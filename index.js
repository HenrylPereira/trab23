import { quickSort } from "./src/quicksort.js";
import { bubbleSort } from "./src/bubleSort.js";
import { insertionSort } from "./src/insertSort.js";
import { merge } from "./src/mergeSort.js";
import { selectionSort } from "./src/selectionSort.js";

const random = [];
const crescente = [];
const decrescente = [];

for (let i = 0; i < 100000; i++) {
    random.push(Math.floor(Math.random(1,1000)*100));
}

for (let i = 0; i < 100000; i++) {
    crescente.push(i);
}

for (let i = 100000; i > 0; i--) {
    decrescente.push(i);
}

let tempo = 0;

async function quickSortAsync(array, low, high) {
    const start = performance.now();
    await new Promise((resolve) => {
        for (let i = 0; i < 10; i++) {
            quickSort(array, low, high);
        }
        
        resolve();
    });
    const end = performance.now();
    tempo += (end - start);
}

async function demaisAsync(array, func) {
    const start = performance.now();
    await new Promise((resolve) => {
        for (let i = 0; i < 10; i++) {
            func(array);
        }
        resolve();
    });
    const end = performance.now();
    tempo += (end - start);
}

async function main(func, array, name, funcMain) {
    if(func.name === 'quickSortAsync'){
        await func(array, 0, array.length - 1);
    }else{
        await func(array, funcMain);
    }
    
    console.log(`${funcMain.name}, ${name} - tempo:, ${tempo}`);
}


// SÓ RODA COM ARRAYS MENORES QUE 100.000.
main(quickSortAsync, random, 'random', quickSort);
main(quickSortAsync, crescente, 'crescente', quickSort);
main(quickSortAsync, decrescente, 'decrescente', quickSort);


main(demaisAsync, random, 'random', bubbleSort);
main(demaisAsync, crescente, 'crescente', bubbleSort);
main(demaisAsync, decrescente, 'decrescente', bubbleSort);

main(demaisAsync, random, 'random', insertionSort);
main(demaisAsync, crescente, 'crescente', insertionSort);
main(demaisAsync, decrescente, 'decrescente', insertionSort);

main(demaisAsync, random, 'random', merge);
main(demaisAsync, crescente, 'crescente', merge);
main(demaisAsync, decrescente, 'decrescente', merge);

main(demaisAsync, random, 'random', selectionSort);
main(demaisAsync, crescente, 'crescente', selectionSort);
main(demaisAsync, decrescente, 'decrescente', selectionSort);
