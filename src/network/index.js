import axios from "axios";

export default {
  network1:function (config) {
    const instance1 = axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout: 5000  //毫秒为单位
    })

    instance1.interceptors.request.use(config => {
      return config
    },error => {
      console.log(error);
    })

    instance1.interceptors.response.use(res => {
      return res.data
    },error => {
      console.log(error)
    })

    return instance1(config) // 此时返回一个promise
  }
}
