<script setup lang="ts">

import {ref, onMounted, onUnmounted} from "vue";

const showMenu = ref(false);

const resetMenu = function(){
  showMenu.value = false;
}

const checkScreenWidth = () => {
  if (window.innerWidth > 768) {
    showMenu.value = false;
  }
};

onMounted(() => {
  // Check screen width on mount
  checkScreenWidth();
  // Add event listener for window resize
  window.addEventListener('resize', checkScreenWidth);
});

onUnmounted(() => {
  // Clean up event listener when component is unmounted
  window.removeEventListener('resize', checkScreenWidth);
});

</script>

<template>

  <div class="navWrap">
    <nav :class="{'active':showMenu}">
      <RouterLink to="/" @click="resetMenu">
        <div class="logoWrap">
          <div class="logo">///</div>
          <div class="med">APOTOME LABS</div>
        </div>
      </RouterLink>
      <div class="links">
        <RouterLink to="/about"><div>ABOUT</div></RouterLink>
        <RouterLink to="/projects"><div>PROJECTS</div></RouterLink>
        <RouterLink to="/testimonials"><div>TESTIMONIALS</div></RouterLink>
        <RouterLink to="/pricing"><div>PRICING</div></RouterLink>
        <RouterLink to="/contact"><div>CONTACT</div></RouterLink>
      </div>
      <div class="menuBtn button tag" v-if="!showMenu" @click="showMenu = !showMenu">
         MENU
      </div>
      <div class="closeBtn button tag" v-else @click="showMenu = !showMenu"> CLOSE </div>

    </nav>
    <div class="menu" :class="{'active':showMenu}">
      <RouterLink to="/about" @click="resetMenu"><div>ABOUT</div></RouterLink>
      <RouterLink to="/projects" @click="resetMenu"><div>PROJECTS</div></RouterLink>
      <RouterLink to="/testimonials" @click="resetMenu"><div>TESTIMONIALS</div></RouterLink>
      <RouterLink to="/pricing" @click="resetMenu"><div>PRICING</div></RouterLink>
      <RouterLink to="/contact" @click="resetMenu"><div>CONTACT</div></RouterLink>
    </div>
  </div>

</template>

<style scoped lang="scss">

nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  max-height: 100px;
  width: calc(100% - 4rem);
  background-color: white;
  transition: 0.5s;
}

.active{
  background-color: black;
  transition: 0.5s;
}
.active a{
  color: white;
  transition: 0.5s;
}

.active .logo{
  background-color: white;
  color: black;
  transition: 0.5s;
}

.links{
  display: flex;
  gap: 2rem;
}

.logo{
  width: 35px;
  min-width: 35px;
  height: 35px;
  min-height: 35px;
  background-color: black;
  margin-right: 1rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.navWrap {
  width: calc(100%);
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 10;
}

.logoWrap{
  display: flex;
  align-items: center;
}

.menu{
  display: flex;
  visibility: hidden;
  background-color: black;
  flex-direction: column;
  align-items: end;
  padding: 2rem;
  padding-top: 0;
  opacity: 0;
  transition: 0.5s;
}
.menu a{
  color: white;
}

.menu.active{
  opacity: 1;
  visibility: visible;
  transition: 0.5s;
}

.closeBtn{
  background-color: white;
  border: 1px solid white;
  color: black;;
}

.menuBtn,.closeBtn{
  display: none;
  margin-top: 0;
}

@media (max-width: 768px) {

  .menuBtn,.closeBtn{
    display: block;
  }

  .links{
    display: none;
  }
  .menu{
    visibility: visible;
  }

}

</style>
