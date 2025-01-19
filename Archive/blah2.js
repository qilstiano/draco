let totalLines = -1;

function updateGutter(allLines) {
  const toAdd = document.createDocumentFragment();
  const gutter = document.querySelector('.gutter');
  gutter.innerHTML = ''; // Clear previous line numbers

  for (let i = 0; i < allLines; i++) {
    const newDiv = document.createElement('div');
    newDiv.id = `r${i + 1}`;
    newDiv.className = 'ansbox';
    newDiv.innerHTML = `${i + 1}.`;
    toAdd.appendChild(newDiv);
  }

  gutter.appendChild(toAdd);
}

function unEqual(linesTotal) {
  if (linesTotal !== totalLines) {
    totalLines = linesTotal;
    updateGutter(totalLines);
  }
}

const getLength = (element) => {
  const text = element.innerText;
  const linesTotal = text.split('\n').length; // Approximate line count
  unEqual(linesTotal);
};

const box = document.querySelector('.textBox');
box.addEventListener('keyup', () => getLength(box));
