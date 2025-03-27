<template>
  <li
    :key="todoItem.id"
    class="list-group-item d-flex justify-content-between"
    :class="{ 'list-group-item-success': todoItem.completed }"
  >
    <div>
      <input
        type="checkbox"
        class="pointer"
        @change="toggleCompletedHandler(todoItem.id)"
        :checked="todoItem.completed"
      />
      <span class="ms-2" :class="{ 'todo-done': todoItem.completed }"
        >{{ todoItem.todo }} {{ todoItem.completed ? '(완료)' : '' }}</span
      >
    </div>
    <button
      class="btn btn-dark btn-sm rounded-3 py-0"
      @click.stop="emit('delete-todo', todoItem.id)"
    >
      삭제
    </button>
  </li>
</template>
<script setup>
// props : 부모로부터 전달 받은 데이터 수신 + 유효성 검사
const props = defineProps({
  todoItem: {
    type: Object,
    required: true, // 필수 데이터
  },
});

const toggleCompletedHandler = (id) => {
  // this.$emit(이벤트명, payload) : 부모쪽으로 이벤트 발신
  emit('toggle-completed', id);
};

// 부모 컴포넌트로 발신되는 이벤트 유효성 검사
// (보통 특정 이벤트가 발신되는게 맞는지 확인하는 용도로 사용)
const emit = defineEmits(['toggle-completed', 'delete-todo']);
</script>
