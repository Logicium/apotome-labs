<script setup lang="ts">


const props = defineProps({
  title:  { type: String, default: '' },
  price: { type: String, default: '' },
  data:{ type: Object }
})

</script>

<template>
  <div class="tier">

    <div class="tierHeading reverse">
      <div class="tierName"> {{title}} </div>
      <div class="tierPrice"> {{price}} </div>
    </div>

    <div class="tierItems">
      <div class="tierItem" v-for="item in data" key="index">
        {{item}}
      </div>
    </div>

    <div class="tierSelect">
      <div class="reverse"> SELECT </div>
    </div>
  </div>
</template>

<style scoped>


.tier{
  border: 1px solid black;
  display: flex;
  flex-direction: column;
}

.tierItems{
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-top: 1px solid black;
  justify-content: space-between;
}

.tierItem{
  text-align: center;
  white-space: break-spaces;
}

.tierHeading{
  display: flex;
  flex-direction: column;
  height: 8rem;
  justify-content: space-between;
}

.tierName{
  white-space: break-spaces;
}

.tierSelect{
  margin-top: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  cursor: pointer;
  border-top: 1px solid black;
  width: 100%;
  padding-top: 2rem;
}

.tierPrice{
  margin-top: auto;
  margin-left: auto;
  text-align: right;
  white-space: break-spaces;
}

</style>
