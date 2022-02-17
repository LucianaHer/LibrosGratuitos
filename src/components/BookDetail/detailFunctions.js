

export default function normalUTF8(str){
    var text = str.replace(/&aacute;/g, "á");
    text = text.replace(/&eacute;/g, "é");
    text = text.replace(/&iacute;/g, "í");
    text = text.replace(/&oacute;/g, "ó");
    text = text.replace(/&uacute;/g, "ú");
    text = text.replace(/&Aacute;/g, "A");
    text = text.replace(/&Eacute;/g, "E");
    text = text.replace(/&Iacute;/g, "I");
    text = text.replace(/&Oacute;/g, "O");
    text = text.replace(/&Uacute;/g, "U");
    text = text.replace(/&ntilde;/g, "ñ");
    text = text.replace(/&lt;/g, "<");
    text = text.replace(/&gt;/g, ">");
    text = text.replace(/li>/g, "-");
    text = text.replace(/ul>/g, "-");
    text = text.replace(/[<>/]/g, " ");
    text = text.replace(/&quot;/g, '"');
    text = text.replace(/&amp;/g, '&');
    text = text.replace(/&rsquo;/g, "'");
    text = text.replace(/&#039;/g, "'");
    text = text.replace(/&laquo;/g, '"');
    text = text.replace(/&raquo;/g, '"');
    text = text.replace(/&ndash;/g, '-');
    text = text.replace(/&mdash;/g, '-');
    text = text.replace(/&iquest;/g, '¿');
    text = text.replace(/&iexcl;/g, '¡');
    text = text.replace(/&ldquo;/g, '"');
    text = text.replace(/&rdquo;/g, '"');
    return text;
  }