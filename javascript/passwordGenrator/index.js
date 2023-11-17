function generator() {
  let pass = "";
  let str =
    "ABCDEFGHIJKLMOPQRSTUVWXYZ" +
    "apcdefghijklmnopqrstuvwxyz" +
    "0123456789" +
    "!@#$%^&*";
  for (let i = 0; i <= 8; i++) {
    let chr = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(chr);
  }
  return pass;
}
console.log(generator());
