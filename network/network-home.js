import request from './index.js'

export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}