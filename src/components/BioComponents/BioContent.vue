<template>
  <base-container mode="space">
    <div>
      <h5>{{ contenth }}</h5>
      <p>{{ contentp }}</p>
    </div>
  </base-container>
</template>

<script>
export default {
  props: ["contenth", "contentp"],
};
</script>

<style scoped>
div {
  display: block;
  padding: 10px;
}

h5 {
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 10px;
}

p {
  font-size: small;
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
