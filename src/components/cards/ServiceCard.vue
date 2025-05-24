<script setup lang="ts">

import {ref} from "vue";

const props = defineProps(['number','name','desc','tags']);
const showFull = ref(false);

</script>

<template>
  <div class="service">
    <div class="small num">{{ number }}</div>
    <div>
      <div class="med">{{ name }}</div>
      <div class="infoWrap" :class="{hidden:!showFull}">
        <div class="tags flex">
          <div class="tag" v-for="tag in tags">&nbsp;{{tag.toUpperCase()}}&nbsp;</div>
        </div>
        <div class="small">{{ desc }}</div>
      </div>
    </div>

    <div class="control big" @click="showFull = !showFull">{{ showFull ? '−' : '+' }}</div>
  </div>
</template>

<style scoped lang="scss">

.service{
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid black;
}

.control{
  margin-left: auto;
  line-height: 1.5rem;
  font-weight: 200;
  cursor: pointer;
}

.infoWrap{
  transition: 1s;
  opacity: 1;
  height: auto;
  visibility: visible;
  interpolate-size: allow-keywords;
}

.hidden{
  opacity: 0;
  height: 0;
  visibility: hidden;
  overflow: hidden;
  interpolate-size: allow-keywords;
}

.tags{
  gap: 1rem;
  margin-bottom: 1rem;
}


.tag{
  white-space: break-spaces;
}

</style>
