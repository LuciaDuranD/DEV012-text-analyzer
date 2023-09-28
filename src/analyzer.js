const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(" ");
    let wordCount = 0;

    for (const word of words) {
      if (word.trim() !== "") {
        wordCount++;
      }
    }

    return wordCount;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    let characterCount = 0;
    for (const char of text) {
      if (!/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/.test(char)) {
        characterCount++;
      }
    }
    return characterCount;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(" ");
    let totalWordLength = 0;

    for (const word of words) {
      totalWordLength += word.length;
    }

    const averageWordLength = totalWordLength / words.length;
    return isNaN(averageWordLength) ? 0 : averageWordLength;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    let numberCount = 0;

    for (const char of text) {
      if (/[0-9]/.test(char)) {
        numberCount++;
      }
    }

    return numberCount;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let numberSum = 0;

    const numbers = text.match(/\d+/g);
    if (numbers) {
      for (const number of numbers) {
        numberSum += parseInt(number, 10);
      }
    }

    return numberSum;
  },
};

export default analyzer;
