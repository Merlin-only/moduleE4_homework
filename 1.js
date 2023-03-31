function logOwnProperties(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

const exampleObj = {
  property1: "value1",
  property2: "value2",
  property3: "value3"
};

logOwnProperties(exampleObj);