<template>
  <div class="imposter">
    <NotificationContainer />
    <router-view />
    <created-using />
    <FooterComponent :year="year" />
  </div>
</template>

<script>
import CreatedUsing from "@/components/CreatedUsing";
import FooterComponent from "@/components/FooterComponent";
import NotificationContainer from "@/components/NotificationContainer.vue";

export default {
  components: { FooterComponent, CreatedUsing, NotificationContainer },
  data() {
    return {
      year: new Date().getFullYear()
    };
  },
  mounted() {
    const notification = {
      type: "success",
      message: "Example notification that will dissappear after 5 seconds."
    };

    this.$store.dispatch("notification/add", notification, { root: true });
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";

#app {
  @include flex-center(100%);
  text-align: center;
}

.imposter {
  @include imposter(0);
}
</style>
