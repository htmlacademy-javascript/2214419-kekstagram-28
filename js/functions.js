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
