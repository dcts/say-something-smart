function generatePhrase() {
  let phrase = faker.hacker.phrase();
  document.getElementById('smart-phrase').innerHTML = phrase;
}
