// Select HTML elements
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

// Define the function
function checkInput() {

    // Read the input value
    const inputValue = userInput.value.trim();

    // Check whether input is empty
    if (inputValue === "") {
        result.textContent = "Please enter a valid number!";
    }

    else {
        // Convert input into a number
        const number = Number(inputValue);

        // Check whether input is a valid number
        if (Number.isNaN(number)) {
            result.textContent = "Please enter a valid number!";
        }

        else if (number < 10) {
            result.textContent = "The number is lower than 10";
        }

        else if (number > 10) {
            result.textContent = "The number is higher than 10";
        }

        else {
            result.textContent = "The number is equal to 10";
        }
    }
}

// Attach click event listener
checkBtn.addEventListener("click", checkInput);