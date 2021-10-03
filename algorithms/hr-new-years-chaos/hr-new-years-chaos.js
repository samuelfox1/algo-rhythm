const q1 = [1, 2, 5, 3, 4, 7, 8, 6]
const q2 = [2, 1, 5, 3, 4]
const q3 = [3, 2, 1, 4, 5]

const arr = q1



const numberOfBribes = (q) => {

    // let bribeCount = 0
    // let temp1 = arr[0]
    // let temp2 = arr[1]
    // let temp3 = arr[2]

    // const rollTempssBackOne = (idx) => {
    //     temp1 = arr[idx + 1]
    //     temp2 = arr[idx + 2]
    //     temp3 = arr[idx + 3]
    // }

    // const swapPositions = (idx1, idx2) => {

    //     const temp = arr[idx1]
    //     arr[idx1] = arr[idx2]
    //     arr[idx2] = temp
    // }


    // for (let i = 0; i < q.length; i++) {
    //     console.log(i, q)
    //     switch (temp1) {
    //         case i + 1:
    //             console.log(`${temp1} is home`)

    //             break;

    //         case i + 2:
    //             console.log(`${temp1} has bribed 1 person`)
    //             swapPositions(i, i + 1)
    //             bribeCount += 1

    //             break;

    //         case i + 3:
    //             console.log(`${temp1} has bribed 2 people`)
    //             swapPositions(i, i + 1)
    //             swapPositions(i + 1, i + 2)
    //             bribeCount += 2

    //             break;

    //         default:
    //             console.log('Too chaotic')
    //             return
    //     }
    //     rollTempssBackOne(i)
    //     console.log(`bribeCount: ${bribeCount}`)
    //     console.log(`\n`)
    // }

    // return bribeCount
    // return 'Hello World'
}

// const totalBribes = numberOfBribes(arr)
// totalBribes ? console.log(`totalBribes: ${totalBribes}`) : null

module.exports = numberOfBribes