'use strict';

const n = 15
// const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
const ar = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]

// function sockMerchant(n, ar) {
//     let numberOfmatches = 0

//     for (let i = 0; i < ar.length; i++) {
//         if (i === ar.length - 1) return numberOfmatches
//         let searching = true
//         let sock1 = ar[i]

//         for (let j = i + 1; j < ar.length; j++) {
//             let sock2 = ar[j]

//             if (searching && sock1 === sock2) {
//                 numberOfmatches++
//                 ar.splice(j, 1)
//                 searching = false
//                 console.log(sock1, sock2)
//                 console.log(ar)
//             }
//         }
//     }
// }
// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let numberOfmatches = 0
    console.log(ar)

    for (let i = 0; i < ar.length; i++) {
        if (i + 1 === n) return numberOfmatches
        let sock1 = ar[i]
        let searching = true

        for (let j = i + 1; j < ar.length; j++) {
            let sock2 = ar[j]

            if (searching && sock1 === sock2) {
                numberOfmatches++
                n--
                console.log(sock1, sock2)
                ar.splice(j, 1) // remove sock 2 from array
                console.log(ar)
                searching = false
            }
        }
        console.log(i, '==========')
    }
}



console.log(sockMerchant(n, ar))