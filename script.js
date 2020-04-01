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

let body = document.querySelector('body');

//input
let input = document.createElement('textarea');
input.type = 'text';
input.name = 'value';
body.appendChild(input);

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
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.shiftKey) {
            let arr = document.querySelectorAll('button');
            if (arr[44].innerHTML == 'z') {
                
                arr.forEach(function(currentValue, index){
                    return currentValue.innerHTML = valueRU[index];
                })
            }
            else /*(arr[44].innerHTML == 'я')*/ {
                arr.forEach(function(currentValue, index){
                    return currentValue.innerHTML = valueENG[index];
                })
                return arr;
            }
        }
    }
    
    



);