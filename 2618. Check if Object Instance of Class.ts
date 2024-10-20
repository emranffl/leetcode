// Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

// There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined

function checkIfInstanceOf(value: any, classConstructor: any): boolean {
  if (value == null || classConstructor == null) {
    return false;
  }

  // Handle primitive types explicitly
  if (classConstructor === Number && typeof value === "number") {
    return true;
  }
  if (classConstructor === String && typeof value === "string") {
    return true;
  }
  if (classConstructor === Boolean && typeof value === "boolean") {
    return true;
  }
  if (classConstructor === BigInt && typeof value === "bigint") {
    return true;
  }
  if (classConstructor === Symbol && typeof value === "symbol") {
    return true;
  }

  // Handle Object as a class constructor for primitive types
  if (classConstructor === Object) {
    return (
      typeof value === "object" || 
      typeof value === "function" || 
      value !== null
    );
  }

  // Check using instanceof for non-primitive types
  try {
    return value instanceof classConstructor;
  } catch (error) {
    return false;
  }
}

console.log(checkIfInstanceOf(5, Number)); // Expected: true
console.log(checkIfInstanceOf("hello", String)); // Expected: true
console.log(checkIfInstanceOf(true, Boolean)); // Expected: true
console.log(checkIfInstanceOf(5n, BigInt)); // Expected: true
console.log(checkIfInstanceOf(5n, Object)); // Expected: false, BigInt is not an Object
console.log(checkIfInstanceOf({}, Object)); // Expected: true
