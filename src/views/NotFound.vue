<template>
  <div>
    <h1>Oops!</h1>
    <h3 class="lead">The {{ resource }} you're looking for is not here.</h3>
    <router-link :to="{ name: 'Home' }">Back to the home page</router-link>
  </div>
</template>
<script>
  export default {
    props: {
      resource: {
        type: String,
        required: false,
        default: "resource",
      },
    },
  };
</script>
