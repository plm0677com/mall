import {ADD_COUNT, ADD_TO_CART} from '@/store/mutation-type'

export default {
  getCartInfo({commit, state}, payload) {
    return new Promise(((resolve, reject) => {
      const isExist = state.cartList.find(element => {
        return payload.cartCount === element.cartCount
      })
      if (isExist) {
        commit(ADD_COUNT, isExist)
        resolve('购物车商品数量+1')
      } else {
        commit(ADD_TO_CART, payload)
        resolve('添加商品到购物车')
      }
    }))
  }
}
