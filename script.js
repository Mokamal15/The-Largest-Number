function findLargerNumber() {
    var number1 = parseFloat(document.getElementById("number1Input").value);
    var number2 = parseFloat(document.getElementById("number2Input").value);
    var resultText = document.getElementById("resultText");

    if (number1 > number2) {
      resultText.textContent = "The Largest Number Is:" + number1;
    } else if (number2 > number1) {
      resultText.textContent = "The Largest Number Is:" + number2;
    } else {
      resultText.textContent = "The Numbers Are Equal";
    }
  }