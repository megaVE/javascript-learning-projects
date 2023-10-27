const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const semPares = []

for(let x = 0; x < arr.length; x++){
    if(arr[x] % 2 !== 0)
        semPares.push(arr[x]);
}

console.log({semPares});
