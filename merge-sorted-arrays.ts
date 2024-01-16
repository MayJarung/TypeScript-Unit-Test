// src/merge-sorted-arrays.ts

export function merge(collection1: number[], collection2: number[]): number[] {
    let index1 = 0;
    let index2 = 0;
    let result: number[] = [];
  
    while (index1 < collection1.length && index2 < collection2.length) {
      if (collection1[index1] < collection2[index2]) {
        result.push(collection1[index1]);
        index1++;
      } else {
        result.push(collection2[index2]);
        index2++;
      }
    }
  
    while (index1 < collection1.length) {
      result.push(collection1[index1]);
      index1++;
    }
  
    while (index2 < collection2.length) {
      result.push(collection2[index2]);
      index2++;
    }
  
    return result;
  }
  