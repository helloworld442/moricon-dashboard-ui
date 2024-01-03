import { marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "./highlight";
import "highlight.js/styles/github.min.css";

marked.use(
  markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";

      return hljs.highlight(code, { language }).value;
    },
  })
);

marked.setOptions({
  pedantic: false,
  gfm: true,
  mangle: false,
  headerIds: false,
});

export default marked;
