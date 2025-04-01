<template>
  <li class="nav-item">
    <router-link class="nav-link" :to="menu.url"
      ><i :class="menu.icon"></i> {{ menu.title }}</router-link
    >
  </li>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  menu: {
    type: Object,
    required: true,
  },
});
</script>
