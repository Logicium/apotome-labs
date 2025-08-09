<script setup lang="ts">
import { ref, computed } from 'vue';
import data from "@/data/data.ts";
import BlogCard from "@/components/cards/BlogCard.vue";

// Filter and search functionality
const searchQuery = ref('');
const selectedCategory = ref('All');
const sortBy = ref('newest'); // 'newest' or 'oldest'
const currentPage = ref(0);
const postsPerPage = 6;

// Get unique categories
const categories = computed(() => {
  const cats = new Set(['All']);
  data.blog.list.forEach(post => cats.add(post.category));
  return Array.from(cats);
});

// Filter and sort posts
const filteredAndSortedPosts = computed(() => {
  let posts = data.blog.list.filter(post => {
    const matchesSearch = searchQuery.value === '' ||
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase());

    const matchesCategory = selectedCategory.value === 'All' ||
      post.category === selectedCategory.value;

    return matchesSearch && matchesCategory;
  });

  // Sort posts
  posts.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    return sortBy.value === 'newest' ? dateB - dateA : dateA - dateB;
  });

  return posts;
});

// Paginated posts
const paginatedPosts = computed(() => {
  const startIndex = currentPage.value * postsPerPage;
  return filteredAndSortedPosts.value.slice(startIndex, startIndex + postsPerPage);
});

// Navigation functions
const nextPage = () => {
  const totalPages = Math.ceil(filteredAndSortedPosts.value.length / postsPerPage);
  if (currentPage.value < totalPages - 1) {
    currentPage.value++;
  }
};

const previousPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--;
  }
};

// Reset page when filters change
const handleCategoryChange = (category: string) => {
  selectedCategory.value = category;
  currentPage.value = 0;
};

const handleSearch = () => {
  currentPage.value = 0;
};

const handleSortChange = () => {
  currentPage.value = 0;
};

// Calculate if navigation buttons should be shown
const showNavigation = computed(() => {
  return Math.ceil(filteredAndSortedPosts.value.length / postsPerPage) > 1;
});

const currentPageNumber = computed(() => currentPage.value + 1);
const totalPages = computed(() => Math.ceil(filteredAndSortedPosts.value.length / postsPerPage));
</script>

<template>
  <div class="panel">
    <div>
      <div class="big title">All Articles</div>
      <div class="small subtitle">Browse our complete collection of insights and expertise.</div>
    </div>

    <!-- Search, Sort, and Filter -->
    <div class="controlsSection">
      <div class="topControls">
        <div class="searchContainer">
          <input
            type="text"
            v-model="searchQuery"
            @input="handleSearch"
            placeholder="Search articles..."
            class="searchInput"
          />
        </div>

        <div class="sortContainer">
          <select
            v-model="sortBy"
            @change="handleSortChange"
            class="sortSelect"
          >
            <option value="newest">NEWEST FIRST</option>
            <option value="oldest">OLDEST FIRST</option>
          </select>
        </div>
      </div>

      <div class="categoryFilter">
        <div
          v-for="category in categories"
          :key="category"
          class="categoryTag"
          :class="{ 'active': selectedCategory === category }"
          @click="handleCategoryChange(category)"
        >
          {{ category.toUpperCase() }}
        </div>
      </div>
    </div>

    <!-- Blog Posts Grid -->
    <div class="postsSection">
      <div class="postsGrid" v-if="paginatedPosts.length > 0">
        <BlogCard
          v-for="post in paginatedPosts"
          :key="post.id"
          :post="post"
          :featured="false"
        />
      </div>

      <div class="noResults" v-else>
        <div class="med">No articles found</div>
        <div class="small gray">Try adjusting your search or filter criteria</div>
      </div>

      <!-- Navigation -->
      <div class="navigation" v-if="showNavigation">
        <div class="navInfo">
          <div class="small gray">Page {{ currentPageNumber }} of {{ totalPages }}</div>
        </div>
        <div class="navButtons">
          <div
            class="button navButton"
            @click="previousPage"
            :class="{ 'disabled': currentPage === 0 }"
          >
            <
          </div>
          <div
            class="button navButton"
            @click="nextPage"
            :class="{ 'disabled': currentPage >= totalPages - 1 }"
          >
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.panel {
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 3rem;
  height: auto;
}

.title {
  width: 70%;
}

.controlsSection {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e0e0e0;
}

.topControls {
  display: flex;
  gap: 2rem;
}

.searchContainer {
  width: 100%;
}

.searchInput {
  box-sizing: border-box;
  height: 45px;
  max-height: 45px !important;
  width: 100%;
  padding: 0 1rem;
  border: 1px solid #a8a8a8;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: black;
  }
}

.sortContainer {
  width: 200px;
  min-width: 200px;
  margin-left: auto;
}

.sortSelect {
  height: 45px;
  width: 100%;
  padding: 0 1rem;
  border: 1px solid #a8a8a8;
  background-color: white;
  font-family: inherit;
  font-size: 1rem;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: black;
  }
}

.categoryFilter {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.categoryTag {
  padding: 0.5rem 1rem;
  border: 1px solid black;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background-color: black;
    color: white;
  }

  &.active {
    background-color: black;
    color: white;
  }
}

.postsSection {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.postsGrid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
}

.noResults {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid #e0e0e0;
}

.navButtons {
  display: flex;
  gap: 1rem;
}

.navButton {
  cursor: pointer;
  width: 45px;
  padding: 0;
  font-weight: 200;
  font-size: 1.8rem;
  transition: 0.5s;

  &:hover:not(.disabled) {
    background-color: black;
    color: white;
  }

  &.disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
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

  .controlsSection {
    gap: 1.5rem;
  }

  .topControls {
    flex-direction: column;
    gap: 1rem;
  }

  .sortContainer {
    width: 100%;
  }

  .postsGrid {
    grid-template-columns: 1fr;
  }

  .categoryFilter {
    gap: 0.5rem;
  }

  .navigation {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
