const textarea = document.getElementById("程式碼框");
const gutter = document.getElementById("horizontal-gutter");

function updateGutter() {
  const lines = textarea.value.split("\n").length; // Count number of lines
  gutter.innerHTML = ""; // Clear existing numbers

  // Loop through the number of lines and append them in right-to-left order
  for (let i = lines; i > 0; i--) { // Reverse order for right-to-left flow
    const numberDiv = document.createElement("div");
    numberDiv.textContent = `${i}`;
    numberDiv.style.minWidth = "30px"; // Ensure consistent spacing between numbers
    numberDiv.style.textAlign = "right"; // Align numbers to the right (for readability)
    gutter.appendChild(numberDiv);
  }
}

// Update gutter on input
textarea.addEventListener("input", updateGutter);

// Initialize gutter on page load
updateGutter();