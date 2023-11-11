<template>
  <div class="column">
    <div class="header">
      <font-awesome-icon class="icon" :icon="['fas', image]" style="color: #1484c9" />
      <h4>{{ title }}</h4>
    </div>

    <slot> </slot>
  </div>
</template>

<script>
export default {
  props: ["image", "title"],
};
</script>

<style scoped>
.column {
  width: 100%;
  margin-left: 0;
  margin-right: 0;
}

.header {
  display: flex;
  justify-content: center;
}

h4 {
  margin-left: 10px;
}

.icon {
  margin-top: auto;
  margin-bottom: auto;
}
</style>
