<template>
  <base-container>
    <div class="column"><img src="../../assets/me.jpeg" /></div>
    <div class="column">
      <h2>Panagiotis Machairas</h2>
      <div class="info">
        <p>Software Engineer | Master Software Development and Cloud</p>
        <p>Passionate about Computer Science</p>
      </div>

      <div class="button-icon">
        <button>Download CV</button>
        <br />
        <div id="icon">
          <font-awesome-icon class="i" :icon="['fab', 'linkedin']" size="xl" />
          <font-awesome-icon class="i" :icon="['fab', 'github']" size="xl" />
        </div>
      </div>
    </div>
  </base-container>
</template>

<style scoped>
.column {
  width: 50%;
  margin: 40px;
}

.button-icon {
  margin-top: 50px;
}

.info {
  margin-top: 35px;
}

#icon {
  display: flex;
  justify-content: space-evenly;
  margin-top: 35px;
}
</style>
