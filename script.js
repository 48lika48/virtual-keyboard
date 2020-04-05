let eventCode = [
    'Backquote','Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0','Minus','Equal','Backspace',
    'Tab','KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP','BracketLeft','BracketRight','Backslash','Delete',
    'CapsLock','KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL','Semicolon','Quote','Enter',
    'ShiftLeft','\\','KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma','Period','Slash','ArrowUp','ShiftRight',
    'ControlLeft','MetaLeft','AltLeft','Space','AltRight','ControlRight','ArrowLeft','ArrowDown','ArrowRight'
]

let valueENG = [
    '`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL',
    'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'ENTER',
    'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '/', '⯅', 'Shift',
    'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '◄', '▼', '►'
]

let valueRU = [
    'ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'DEL',
    'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'ENTER',
    'Shift', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '⯅', 'Shift',
    'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '◄', '▼', '►'
]

let valueCapsENG = [
    '`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'DEL',
    'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'ENTER',
    'Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', ',', '/', '⯅', 'Shift',
    'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '◄', '▼', '►'
]

let valueCapsRU = [
    'Ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'DEL',
    'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'ENTER',
    'Shift', '\\', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '⯅', 'Shift',
    'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '◄', '▼', '►'
]

let valueShiftENG = [
    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'DEL',
    'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'ENTER',
    'Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', ',', '/', '⯅', 'Shift',
    'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '◄', '▼', '►'
]

let valueShiftRU = [
    'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'DEL',
    'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'ENTER',
    'Shift', '\\', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '⯅', 'Shift',
    'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '◄', '▼', '►'
]

let body = document.querySelector('body');

//input
let input = document.createElement('textarea');
input.type = 'text';
input.name = 'value';
input.id = 'name';
body.appendChild(input);

function setFocus() {
    document.getElementById('name').focus();
}

//keyboard
let keyboard = document.createElement('section');
keyboard.className = 'keyboard';
body.appendChild(keyboard);

for(let i = 0; i < valueENG.length; i ++) {
    let button = document.createElement("button");
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

//change language
let arr = document.querySelectorAll('button');
document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.shiftKey) {
        if (arr[44].innerHTML == 'z') {
            arr.forEach(function(currentValue, index){
                return currentValue.innerHTML = valueRU[index];
            })
        }
        else /*(arr[44].innerHTML == 'я')*/ {
            arr.forEach(function(currentValue, index){
                return currentValue.innerHTML = valueENG[index];
            })
        }
    }

    if (event.code == "CapsLock") {
        if (arr[44].innerHTML == 'z') {
            arr.forEach(function(currentValue, index){
                return currentValue.innerHTML = valueCapsENG[index];
            })
        }
        else if(arr[44].innerHTML == 'я') {
            arr.forEach(function(currentValue, index){
                return currentValue.innerHTML = valueCapsRU[index];
            })
        }
        else if (arr[44].innerHTML == 'Z') {
            arr.forEach(function(currentValue, index){
                return currentValue.innerHTML = valueENG[index];
            })
        }
        else /*(arr[44].innerHTML == 'Я')*/ {
            arr.forEach(function(currentValue, index){
                return currentValue.innerHTML = valueRU[index];
            })
        }
    }

    if (event.shiftKey && event.ctrlKey == false) {
        if (arr[44].innerHTML == 'z') {
            arr.forEach(function(currentValue, index){
                return currentValue.innerHTML = valueShiftENG[index];
            })
        }
        else if(arr[44].innerHTML == 'я') {
            arr.forEach(function(currentValue, index){
                return currentValue.innerHTML = valueShiftRU[index];
            })
        }
        else if (arr[44].innerHTML == 'Z') {
            arr.forEach(function(currentValue, index){
                return currentValue.innerHTML = valueENG[index];
            })
        }
        else /*(arr[44].innerHTML == 'Я')*/ {
            arr.forEach(function(currentValue, index){
                return currentValue.innerHTML = valueRU[index];
            })
            return arr;
        }
    }
});

//button backlighting
document.onkeydown = function(event) {
    let search = eventCode.indexOf(event.code);
    keyboard.childNodes[search].classList.add('active');
}
document.onkeyup = function(event) {
    let search = eventCode.indexOf(event.code);
    keyboard.childNodes[search].classList.remove('active');
}

//insert value by click
arr.forEach(function (button) {
    return button.onmousedown = (event) => {
        if(button.innerHTML == 'Tab') {
            input.value = input.value + '    ';
        }
        else if(button.innerHTML == '') {
            input.value = input.value + ' ';
        }
        else if(button.innerHTML == 'ENTER') {
            input.value = input.value + '\n';
        }
        else if(button.innerHTML == 'Ctrl' || button.innerHTML == 'Win' || button.innerHTML == 'Alt') {
            input.value = input.value + '';
        }
        else if(button.innerHTML == 'Backspace') {
            input.value = input.value.slice(0, input.value.length - 1);
        }
        else if(button.innerHTML == 'DEL') {
            input.value = input.value.slice(1, input.value.length);
        }

        else if (button.innerHTML == 'Caps Lock') {
            if (arr[44].innerHTML == 'z') {
                arr.forEach(function(currentValue, index){
                    return currentValue.innerHTML = valueCapsENG[index];
                })
            }
            else if(arr[44].innerHTML == 'я') {
                arr.forEach(function(currentValue, index){
                    return currentValue.innerHTML = valueCapsRU[index];
                })
            }
            else if (arr[44].innerHTML == 'Z') {
                arr.forEach(function(currentValue, index){
                    return currentValue.innerHTML = valueENG[index];
                })
            }
            else /*(arr[44].innerHTML == 'Я')*/ {
                arr.forEach(function(currentValue, index){
                    return currentValue.innerHTML = valueRU[index];
                })
            }
        }

        else if (button.innerHTML == 'Shift') {
            if (arr[44].innerHTML == 'z') {
                arr.forEach(function(currentValue, index){
                    return currentValue.innerHTML = valueShiftENG[index];
                })
            }
            else if(arr[44].innerHTML == 'я') {
                arr.forEach(function(currentValue, index){
                    return currentValue.innerHTML = valueShiftRU[index];
                })
            }
            else if (arr[44].innerHTML == 'Z') {
                arr.forEach(function(currentValue, index){
                    return currentValue.innerHTML = valueENG[index];
                })
            }
            else /*(arr[44].innerHTML == 'Я')*/ {
                arr.forEach(function(currentValue, index){
                    return currentValue.innerHTML = valueRU[index];
                })
                return arr;
            }
        }

        else {
            input.value = input.value + button.innerHTML;
        }
    }
});