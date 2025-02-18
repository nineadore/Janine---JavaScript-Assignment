const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener ("click", function() {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

/* explanation
    #
    - we use this symbol to make it valid hex color code

    Math.random() * 16777215
    - 16777215 is FFFFFF in hexadecimal (White)
    - multiplying Math.random() by 16777215 gives a random decimal number
      within the range 0 to 16777215.

    Math.floor()
    - we use this to round the random number down to the nearest whole number

    toString(16)
    - we use this to convert the integer into a hexadecimal string (Base 16)
    - needed for hex color codes

    --- how it works ---
    for example: Math.random() generates a value of 0.5
    0.5 * 16777215 = 8388607.5 
    Math.floor(8388607.5) = 8388607
    8388607.toString(16) = 7fffff
    final result: 7fffff hex code
*/