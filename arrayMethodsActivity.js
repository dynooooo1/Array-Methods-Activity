// Task 1: Use concat() to join two arrays
const arr1 = ["Cecile", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const combinedArr = arr1.concat(arr2);
console.log(combinedArr);  // Expected output: ["Cecile", "Lone", "Emil", "Tobias", "Linus"]

// Task 2: Use push() to add an element to an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);  // Expected output: ["Banana", "Orange", "Apple", "Mango", "Kiwi"]

// Task 3: Use unshift() to add elements to the beginning of an array
const array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log(array1);  // Expected output: [4, 5, 1, 2, 3]

// Task 4: Use pop() to remove the last element from an array
fruits.pop();
console.log(fruits);  // Expected output: ["Banana", "Orange", "Apple", "Mango"]

// Task 5: Use shift() to remove the first element from an array
const array2 = [1, 2, 3];
array2.shift();
console.log(array2);  // Expected output: [2, 3]

// Task 6: Use sort() to sort the array alphabetically
fruits.sort();
console.log(fruits);  // Expected output: ["Apple", "Banana", "Mango", "Orange"]

// Task 7: Use slice() to create a new array containing a portion of the fruits array
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits);  // Expected output: ["Banana", "Mango"]

// Task 8: Use splice() to insert and remove elements in the months array
const months = ["January", "February", "March", "April", "May"];
months.splice(5, 0, "June");  // Insert "June" at index 5
console.log(months);  // Expected output: ["January", "February", "March", "April", "May", "June"]

months.splice(1, 2);  // Remove "February" and "March"
console.log(months);  // Expected output: ["January", "April", "May", "June"]
