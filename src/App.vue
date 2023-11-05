<template>
  <nav>
    <div id="name-site">
      <h3 class="nav-item">Panagiotis Machairas</h3>
    </div>
    <div id="nav">
      <div class="nav-item">Home</div>
      <div class="nav-item">Bio</div>
      <div class="nav-item">Contact</div>
    </div>
  </nav>

  <base-container>
    <div class="column"><img src="../src/assets/me.jpeg" /></div>
    <div class="column">
      <h2>Panagiotis Machairas</h2>
      <p>Software Engineer | Master Software Development and Cloud</p>
      <p>Passionate about Computer Science</p>

      <button>Download CV</button>
      <br />
      <div id="icon">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
        <font-awesome-icon :icon="['fab', 'github']" />
      </div>
    </div>
  </base-container>

  <vue-particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    :options="{
      background: {
        color: {
          value: '#fcfafa',
        },
      },
      fpsLimit: 120,
      interactivity: {
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#b6b7b8',
        },
        links: {
          color: '#b6b7b8',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          random: true,
          value: 5,
        },
      },
      detectRetina: true,
    }"
  />
</template>

<script>
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import BaseContainer from "./components/basics/BaseContainer.vue";

export default {
  name: "App",
  components: {
    BaseContainer,
  },
  methods: {
    async particlesInit(engine) {
      await loadSlim(engine);
    },
    particlesLoaded(container) {
      console.log("Particles container loaded", container);
    },
  },
};
</script>

<style>
#container {
  display: flex;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  columns: 2;
  background-color: white;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 2px rgba(166, 169, 176, 0.8);
  width: 60%;
  margin-top: 20px;

  z-index: 1;
  position: relative;
}

#name-site {
  display: block;
  width: 40%;
}

nav {
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
  position: relative;
}

#icon {
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
}

.nav-item:hover {
  color: #1484c9;
}

#nav {
  display: flex;
  justify-content: space-around;
  width: 60%;
}

img {
  width: 80%;
}

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

.column {
  width: 50%;
  margin: 40px;
}

#tsparticles {
  z-index: 0;
  position: relative;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
