<script setup lang="ts">
const props = defineProps({
  selectedPackage: {
    type: Object,
    default: null
  }
});

const emit = defineEmits(['close']);

const closeDetailPanel = () => {
  emit('close');
};
</script>

<template>
  <div class="detailPanelOverlay">
    <div class="detailPanel">
      <div class="detailContent" v-if="selectedPackage">
        <div class="detailHeader">
          <div class="big">{{ selectedPackage.name }}</div>
          <div class="priceInfo">
            <span class="big">{{ selectedPackage.price }}</span>
            <span class="small">{{ selectedPackage.duration }}</span>
          </div>
        </div>
        <div class="detailDescription">
          {{ selectedPackage.desc }}
        </div>
        <div class="detailFeatures">
          <div class="med">What's Included:</div>
          <div class="featureList">
            <div class="featureItem" v-for="feature in selectedPackage.featuresFull" :key="feature.name">
              <div class="featureHeader small flex">
                <div class="check"></div>
                <div class="featureName">{{ feature.name }}</div>
              </div>
              <div class="featureDescription">{{ feature.desc }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="tag button" @click="closeDetailPanel"> CLOSE </div>
    </div>
  </div>
</template>

<style scoped>
/* Detail Panel Styles */
.detailPanelOverlay {
  position: absolute;
  width: 100%;
  min-height: 100%;
  height: fit-content;
  z-index: 1;
}

.tag.button{
  margin-top: auto;
}

.detailPanel {
  background-color: white;
  height: calc(100% - 4rem);
  padding: 2rem;
  position: relative;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
}

.detailContent {

}

.detailHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
}

.priceInfo {
  display: flex;
  align-items: baseline;
}

.priceInfo .small {
  margin-left: 0.5rem;
}

.detailDescription {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.detailFeatures {
  margin-top: 1rem;
}

.featureList {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
}

.featureItem {

}

.featureHeader {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.featureName {
  font-weight: 600;
}

.featureDescription {
  font-size: 0.85rem;
  color: #666;
  margin-left: 2rem;
  line-height: 1.4;
}

.check {
  width: 1rem;
  height: 1rem;
  background-color: black;
  margin-right: 1rem;
}

@media (max-width: 768px) {
  .detailPanel {
    padding: 1rem;
  }

  .featureList {
    grid-template-columns: 1fr;
    padding-bottom: 1rem;
  }
}
</style>
