const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(/\s+/);
    const nonEmptyWords = words.filter((word) => word.trim() !== "");

    return nonEmptyWords.length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const validCharacters = text.replace(/[^a-zA-Z0-9]/g, ""); // Eliminar espacios y signos de puntuación
    return validCharacters.length;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(/\s+/); // Dividir por espacios en blanco
    const totalWordLength = words.reduce((sum, word) => sum + word.length, 0);
    const averageWordLength = totalWordLength / words.length;
    return isNaN(averageWordLength)
      ? 0
      : parseFloat(averageWordLength.toFixed(2));
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numberRegex = /\b\d+(\.\d+)?\b/g;
    const matches = text.match(numberRegex);

    if (!matches) {
      return 0;
    }

    return matches.length;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    if (!numbers) {
      return 0;
    }

    const numberSum = numbers.reduce((sum, num) => sum + parseFloat(num), 0);
    return numberSum;
  },
};

export default analyzer;
