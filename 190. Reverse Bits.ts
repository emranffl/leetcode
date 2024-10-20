function reverseBits(n: number) {
    let result = 0;
    
    for (let i = 0; i < 32; i++) {
        // Shift the result to the left to make space for the next bit
        result <<= 1;
        
        // Add the least significant bit of n to the result
        result |= (n & 1);
        
        // Shift n to the right to process the next bit
        n >>= 1;
    }
    
    // Return the reversed result as an unsigned 32-bit integer
    return result >>> 0;
}

// Examples
console.log(reverseBits(0b00000010100101000001111010011100)); // Output: 964176192
console.log(reverseBits(0b11111111111111111111111111111101)); // Output: 3221225471
