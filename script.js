function calculateWordLength() {
  const inputWord = document.getElementById("inputWord").value;

  const wordLength = inputWord.length;
  document.getElementById("result").innerHTML = `Word length: ${wordLength}`;
}
