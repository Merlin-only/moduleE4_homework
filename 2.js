function hasProperty(propertyName, obj) {
  return obj.hasOwnProperty(propertyName);
}

const exampleObj = {
  property1: "value1",
  property2: "value2",
  property3: "value3"
};

console.log(hasProperty("property1", exampleObj));
console.log(hasProperty("property4", exampleObj));
