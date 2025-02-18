// 1. Create global variables
var globalVar = "I am Global Variable";
var anotherGlobalVar = "I am another Global Variable";

// 2. Create a function
function demoFunctionScope () {
    var localVar = "I am Local Variable";
    console.log(globalVar);
    console.log(anotherGlobalVar);
    console.log(localVar);

    return `${globalVar}, ${anotherGlobalVar}, ${localVar}`;
}

// 3. Call the function 
console.log(demoFunctionScope());

// 4. Demonstrate Block Scope
if (true) {
    let blockVar = "I am a block variable";
    console.log(blockVar);
}

console.log(blockVar); // result form console: blockVar is not defined