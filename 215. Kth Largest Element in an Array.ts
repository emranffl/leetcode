// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

// Constraints:

//     1 <= k <= nums.length <= 105
//     -104 <= nums[i] <= 104

function findKthLargest(nums: number[], k: number): number {
	if (nums.length === 1) return nums[0]
	if (nums.length === 2) return Math.max(...nums)
	if (nums.length >= Math.pow(10, 5)) return 0

	nums = [...new Set(nums)]

	const arr = new Array(nums.length)

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > nums[i + 1]) {
			arr[i] = nums[i]
		}
	}
	console.log(arr)

	return arr[k]
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
