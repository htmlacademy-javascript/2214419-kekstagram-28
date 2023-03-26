// 1. Функция для проверки длины строки

let stringSentence = 'проверяемая строка';


// Cтрока короче 20 символов true
let maxLength = 20;

function checkStringMaxLength(stringSentence, maxLength){
  return stringSentence.length <= maxLength;
}
  let isStringLongEnough = checkStringMaxLength(stringSentence, maxLength);

 console.log(isStringLongEnough);


// Длина строки ровно 18 символов true
let equalsLength = 18;

let checkStringEquals = (stringSentence, equalsLength) => stringSentence.length == equalsLength;

  let isStringEquals = checkStringEquals(stringSentence, equalsLength);

 console.log(isStringEquals);


 // Строка длиннее 10 символов false

let longerString = 10;
  let checkStringLength = (stringSentence, longerString) => stringSentence.length < longerString;

  let isStringLonger = checkStringLength(stringSentence, longerString);

console.log(isStringLonger);



// 2. Палиндром



function isPalindrome(string){
  for (let i = 0, j = string.length - 1; i < j; i++, j--){
    if(string[i] != string[j])
    return false;
  }
  return true;
}

// Строка является палиндромом. имяФункции('топот'); // true

isPalindrome('топот');
console.log(isPalindrome('топот'));

// Несмотря на разный регистр, тоже палиндром. имяФункции('ДовОд'); // true

isPalindrome('ДовОд');
console.log(isPalindrome('ДовОд'.toLowerCase));

// Это не палиндром. имяФункции('Кекс');  // false

isPalindrome('Кекс');
console.log(isPalindrome('Кекс'));

/* 3. Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их
в виде целого положительного числа.
Если в строке нет ни одной цифры, функция должна вернуть NaN:*/

// 3.1 имяФункции('2023 год');            // 2023
let extractIntegers = parseInt('2023 год');
console.log(extractIntegers);

// 3.2 имяФункции('ECMAScript 2022');     // 2022
// 3.3 имяФункции('1 кефир, 0.5 батона'); // 105
// 3.4 имяФункции('агент 007');           // 7

function extractDigits(str) {
  const digits = str.match(/\d/g);
  if (digits === null) {
    return NaN;
  }
  return parseInt(digits.join(''), 10);
}
console.log(extractDigits('ECMAScript 2022'));
console.log(extractDigits('1 кефир, 0.5 батона'));
console.log(extractDigits('агент 007'));

// 3.5 имяФункции('а я томат');           // NaN
let extractNumbers = Number('а я томат');
console.log(extractNumbers);

console.log(extractDigits('а я томат'));

/* 4. Функция, которая принимает три параметра: исходную строку, минимальную длину и строку
с добавочными символами — и возвращает исходную строку, дополненную указанными символами
до заданной длины. Символы добавляются в начало строки. Если исходная строка превышает
заданную длину, она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца. */

// не смогла даже с помощью здесь решить. до сих пор кажется всё очень сложным.

// Добавочный символ использован один раз
//имяФункции('1', 2, '0');      // '01'

// Добавочный символ использован три раза
//имяФункции('1', 4, '0');      // '0001'

// Добавочные символы обрезаны с конца
//имяФункции('q', 4, 'werty');  // 'werq'

// Добавочные символы использованы полтора раза
//имяФункции('q', 4, 'we');     // 'wweq'

// Добавочные символы не использованы, исходная строка не изменена
//имяФункции('qwerty', 4, '0'); // 'qwerty'
