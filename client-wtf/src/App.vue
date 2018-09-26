<template>
  <div id="app">
    <dash-nav></dash-nav>
    <router-view/>
  </div>
</template>

<script>

import DashNav from './components/Nav.vue';

export default {
  components: {
    'dash-nav': DashNav,
  },
  data() {

  },
};

</script>

<style lang="scss">
#app {
  text-align: center;
}
</style>
