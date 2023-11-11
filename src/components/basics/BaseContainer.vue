<template>
  <div id="container" :class="mode">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style scoped>
#container {
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 2px rgba(166, 169, 176, 0.8);
  width: 60%;
  z-index: 1;
  position: relative;
}

.layoutflex {
  display: flex;
  justify-content: space-around;
}

.layoutblock {
  display: block;
}

.space {
  margin-bottom: 40px;
}

@media (max-width: 1000px) {
  #container {
    width: 80%;
  }
}

@media (max-width: 900px) {
  #container {
    width: 90%;
  }
}

@media (max-width: 700px) {
  #container {
    display: block;
  }
}
</style>
