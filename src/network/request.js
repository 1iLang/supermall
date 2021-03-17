import axios from 'axios'
import $ from '@/common/jquery-3.6.0.min.js'

//第一种封装
export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })
  // 2.2响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })

  //发送真正的网络请求
  return instance(config)
}

export function requestM(config) {
  if (process.env.NODE_ENV !== 'production') {
    // 1.创建axios的实例
    const instance = axios.create({
      baseURL: '/api',
      timeout: 5000
    })
    // 2.axios的拦截器
    // 2.1响应拦截
    instance.interceptors.response.use(res => {
      return res.data
    }, err => {
      console.log(err)
    })
    //发送真正的网络请求
    return instance(config)
  } else {
    return new Promise((resolve, reject) => {
      $.ajax({ //生产时暂时使用jquery ajax
        type: "get",
        url: "https://list.mogujie.com/" + config.url,
        data: {
          sort: config.params.sort,
          page: config.params.page
        },
        dataType: "jsonp",
        jsonp: "callback"
      }).done(resolve).fail(reject);
    })
  }
}
