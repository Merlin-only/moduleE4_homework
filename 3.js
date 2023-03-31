function createEmptyObjectWithoutPrototype() {
  return Object.create(null);
}

const emptyObj = createEmptyObjectWithoutPrototype();
console.log(emptyObj);
console.log(Object.getPrototypeOf(emptyObj));
