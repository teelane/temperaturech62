// 1. Create a variable called temperature that stores a temperature in Celsius.
// Get temperature from a prompt.
let temperatureCelsius = prompt("Enter the temperature in Celsius:");

// Convert the prompt input (which is a string) to a number.
// parseFloat is used to handle potential decimal values.
temperatureCelsius = parseFloat(temperatureCelsius);

// Check if the input is a valid number
if (isNaN(temperatureCelsius)) {
    console.error("Invalid input. Please enter a numeric value for temperature.");
    // Optionally, display an error on the HTML page as well
    const errorParagraph = document.createElement('p');
    errorParagraph.style.color = 'red';
    errorParagraph.textContent = "Error: Invalid input. Please refresh and enter a numeric value.";
    document.body.appendChild(errorParagraph);
} else {
    // 2. Convert the temperature to Fahrenheit using the formula: Fahrenheit = (Celsius * 9/5) + 32.
    const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;

    // 3. Display the converted temperature in the console.
    console.log(`Temperature in Celsius: ${temperatureCelsius}°C`);
    console.log(`Temperature in Fahrenheit: ${temperatureFahrenheit}°F`);

    // Display the converted temperature on the HTML page.
    const resultParagraph = document.createElement('p');
    resultParagraph.textContent = `Converted Temperature: ${temperatureFahrenheit}°F`;
    document.body.appendChild(resultParagraph);
}