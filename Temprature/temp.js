document.getElementById("convert-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
  
    const conversionType = document.getElementById("conversion-type").value;
    const inputTemp = parseFloat(document.getElementById("input-temp").value);
  
    let result;
  
    // Perform conversions
    if (conversionType === "c-to-f") {
      result = (inputTemp * 9) / 5 + 32 + "°F";
    } else if (conversionType === "f-to-c") {
      result = ((inputTemp - 32) * 5) / 9 + "°C";
    } else if (conversionType === "c-to-k") {
      result = inputTemp + 273.15 + "K";
    } else if (conversionType === "k-to-c") {
      result = inputTemp - 273.15 + "°C";
    } else {
      result = "Invalid conversion!";
    }
  
    // Display result
    document.getElementById("result").textContent = "Result: " + result;
  });
  