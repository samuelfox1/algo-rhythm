// Write code to merge two sorted arrays into a new sorted array

const mergeSorted = (arr1, arr2) => {
    let i1 = 0
    let i2 = 0
    const merged = []
    let position = 0

    while (position < (arr1.length + arr2.length)) {
        let item1
        let item2
        if (arr1.length > 1) { item1 = arr1[i1] }
        if (arr2.length > 1) { item2 = arr2[i2] }

        if (item1 && item2) {
            if (item1 === item2) {
                merged.push(item1)
                i1++
                merged.push(item2)
                i2++
            } else if (item1 < item2) {
                merged.push(item1)
                i1++
            } else {
                merged.push(item2)
                i2++
            }
        } else if (item1 && !item2) {
            merged.push(item1)
            i1++
        } else {
            merged.push(item2)
            i2++
        }

        position++
    }

    return merged
};

module.exports = mergeSorted
