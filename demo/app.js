// app.js
App({
  onLaunch() {
    const baseURL = 'http://' + this.globalData.url + ':8081'; // 字符串拼接
    const serverURL = 'https://' + this.globalData.url + ':8080'; // 字符串拼接
    this.globalData.baseUrl = baseURL; // 赋值给globalData
    this.globalData.serverUrl = serverURL;

    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: {},
    // 服务器IP
    url: '172.33.156.33',
    baseUrl: '',
    serverUrl: '',
    register: 0,
    openid: '',
  }, 
})
