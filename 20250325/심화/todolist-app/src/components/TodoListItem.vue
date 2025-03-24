<template>
  <li
    :key="todoitem.id"
    class="list-group-item d-flex justify-content-between"
    :class="{ 'list-group-item-success': todoitem.completed }"
  >
    <div>
      <input
        type="checkbox"
        class="pointer"
        @change="toggleCompletedHandler(todoitem.id)"
        :checked="todoitem.completed"
      />
      <span class="ms-2" :class="{ 'todo-done': todoitem.completed }"
        >{{ todoitem.todo }} {{ todoitem.completed ? '(완료)' : '' }}</span
      >
    </div>
    <button
      class="btn btn-dark btn-sm rounded-3 py-0"
      @click.stop="$emit('delete-todo', todoitem.id)"
    >
      삭제
    </button>
  </li>
</template>
<script>
export default {
  name: 'TodoListItem',

  // props : 부모로부터 전달 받은 데이터 수신 + 유효성 검사
  props: {
    todoitem: {
      type: Object,
      required: true, // 필수 데이터
    },
  },

  methods: {
    toggleCompletedHandler(id) {
      // this.$emit(이벤트명, payload) : 부모쪽으로 이벤트 발신
      this.$emit('toggle-completed', id);
    },
  },

  // 부모 컴포넌트로 발신되는 이벤트 유효성 검사
  // (보통 특정 이벤트가 발신되는게 맞는지 확인하는 용도로 사용)
  emits: ['toggle-completed', 'delete-todo'],
};
</script>
