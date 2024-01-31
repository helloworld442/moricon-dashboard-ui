<template>
  <IssueLayout>
    <IssueTemplate>
      <IssueHead />
      <TaskIssueListBox />
      <RouterView />
    </IssueTemplate>
  </IssueLayout>
</template>

<script setup>
import IssueHead from "../components/Issue/IssueHead";
import IssueTemplate from "../components/Issue/IssueTemplate";
import IssueLayout from "../layout/IssueLayout";
import TaskIssueListBox from "../components/Issue/TaskIssue/IssueListBox";
</script>
