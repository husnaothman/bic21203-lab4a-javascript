// Select HTML elements
const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

// Define the function
function generateNumbers() {

    // Clear existing list items
    numberList.textContent = "";

    // Generate numbers from 1 to 5
    for (let i = 1; i <= 5; i++) {

        // Create a new list item
        const listItem = document.createElement("li");

        // Set the text content
        listItem.textContent = "The number is " + i;

        // Add the list item to the ordered list
        numberList.appendChild(listItem);
    }
}

// Attach click event listener
generateBtn.addEventListener("click", generateNumbers);