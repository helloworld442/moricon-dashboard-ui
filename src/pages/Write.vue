<template>
  <WriteLayout>
    <WriteTemplate>
      <WriteHead />
      <WriteForm />
    </WriteTemplate>
  </WriteLayout>
</template>

<script>
import WriteLayout from "../layout/WriteLayout";
import WriteTemplate from "../components/Write/WriteTemplate";
import WriteHead from "../components/Write/WriteHead";
import WriteForm from "../components/Write/WriteForm";

export default {
  components: {
    WriteLayout,
    WriteTemplate,
    WriteHead,
    WriteForm,
  },
};
</script>

<style></style>
