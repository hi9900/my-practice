import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: [],
    menuList: [
      {
        title: '아메리카노',
        price: 3000,
        selected: true,
        image: 'https://source.unsplash.com/featured/?americano'
      },
    ],
    sizeList: [
      {
        name: 'small',
        price: 500,
        selected: true,
      },
    ],
  },
  getters: {
  },
  mutations: {
    addOrder: function (state) {
      let addItem = {}
      state.menuList.forEach((menu) => {
        if (menu.selected === true) {
          addItem.push(menu)
        }
      })
      state.sizeList.forEach((size) => {
        if (size.selected === true) {
          addItem.push(size)
        }
      })
      state.orderList.push(addItem)
    },
    updateMenuList: function (state, selectedMenu) {
      state.menuList.foreach((menu) => {
        if (menu.title === selectedMenu.title) {
          menu.selected = true
        }
      })
    },
    updateSizeList: function (state, selectedSize) {
      state.sizeList.forEach((menu) => {
        if (menu.name === selectedSize.name) {
          menu.selected = true
        }
      })
    },
  },
  actions: {
  },
  modules: {
  }
})