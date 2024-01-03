<template>
  <pre class="post-content" v-html="content" />
</template>

<script>
import marked from "../../../utils/marked";

export default {
  props: {
    content: String,
  },

  computed: {
    content() {
      return marked.parse(this.content || "");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.post-content {
  width: 100%;
  padding: 12px 0;
  margin: 0;
  font-size: 0.9rem;
  font-weight: 450;
  font-family: "Noto Sans KR";
  color: #333;
  box-sizing: border-box;
  white-space: pre-wrap;
  word-break: break-all;
  overflow: auto;
  line-height: 1.75rem;
}
</style>
