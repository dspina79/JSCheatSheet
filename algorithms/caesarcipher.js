// Caesar Cipher - ROT13
// decrypt upper case characters with a 13 character differential

function decryptCaesar(str) {
    let converted = "";
    for (var s of str) {
      if (/\W+/.test(s)) {
        converted += s;
      } else {
        let code = s.charCodeAt(0);
        code = (((code + 13) % 91) % 65) + 65;
        converted += String.fromCharCode(code);
      }
    }
    console.log(converted);
    return converted;
}
