<script setup lang="ts">
import { RouterView } from 'vue-router'

import Navbar from "@/components/NavBar.vue";
import Navigation from "@/components/Navigation.vue";

</script>

<template>

  <div class="webapp">
    <Navigation/>
    <div class="row">
      <RouterView v-slot="{ Component, route }" appear>
        <transition name="fade" mode="out-in">
          <div class="row" :key="route.name">
            <component :is="Component"></component>
          </div>
        </transition>
      </RouterView>
    </div>
  </div>

</template>

<style scoped>

.webapp{
  height: 100vh;
  position: relative;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}



</style>
