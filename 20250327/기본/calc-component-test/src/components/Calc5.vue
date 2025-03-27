<template>
  <div>
    x : <input type="text" v-model.number="x" /><br />
    <div>결과 : {{ result }}</div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'Calc5',
  setup() {
    const x = ref(0);
    const result = ref(0);

    watch(x, (newValue, oldValue) => {
      console.log(`x의 새로운 값: ${newValue} 이전 값: ${oldValue}`);
    });

    return { x, result };
  },
};
</script>
