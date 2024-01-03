<template>
  <section class="post-section">
    <QuestionTitle :title="post?.title" />
    <QuestionContent :content="post?.content" />
    <QuestionInfo />
    <CommentList />
  </section>
</template>

<script setup>
import QuestionTitle from "./Question/QuestionTitle";
import QuestionContent from "./Question/QuestionContent";
import QuestionInfo from "./Question/QuestionInfo";
import CommentList from "./Comment/CommentList";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import useFetch from "../../composable/useFetch";
import { getPost } from "../../apis/posts";
import { onMounted } from "vue";

const { params } = useRoute();
const { data: post, error, loader } = useFetch(getPost);

onMounted(() => {
  loader(params.postId);
});

//routes가 바뀌기 전에 loader로 기존의 데이터를 바꾸는 작업
onBeforeRouteUpdate(async (to, from) => {
  if (to.params.postId !== from.params.postId) {
    await loader(to.params.postId);
  }
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.post-section {
  width: 750px;
  float: left;

  @include tablet {
    width: 100%;
  }
}
</style>
