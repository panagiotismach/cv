<template>
  <a :href="url" target="_blank">
    <base-container mode="space">
      <div class="contact">
        <h3>{{ title }}</h3>
        <div class="icon">
          <font-awesome-icon :icon="[type, image]" size="xl" />
        </div>
      </div>
    </base-container>
  </a>
</template>

<script>
export default {
  props: ["image", "type", "title", "url"],
};
</script>

<style scoped>
.contact {
  display: flex;
  justify-content: center;
}

a {
  text-decoration: inherit;
  color: inherit;
}

.icon {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
}
</style>
