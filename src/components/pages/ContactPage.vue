<template>
  <base-container>
    <div class="column">
      <base-header content="Contact"></base-header>
      <contact-container image="envelope" url="mailto:panagiotis.machairas16@gmail.com" type="fas" title="Gmail"></contact-container>
      <contact-container image="linkedin" url="https://www.linkedin.com/in/panagiotism/" type="fab" title="Linkedin"></contact-container>
      <div id="one">
        <contact-container image="github" url="https://github.com/panagiotismach" type="fab" title="Github"></contact-container>
      </div>
    </div>
  </base-container>
</template>

<script>
import ContactContainer from "../ContactComponents/ContactContainer.vue";

export default {
  components: {
    ContactContainer,
  },
};
</script>

<style scoped>
.column {
  width: 100%;
  margin: auto;
}

#one {
  padding-bottom: 10px;
}
</style>
