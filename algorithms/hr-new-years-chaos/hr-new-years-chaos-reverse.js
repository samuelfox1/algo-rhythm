const q1 = [1, 2, 5, 3, 4, 7, 8, 6]
const q2 = [2, 1, 5, 3, 4]
const q3 = [3, 2, 1, 4, 5]

const arr = q1

const numberOfBribes = (q) => {
    let bribeCount = 0
    let temp3 = q[q.length - 3]
    let temp2 = q[q.length - 2]
    let temp1 = q[q.length - 1]

    for (let i = q.length - 1; i >= 0; i--) {
        console.log(i, q, '\n', temp1)

        switch (temp1) {
            case i + 1:
                console.log(`${temp1} is home`)

                break;

            case i + 2:
                console.log(`${temp1} has bribed 1 person`)
                bribeCount += 1

                break;

            case i + 3:
                console.log(`${temp1} has bribed 2 people`)
                bribeCount += 2

                break;

            default:
                // console.log('Too chaotic')
                break
        }
        console.log(`bribeCount: ${bribeCount}`)
        console.log(`\n`)
    }

    return bribeCount
}
const totalBribes = numberOfBribes(arr)
// totalBribes ? console.log(`totalBribes: ${totalBribes}`) : null

module.exports = numberOfBribes