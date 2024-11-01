<script setup lang="ts">

</script>

<template>
  <div class="footer">
    <div class="footerItems">
      <div class="footerItem">
        <div class="footerText">SITE</div>
        <div class="click">home</div>
        <div class="click">about</div>
        <div class="click">contact</div>
        <div class="click">projects</div>
      </div>
      <div class="footerItem">
        <div class="footerText">COMPANY</div>
        <div class="click">blog</div>
        <div class="click">pricing</div>
        <div class="click">careers</div>
      </div>
      <div class="footerItem">
        <div class="footerText">RESOURCES</div>
        <div class="click">customers</div>
        <div class="click">partners</div>
        <div class="click">support</div>
        <div class="click">terms of use</div>
      </div>
      <div class="footerItem">
        <div class="footerText">SOCIAL</div>
        <div class="click">facebook</div>
        <div class="click">github</div>
        <div class="click">twitter</div>
      </div>
    </div>
    <div class="footerTitle">
      <div>© APOTOME LABS 2024 /</div>
    </div>
  </div>
</template>

<style scoped>

.footerText{
  margin-bottom: 1rem;
}

.footerTitle{
  margin-top: auto;
}

.footer{
  background-color: black;
  padding: 2rem;
  height: 50vh;
  color: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footerItems{
  width: 50%;
  display: flex;
  justify-content: space-between;
}

</style>
