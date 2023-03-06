// 1. Функция для проверки длины строки

let stringSentence = 'проверяемая строка';


// Cтрока короче 20 символов
console.log(stringSentence.length, 20); // true

// Длина строки ровно 18 символов
console.log(stringSentence.length, 18); // true

// Строка длиннее 10 символов
console.log(stringSentence.length, 10); // true



// 2. Палиндром

// Строка является палиндромом. имяФункции('топот'); // true

function isPalindrome(string){
  for (let i = 0, j = string.length - 1; i < j; i++, j--){
    if(string[i] != string[j])
    return false;
  }
  return true;
}
let string = 'топот';

console.log(isPalindrome(string));

// Несмотря на разный регистр, тоже палиндром. имяФункции('ДовОд'); // true

function isPalindrome(string){
  for (let i = 0, j = string.length - 1; i < j; i++, j--){
    if(string[i] != string[j])
    return false;
  }
  return true;
}
let string = 'ДовОд';
console.log(isPalindrome(string.toLowerCase));

// Это не палиндром. имяФункции('Кекс');  // false

function isPalindrome(string){
  for (let i = 0, j = string.length - 1; i < j; i++, j--){
    if(string[i] != string[j])
    return false;
  }
  return true;
}
let string = 'Кекс';
string.toLowerCase();
console.log(isPalindrome(string));

/* 3. Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их
в виде целого положительного числа.
Если в строке нет ни одной цифры, функция должна вернуть NaN:*/

// 3.1 имяФункции('2023 год');            // 2023
console.log(parseInt('2023 год'));

// 3.2 имяФункции('ECMAScript 2022');     // 2022

// 3.3 имяФункции('1 кефир, 0.5 батона'); // 105

// 3.4 имяФункции('агент 007');           // 7

// 3.5 имяФункции('а я томат');           // NaN
console.log(Number('а я томат'));
