<template>
  <div id="container">
    <slot></slot>
  </div>
</template>

<style scoped>
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
</style>
