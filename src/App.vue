<template>
  <div id="app">
    <div id="wrapper">
      <div id="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center" id="nav">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
                <router-link class="nav-link" active-class="active" aria-current-value="page" to="/">Home</router-link>
                <router-link class="nav-link" active-class="active" to="/about">About</router-link>
              </div>
            </div>
          </div>
        </nav>

        <router-view />
        <created-using />
      </div>
    </div>

    <div id="footer">
      <p class="navbar navbar-dark">Copyright (C) 2021.</p>
    </div>
  </div>
</template>

<script>
import CreatedUsing from "@/components/CreatedUsing";

export default {
  components: { CreatedUsing }
};
</script>

<style lang="scss">
@import "./scss/main.scss";

@include sticky-footer(40px, #wrapper, #container, #footer);
</style>
