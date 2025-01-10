function merge(obj1, obj2){
    return {...obj1,...obj2}
}

console.log(merge({"1." : "banana"}, {"2." : "Apple", "3.": "Grapes"}));//{ '1.': 'banana', '2.': 'Apple', '3.': 'Grapes' }
