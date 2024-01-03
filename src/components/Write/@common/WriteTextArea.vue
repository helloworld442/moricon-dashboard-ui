<template>
  <div class="write-textarea-box">
    <label class="write-textarea-label">{{ label }} <b>*</b></label>

    <div class="write-textarea-content">
      <div class="textarea-content-textarea">
        <div class="textarea-toggle">
          <BoldIcon :content="content" @click-event="onClickValue" />
          <CodeIcon :content="content" @click-event="onClickValue" />
          <ItalicIcon :content="content" @click-event="onClickValue" />
          <QuotesIcon :content="content" @click-event="onClickValue" />
        </div>
        <textarea
          :value="content"
          @input="onInputValue"
          @keydown="onKeyDownValue"
          placeholder="내용을 입력하세요"
        />
      </div>

      <div class="textarea-content-preview">
        <div class="preview-toggle">미리 보기</div>
        <pre ref="preview" v-html="compiledMarkdown" />
      </div>
    </div>

    <h5 class="write-textarea-error">{{ error }}</h5>
  </div>
</template>

<script setup>
import { computed, defineProps, defineEmits } from "vue";
import marked from "../../../utils/marked";

const props = defineProps(["label", "content", "error"]);
const emit = defineEmits(["update:content"]);

const compiledMarkdown = computed(() => {
  return marked.parse(props.content);
});

function onInputValue(event) {
  emit("update:content", event.target.value);
}

function onKeyDownValue(event) {
  if (event.keyCode === 9) {
    event.preventDefault();

    let value = event.target.value;
    let start = event.target.selectionStart;
    let end = event.target.selectionEnd;

    event.target.value = value.substring(0, start);
    event.target.value += "   ";
    event.target.value += value.substring(end);
    event.target.selectionStart = start + 4;
    event.target.selectionEnd = start + 4;
  }
}

function onClickValue(newContent) {
  emit("update:content", newContent);
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.write-textarea-box {
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
}

.write-textarea-label {
  margin-bottom: 12px;
  font-size: 1.25rem;
  font-weight: 300;
  font-family: "Jua";
  color: #333;
  display: flex;
  align-items: center;
  gap: 6px;

  b {
    font-size: 0.925rem;
    color: red;
  }
}

.write-textarea-content {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  @include tablet {
    height: 800px;
    flex-direction: column;
  }
}

.textarea-content-textarea,
.textarea-content-preview {
  width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @include tablet {
    width: 100%;
  }
}

pre,
textarea {
  width: 100%;
  height: 100%;
  margin: 0;
  font-size: 0.9rem;
  font-weight: 450;
  font-family: "Noto Sans KR";
  color: #333;
  line-height: 1.3rem;
}

.textarea-content-textarea {
  .textarea-toggle {
    width: 100%;
    padding: 10px 14px;
    box-sizing: border-box;
    border: 1px solid $border-color-1;
    border-bottom: none;
    background: $background-color-3;
    font-size: 1.05rem;
    display: flex;
    gap: 18px;
  }

  textarea {
    padding: 12px 14px;
    box-sizing: border-box;
    border: 1px solid $border-color-1;
    outline: none;
    resize: none;

    &:focus {
      border: 1px solid $main-color-dark;
    }
  }
}

.textarea-content-preview {
  .preview-toggle {
    width: 100%;
    padding: 10px 0;
    border-top: 1px solid $border-color-1;
    font-size: 0.9rem;
    color: $font-color-3;
  }

  pre {
    width: 100%;
    padding: 12px 0;
    box-sizing: border-box;
    white-space: pre-wrap;
    word-break: break-all;
    overflow: auto;
  }
}

.write-textarea-error {
  margin-top: 12px;
  font-size: 14px;
  font-weight: 550;
  font-family: "Noto Sans KR";
  color: red;
}
</style>
