import analyzer from "./analyzer.js";

const textarea = document.querySelector('textarea[name="user-input"]');
const wordCountElement = document.querySelector('[data-testid="word-count"]');
const characterCountElement = document.querySelector(
  '[data-testid="character-count"]'
);
const characterNoSpacesCountElement = document.querySelector(
  '[data-testid="character-no-spaces-count"]'
);
const numberCountElement = document.querySelector(
  '[data-testid="number-count"]'
);
const numberSumElement = document.querySelector('[data-testid="number-sum"]');
const wordLengthAverageElement = document.querySelector(
  '[data-testid="word-length-average"]'
);
const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", function () {
  if (textarea.value === "") {
    alert("Debes escribir algo para que pueda ser analizado.");
  } else {
    textarea.value = "";
    metricas();
  }
});

textarea.addEventListener("input", function () {
  metricas();
});

function metricas() {
  const texto = textarea.value;
  const wordCount = analyzer.getWordCount(texto);
  const characterCount = analyzer.getCharacterCount(texto);
  const characterNoSpacesCount =
    analyzer.getCharacterCountExcludingSpaces(texto);
  const numberCount = analyzer.getNumberCount(texto);
  const numberSum = analyzer.getNumberSum(texto);
  const wordLengthAverage = analyzer.getAverageWordLength(texto);

  wordCountElement.textContent = `Palabras: ${wordCount}`;
  characterCountElement.textContent = `Caracteres: ${characterCount}`;
  characterNoSpacesCountElement.textContent = `Caracteres Sin Espacio: ${characterNoSpacesCount}`;
  numberCountElement.textContent = `Números: ${numberCount}`;
  numberSumElement.textContent = `Suma Números: ${numberSum}`;
  wordLengthAverageElement.textContent = `Promedio Longitud: ${wordLengthAverage.toFixed(
    2
  )}`;
}

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
