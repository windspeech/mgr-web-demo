<template>
<el-menu-item-group>
  <template v-for="(item, index) in menus">
    <template v-if="isArr(item)">
      <el-menu-item-group :title="typeof item[0] === 'string' ? item[0] : ''" :key="index">
        <el-menu-item v-for="val in item[1]" :key="val.id" :index="val.id + ''" :route="toRoute(val)">
          <i v-if="val.icon" :class="val.icon"></i>
          <span slot="title" v-if="val.lanPath">{{$t(val.lanPath)}}</span>
          <span slot="title" v-else>{{val.label}}</span>
        </el-menu-item>
      </el-menu-item-group>
    </template>
    <template v-else>
      <el-submenu v-if="item.submenu" :key="item.id" :index="item.id + ''">
        <template slot="title">
          <i v-if="item.icon" :class="item.icon"></i>
          <span slot="title">{{item.label}}</span>
          <span slot="title" v-if="item.lanPath">{{$t(item.lanPath)}}</span>
          <span slot="title" v-else>{{item.label}}</span>
        </template>
        <menu-list :menus="item.submenu"></menu-list>
      </el-submenu>
      <el-menu-item v-else :key="item.id" :index="item.id + ''" :route="toRoute(item)">
        <i v-if="item.icon" :class="item.icon"></i>
        <span slot="title">{{item.label}}</span>
          <span slot="title" v-if="item.lanPath">{{$t(item.lanPath)}}</span>
          <span slot="title" v-else>{{item.label}}</span>
      </el-menu-item>
    </template>
  </template>
</el-menu-item-group>
</template>

<script>
export default {
  props: {
    menus: Array
  },
  methods: {
    isArr(v) {
      return Object.prototype.toString.call(v) === '[object Array]';
    },
    toRoute(item) {
      if (item.name) {
        return {
          name: item.name,
          permission: item.id
        };
      } else if (item.path) {
        return {
          path: item.path,
          permission: item.id
        };
      }
      return {};
    }
  }
};
</script>
