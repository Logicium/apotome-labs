<script setup lang="ts">

</script>

<template>

  <nav>
    <RouterLink to="/">
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

  </nav>

</template>

<style scoped lang="scss">

nav{
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  max-height: 100px;
  width: calc(100% - 4rem);
  background-color: white;
  z-index: 10;
}

.links{
  display: flex;
  gap: 2rem;
}

.logo{
  width: 35px;
  height: 35px;
  background-color: black;
  margin-right: 1rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.logoWrap{
  display: flex;
  align-items: center;
}

</style>
