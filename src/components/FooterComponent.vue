<template>
  <div class="footer">
    <p class="footer__copy">Copyright &copy; {{ year }}</p>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
  computed: {
    year() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style lang="scss">
.footer {
  &__copy {
    padding: 20px;
  }
}
</style>
