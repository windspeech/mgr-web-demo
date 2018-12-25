const page = name => () => import('@/views/' + name);
import AppView from '@/components/app-view';
import menus from '@/service/menuConfig';
let menuArr = [];

function _filterMenu(name) {
  if (menus[name]) {
    menus[name].forEach(item => {
      if (item.component) {
        menuArr.push({
          path: '/' + item.name,
          name: item.name,
          meta: {
            id: item.id
          },
          component: page(item.component)
        });
      }
    });
  }
  return menuArr;
}
export default function(key) {
  return [
    {
      path: '',
      component: AppView,
      children: [..._filterMenu(key)]
    }
  ];
}
