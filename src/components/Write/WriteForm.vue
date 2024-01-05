<template>
  {{ toast }}
  <form class="write-form-box" @submit.prevent="create">
    <WriteInput label="제목" v-model:title="title" :error="titleError" />
    <WriteTextArea
      label="내용"
      v-model:content="content"
      :error="contentError"
    />
    <div class="write-form-button">
      <Button theme="large" :disabled="disabled"><Pen /> 작성하기</Button>
    </div>
  </form>
</template>

<script setup>
import { computed, ref } from "vue";
import WriteInput from "./@common/WriteInput";
import WriteTextArea from "./@common/WriteTextArea";
import useMutation from "../../composable/useMutation";
import { createPost } from "../../apis/posts";
import { LoginErrorToast, WriteSuccessToast } from "../../utils/sweetAlert2";

const title = ref("");
const content = ref("");

const mutation = useMutation(createPost);

const titleError = computed(() => {
  if (title.value.trim() === "") return "제목을 입력해주세요";

  return "";
});

const contentError = computed(() => {
  if (content.value.trim() === "") return "내용을 입력해주세요";

  return "";
});

const disabled = computed(() => {
  return Boolean(titleError.value || contentError.value);
});

const toast = computed(() => {
  if (mutation.status.value.isSuccess) {
    return WriteSuccessToast();
  }

  if (mutation.status.value.isError) {
    return LoginErrorToast();
  }

  return;
});

function create() {
  mutation.mutate({ title: title.value, content: content.value });
}
</script>

<style lang="scss" scoped>
.write-form-box {
  position: relative;
  width: 100%;
  padding: 12px 0;
  margin: 12px 0;
  box-sizing: border-box;
}

.write-form-button {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
