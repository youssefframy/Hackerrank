/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    for(let i=0; i < s.length; i++){
        if(['a', 'e', 'i', 'o', 'u'].indexOf(s[i].toLowerCase()) !== -1){
            console.log(s[i]);
        }
    }
    for(let i=0; i < s.length; i++){
        if (['a', 'e', 'i', 'o', 'u'].indexOf(s[i].toLowerCase()) === -1){
            console.log(s[i]);
        }
    }
}

vowelsAndConsonants('helloo')
