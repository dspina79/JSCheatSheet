// Encodes a String to HTML Format
// example: toHtml("Alpha & Beta") returns "Alpha &amp; Beta"
function toHtml(str) {
    let strArray = str.split("");
    for (var i = 0; i < strArray.length; i++) {
      let c = strArray[i];
      switch (c) {
        case "&":
          c = "&amp;";
          break;
        case ">" :
          c = "&gt;";
          break;
        case "<" :
          c = "&lt;";
          break;
        case "\"" :
          c = "&quot;";
          break;
        case "'" :
          c = "&apos;";
          break;
      }
      strArray[i] = c;
    }
    return strArray.join("");
}
  