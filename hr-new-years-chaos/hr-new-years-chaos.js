const peopleInLineArr = [4, 2, 1, 5, 3]
// const peopleInLineArr = [1, 2, 3, 4, 5]

const numberOfBribes = (q) => {

    const maxNumberOfBribes = 2
    const bribeRecords = {}

    const personIsInStaringPosition = (personId, spotId) => {
        spotId++
        console.log(`personId is ${personId}, spotId is ${spotId}: ${personId === spotId} `)
        return personId === spotId
    }

    const recordBribe = (person) => {
        let existingBribes = bribeRecords[person]
        bribeRecords[person] = existingBribes ? existingBribes + 1 : 1
    }

    const getNumberOfBribes = (person) => bribeRecords[person]

    const returnPersonToStartingPosition = (i) => {
        const personToReturnHome = q[i]
        const copyOfQ = [...q]

        while (!personIsInStaringPosition(personToReturnHome, i)) {
            // swap spots in line
            copyOfQ[i] = copyOfQ[i + 1]
            copyOfQ[i + 1] = personToReturnHome
            recordBribe(personToReturnHome)
            i++
            console.log('data after swap', copyOfQ)
        }
        q = [...copyOfQ]
    }

    for (let i = 0; i < q.length; i++) {
        console.log('at index', i)
        const correctPosition = personIsInStaringPosition(q[i], i)
        if (correctPosition) continue // person is in the spot they started
        returnPersonToStartingPosition(i)

        if (getNumberOfBribes(q[i]) > maxNumberOfBribes) {
            console.log('Too Chaotic')
            break
        }
        i--
    }

    console.log(q)
    console.log(bribeRecords)
}

numberOfBribes(peopleInLineArr)

module.exports = numberOfBribes