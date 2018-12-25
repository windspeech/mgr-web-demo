import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from '@/service/language';

Vue.use(VueI18n);
export default new VueI18n({
  locale: 'zh_CH', // 语言标识
  messages
});
