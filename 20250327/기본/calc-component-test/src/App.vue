<template>
  <div>
    <Calc />
    <hr />
    <Calc2 />
    <hr />
    <Calc3 />
    <hr />
    <Calc4 />
    <hr />
    <Calc5 />
  </div>
</template>
<script>
import Calc from './components/Calc.vue';
import Calc2 from './components/Calc2.vue';
import Calc3 from './components/Calc3.vue';
import Calc4 from './components/Calc4.vue';
import Calc5 from './components/Calc5.vue';

export default {
  name: 'App',
  components: { Calc, Calc2, Calc3, Calc4, Calc5 },
};
</script>
