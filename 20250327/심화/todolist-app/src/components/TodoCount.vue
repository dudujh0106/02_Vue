<template>
  <div class="d-flex justify-content-around mb-3">
    <div>전체 todo 개수: {{ totalTodo }}</div>
    <div>완료 todo 개수: {{ completedTodo }}</div>
    <div>미완료 todo 개수: {{ uncompletedTodo }}</div>
  </div>
</template>
<script setup>
import { computed } from 'vue';
// 부모로 부터 데이터 전달 받기 + 유효성 검사
const props = defineProps({
  todoList: { type: Array, required: true },
});

console.log(props.todoList);

const completedTodo = computed(() => {
  return props.todoList.filter((todo) => todo.completed).length;
});
const totalTodo = computed(() => {
  return props.todoList.length;
});
const uncompletedTodo = computed(() => {
  return props.todoList.filter((todo) => !todo.completed).length;
});
</script>
