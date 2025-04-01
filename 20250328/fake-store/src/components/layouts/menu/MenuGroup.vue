<template>
  <ul class="navbar-nav me-auto">
    <MenuItem
      v-for="(menu, index) in config.menus"
      :key="index"
      :menu="menu"
    ></MenuItem>
  </ul>
</template>

<script setup>
import config from '@/config';
import MenuItem from './MenuItem.vue';
</script>
