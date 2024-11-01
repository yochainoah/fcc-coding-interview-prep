function enqueue(elem) {
    let collection = [['kitten', 3], ['dog', 2], ['rabbit', 2],['human', 1],];
    let index = 0;
    for(let i = 0; i < collection.length ;i++){
        if(collection[i][1]>=elem[1]){
            continue;
        }
        else {
            index = i;
            break;
        }
    }
    collection.splice(index,0,elem)
    console.log(collection);
}
enqueue(['fox',2])

