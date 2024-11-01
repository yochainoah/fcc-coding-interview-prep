function insertionSort(array) {
    for(let i = 1;i<array.length;i++){
        for(let j = i-1;j>=0;j--){
            if(array[i] <= array[j]){
                if(j === 0){
                    const temp1 = array[i];
                    array.splice(i,1);
                    array.splice(0,0,temp1);
                }
            }
            else if(array[i]>array[j]){
                const temp2 = array[i];
                array.splice(i,1);
                array.splice(j+1,0,temp2);
                break;
            }
        }
    }
    return array;
    
}