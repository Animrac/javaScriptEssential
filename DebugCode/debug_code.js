
function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
        let result = multiplyAddDivide(num1, num2);

        // Display the result
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiplyAddDivide(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply, add, and divide the numbers
    try {
        return (a * b) / (a + b);
    } catch (e) {
        alert("That's not good.")
        return -1;
    }
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}
    