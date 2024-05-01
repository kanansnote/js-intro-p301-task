// p301 task

// first task
console.log("JS Intro".length);

// second task

const rectangleWidth = 10;
const rectangleLength = 15;

const rectangleArea = rectangleLength * rectangleWidth;

alert(`Rectangle area is ${rectangleArea}`);

// third task

const x = parseFloat(prompt('Enter triangle left side value')); // triangleLeft
const y = parseFloat(prompt('Enter triangle right side value')); // triangleRight
const z = parseFloat(prompt('Enter triangle bottom side value')); // triangleBottom

if (!isNaN(x) && !isNaN(y) && !isNaN(z) && x > 0 && y > 0 && z > 0) {
    const s = 1 / 2 * (x + y + z); // semiperimeter
    const aRoot = s * (s - x) * (s - y) * (s - z); // area root
    const a = Math.sqrt(aRoot).toFixed(4); // area
    alert('Triangle area: ' + a); // result
} else {
    alert('Invalid input. Please enter valid positive numbers for all sides.');
}
