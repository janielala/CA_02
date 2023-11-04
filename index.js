const sum = (num)=> {
    let array = []
    let s = 0
    for (let i = 0; i<=num; i++) {
        if (i%2 === 0) {
            array.push(i)
            s = i+s ;
        }
    }
    console.log(array);
    return s
}
console.log(`sum is ${sum(6)}`)