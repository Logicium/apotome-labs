<script setup lang="ts">
import data from "@/data/data.ts";
import { ref, computed } from "vue";
import ProjectListCard from "@/components/cards/ProjectListCard.vue";

// Search and filter functionality
const searchQuery = ref('');
const selectedTypes = ref<string[]>([]);

// Toggle project type filter
const toggleProjectType = (type: string) => {
  if (selectedTypes.value.includes(type)) {
    selectedTypes.value = selectedTypes.value.filter(t => t !== type);
  } else {
    selectedTypes.value.push(type);
  }
};

// Get unique project types
const projectTypes = computed(() => {
  const types = new Set<string>();
  data.projects.list.forEach(project => {
    types.add(project.type);
  });
  return Array.from(types);
});

// Filtered projects based on search query and selected types
const filteredProjects = computed(() => {
  return data.projects.list.filter(project => {
    // Filter by search query
    const matchesSearch = searchQuery.value === '' ||
      project.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.value.toLowerCase());

    // Filter by selected types
    const matchesType = selectedTypes.value.length === 0 ||
      selectedTypes.value.includes(project.type);

    return matchesSearch && matchesType;
  });
});
</script>

<template>
  <div class="panel projectsListPanel">
    <div>
      <div class="big title">All Projects</div>
      <div class="small subtitle">Browse our complete portfolio of work.</div>
    </div>

    <!-- Search and Filter Section -->
    <div class="searchFilterContainer">
      <div class="searchContainer">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search projects..."
          class="searchInput"
        />
      </div>

      <div class="filterContainer">
        <div class="filterLabel">Filter by type:</div>
        <div class="checkboxGroup">
          <label class="checkboxLabel" v-for="type in projectTypes" :key="type">
            <input
              type="checkbox"
              :value="type"
              :checked="selectedTypes.includes(type)"
              @change="toggleProjectType(type)"
              class="checkboxInput"
            />
            <div
              class="checkboxCustom"
              :class="{ 'checkboxSelected': selectedTypes.includes(type) }"
            ></div>
            <span>{{ type }}</span>
          </label>
        </div>
      </div>
    </div>

    <!-- Projects List -->
    <div class="projectsList">
      <ProjectListCard
        v-for="project in filteredProjects"
        :key="project.name"
        :name="project.name"
        :type="project.type"
        :description="project.description"
        :image="project.image"
        :featured="project.featured"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.panel {
  display: grid;
  grid-template-rows: auto auto 1fr;
  padding-bottom: 4rem;
  height: auto;
}

.projectsListPanel {
  padding-top: 2rem;
}

.searchFilterContainer {
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.searchContainer {
  width: 100%;
}

.searchInput {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #a8a8a8;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.searchInput:focus {
  outline: none;
  border-color: black;
}

.filterContainer {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.filterLabel {
  font-weight: 500;
}

.checkboxGroup {
  display: flex;
  gap: 2rem;
}

.checkboxLabel {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.checkboxInput {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.checkboxCustom {
  width: 1rem;
  height: 1rem;
  border: 1px solid black;
  margin-right: 0.5rem;
  display: inline-block;
  transition: 0.5s;
}

.checkboxSelected {
  background-color: black;
  transition: 0.5s;
}

.projectsList {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
}
</style>
