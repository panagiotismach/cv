<template>
  <button :class="mode">{{ content }}</button>
</template>

<script>
export default {
  props: ["content", "mode"],
};
</script>

<style scoped>
button {
  background-color: #1484c9;
  border: none;
  color: white;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 2px rgba(166, 169, 176, 0.8);
  width: 60%;
  margin-top: 10px;
  padding: 10px;
}

.big {
  width: 40%;
}
</style>
