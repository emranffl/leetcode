// You are given two 2D integer arrays nums1 and nums2.

//     nums1[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
//     nums2[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.

// Each array contains unique ids and is sorted in ascending order by id.

// Merge the two arrays into one array that is sorted in ascending order by id, respecting the following conditions:

//     Only ids that appear in at least one of the two arrays should be included in the resulting array.
//     Each id should be included only once and its value should be the sum of the values of this id in the two arrays. If the id does not exist in one of the two arrays then its value in that array is considered to be 0.

// Return the resulting array. The returned array must be sorted in ascending order by id.

function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
    const idMap: Map<number, number> = new Map();

    for (const [id, value] of nums1) {
        idMap.set(id, (idMap.get(id) || 0) + value);
    }

    for (const [id, value] of nums2) {
        idMap.set(id, (idMap.get(id) || 0) + value);
    }

    const result: number[][] = Array.from(idMap.entries());
    result.sort((a, b) => a[0] - b[0]);

    return result;
}

console.log(mergeArrays([[1, 5], [2, 3]], [[1, 6], [3, 7]])); // [[1, 11], [2, 3], [3, 7]]
