<template>
  <!-- 새 할 일 추가-->
  <div class="input-group mb-3">
    <input
      type="text"
      v-model.trim="todo"
      @keyup.enter="addTodoHandler"
      class="form-control"
      placeholder="할일을 여기에 입력!"
    />
    <button class="btn btn-primary" @click="addTodoHandler">추가</button>
  </div>
</template>
<script>
export default {
  name: 'InputTodo',
  data() {
    return { todo: '' };
  },
  methods: {
    // 추가 동작
    addTodoHandler() {
      if (this.todo.length >= 3) {
        // 작성된 할 일 (this.todo)을
        // 부모 컴포넌트(App.vue)로 전달
        // -> 이벤트 발신(emit) 이용

        // $emit(이벤트명, 페이로드) : 이벤트 발신 메서드
        this.$emit('add-todo', this.todo);

        this.todo = ''; // 입력된 내용 삭제
      } else {
        alert('할 일은 3글자 이상으로 작성해주세요!!');
      }
    },
  },
};
</script>
