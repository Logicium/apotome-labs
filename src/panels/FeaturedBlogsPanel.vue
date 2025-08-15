<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import data from "@/data/data.ts";

// Get featured posts (first 3)
const featuredPosts = computed(() => {
  return data.blog.list.filter(post => post.featured).slice(0, 3);
});

const currentIndex = ref(0);
const isAutoPlaying = ref(true);
let intervalId: ReturnType<typeof setInterval> | null = null;

// Auto-cycle through featured posts every 4 seconds
const startAutoPlay = () => {
  if (intervalId) clearInterval(intervalId);
  intervalId = setInterval(() => {
    if (isAutoPlaying.value) {
      currentIndex.value = (currentIndex.value + 1) % featuredPosts.value.length;
    }
  }, 4000);
};

const stopAutoPlay = () => {
  isAutoPlaying.value = false;
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

const resumeAutoPlay = () => {
  isAutoPlaying.value = true;
  startAutoPlay();
};

// Manual navigation
const goToPost = (index: number) => {
  currentIndex.value = index;
  stopAutoPlay();
  // Resume auto-play after 8 seconds of manual interaction
  setTimeout(() => {
    resumeAutoPlay();
  }, 8000);
};

const currentPost = computed(() => featuredPosts.value[currentIndex.value]);

// Format date for display
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<template>
  <div class="panel">
    <div>
      <div class="big title">Featured Insights</div>
      <div class="small subtitle">{{ data.blog.intro }}</div>
    </div>

    <div class="featuredContainer">
      <!-- Featured Post Display -->
      <transition name="fade" mode="out-in">
        <div class="featuredPost" :key="currentIndex" v-if="currentPost">
          <div class="postContent">
            <div class="postMeta">
              <div class="tag category">&nbsp;{{ currentPost.category.toUpperCase() }}&nbsp;</div>
              <div class="meta small gray">
                <span>{{ formatDate(currentPost.date) }}</span>
                <span>{{ currentPost.readTime }}</span>
              </div>
            </div>

            <div class="postText">
              <div class="big postTitle">{{ currentPost.title }}</div>
              <p class="postExcerpt">{{ currentPost.excerpt }}</p>
              <div class="button readMore">READ ARTICLE</div>
            </div>
          </div>

          <div class="postImage image" :style="{ backgroundImage: `url(${currentPost.image})` }"></div>
        </div>
      </transition>

      <!-- Progress Bar Navigation -->
      <div class="progressNavigation">
        <div
          v-for="(post, index) in featuredPosts"
          :key="post.id"
          class="progressBarContainer"
          @click="goToPost(index)"
        >
          <div class="progressBar">
            <div
              class="progressFill"
              :class="{
                'active': index === currentIndex && isAutoPlaying,
                'completed': index < currentIndex,
                'inactive': index > currentIndex
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.panel {
  padding-top: 100px;
  display: grid;
  grid-template-rows: 1fr auto auto;
  gap: 2rem;
}

.title {
  width: 70%;
}

.featuredContainer {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.progressNavigation {
  display: flex;
  gap: 1rem;
  padding-top: 2rem;
  border-top: 1px solid #e0e0e0;
}

.progressBarContainer {
  flex: 1;
  padding: 1rem 0;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #f5f5f5;
  }
}

.progressBar {
  width: 100%;
  height: 4px;
  background-color: #e0e0e0;
  position: relative;
  overflow: hidden;
}

.progressFill {
  height: 100%;
  background-color: black;
  transition: none;
  width: 0%;

  &.active {
    animation: fillProgress 4s linear forwards;
  }

  &.completed {
    width: 100%;
    transition: width 0.2s ease;
  }

  &.inactive {
    width: 0%;
    transition: width 0.2s ease;
  }
}

@keyframes fillProgress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

.featuredPost {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  min-height: 400px;
}

.postContent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.postMeta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
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

.postText {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.postTitle {
  margin-bottom: 1rem;
  line-height: 1.2;
}

.postExcerpt {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 2rem;
  flex: 1;
}

.readMore {
  width: fit-content;
  margin-top: auto;
}

.postImage {
  background-position: center;
  background-size: cover;
  min-height: 300px;
}

// Fade transition
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// Mobile responsiveness
@media (max-width: 768px) {
  .panel {
    gap: 2rem;
  }

  .title {
    width: 100%;
    font-size: 2.5rem !important;
    line-height: 2.5rem !important;
  }

  .featuredContainer {
    gap: 1.5rem;
  }

  .featuredPost {
    grid-template-columns: 1fr;
    gap: 2rem;
    min-height: auto;
  }

  .postContent {
    order: 2;
  }

  .postImage {
    order: 1;
    min-height: 200px;
  }

  .postMeta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .postTitle {
    font-size: 1.8rem !important;
    line-height: 1.3 !important;
  }

  .postExcerpt {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
}
</style>
