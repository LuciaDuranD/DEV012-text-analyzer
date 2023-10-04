const analyzer = {
  splitText: (text) => {
    const words = text.split(" ");
    return words;
  },

  trimText: (text) => {
    return text.trim();
  },

  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const trimmedText = analyzer.trimText(text);
    const words = analyzer.splitText(trimmedText);

    let contador = 0;

    for (let i = 0; i < words.length; i++) {
      const palabra = words[i];

      // Si la palabra no está vacía, cuenta como una palabra
      if (palabra !== "") {
        contador++;
      }
    }

    return contador;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const trimmedText = analyzer.trimText(text);
    return trimmedText.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const trimmedText = analyzer.trimText(text);
    let contador = 0;

    for (let i = 0; i < trimmedText.length; i++) {
      const caracter = trimmedText[i];

      if (/[a-zA-Z0-9]/.test(caracter)) {
        contador++;
      }
    }

    return contador;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const trimmedText = analyzer.trimText(text);
    const words = analyzer.splitText(trimmedText);

    let totalWordLength = 0;
    let wordCount = 0;

    for (let i = 0; i < words.length; i++) {
      const palabra = words[i];
      totalWordLength += palabra.length;
      wordCount++;
    }

    const averageWordLength = wordCount > 0 ? totalWordLength / wordCount : 0;

    return parseFloat(averageWordLength.toFixed(2));
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numberMatches = text.match(/\b\d+\.\d+\b|\b\d+\b/g);
    if (numberMatches) {
      return numberMatches.length;
    } else {
      return 0;
    }
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numberMatches = text.match(/\b\d+\.\d+\b|\b\d+\b/g);
    let suma = 0;

    if (numberMatches) {
      numberMatches.forEach((match) => {
        const numero = parseFloat(match);
        if (!isNaN(numero)) {
          suma += numero;
        }
      });
    }

    return suma;
  },
};

export default analyzer;
