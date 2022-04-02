function aoChange(input){
    /*
    if (typeof input === 'Object'){
        console.log(Object.values(input))
        return Object.values(input)
        
    }
    else{
        //let n = input.slice();
        return input;
    }
    */
    return Object.values(input)

}

function myEach(collection,cb){
    let changed = aoChange(collection)
    //let checked = Object.values(collection)
   // console.log(checked)
    for(let i=0;i< changed.length;i++){
        cb(changed[i]);
    }
    return collection;
}

function myMap(collection,cb){
    let changed = aoChange(collection)
    let n =[];
     for(let i=0;i< changed.length;i++){
      n.push(cb(changed[i]));
    }
    return n;
}
function myReduce(collection,callback,acc){
    let changed = aoChange(collection)
    if (!acc) {
        acc = changed[0];
        changed = changed.slice(1);
      }
    
    for(let i=0; i<changed.length; i++){
        acc = callback(acc, changed[i], changed);
    }
    return acc

}
function myFind(collection,predicate){
    let changed = aoChange(collection)
    for(let i =0; i<changed.length; i++){
        if(predicate(changed[i])){
            return changed[i]
        }
    }
    return undefined;
}
function myFilter(collection,predicate){
    let changed = aoChange(collection)
    let ar = [];
    for(let i=0;i<changed.length;i++){
        if(predicate(changed[i])){
            ar.push(changed[i])
        }
    }
    return ar;
}
function mySize(collection){
    return aoChange(collection).length
}
function myFirst(array,n=false){
    if(n){
       return array.slice(0,n)
    }
    else{
        return array[0]
    }
}
function myLast(array,n=false){
    if(n){
        return array.slice(array.length-n,array.length)
    }
    else{
        return array[array.length-1]
    }
}
function myKeys(o){
    return Object.keys(o)
}
function myValues(o){
    return Object.values(o)
}
