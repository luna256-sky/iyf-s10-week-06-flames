// Synchronous - blocks until complete
console.log("1 - Start");
console.log("2 - Middle");
console.log("3 - End");
// Output: 1, 2, 3 (in order)

// Asynchronous - doesn't block
console.log("1 - Start");

setTimeout(() => {
    console.log("2 - This is delayed");
}, 2000);

console.log("3 - End");
// Output: 1, 3, then 2 (after 2 seconds)




console.log("A");

setTimeout(() => console.log("B"), 0);

console.log("C");

setTimeout(() => console.log("D"), 100);

console.log("E");

// What order will these print?
//output: A, C, E, B, D

// Explanation: 
// 1. "A" is logged immediately.
// 2. The first setTimeout schedules "B" to be logged after 0 milliseconds, but it will still wait until the current call stack is clear.
// 3. "C" is logged immediately after "A" and before "B" because the call stack is still processing the synchronous code.
// 4. "E" is logged immediately after "C" and before "B" for the same reason.
// 5. After the synchronous code has finished executing, the event loop processes the scheduled tasks, logging "B" first (after 0 ms) and then "D" (after 100 ms).

