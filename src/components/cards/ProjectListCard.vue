<script setup lang="ts">
const props = defineProps(['name', 'type', 'description', 'image', 'featured']);
const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
};
</script>

<template>
  <div class="projectListCard">
    <div class="projectInfo">
      <div class="projectHeader">
        <div class="med">{{ name }}</div>
        <div class="tag">&nbsp;{{ type }}&nbsp;</div>
      </div>
      <div class="projectDescription">
        <div class="small">{{ description }}</div>
        <div class="button" @click="handleClick">VIEW PROJECT</div>
      </div>
    </div>
    <div class="projectImage image" :style="{ backgroundImage: `url(${image})` }"></div>
  </div>
</template>

<style scoped lang="scss">
.projectListCard {
  display: grid;
  grid-template-columns: 2fr 1fr; /* 2/3 for info, 1/3 for image */
  gap: 1rem;
  border: 1px solid black;
  margin-bottom: 1.5rem;
}

.projectInfo {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.projectHeader {
  margin-bottom: 1rem;
}

.projectDescription {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.projectImage {
  background-position: center;
  background-size: cover;
  min-height: 200px;
}

.button {
  width: fit-content;
  margin-top: 0.5rem;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .projectListCard {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    gap: 0;
  }

  .projectImage {
    order: 1;
    min-height: 200px;
    width: 100%;
  }

  .projectInfo {
    order: 2;
    padding: 1.5rem;
    gap: 1rem;
  }

  .projectHeader {
    margin-bottom: 1rem;

    .med {
      font-size: 1.25rem !important;
      line-height: 1.3 !important;
      margin-bottom: 0.5rem;
    }
  }

  .tag {
    font-size: 0.8rem;
    margin-top: 0;
  }

  .projectDescription {
    gap: 1.5rem;

    .small {
      line-height: 1.5;
      color: #666;
    }
  }

  .button {

    font-size: 0.9rem;
  }
}

/* Small phone adjustments */
@media (max-width: 480px) {
  .projectListCard {
    margin-bottom: 1.5rem;
  }

  .projectImage {
    min-height: 180px;
  }

  .projectInfo {
    padding: 1rem;
  }

  .projectHeader {
    margin-bottom: 0.75rem;

    .med {
      font-size: 1.1rem !important;
      line-height: 1.2 !important;
    }
  }

  .tag {
    font-size: 0.75rem;
  }

  .projectDescription {
    gap: 1rem;

    .small {
      font-size: 0.9rem;
    }
  }

  .button {
    font-size: 0.85rem;
  }
}
</style>
