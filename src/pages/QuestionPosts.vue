<template>
  <template v-if="error">
    <PostsError />
  </template>

  <template v-else-if="!posts">
    <PostsSkeleton />
  </template>

  <template v-else>
    <PostsList :posts="posts" />
  </template>
</template>

<script setup>
import PostsList from "../components/Posts/QuestionPosts/PostsList";
import PostsSkeleton from "../components/Posts/QuestionPosts/PostsSkeleton";
import PostsError from "../components/Posts/@common/PostsError";
import useFetch from "../composable/useFetch";
import { getPosts } from "../apis/posts";

const { data: posts, error, loader } = useFetch(getPosts);

loader();
</script>

<style></style>
