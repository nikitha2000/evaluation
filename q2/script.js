function uniqueValues(arrs) {
    let uniquearray = [];
    for(let i of arrs) {
        if(uniquearray.indexOf(i) === -1) {

            uniquearray.push(i)
            
        }
    }
    console.log(uniquearray)
}



let arr1 = [1,2,2,22,3,5,8,3,1, "Orange", "Apple", "Orange"]
console.log(arr1)
uniqueValues(arr1);

