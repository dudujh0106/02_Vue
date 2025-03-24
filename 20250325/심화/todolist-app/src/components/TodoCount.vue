<template>
  <div class="d-flex justify-content-around mb-3">
    <div>전체 todo 개수: {{ totalTodo }}</div>
    <div>완료 todo 개수: {{ completedTodo }}</div>
    <div>미완료 todo 개수: {{ uncompletedTodo }}</div>
  </div>
</template>
<script>
export default {
  name: 'TodoCount',
  // 부모로 부터 데이터 전달 받기 + 유효성 검사
  props: {
    todolist: { type: Array, required: true },
  },
  computed: {
    completedTodo() {
      return this.todolist.filter((todo) => todo.completed).length;
    },
    totalTodo() {
      return this.todolist.length;
    },
    uncompletedTodo() {
      return this.todolist.filter((todo) => !todo.completed).length;
    },
  },
};
</script>
