<template>
<el-container class="app-container" :class="{
    'mini-side': isCollapse,
    'hide-side': hideSide
  }">

  <el-header class="app-header" :height="headerHeight + 'px'">
    <app-header></app-header>
  </el-header>
  <div class="page-body userinfo-components">
    <div class="page-header">
      <!-- <h1 class="page-title">用户信息</h1> -->
      <el-breadcrumb>
        <el-breadcrumb-item :to="{name: 'home'}">首页</el-breadcrumb-item>
        <el-breadcrumb-item>概况</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="box">
      <div class="home-data">
        <h3>昨日数据</h3>
        <!-- <center>
    <img src="../assets/logo.png" alt="" style="margin-top: 50px;width: 200px;">
    <h1 style="font-weight: 100;font-size: 35px;">汇众诚讯管理平台</h1>
  </center> -->
        <el-row :gutter="12">
          <el-col :span="6">
            <el-card shadow="always">
              <div class="mb10">入账金额</div>
              <strong>{{data.incomeAmt||0}}</strong>
            </el-card>
          </el-col>
          <el-col :span="4">
            <el-card shadow="always">
              <div class="mb10">订单数</div>
              <span class="text">{{data.orderNum||0}}</span>
            </el-card>
          </el-col>
          <el-col :span="4">
            <el-card shadow="always">
              <div class="mb10">成功数</div>
              <span class="text">{{data.succNum||0}}</span>
            </el-card>
          </el-col>
          <el-col :span="4">
            <el-card shadow="always">
              <div class="mb10">失败数</div>
              <span class="text">{{data.failNum||0}}</span>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="always">
              <div class="mb10">充值订单总额</div>
              <span class="text">{{data.rechargeAmt||0}}</span>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>

  </div>
  <!-- <m-back-top body-id="appBody"></m-back-top> -->
</el-container>
</template>

<script>
import AppHeader from '@/components/app-header';
export default {
  name: 'app-view',
  data() {
    return {
      isCollapse: false,
      hideSide: false,
      sideWidth: 180,
      footerHeight: 50,
      headerHeight: 72,
      data: {},
      theme: {
        theme: {}
      }
    };
  },
  components: {
    AppHeader
  },
  methods: {}
};
</script>

<style lang="scss">
</style>
