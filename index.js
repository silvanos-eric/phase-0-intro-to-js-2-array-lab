// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  const newCatsArray = [...cats];
  newCatsArray.push(name);
  return newCatsArray;
}

function prependCat(name) {
  const newCatsArray = [...cats];
  newCatsArray.unshift(name);
  return newCatsArray;
}

function removeLastCat() {
  const newCatsArray = [...cats];
  newCatsArray.pop();
  return newCatsArray;
}

function removeFirstCat() {
  const newCatsArray = [...cats];
  newCatsArray.shift();
  return newCatsArray;
}
