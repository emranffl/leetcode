// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"

// Output: true

// Explanation:

// The strings s and t can be made identical by:

//     Mapping 'e' to 'a'.
//     Mapping 'g' to 'd'.

// Example 2:

// Input: s = "foo", t = "bar"

// Output: false

// Explanation:

// The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

// Example 3:

// Input: s = "paper", t = "title"

// Output: true

// Constraints:

//     1 <= s.length <= 5 * 104
//     t.length == s.length
//     s and t consist of any valid ascii character.

function isIsomorphic(s: string, t: string): boolean {
	if (s === t) return true
	if (s.length !== t.length) return false
	if (s.length <= 1) return false
	if (s.length >= Math.pow(10, 4) * 5) return false

	const mapS = new Map<string, string>()
	const mapT = new Map<string, string>()

	for (let i = 0; i < s.length; i++) {
		const charS = s[i]
		const charT = t[i]

		if (
			(mapS.has(charS) && mapS.get(charS) !== charT) ||
			(mapT.has(charT) && mapT.get(charT) !== charS)
		) {
			return false
		}

		mapS.set(charS, charT)
		mapT.set(charT, charS)
	}

	return true
}

console.log(isIsomorphic("egg", "ahh"))
