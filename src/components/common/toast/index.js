import toast from "./Toast"
const obj = {

}
obj.install = function (Vue) {
  // 使用构造器创建一个子类
  const Toast = Vue.extend(toast)
  // 创建实例
  const toastExample = new Toast()
  // 挂载实例
  toastExample.$mount(document.createElement('div'))
  // 插入DOM
  document.body.appendChild(toastExample.$el)

  Vue.prototype.$toast = toastExample
}

export default obj
