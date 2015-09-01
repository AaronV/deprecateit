var STRING_METHODS = [
  // "gsub",
  // "sub",
  // "scan",
  "truncate",
  "strip",
  "stripTags",
  "stripScripts",
  "extractScripts",
  "evalScripts",
  "escapeHTML",
  "unescapeHTML",
  "toQueryParams",
  "parseQuery",
  "toArray",
  "succ",
  // "times",
  "camelize",
  "capitalize",
  "underscore",
  "dasherize",
  "inspect",
  // "unfilterJSON",
  "isJSON",
  // "evalJSON",
  "include",
  "startsWith",
  "endsWith",
  "empty",
  "blank",
  "interpolate"
];

var savedMethods = new Object;

function savePrototypeMethods(functionList) {
  for (var i = 0; i < functionList.length; i++) {
    var funcName = functionList[i];
    savedMethods[funcName] = String.prototype[funcName];
  }
}

function deprecatedWarning(funcName) {
  console.log("\"" + funcName + "\" is deprecated.")
}

savePrototypeMethods(STRING_METHODS);

Object.extend(String.prototype, (function() {
  function deprecatedFunction(funcName) {
    return function() {
      deprecatedWarning(funcName);
      return savedMethods[funcName].call(this);
    };
  }

  var output = new Object;
  for (var i = 0; i < STRING_METHODS.length; i++) {
    funcName = STRING_METHODS[i];
    output[funcName] = deprecatedFunction.call(this, funcName);
  }
  return output;
})());
