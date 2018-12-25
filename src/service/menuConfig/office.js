export default [
  {
    id: '', // id
    name: '', // 路由名称
    permitId: 497, // 权限id
    label: '消息', // 中文名称 => lanPath为空时显示
    lanPath: 'menus.setMessage', // 国际化读取路径，$t('menus.setMessage')
    component: 'office/setMessage', // 组件路径
    icon: '' // 图标-留用
  },
  {
    id: 'message',
    name: 'message',
    permitId: 2,
    label: '信息中心',
    lanPath: '',
    component: '',
    icon: ''
  }];
