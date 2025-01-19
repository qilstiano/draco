/*const patterns = {
    //keyword: /\b(吾有一術曰|加以|減以|書之|乃得)\b/g,
    keyword: /\b(\u543E\u6709\u4E00\u8853\u66F0|\u52A0\u4EE5|減以|書之|乃得)\b/g,
    string: /「.*?」/g,
    comment: /\/\/.*|\/\*[\s\S]*?\*\//g,
    number: /\b[一二三四五六七八九〇\d]+\b/g,
    operator: /[＋－＊／＝]+/g,
    special: /[。；]/g,
  };

  function highlightSyntax(code) {
    let highlighted = code
      .replace(/&/g, '&amp;')  
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    
    for (const [type, regex] of Object.entries(patterns)) {
      highlighted = highlighted.replace(regex, match => `<span class="${type}">${match}</span>`);
    }
    console.log("llasDOJASD");
    
    return highlighted;
  }

const textarea = document.getElementById('程式碼框');
const highlightLayer = document.getElementById('highlight');

textarea.addEventListener('input', () => {
  const code = textarea.value; // raw user input
  const highlightedCode = highlightSyntax(code); // syntax highlighting
  highlightLayer.innerHTML = highlightedCode; // update overlay
});

textarea.addEventListener('scroll', () => {
  highlightLayer.scrollTop = textarea.scrollTop;
  highlightLayer.scrollLeft = textarea.scrollLeft;
});

function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }
  
  textarea.addEventListener('input', debounce(() => {
    const code = textarea.value;
    const highlightedCode = highlightSyntax(code);
    highlightLayer.innerHTML = highlightedCode;
  }, 50)); */


const textarea = document.getElementById('textarea-layer');
const highlightLayer = document.getElementById('highlight-code');

// Sync text and apply Prism.js highlighting
textarea.addEventListener('input', () => {
  // Escape HTML entities to prevent HTML injection
  const escapedText = textarea.value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Set the escaped text and highlight it using Prism.js
  highlightLayer.innerHTML = escapedText;
  Prism.highlightElement(highlightLayer); // Highlight the code
});

// Sync scroll between textarea and highlight layer
textarea.addEventListener('scroll', () => {
  highlightLayer.parentElement.scrollTop = textarea.scrollTop;
  highlightLayer.parentElement.scrollLeft = textarea.scrollLeft;
});
  