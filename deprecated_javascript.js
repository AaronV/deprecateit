var stringMethods = [
  "blank",
  "underscore",
  "camelize"
];

var savedMethods = new Object;

function savePrototypeMethods(functionList) {
  for (i = 0; i < functionList.length; i++) {
    var funcName = functionList[i];
    savedMethods[funcName] = String.prototype[funcName];
  }
}

function deprecatedWarning(funcName) {
  console.log("\"" + funcName + "\" is deprecated.")
}

savePrototypeMethods(stringMethods);

Object.extend(String.prototype, (function() {
  function deprecatedFunction(funcName) {
    return function() {
      deprecatedWarning(funcName);
      return savedMethods[funcName].call(this);
    };
  }

  var output = new Object;
  for (i = 0; i < stringMethods.length; i++) {
    funcName = stringMethods[i];
    output[funcName] = deprecatedFunction.call(this, funcName);
  }
  return output;
})());


console.log("watWat".blank());
console.log("watWat".underscore());
