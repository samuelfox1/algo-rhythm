
function pairsOfSocks(arr) {
    if (typeof arr === 'string' ||
        typeof arr === 'number' ||
        arr.length < 2) return null // if arr is a string, number, or not long enough

    let sockPile = arr // copy of data source
    let numberOfmatches = 0 //counter for matches
    // console.log(arr)

    for (let i = 0; i < sockPile.length; i++) { // select sock1
        if (i + 1 === sockPile.length) return numberOfmatches // if there is not a sock2
        let sock1 = sockPile[i] // easier to read

        for (let j = i + 1; j < sockPile.length; j++) { // search for a match to sock 1
            let sock2 = sockPile[j] // easier to read

            if (sock1 === sock2) {  // if a match is found
                numberOfmatches++ // increment counter
                // console.log(sock1, sock2)
                sockPile.splice(j, 1) // remove sock 2 from array FIRST to remove right to left
                sockPile.splice(i, 1) // remove sock 1 from array
                i-- // roll i back to componsate for mutation
                // console.log(sockPile)
                if (i + 1 === sockPile.length) return numberOfmatches // check number of socks remaining
                break // exit loop
            }
        }
    }
}

module.exports = pairsOfSocks