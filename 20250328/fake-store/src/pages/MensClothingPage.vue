<template>
  <DefaultLayout>
    <i :class="config.menus[2].icon"></i> {{ config.menus[2].title }}
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import config from '@/config';
</script>
