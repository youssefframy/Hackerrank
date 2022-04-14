function reverseString(s) {
    try{
        if(typeof s === 'string'){
        let array = s.split("");
        let reversedArray = array.reverse();
        s = reversedArray.join("");
        } else throw Error
    } catch(err){
        console.log(`s.split is not a function`)
    } finally{
        console.log(s)
    }  
}