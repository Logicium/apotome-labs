<script setup>

</script>

<template>
  <div class="navbar">
    <div class="title navItem">apotome-labs / </div>
    <div class="navItems">
      <div class="navItem">HOME / </div>
      <div class="navItem">MENU</div>
    </div>
  </div>
</template>

<style scoped>

.navbar{
  font-weight: 500;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background-color: white;
}

.navItem{
  cursor: pointer;
  white-space: break-spaces;
}

.title{
}

.navItems{
  display: flex;
}

</style>
