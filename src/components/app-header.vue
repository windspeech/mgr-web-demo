<template>
  <div :theme="theme.theme.headerTheme">
    <!-- <span class="mini-bar">
      <i class="side-switch"
        :class="{
          'el-icon-more': !mini,
          'el-icon-more-outline': mini
        }"
        @click="handleSwitchSide"
        ></i>
    </span> -->
  
    <div class="app-header-logo-box float-left">
      <span class="header-logo-text">管理平台</span>
    </div>
    <div class="app-header-nav-box float-left">
      <ul>
        <li class="nav-item" v-for="(item, index) in navs" :key="index" :class="{active: item.url.indexOf(curPathName) > -1}">
          <a :href="item.url" class="nav-item-link">
            <font-awesome-icon :icon="item.icons" class="nav-item-icon" />
            <span class="nav-item-text" v-if="item.lanPath">{{$t(item.lanPath)}}</span>
            <span class="nav-item-text" v-else>{{item.label}}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="float-right">
      <el-dropdown align="right" class="top-tool" trigger="click">
        <a href="#" class="top-right">
          <i class="user-o"></i>
          <span>系统管理员</span><i class="el-icon-arrow-down el-icon--right"></i>
        </a>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <router-link :to="{path:'userinfo'}">用户信息</router-link>
          </el-dropdown-item>
          <!-- <el-dropdown-item name="modpas" @click.native="ismodpas=true">修改密码</el-dropdown-item> -->
          <!-- <el-dropdown-item disabled>注销</el-dropdown-item> -->
          <!-- <div class="test-line"></div> -->
          <el-dropdown-item name="logout">退出账号</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- <a href="#" @click.stop.prevent="handleSwitchScreen">
          <i 
            class="fa" 
            :class="isFullScreen ? 'fa-compress' : 'fa-expand'"
            ></i>
        </a> -->
  </div>
</template>
<script type="text/javascript">
// import {
//   mapActions,
//   mapState
// } from 'vuex';
// import {
//   requestFullScreen,
//   exitFullscreen
// } from '@/utils';
// import themes from './theme';
// import md5 from 'js-md5';
// import tool from '@/assets/js/tool';
export default {
  name: 'app-header',
  data() {
    return {
      mini: false,
      isFullScreen: false,
      // themes,
      themeType: '',
      showAside: true,
      theme: {
        theme: {
          headerTheme: 'info'
        }
      },
      curPathName: GLOBAL.PATHNAME || '',
      navs: [
        {
          id: 1,
          label: '办公',
          icons: ['fas', 'desktop'],
          lanPath: '', // 国际化读取路径，$t('menus.setMessage')
          url: '/office.html'
        },
        {
          id: 5,
          label: '招生',
          icons: ['fas', 'user-plus'],
          lanPath: '',
          url: '/students.html'
        },
        {
          id: 233,
          label: '收费',
          icons: ['fas', 'yen-sign'],
          lanPath: '',
          url: '/charge.html'
        },
        {
          id: 9,
          label: '教务',
          icons: ['fas', 'clipboard-list'],
          lanPath: '',
          url: '/educational.html'
        },
        {
          id: 26,
          label: '财务',
          icons: ['fas', 'file-invoice-dollar'],
          lanPath: '',
          url: '/finance.html'
        },
        {
          id: 39,
          label: '报表',
          icons: ['fas', 'chart-bar'],
          lanPath: '',
          url: '/report.html'
        },
        {
          id: 70,
          label: '进销存',
          icons: ['fas', 'balance-scale'],
          lanPath: '',
          url: '/inventory.html'
        },
        {
          id: 521,
          label: '微商城',
          icons: ['fas', 'shopping-cart'],
          lanPath: '',
          url: '/ecshop.html'
        },
        {
          id: 84,
          label: '考级',
          icons: ['fas', 'user-shield'],
          lanPath: '',
          url: '/grade.html'
        },
        {
          id: 9,
          label: '增值服务',
          icons: ['fas', 'crown'],
          lanPath: '',
          url: '/valueAdd.html'
        },
        {
          id: 42,
          label: '设置',
          icons: ['fas', 'cog'],
          lanPath: '',
          url: '/setup.html'
        }
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {
    handleSwitchSide() {
      this.mini = !this.mini;
      this.$emit('switch', this.mini);
    },
    handleSwitchScreen() {
      if (this.isFullScreen) {
        // exitFullscreen();
        this.isFullScreen = false;
      } else {
        // requestFullScreen();
        this.isFullScreen = true;
      }
    },
    handleSwitchHideSide() {
      this.$emit('hide-side');
    }
  },
  created() {}
};
</script>

<style type="text/css">
</style>
