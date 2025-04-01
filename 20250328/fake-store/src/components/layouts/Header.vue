<template>
  <div class="mt-4 p-5 bg-primary text-white bgImg">
    <h1>{{ config.title }}</h1>
    <p>{{ config.subtitle }}</p>
  </div>
</template>

<script setup>
import config from '@/config';
</script>

<style>
.bgImg {
  background-image: url(../../assets/background.png);
  background-size: 100%;
}
</style>
