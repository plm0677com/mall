import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  getters: {},
  mutations: {
    getCartInfo(state, payload) {
      //判断payload是否已经在cartList内存在
      //method first:
      // 1. 存在 则对应的 cartCount + 1
      // 2. 不存在 则将该payload 添入 cartList
      // let isCart = null
      // for (const item of state.cartList) {
      //   if(item.cartId === payload.cartId){
      //     isCart = item
      //   }
      // }

      // method second:
      const isExist = state.cartList.find(element=>{
        return payload.cartCount === element.cartCount
      })
      // isCart = null 表示 cartList内没有该种商品
      // isCart !=null 表示 cartList内存在该种商品
      // if(isCart){
      //   isCart.cartCount += 1
      // }else{
      //   state.cartList.push(payload)
      // }
      //
      // isExist = -1 表示 cartList内没有该种商品
      // isExist != -1 表示 cartList有该种商品
      console.log(isExist);
      if(isExist){
        isExist.cartCount += 1
      }else{
        state.cartList.push(payload)
      }

    }
  },
  actions: {},
  modules: {}
})

export default store
