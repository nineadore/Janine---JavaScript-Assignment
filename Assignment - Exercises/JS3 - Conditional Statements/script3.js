const ageInput = document.getElementById("ageInput");  // user's age is retrieved
const result = document.getElementById("result"); 
const submit = document.getElementById("submit"); 

submit.onclick = function checkAge() { 

    let userAge = Number(ageInput.value); // converting the data type into a number
    result.classList.remove("error"); // removing error class 

    if (userAge >= 0 && userAge <= 12) { // age between 0 - 12 child
        result.textContent = `You are a: Child`;
    } 
    else if (userAge >= 13 && userAge <= 19) { // age between 13 - 19 teenager
        result.textContent = `You are a: Teenager`;
    }
    else if (userAge >= 20) { // age greater than or equal 20 adult
        result.textContent = `You are an: Adult`;
    } else {    // if negative no. or invalid input
        result.textContent = `Invalid age. Please enter a valid number.`;
        result.classList.add("error"); // if invalid age, we apply this error class (Red text)
    }
}