import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Dashboard',
      icon: 'ti-panel',
      path: '/admin/overview'
    },
    {
      name: 'Specialisti',
      icon: 'ti-user',
      path: '/admin/stats'
    },
    {
      name: 'Strutture',
      icon: 'ti-home',
      path: '/admin/table-list'
    },
    /*
    {
      name: 'Typography',
      icon: 'ti-text',
      path: '/admin/typography'
    },
    {
      name: 'Icons',
      icon: 'ti-pencil-alt2',
      path: '/admin/icons'
    },
    */
    {
      name: 'Mappa',
      icon: 'ti-map',
      path: '/admin/maps'
    }
    /*
    {
      name: 'Notifications',
      icon: 'ti-bell',
      path: '/admin/notifications'
    }
    */
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
