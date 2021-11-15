<template>
  <div>
    숫자 : {{ getNum }}
    <br />
    <button @click="setNum(getNum + 1)">UP</button>
    <button @click="setNum(getNum - 1)">DOWN</button>
  </div>
</template>

<script>
import { store } from '../Store';
export default {
  store,
  methods: {
    setNum: (val) => store.dispatch('setNum', val),
  },
  computed: {
    getNum: () => store.state.num
  }
}
</script>

<style>

</style>