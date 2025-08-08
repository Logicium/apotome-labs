<script setup lang="ts">
const props = defineProps({
  post: {
    type: Object,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click', props.post);
};

// Format date for display
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};
</script>

<template>
  <article class="blogCard" :class="{ 'featured': featured }">
    <div class="cardImage image" :style="{ backgroundImage: `url(${post.image})` }"></div>

    <div class="cardContent">
      <div class="cardHeader">
        <div class="cardMeta">
          <div class="tag category">&nbsp;{{ post.category.toUpperCase() }}&nbsp;</div>
          <div class="meta small gray">
            <span>{{ formatDate(post.date) }}</span>
            <span>{{ post.readTime }}</span>
          </div>
        </div>
      </div>

      <div class="cardBody">
        <h3 class="cardTitle" :class="{ 'med': !featured, 'big': featured }">
          {{ post.title }}
        </h3>
        <p class="cardExcerpt small">{{ post.excerpt }}</p>
      </div>

      <div class="cardFooter">
        <div class="button" @click="handleClick">READ MORE</div>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
.blogCard {
  display: grid;
  grid-template-rows: 200px 1fr;
  border: 1px solid black;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &.featured {
    grid-template-rows: 250px 1fr;
  }
}

.cardImage {
  background-position: center;
  background-size: cover;
  border-bottom: 1px solid black;
}

.cardContent {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cardHeader {
  margin-bottom: 1rem;
}

.cardMeta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.category {
  background-color: #a8a8a8;
  color: white;
  white-space: break-spaces;
}

.meta {
  display: flex;
  gap: 1rem;

  span:not(:last-child)::after {
    content: ' / ';
    margin-left: 1rem;
  }
}

.cardBody {
  flex: 1;
}

.cardTitle {
  margin-bottom: 1rem;
  line-height: 1.3;
}

.cardExcerpt {
  line-height: 1.5;
  color: #666;
  margin-bottom: 1.5rem;
}

.cardFooter {
  margin-top: auto;
}

// Mobile responsiveness
@media (max-width: 768px) {
  .blogCard {
    grid-template-rows: 150px 1fr;

    &.featured {
      grid-template-rows: 200px 1fr;
    }
  }

  .cardContent {
    padding: 1rem;
  }

  .cardMeta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .meta {
    font-size: 0.8rem;
  }

  .cardTitle {
    font-size: 1.1rem !important;
    line-height: 1.2 !important;
  }
}
</style>
