<template>
  <nav>
    <div id="name-site">
      <h3 class="nav-item">Panagiotis Machairas</h3>
    </div>

    <font-awesome-icon id="bar" @click="menu($event)" :icon="['fas', 'bars']" size="xl" />

    <div id="nav" :class="{ visible: visible }">
      <router-link class="nav-item" @click="menu($event)" :to="{ path: '/home' }">Home</router-link>
      <router-link class="nav-item" @click="menu($event)" :to="{ path: '/bio' }">Bio</router-link>

      <router-link class="nav-item" @click="menu($event)" :to="{ path: '/contact' }">Contact</router-link>
    </div>
  </nav>

  <div id="view" :class="{ show: visible }">
    <router-view></router-view>
  </div>

  <vue-particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    :options="{
      background: {
        color: {
          value: '#ffffff',
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
          value: '#bfbfb5',
        },
        links: {
          color: '#bfbfb5',
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
          speed: 1,
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

export default {
  name: "App",

  data() {
    return {
      visible: false,
      mediaQuery: true,
    };
  },

  methods: {
    async particlesInit(engine) {
      await loadSlim(engine);
    },

    particlesLoaded(container) {
      console.log("Particles container loaded", container);
    },

    menu(e) {
      if (window.innerWidth <= 500 && e.type == "click") {
        this.visible = !this.visible;
      } else {
        this.visible = false;
      }
    },
  },
  mounted() {
    this.mediaQuery = window.matchMedia("(min-width: 501px)");
    this.mediaQuery.addEventListener("change", this.menu);
  },
};
</script>

<style>
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

#bar {
  display: none;
}

.nav-item {
  color: black;
  text-decoration: none;
}

#nav {
  display: flex;
  margin: auto;
  justify-content: space-around;
  width: 60%;
}

@media (max-width: 600px) {
  nav {
    margin-top: -10px;
  }
}

@media (max-width: 500px) {
  nav {
    margin-top: -50px;
  }

  #bar {
    display: block;
    margin-top: auto;
    margin-left: auto;
    margin-bottom: auto;
  }

  .visible {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 190px;
    bottom: 0;
    margin: auto;
  }

  #nav {
    display: none;
  }

  .show {
    display: none;
  }

  .nav-item {
    font-size: large;
    margin-top: 50px;
  }
}

@media (max-width: 200px) {
  nav {
    display: block;
  }
}

img {
  width: 80%;
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
