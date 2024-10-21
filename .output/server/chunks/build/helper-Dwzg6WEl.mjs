function makeFirstCharUpper(val) {
  var _a;
  if (val === "")
    return val;
  const firstChar = ((_a = val.at(0)) == null ? void 0 : _a.toLocaleUpperCase()) || "";
  const otherChar = val.slice(1);
  return firstChar + otherChar;
}

export { makeFirstCharUpper as m };
//# sourceMappingURL=helper-Dwzg6WEl.mjs.map
