function update(text) {
	let result_element = document.querySelector("#highlighting-content");
	// Handle final newlines
	if (text[text.length - 1] == "\n") {
	  text += " ";
	}
	// Update code
	result_element.innerHTML = text
	  .replace(new RegExp("&", "g"), "&amp;")
	  .replace(new RegExp("<", "g"), "&lt;");
	Prism.highlightElement(result_element);
  }

  function sync_scroll(element) {
	let result_element = document.querySelector("#highlighting");
	result_element.scrollTop = element.scrollTop;
	result_element.scrollLeft = element.scrollLeft;
  }

  function check_tab(element, event) {
	let code = element.value;
	if (event.key == "Tab") {
	  event.preventDefault();
	  let before_tab = code.slice(0, element.selectionStart);
	  let after_tab = code.slice(element.selectionEnd, element.value.length);
	  let cursor_pos = element.selectionStart + 1;
	  element.value = before_tab + "\t" + after_tab;
	  element.selectionStart = cursor_pos;
	  element.selectionEnd = cursor_pos;
	  update(element.value);
	}
  }