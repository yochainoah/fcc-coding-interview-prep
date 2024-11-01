//a function that takes two sorted array and return one sorted array
function merger(arr1,arr2){
    let i = 0;
    let j = 0;
    let mergedArray = [];
    while(i<arr1.length && i<arr2.length){
      if(arr1[i]>arr2[j]){
        mergedArray.push(arr2[j]);
        j++;
      } else{
        mergedArray.push(arr1[i]);
        i++;
      }
    } 
    while(i<arr1.length){
      mergedArray.push(arr1[i]);
      i++
    }
    while(j<arr2.length){
      mergedArray.push(arr2[j])
      j++;
    }
    return mergedArray;
}
  
function mergeSort(array) {
    if(array.length == 1){
      return array;
    }
    let middle = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0,middle));
    let right = mergeSort(array.slice(middle))
    return merger(left, right);
    // Only change code above this line
  }
  console.log(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))