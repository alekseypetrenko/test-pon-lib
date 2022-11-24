<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="test-class">
    <button>click</button>
  </div>
</template>

<style scoped>
.test-class {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
