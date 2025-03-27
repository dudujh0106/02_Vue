<!-- vueinit : vue3 기본 형태 스니펫(자동 완성) -->

<template>
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">:: Todolist App(Composition API Version)</div>
    </div>
    <div class="card card-default card-borderless">
      <div class="card-body">
        <!-- 입력용 컴포넌트 방출(add-todo)된 이벤트가 감지 되었을 때 
          addTodo 메서드 호출-->
        <InputTodo @add-todo="addTodo" />

        <!-- 카운트 컴포넌트 -->
        <TodoCount v-bind:todoList="state.todoList" />

        <!-- 목록 컴포넌트 
          - 목록 화면 렌더링에 필요한 데이터 todolist를 
          부모(App.vue)가 가지고 있음
          - 부모 -> 자식 데이터 전달 : props 이용
            -> v-bind: 전달할 이름="데이터"
        -->
        <TodoList
          v-bind:todoList="sortedTodolist"
          @toggle-completed="toggleCompleted"
          @delete-todo="deleteTodo"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, onMounted, computed } from 'vue';

// import 태그명 from '경로';
import InputTodo from './components/InputTodo.vue';
import TodoList from './components/TodoList.vue';
import TodoCount from './components/TodoCount.vue';

const state = reactive({ todoList: [] });
onMounted(() => {
  state.todoList.push({
    id: Date.now(),
    todo: '자전거 타기',
    completed: false,
  });
  state.todoList.push({
    id: Date.now() + 1,
    todo: '딸과 공원 산책',
    completed: true,
  });
  state.todoList.push({
    id: Date.now() + 2,
    todo: '일요일 애견 카페',
    completed: false,
  });
  state.todoList.push({
    id: Date.now() + 3,
    todo: 'Vue 원고 집필',
    completed: false,
  });
});

// receivwTodo : InputTodo 컴포넌트의
// this.$emit('add-todo', this.todo); 에서 전달된 this.todo(payload)
const addTodo = (receiveTodo) => {
  const td = {
    id: Date.now(),
    todo: receiveTodo,
    completed: false,
  };
  state.todoList.push(td);
};

// 매개변수 id : TodoListItem 에서 부터 전달된 id
const toggleCompleted = (id) => {
  let index = state.todoList.findIndex((item) => id === item.id);
  state.todoList[index].completed = !state.todoList[index].completed;
};

const deleteTodo = (id) => {
  let index = state.todoList.findIndex((item) => id === item.id);
  state.todoList.splice(index, 1);
};

// computed : data가 변할 때 자동으로 계산
// -> 계산되어 return된 값은 함수명(sortedList)으로 사용
const sortedTodolist = computed(() => {
  state.todoList.sort((todo1, todo2) => {
    if (
      (todo1.completed && todo2.completed) ||
      (!todo1.completed && !todo2.completed)
    ) {
      if (todo1.todo.toLowerCase() > todo2.todo.toLowerCase()) return 1;
    } else if (todo1.completed || todo2.completed) {
      if (todo1.completed) return 1;
    }
    return -1;
  });
  return state.todoList;
});
</script>
