import { ADD_COUNT, ADD_TO_CART } from '@/store/mutation-type'
export default {
  [ADD_COUNT](state, payload) {
    payload.cartCount += 1
  },
  [ADD_TO_CART](state,payload) {
    state.cartList.push(payload)
  }
}
