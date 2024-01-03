<template>
  <form :class="classObject">
    <div class="question-toggle">
      <span :class="toggleWrite" @click="onToggleButton('write')">
        작성하기
      </span>
      <span :class="toggleRead" @click="onToggleButton('read')">
        미리보기
      </span>
    </div>
    <div :class="['question-content', toggleWrite]">
      <div class="content-toggle">
        <BoldIcon :content="content" @click-event="onClickValue" />
        <CodeIcon :content="content" @click-event="onClickValue" />
        <ItalicIcon :content="content" @click-event="onClickValue" />
        <QuotesIcon :content="content" @click-event="onClickValue" />
      </div>
      <textarea v-model="content" @keydown="onKeyDownValue" />
    </div>
    <div :class="['question-preview', toggleRead]">
      <div class="preview-toggle">미리보기</div>
      <pre v-html="compiledMarkdown" />
    </div>
    <Button theme="medium" :disabled="disabled"><Pen /> 답변 등록하기</Button>
  </form>
</template>

<script setup>
import { computed, ref } from "vue";
import marked from "../../../utils/marked";

const props = defineProps(["active"]);

const content = ref("");
const toggleActive = ref("write");

const classObject = computed(() => {
  return ["question-form-box", { active: props.active }];
});

const toggleWrite = computed(() => {
  return { active: toggleActive.value === "write" };
});

const toggleRead = computed(() => {
  return { active: toggleActive.value === "read" };
});

const compiledMarkdown = computed(() => {
  return marked.parse(content.value);
});

const disabled = computed(() => {
  return content.value.trim() === "";
});

function onToggleButton(toggle) {
  toggleActive.value = toggle;
}

function onClickValue(newContent) {
  content.value = newContent;
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
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.question-form-box {
  position: relative;
  width: 100%;
  margin: 8px 0;
  display: none;
  flex-direction: column;
  align-items: flex-end;

  &.active {
    display: flex;
  }
}

.question-toggle {
  width: 100%;
  margin: 12px 0;
  border-bottom: 1px solid $border-color-0;
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  cursor: pointer;

  span {
    padding: 8px;
    box-sizing: border-box;
    font-size: 0.825rem;
    font-weight: 500;
    color: $font-color-0;
  }

  .active {
    color: $main-color-dark;
    border-bottom: 3px solid $main-color-dark;
  }
}

.question-content,
.question-preview {
  width: 100%;
  height: 300px;
  display: none;
  flex-direction: column;
  align-items: center;

  &.active {
    display: flex;
  }
}

pre,
textarea {
  width: 100%;
  height: 100%;
  margin: 0;
  font-size: 0.825rem;
  font-weight: 450;
  font-family: "Noto Sans KR";
  color: #333;
  line-height: 1.3rem;
}

.question-content {
  .content-toggle {
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

.question-preview {
  .preview-toggle {
    width: 100%;
    padding: 6px 0;
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
</style>
