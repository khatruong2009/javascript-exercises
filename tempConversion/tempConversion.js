const ftoc = function(f) {
  let c;
  c = (f - 32) * (5/9);
  if (c == 0) {
    return c;
  } else {
    c = c.toFixed(1);
    return parseFloat(c);
  }
}

const ctof = function(c) {
  let f;
  f = (c * (9/5)) + 32;
  if (f == 0) {
    return c;
  } else {
    f = f.toFixed(1);
    return parseFloat(f);
}}

module.exports = {
  ftoc,
  ctof
}
