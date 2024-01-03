import hljs from "highlight.js/lib/core";
import plaintext from "highlight.js/lib/languages/plaintext";
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";
import java from "highlight.js/lib/languages/java";
import css from "highlight.js/lib/languages/css";
import xml from "highlight.js/lib/languages/xml";

hljs.registerLanguage("javascript", javascript);

hljs.registerLanguage("python", python);

hljs.registerLanguage("java", java);

hljs.registerLanguage("html", xml);

hljs.registerLanguage("css", css);

hljs.registerLanguage("plaintext", plaintext);

export default hljs;
