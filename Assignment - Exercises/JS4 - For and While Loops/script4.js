// task 1: for loop

console.log(`--- For Loop ---`);
for (let i = 1; i <= 10; i++) {
    console.log(`Number: ${i}`);
}

// task 2: while loop

console.log(`--- While Loop ---`);
console.log(`My Favorite Series ^-^`);

let series = [
    "Bridgerton",
    "Queen Charlotte: A Bridgerton Story",
    "Twilight",
    "Stranger Things",
    "Harry Potter",
    "Wednesday"
];

let index = 0;
while (index < series.length) {
    console.log(`Series ${index + 1}: ${series[index]}`);
    index++;
}