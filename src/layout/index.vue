<template>
  <div id="app">
    <AppHeader></AppHeader>
    <main class="main">
      <router-view />
    </main>
    <AppFooter> </AppFooter>
  </div>
</template>

<script>
import AppHeader from "./Header.vue";
import AppFooter from "./Footer.vue";

export default {
  name: "AppLayout",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
<style lang="scss">
.main {
  height: 100%;
}
</style>
