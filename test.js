// Output which methods have been flagged as deprecated
for (var i = 0; i < STRING_METHODS.length; i++) {
  funcName = STRING_METHODS[i];
  console.log(String.prototype[funcName].call("String Test"));
}
