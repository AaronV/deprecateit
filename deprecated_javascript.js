var deprecatedStringFunctions = [
  "blank",
  "underscore"
];

var prototypeStringFunctions = new Object;

function storePrototypeFunctions(functionList) {
  for (i = 0; i < functionList.length; i++) {
    var funcName = functionList[i];
    prototypeStringFunctions[funcName] = String.prototype[funcName];
  }
}

function deprecatedWarning(funcName) {
  console.log("\"" + funcName + "\" is deprecated.")
}

storePrototypeFunctions(deprecatedStringFunctions);

Object.extend(String.prototype, (function() {
  function blank() {
    deprecatedWarning("blank");
    return prototypeStringFunctions.blank.call(this);
  }

  return {
    blank: blank
  };

  // var output = new Object;
  //
  // for (i = 0; i < deprecatedStringFunctions.length; i++) {
  //   var funcName = deprecatedStringFunctions[i];
  //
  //   console.log("replacing " + funcName);
  //
  //   function deprecatedFunction() {
  //     deprecatedWarning(funcName);
  //     return prototypeStringFunctions[funcName].call(this);
  //   }
  //
  //   output[funcName] = deprecatedFunction;
  // }
  //
  // return output
})());
