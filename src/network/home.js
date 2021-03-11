import {request,requestM} from "./request"

export function getHomeMultiData() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods() {
  return requestM({
    url: 'search?cKey=h5-cube&fcid=10062603&page=1&_version=1&pid=&q=&cpc_offset=0&sort=sell&_=1615441969349'
  })
}