const baseURL = 'http://123.207.32.32:8000/api/hy'
export default function request(options){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: baseURL+options.url,
      method: options.method || 'get',
      data:options.data,
      success:resolve,
      fail:reject
    })
  })
}