<script setup lang="ts">

  import {ref} from 'vue';
  const toggleMenu = ref(false);

  const toggleMenuVisibility = () => {
      toggleMenu.value = !toggleMenu.value;
    };

</script>

<template>
  <div class="navbar">
    <RouterLink to="/"> <div class="title navItem">apotome-labs / </div> </RouterLink>

    <div v-if="!toggleMenu" class="navItems">
      <div class="menuItemWrap">
        <RouterLink to="/">
          <div class="navItem menuItem" style="animation-delay: .10s">HOME / </div>
        </RouterLink>
      </div>
      <div class="menuItemWrap">
        <div class="navItem menuItem reverse" @click="toggleMenuVisibility"> MENU </div>
      </div>
    </div>

    <div v-else class="menu">
      <div class="navItems">
        <div class="menuItemWrap">
          <RouterLink to="/">
            <div class="navItem menuItem" style="animation-delay: .40s">HOME / </div>
          </RouterLink>
        </div>
          <div class="menuItemWrap">
            <RouterLink to="/projects">
              <div class="navItem menuItem" style="animation-delay: .30s">PROJECTS / </div>
            </RouterLink>
          </div>
        <div class="menuItemWrap">
          <RouterLink to="/pricing">
            <div class="navItem menuItem" style="animation-delay: .20s">PRICING / </div>
          </RouterLink>
        </div>
        <div class="menuItemWrap">
          <RouterLink to="/contact">
            <div class="navItem menuItem" style="animation-delay: .10s">CONTACT / </div>
          </RouterLink>
        </div>
        <div class="navItem menuItem reverse" @click="toggleMenuVisibility"> CLOSE </div>
      </div>
    </div>

  </div>

</template>

<style scoped>

.menu{
  margin-left: auto;
  display: flex;
  //overflow: hidden;
}

.menuItemWrap{
  //overflow: hidden;
  display: flex;
  position: relative;
  height: 100%;
}

.menuItem{
  animation: fade .40s ease-in-out forwards;
  overflow: hidden;
  visibility: hidden;
}

@keyframes fade {
  from{
    opacity: 0;
    transform: translateX(10vw);
    visibility: hidden;
  }
  to{
    opacity: 1;
    transform: translateX(0vw);
    visibility: visible;
  }
}

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

.reverse{
  background-color: black;
  color: #f1f1f1;
  height: 2rem;
  white-space: break-spaces;
}

</style>
