// 1. Функция для проверки длины строки

function checkStringLength(stringSentence, maxLength){
  return stringSentence.length <= maxLength;
}

// Cтрока короче 20 символов true
checkStringLength('проверяемая строка', 20);
console.log(checkStringLength('проверяемая строка', 20));

// Длина строки ровно 18 символов true
checkStringLength('проверяемая строка', 18);
console.log(checkStringLength('проверяемая строка', 18));

 // Строка длиннее 10 символов false
checkStringLength('проверяемая строка', 10);
console.log(checkStringLength('проверяемая строка', 10));


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

function extractDigits(str) {
  const digits = str.match(/\d/g);
  if (digits === null) {
    return NaN;
  }
  return parseInt(digits.join(''), 10);
}

// 3.1 имяФункции('2023 год');            // 2023
extractDigits('2023 год');
console.log(extractDigits('2023 год'));

// 3.2 имяФункции('ECMAScript 2022');     // 2022
extractDigits('ECMAScript 2022');
console.log(extractDigits('ECMAScript 2022'));

// 3.3 имяФункции('1 кефир, 0.5 батона'); // 105
extractDigits('1 кефир, 0.5 батона');
console.log(extractDigits('1 кефир, 0.5 батона'));

// 3.4 имяФункции('агент 007');           // 7
extractDigits('агент 007');
console.log(extractDigits('агент 007'));

// 3.5 имяФункции('а я томат');           // NaN
extractDigits('а я томат');
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
