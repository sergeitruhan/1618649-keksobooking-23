function getRandomArbitrary(min, max, maxDigits = 0) {
  if (min > max || min < 0 || max <= 0) {
    return ('Задан неверный диапазон! Укажите другие числа.');
  }
  const digitsDegree = 10 ** maxDigits;
  return ~~((Math.random() * (max - min) + min) * digitsDegree) / digitsDegree;
}
getRandomArbitrary(1, 2, 6);
function getRandomIntInclusive(min, max) {
  if (min >= max || min <= 0 || max <= 0) {
    return ('Выбран неверный диапазон');
  } else {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
getRandomIntInclusive (6, 4);
/*const getRandomArrayElement = (elements) => {
  return elements[_.random (0, elements.length - 1)];
};
getRandomArrayElement();
*/
