<script setup>
import { computed } from 'vue'
const year = computed(() => new Date().getFullYear())
</script>

<template>
  <div class="footer">
    <p class="footer__copy">Copyright &copy; {{ year }}</p>
  </div>
</template>

<style scoped lang="scss">
.footer {
  &__copy {
    padding: 20px;
  }
}
</style>
