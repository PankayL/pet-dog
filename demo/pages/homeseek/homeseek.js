// pages/homeseek/homeseek.js
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
    addImageUral: '/icon/trend/add.png',

    seekdogs: [],
    currentPage: 1,
    pageSize: 10,
    loading: false, // 标记是否在加载中
    hasMoreData: true // 标记是否有更多数据

  },

  // 实现页面跳转
  goSeekAdd() {
    wx.navigateTo({
      url: "/pages/homeseekadd/homeseekadd",
    })
  },

  // 获取信息
  getSeekDogLimit(page) {
    const that = this;

    // 防止在加载中重复请求
    if (this.data.loading || !this.data.hasMoreData) {
      return;
    }

    this.setData({
      loading: true // 设置加载中
    });

    wx.request({
      url: app.globalData.serverUrl + '/petdog/seekdog/getSeekDogLimit', // API 端点
      method: 'GET',
      data: {
        current: page, // 参数
        size: that.data.pageSize,
      },
      success: function (res) {
        if (res.statusCode === 200) { // 确保成功
          let newSeekdogs = res.data;
          // 如果返回的数据少于 pageSize，则没有更多数据
          const hasMoreData = newSeekdogs.length === that.data.pageSize;

          // 为每个对象的 'imgUrl' 属性添加前缀
          const updateSeekDogs = res.data.map(item => {
            if (item.imgUrl) {
              item.imgUrl = app.globalData.baseUrl + item.imgUrl;
            }
            return item;
          });

          // 追加数据
          const updatedSeekDogs = that.data.seekdogs.concat(updateSeekDogs);

          that.setData({
            seekdogs: updatedSeekDogs,
            currentPage: page,
            hasMoreData,
            loading: false
          }), () => {
            // console.log(that.data.dailyTips); 
          };
        } else {
          console.error('Failed to get daily tips:', res.statusCode);
        }
      },
      fail: function (error) {
        console.error('Request failed:', error);
        wx.showToast({
          title: '请求失败，请检查网络连接',
          icon: 'none',
        });
      }
    });
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
    this.getSeekDogLimit(this.data.currentPage)
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
    this.setData({
      seekdogs: [],
      currentPage: 1,
      loading: false,
      hasMoreData: true
    })
    this.onLoad();
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
    if (this.data.hasMoreData) {
      this.getSeekDogLimit(this.data.currentPage + 1); // 加载下一页
    } else {
      wx.showToast({
        title: '主人，没有啦 ~',
        icon: 'none', // 显示为文字
        duration: 1000, // 显示 1 秒钟
      });
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})