// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// import Summary from 'text-summary'
import DefaultLayout from '~/layouts/Default.vue'
import App from '~/layouts/App.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('App', App)

  Vue.filter('summary', function(val) {
    let text = val.substr(1, 250)
    text = text.toString()
    return text.replace(/<[^>]*>/g, '').replace('p>', '') + '...'
  })
}
