import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'am',
    messages: {
      am: require('~/locales/am.json'),
      en: require('~/locales/en.json')
    }
  })

  store.subscribe((mutation, state) => {
    if (mutation.type === "SET_LANG") {
      app.i18n.locale = mutation.payload
    }
  })
}
