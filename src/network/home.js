import {request,requestM} from "./request"

export function getHomeMultiData() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(sort,page) {
  return requestM({
    url: 'search?cKey=h5-cube&fcid=10062603',
    params: {
      sort,
      page
    }
  })
}