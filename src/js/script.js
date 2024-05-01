// p301 task

// first task
alert("Note: In Edge, refreshing page doesn't reset the whole operation, but in Firefox does.");

alert('Task 1: Open the console to see the first task output.')
console.log("JS Intro".length);

// second task

const rectangleWidth = 10;
const rectangleLength = 15;

const rectangleArea = rectangleLength * rectangleWidth;

alert(`Task 2: We set rectangle width as 10 and length as 15. Then, rectangle area is going to be ${rectangleArea}.`);

// third task

alert("Task 3: Let's calculate a triangle's area with Heron's formula.");

let isValid = false; // Setting valid triangle as false

while (!isValid) {
    const x = parseFloat(prompt('Enter triangle left side value')); // triangleLeft
    const y = parseFloat(prompt('Enter triangle right side value')); // triangleRight
    const z = parseFloat(prompt('Enter triangle bottom side value')); // triangleBottom

    // Check for valid triangle
    if ((isNaN(x) || isNaN(y) || isNaN(z))) {
        alert("One of the sides' value is missing or the value is not a number.");
    } else if (x + y <= z || x + z <= y || y + z <= x) {
        alert("Invalid triangle sides.");
    } else {
        isValid = true; // Triangle is valid, exit the loop
        const s = 1 / 2 * (x + y + z); // semiperimeter
        const aRoot = s * (s - x) * (s - y) * (s - z); // area root
        const a = Math.sqrt(aRoot).toFixed(4); // area
        alert('Triangle area: ' + a); // result
    }
}