function generatePhrase() {
  let phrase = faker.hacker.phrase();
  document.getElementById('smart-phrase').innerHTML = phrase;

  // RESTART ANIMATION
  // - clone element
  // - delete the original
  // - insert the clone
  let element = document.getElementById('smart-phrase');
  let newElement = element.cloneNode(true);
  element.parentNode.replaceChild(newElement, element);
}
