let totalLines = -1;

//
// Update the numbers in the side gutter.
//
function updateGutter(allLines) {
  const toAdd = document.createDocumentFragment();
document.getElementsByClassName('gutter')[0].innerHTML = '';
  for (let i = 0; i < allLines;) {
    i += 1;
    const newDiv = document.createElement('div');
    newDiv.id = 'r' + i;
    newDiv.className = 'ansbox';
    newDiv.innerHTML = `${i}.`;
    toAdd.appendChild(newDiv);
    document.getElementsByClassName('gutter')[0].appendChild(toAdd);
  }
}

//
// If the current # of lines = previous # of lines, do nothing.
// Else, run lineNumbers.
//
function unEqual(linesTotal) {
  if (linesTotal !== totalLines) {
    totalLines = linesTotal;
    updateGutter(totalLines);
  }
}

//
// Get the length of the text box.
//
const getLength = function getLength(element) {
  const linesTotal = element.querySelectorAll('div').length + 1;
  unEqual(linesTotal);
};

//
// Listen for Keyup to run getLength function.
//
const box = document.querySelector('.textBox');
box.addEventListener('keyup', function() {
  getLength(box);
});
