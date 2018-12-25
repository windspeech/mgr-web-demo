<template>

<el-container class="app-container"
  :class="{
    'mini-side': isCollapse,
    'hide-side': hideSide
  }"
  >
  
    <el-header class="app-header" :height="headerHeight + 'px'">
      <app-header @switch="handleSideSwitch" @set-theme="handleSetTheme" @hide-side="handleSwitchHideSide"></app-header>
    </el-header>
  <el-container class="app-in-container">
  <el-aside class="app-side" :width="hideSide ? '0' : sideWidth + 'px'"
    :style="{background: theme.theme.backgroundColor}"
    >
    <app-side :collapse="isCollapse" :theme="theme.theme"></app-side>
  </el-aside>
    <el-main class="app-body">
      <el-container style="height: 100%;min-height: 100%;overflow: auto" id="appBody">
        <el-main class="app-page-body"><keep-alive><router-view></router-view></keep-alive></el-main>
        <!-- <el-footer class="app-footer" :height="footerHeight + 'px'"> -->
          <!-- <app-footer></app-footer> -->
        <!-- </el-footer> -->
      </el-container>
    </el-main>
  </el-container>
  <!-- <m-back-top body-id="appBody"></m-back-top> -->
</el-container>


</template>
<script type="text/javascript">
import AppHeader from '@/components/app-header';
import AppSide from '@/components/app-side';
export default {
  name: 'app-view',
  data() {
    return {
      isCollapse: false,
      hideSide: false,
      sideWidth: 180,
      footerHeight: 50,
      headerHeight: 72,
      theme: { theme: {} }
    };
  },
  components: {
    AppHeader,
    AppSide
  },
  methods: {
    handleSideSwitch(val) {
      this.isCollapse = val;
      this.sideWidth = val ? 60 : 200;
    },
    handleSwitchHideSide() {
      this.hideSide = !this.hideSide;
    },
    handleSetTheme(theme) {
      this.theme = theme;
    }
  }
};
</script>
<style lang="scss">
</style>
