// pages/chat/chat.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isNavBarFixed: 'static',
    isNavBarFixedFlag: true,
    isPlaceholder: false,
    searchImageUral: '/icon/search/search.png',
    image: app.globalData.baseUrl + '/Image/home/button/seekpet.jpg',

    messages: [{
      avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_1.jpg',
      name: '好友A',
      time: '18:30',
      message: '你好！最近怎么样？'
    }, {
      avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_2.jpg',
      name: '好友B',
      time: '18:30',
      message: '你好！最近怎么样？'
    }, {
      avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_3.jpg',
      name: '好友C',
      time: '18:30',
      message: '你好！最近怎么样？'
    }, {
      avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_4.jpg',
      name: '好友D',
      time: '18:30',
      message: '你好！最近怎么样？'
    }, {
      avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_5.jpg',
      name: '好友E',
      time: '18:30',
      message: '你好！最近怎么样？'
    }, {
      avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_6.jpg',
      name: '好友F',
      time: '18:30',
      message: '你好！最近怎么样？'
    }, {
      avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_1.jpg',
      name: '好友G',
      time: '18:30',
      message: '你好！最近怎么样？'
    }, {
      avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_2.jpg',
      name: '好友H',
      time: '18:30',
      message: '你好！最近怎么样？'
    }, {
      avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_3.jpg',
      name: '好友I',
      time: '18:30',
      message: '你好！最近怎么样？'
    }, {
      avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_4.jpg',
      name: '好友J',
      time: '18:30',
      message: '你好！最近怎么样？'
    }, {
      avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_5.jpg',
      name: '好友K',
      time: '18:30',
      message: '你好！最近怎么样？'
    }, {
      avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_6.jpg',
      name: '好友L',
      time: '18:30',
      message: '你好！最近怎么样？'
    }, {
      avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_1.jpg',
      name: '好友M',
      time: '18:30',
      message: '你好！最近怎么样？'
    }, {
      avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_2.jpg',
      name: '好友N',
      time: '18:30',
      message: '你好！最近怎么样？'
    }, {
      avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_3.jpg',
      name: '好友O',
      time: '18:30',
      message: '你好！最近怎么样？'
    }, ]

  },

  // 跳转到聊天界面
  gochatpage(e) {
    let name = e.currentTarget.dataset.name

    wx.navigateTo({
      url: "/pages/chatpage/chatpage?name=" + name,
    })
  },

  onPageScroll(e) {
    // 获取当前页面滚动的距离
    const scrollTop = e.scrollTop;
    if (scrollTop >= 0 && this.data.isNavBarFixedFlag) {
      this.setData({
        isNavBarFixed: 'fixed',
        isNavBarFixedFlag: false,
        isPlaceholder: true,
      });
    } else if (scrollTop <= 0 && !this.data.isNavBarFixedFlag) {
      this.setData({
        isNavBarFixed: 'static',
        isNavBarFixedFlag: true,
        isPlaceholder: false,
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.judegSign()
  },

  // 判断用户是否已经注册登录
  judegSign() {
    // 获取数据库的注册信息，此处以静态为例

    // 获取之后进行判断
    if (!app.globalData.register) {
      wx.navigateTo({
        url: '/pages/sign/sign',
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})