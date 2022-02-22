<template>
  <div class="footer">
    <p class="footer__copy">Copyright &copy; {{ now }}.</p>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
  computed: {
    now() {
      return Date.now();
    }
  }
};
</script>

<style lang="scss">
.footer {
  &__copy {
    padding: 20px;
  }
}
</style>
