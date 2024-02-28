<template>
  <base-container mode="layoutflex">
    <div class="column"><img src="../../assets/me.jpeg" /></div>
    <div class="column">
      <h2>Panagiotis Machairas</h2>
      <div class="info">
        <p>Software Engineer | Master Software Development and Cloud</p>
        <p>Passionate about Computer Science</p>
      </div>

      <div class="button-icon">
        <a href="/MACHAIRAS_PANAGIOTIS.pdf" download>
          <base-button @click="t" content="Download CV"></base-button>
        </a>

        <br />
        <div id="icon">
          <a href="https://www.linkedin.com/in/panagiotis-machairas-9263841b9/" target="_blank"><font-awesome-icon class="i" :icon="['fab', 'linkedin']" size="xl" /></a>
          <a href="https://github.com/ics20044" target="_blank"><font-awesome-icon class="i" :icon="['fab', 'github']" size="xl" /></a>
        </div>
      </div>
    </div>
  </base-container>
</template>

<script>
export default {
  methods: {
    t() {},
  },
};
</script>

<style scoped>
img {
  width: 100%;
}

.button-icon {
  margin-top: 50px;
}

.info {
  margin-top: 35px;
}

a {
  text-decoration: inherit;
  color: inherit;
}

#icon {
  display: flex;
  justify-content: space-evenly;
  margin-top: 35px;
}

@media (max-width: 1100px) {
  .column {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
  }

  img {
    margin-top: 10px;
    width: 80%;
  }
}

@media (max-width: 700px) {
  #icon {
    padding-bottom: 20px;
  }
}
</style>
