const eventCode = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', '\\', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight',
];

const valueENG = [
  '`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL',
  'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'ENTER',
  'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '/', '⯅', 'Shift',
  'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '◄', '▼', '►',
];

const valueRU = [
  'ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'DEL',
  'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'ENTER',
  'Shift', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '⯅', 'Shift',
  'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '◄', '▼', '►',
];

const valueCapsENG = [
  '`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'DEL',
  'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'ENTER',
  'Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', ',', '/', '⯅', 'Shift',
  'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '◄', '▼', '►',
];

const valueCapsRU = [
  'Ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'DEL',
  'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'ENTER',
  'Shift', '\\', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '⯅', 'Shift',
  'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '◄', '▼', '►',
];

const valueShiftENG = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'DEL',
  'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'ENTER',
  'Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', ',', '/', '⯅', 'Shift',
  'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '◄', '▼', '►',
];

const valueShiftRU = [
  'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'DEL',
  'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'ENTER',
  'Shift', '\\', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '⯅', 'Shift',
  'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '◄', '▼', '►',
];

const body = document.querySelector('body');

// input
const input = document.createElement('textarea');
input.type = 'text';
input.name = 'value';
input.id = 'name';
body.appendChild(input);

function setFocus() {
  document.getElementById('name').focus();
}
body.onload = setFocus();

input.onblur = function blur() {
  document.getElementById('name').focus();
};

// keyboard
const keyboard = document.createElement('section');
keyboard.className = 'keyboard';
body.appendChild(keyboard);

for (let i = 0; i < valueENG.length; i += 1) {
  const button = document.createElement('button');
  button.innerHTML = valueENG[i];
  keyboard.appendChild(button);
}

keyboard.childNodes[0].className = 'dark';
keyboard.childNodes[13].className = 'dark backspace';
keyboard.childNodes[14].className = 'dark tab';
keyboard.childNodes[28].className = 'dark del';
keyboard.childNodes[29].className = 'dark caps-lock';
keyboard.childNodes[41].className = 'dark enter';
keyboard.childNodes[42].className = 'dark long-shift';
keyboard.childNodes[54].className = 'dark';
keyboard.childNodes[55].className = 'dark shift';
keyboard.childNodes[56].className = 'dark ctrl';
keyboard.childNodes[57].className = 'dark win';
keyboard.childNodes[58].className = 'dark alt';
keyboard.childNodes[59].className = 'space';
keyboard.childNodes[60].className = 'dark alt';
keyboard.childNodes[61].className = 'dark ctrl';
keyboard.childNodes[62].className = 'dark';
keyboard.childNodes[63].className = 'dark';
keyboard.childNodes[64].className = 'dark';

// button backlighting
document.onkeydown = (event) => {
  const search = eventCode.indexOf(event.code);
  keyboard.childNodes[search].classList.add('active');
};
document.onkeyup = (event) => {
  const search = eventCode.indexOf(event.code);
  keyboard.childNodes[search].classList.remove('active');
};

// caret
function getPosition(item) {
  return item.value.slice(0, item.selectionStart).length;
}
function setPosition(item, position) {
  if (item.setSelectionRange) {
    item.setSelectionRange(position, position);
  }
}

// change language
const arr = document.querySelectorAll('button');
document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.shiftKey) {
    if (arr[44].innerHTML === 'z') {
      arr.forEach((currentValue, index) => {
        currentValue.innerHTML = valueRU[index];
      });
    } else if (arr[44].innerHTML === 'я') {
      arr.forEach((currentValue, index) => {
        currentValue.innerHTML = valueENG[index];
      });
    } else if (arr[44].innerHTML === 'Z') {
      arr.forEach((currentValue, index) => {
        currentValue.innerHTML = valueCapsRU[index];
      });
    } else {
      arr.forEach((currentValue, index) => {
        currentValue.innerHTML = valueCapsENG[index];
      });
    }
  }

  if (event.code === 'CapsLock') {
    if (arr[44].innerHTML === 'z') {
      arr.forEach((currentValue, index) => {
        currentValue.innerHTML = valueCapsENG[index];
      });
    } else if (arr[44].innerHTML === 'я') {
      arr.forEach((currentValue, index) => {
        currentValue.innerHTML = valueCapsRU[index];
      });
    } else if (arr[44].innerHTML === 'Z') {
      arr.forEach((currentValue, index) => {
        currentValue.innerHTML = valueENG[index];
      });
    } else {
      arr.forEach((currentValue, index) => {
        currentValue.innerHTML = valueRU[index];
      });
    }
  }

  if (event.shiftKey && event.ctrlKey === false) {
    if (arr[44].innerHTML === 'z') {
      arr.forEach((currentValue, index) => {
        currentValue.innerHTML = valueShiftENG[index];
      });
    } else if (arr[44].innerHTML === 'я') {
      arr.forEach((currentValue, index) => {
        currentValue.innerHTML = valueShiftRU[index];
      });
    } else if (arr[44].innerHTML === 'Z') {
      arr.forEach((currentValue, index) => {
        currentValue.innerHTML = valueENG[index];
      });
    } else {
      arr.forEach((currentValue, index) => {
        currentValue.innerHTML = valueRU[index];
      });
    }
  }

  if (event.key === 'Tab') {
    const caret = getPosition(input);
    input.value = `${input.value.slice(0, getPosition(input))}    ${input.value.slice(getPosition(input), input.value.length)}`;
    setPosition(input, caret + 4);
  }

  if (event.key === 'Alt') {
    event.preventDefault();
  }
});

// insert value by click
arr.forEach((button) => {
  button.onmousedown = () => {
    const caret = getPosition(input);
    if (button.innerHTML === 'Tab') {
      input.value = `${input.value.slice(0, caret)}    ${input.value.slice(caret, input.value.length)}`;
      setPosition(input, caret + 4);
    } else if (button.innerHTML === '') {
      input.value = `${input.value.slice(0, caret)} ${input.value.slice(caret, input.value.length)}`;
      setPosition(input, caret + 1);
    } else if (button.innerHTML === 'ENTER') {
      input.value = `${input.value.slice(0, caret)}\n${input.value.slice(caret, input.value.length)}`;
      setPosition(input, caret + 1);
    } else if (button.innerHTML === 'Ctrl' || button.innerHTML === 'Win' || button.innerHTML === 'Alt') {
      input.value += '';
    } else if (button.innerHTML === 'Backspace') {
      input.value = input.value.slice(0, caret - 1) + input.value.slice(caret, input.value.length);
      setPosition(input, caret - 1);
    } else if (button.innerHTML === 'DEL') {
      input.value = input.value.slice(0, caret) + input.value.slice(caret + 1, input.value.length);
      setPosition(input, caret);
    } else if (button.innerHTML === '◄') {
      setPosition(input, caret - 1);
    } else if (button.innerHTML === '►') {
      setPosition(input, caret + 1);
    } else if (button.innerHTML === 'Caps Lock') {
      if (arr[44].innerHTML === 'z') {
        arr.forEach((currentValue, index) => {
          currentValue.innerHTML = valueCapsENG[index];
        });
      } else if (arr[44].innerHTML === 'я') {
        arr.forEach((currentValue, index) => {
          currentValue.innerHTML = valueCapsRU[index];
        });
      } else if (arr[44].innerHTML === 'Z') {
        arr.forEach((currentValue, index) => {
          currentValue.innerHTML = valueENG[index];
        });
      } else {
        arr.forEach((currentValue, index) => {
          currentValue.innerHTML = valueRU[index];
        });
      }
    } else if (button.innerHTML === 'Shift') {
      if (arr[44].innerHTML === 'z') {
        arr.forEach((currentValue, index) => {
          currentValue.innerHTML = valueShiftENG[index];
        });
      } else if (arr[44].innerHTML === 'я') {
        arr.forEach((currentValue, index) => {
          currentValue.innerHTML = valueShiftRU[index];
        });
      } else if (arr[44].innerHTML === 'Z') {
        arr.forEach((currentValue, index) => {
          currentValue.innerHTML = valueENG[index];
        });
      } else {
        arr.forEach((currentValue, index) => {
          currentValue.innerHTML = valueRU[index];
        });
      }
    } else {
      const b = button.innerHTML;
      input.value = input.value.slice(0, caret) + b + input.value.slice(caret, input.value.length);
      setPosition(input, caret + 1);
    }
    return arr;
  };
});

const os = document.createElement('p');
os.innerHTML = 'Клавиатура создана на ОС Windows.';
body.appendChild(os);

const combination = document.createElement('p');
combination.innerHTML = 'Для переключения языка нажмите Ctrl + Shift.';
body.appendChild(combination);
