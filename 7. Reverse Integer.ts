// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321

// Example 2:

// Input: x = -123
// Output: -321

// Example 3:

// Input: x = 120
// Output: 21

// Constraints:

//     -231 <= x <= 231 - 1

function reverse(x: number) {
	// Get the sign of the number
	const sign = Math.sign(x)

	// Convert the absolute value of the number to a string, reverse the string,
	// and then convert it back to a number
	const reversed = parseInt(Math.abs(x).toString().split("").reverse().join(""))

	// Multiply the reversed number by the original sign
	const result = sign * reversed

	// Check if the reversed number is within the 32-bit signed integer range
	if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
		return 0
	}

	return result
}

console.log(reverse(123))
console.log(reverse(1997564491))
