//  find the longest unique substring

const _string = 'ababcabcdabcdefg'
const string = _string.repeat(1)
// const string = 1

/*
given the above string
return 'abcd'

       |  |
aababcaabcd

edge cases
datatype  === 'string'
length > 0

variables
let pLeft  // init to 0
let pRight // init to 1
let currentSubstring // init to string[pLeft]
let longestSubstring // init to currentSubstring

is pRight > string.length
    yes:
        is pLeft === pRight
            yes:
                increment pLeft
                increment pRight
                update currentSubstring
                check again
            no :
                continue

        is pRight found in currentSubstring
            yes:
                increment pLeft
                update currentSubstring
                check again
                (improvement: find the problem index and set this to pLeft)
            no :
                increment pRight
                update currentSubstring
                    is currentSubstring longer then longestSubstring 
                        yes:
                            update longestSubstring
                        no: 
                            continue
                check again

    no: return longestSubstring
*/



// ~ ~ ~ ~ ~ ~ ~ ~ WHILE LOOP ~ ~ ~ ~ ~ ~ ~ ~ ~  ~
// const findLongestSubstring = (string) => {
//     if (typeof string !== 'string') throw new Error('must provide a string')
//     if (string.length === 1) return string

//     let pLeft = 0
//     let pRight = 1
//     let currentSubstring = string[pLeft]
//     let longestSubstring = currentSubstring

//     const updateCurrentSubstring = () => {
//         currentSubstring = string.substring(pLeft, pRight)
//     }

//     const twoCharactersNextToEachOther = (pRightCharacter) => {
//         const pointersTogether = pLeft === pRight - 1
//         const sameCharacters = string[pLeft] === pRightCharacter
//         return (pointersTogether && sameCharacters)
//     }

//     const advanceWindow = () => {
//         pLeft++
//         pRight++
//         updateCurrentSubstring()
//     }

//     const collapseWindow = () => {
//         pLeft++
//         updateCurrentSubstring()
//     }
//     const expandWindow = () => {
//         pRight++
//         updateCurrentSubstring()
//         // is currentSubstring longer then longestSubstring 
//         if (currentSubstring.length > longestSubstring.length) {
//             longestSubstring = currentSubstring
//         }
//     }
//     let loopCount = 0

//     while (pRight < string.length) {
//         console.log({
//             loopCount,
//             string,
//             stringLength: string.length,
//             pLeft,
//             pRight,
//             currentSubstring,
//             longestSubstring,
//         })
//         loopCount++
//         const pRightCharacter = string[pRight]

//         if (twoCharactersNextToEachOther(pRightCharacter)) advanceWindow()
//         else if (currentSubstring.includes(pRightCharacter)) collapseWindow()
//         else expandWindow()
//     }

//     return longestSubstring
// }

// const result = findLongestSubstring(string)
// console.log(result)



// ~ ~ ~ ~ ~ ~ ~ ~ REDUCER ~ ~ ~ ~ ~ ~ ~ ~ ~  ~
const findLongestSubstring = (string) => {
    if (typeof string !== 'string') throw new Error('must provide a string')
    if (string.length === 1) return string

    const data = {
        string: string,
        stringLength: string.length,
        pLeft: 0,
        pRight: 1,
        currentSubstring: string[0],
        longestSubstring: string[0],
    }

    const updateCurrentSubstring = ({ string, pLeft, pRight }) => string.substring(pLeft, pRight)

    const twoCharactersNextToEachOther = (data) => {
        const { pLeft, pRight, string, } = data
        const pointersTogether = (pLeft === (pRight - 1))
        const sameCharacters = string[pLeft] === string[pRight]
        return (pointersTogether && sameCharacters)
    }

    const advanceWindow = (data) => {
        const copy = { ...data }
        copy.pLeft += 1
        copy.pRight += 1
        copy.currentSubstring = updateCurrentSubstring(copy)
        return copy
    }

    const collapseWindow = (data) => {
        const copy = { ...data }
        copy.pLeft = copy.pLeft + 1
        copy.currentSubstring = updateCurrentSubstring(copy)
        return copy
    }
    const expandWindow = (data) => {
        const copy = { ...data }
        copy.pRight = copy.pRight + 1
        copy.currentSubstring = updateCurrentSubstring(copy)

        // is currentSubstring longer then longestSubstring 
        if (copy.currentSubstring.length > copy.longestSubstring.length) {
            copy.longestSubstring = copy.currentSubstring
        }
        return copy
    }
    const getProgress = (data) => ' '.repeat(data.pLeft) + '|' + ' '.repeat((data.pRight - data.pLeft) - 1) + '|'

    const output = string
        .split('')
        .reduce((curr) => {
            delete curr.prgrss

            let copy = {
                prgrss: getProgress(curr),
                ...curr,
                loopCount: curr.loopCount + 1 || 0
            }

            while (copy.pRight === curr.pRight) {
                copy.prgrss = getProgress(copy),

                    console.log(copy, '\n')
                if (twoCharactersNextToEachOther(copy)) {
                    copy = { ...advanceWindow(copy) }
                }
                else if (copy.currentSubstring.includes(copy.string[copy.pRight])) {
                    copy = { ...collapseWindow(copy) }
                }
                else {
                    copy = { ...expandWindow(copy) }
                }
            }
            return copy
        }, data)

    return output
}

const result = findLongestSubstring(string)
// console.log(result)



// ~ ~ ~ ~ ~ ~ ~ ~ RECURSION ~ ~ ~ ~ ~ ~ ~ ~ ~  ~
// const findLongestSubstring = ({
//     callCount = 0,
//     string,
//     stringLength = string.length,
//     pLeft = 0,
//     pRight = 1,
//     currentSubstring = string[pLeft],
//     longestSubstring = currentSubstring
// }) => {
//     if (typeof string !== 'string') throw new Error('must provide a string')
//     if (string.length === 1) return string
//     if (pRight === string.length) return longestSubstring

//     const data = {
//         callCount: callCount + 1,
//         string,
//         stringLength,
//         pLeft,
//         pRight,
//         currentSubstring,
//         longestSubstring
//     }
//     console.log(data)

//     const updateCurrentSubstring = () => {
//         data.currentSubstring = data.string.substring(data.pLeft, data.pRight)
//     }

//     const twoCharactersNextToEachOther = (pRightCharacter) => {
//         const pointersTogether = data.pLeft === data.pRight - 1
//         const sameCharacters = data.string[data.pLeft] === pRightCharacter
//         return (pointersTogether && sameCharacters)
//     }

//     const advanceWindow = () => {
//         data.pLeft++
//         data.pRight++
//         updateCurrentSubstring()
//     }

//     const collapseWindow = () => {
//         data.pLeft++
//         updateCurrentSubstring()
//     }
//     const expandWindow = () => {
//         data.pRight++
//         updateCurrentSubstring()
//         // is data.currentSubstring longer then longestSubstring 
//         if (data.currentSubstring.length > data.longestSubstring.length) {
//             data.longestSubstring = data.currentSubstring
//         }
//     }

//     const pRightCharacter = data.string[data.pRight]

//     if (twoCharactersNextToEachOther(pRightCharacter)) advanceWindow()
//     else if (currentSubstring.includes(pRightCharacter)) collapseWindow()
//     else expandWindow()

//     return findLongestSubstring(data)
// }

// const result = findLongestSubstring({ string })
// console.log(result)