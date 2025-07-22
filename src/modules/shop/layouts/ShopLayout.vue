<script lang="ts" setup>
import CustomFooter from '../components/CustomFooter.vue';
import TopMenu from '../components/TopMenu.vue';
</script>
<template>
  <TopMenu />

  <!-- Router View -->
  <RouterView />

  <!-- Footer -->
  <CustomFooter />
</template>
