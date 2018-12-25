<template>
<v-menu class="side-menu" :collapse="collapse" :default-active="defaultActive" :default-openeds="defaultOpeneds" :menus="menus" router :background-color="theme.backgroundColor" :text-color="theme.textColor" :active-text-color="theme.activeTextColor"></v-menu>
</template>

<script>
import VMenu from './vmenu';
import menuObj from './menus';
export default {
  props: {
    collapse: Boolean,
    theme: Object
  },
  components: {
    VMenu
  },
  data() {
    return {
      defaultActive: 'home',
      defaultOpeneds: []
    };
  },
  watch: {
    $route() {
      this.setCurrentRoute();
    }
  },
  computed: {
    menus() {
      return (GLOBAL.PATHNAME && menuObj[GLOBAL.PATHNAME]) || [];
    }
  },
  methods: {
    setCurrentRoute() {
      this.defaultActive = this.$route.name;
    }
  },
  created() {
    this.setCurrentRoute();
  }
};
</script>

<style>
</style>
