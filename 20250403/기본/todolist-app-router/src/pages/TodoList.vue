<template>
  <!-- 버튼들을 포함하는 행 -->
  <div class="row">
    <div class="col p-3">
      <RouterLink class="btn btn-primary" to="/todos/add">
        할일 추가
      </RouterLink>
    </div>
  </div>

  <!-- 할일 목록을 표시하는 행 -->
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <!-- 각 할일 항목을 TodoItem 컴포넌트로 표시 -->
        <TodoItem
          v-for="todoItem in todoList"
          :key="todoItem.id"
          :todoItem="todoItem"
        />
      </ul>
    </div>
  </div>
</template>
<script setup>
import { inject } from 'vue';
import TodoItem from '@/components/TodoItem.vue';
import { RouterLink } from 'vue-router';

// 부모 컴포넌트에서 provide로 제공한 데이터와 함수들을 inject로 가져옴
const todoList = inject('todoList');
const { fetchTodoList } = inject('actions');
</script>
