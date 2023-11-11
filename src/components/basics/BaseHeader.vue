<template>
  <h2>{{ content }}</h2>
</template>

<script>
export default {
  props: ["content"],
};
</script>

<style scoped>
h2 {
  margin-top: 0px;
  padding-top: 10px;
}
</style>
