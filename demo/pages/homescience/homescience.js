// pages/homescience/homescience.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isNavBarFixed: 'static',
    isNavBarFixedFlag: true,
    isPlaceholder: false,
    showPopup: false,
    background: app.globalData.baseUrl + '/video/background/background_1.gif',
    heighthead: 0,
    imgUrl: '',
    petDog: {},
    showPopupInfor: false,
  },

  // 选择上传图片
  goToDogRecognizer(e) {
    let that = this; // 保存当前上下文的引用
    wx.chooseMedia({
      count: 1,
      mediaType: ['image', 'video'],
      sourceType: ['album', 'camera'],
      success(res) {
        wx.showLoading({
          title: '上传中...',
        })
        // tempFilePath可以作为img标签的src属性显示图片
        // 使用concat方法将新的临时文件路径添加到list数组中
        // 从选择的媒体中获取图片路径
        const imgUrl = res.tempFiles[0].tempFilePath;
        // 更新数据，将图片路径存入 imgUrl 中
        that.setData({
          imgUrl: imgUrl
        });
        // 调用上传函数
        that.uploadAvatar();
      }
    })
  },

  // 上传图片函数
  uploadAvatar() {
    wx.showLoading({
      title: '检测中...',
    });

    wx.uploadFile({
      url: app.globalData.serverUrl + '/petdog/petdog/uploadAvatar',
      filePath: this.data.imgUrl,
      name: 'avatar',
      success: (res) => {
        // 上传成功后隐藏加载动画
        wx.hideLoading();
        // 处理上传成功后的逻辑
        // 将返回的数据赋值给变量
        const responseData = JSON.parse(res.data); // 解析返回的 JSON 数据
        this.setData({
          petDog: responseData,
          showPopupInfor: true,
          ['petDog.url']: app.globalData.baseUrl + responseData.url,
        });
      },
      fail: (err) => {
        // 上传失败后隐藏加载动画
        wx.hideLoading();
        // 处理上传失败后的逻辑
      },
    });
  },

  // 点击隐藏狗狗信息
  hidePetInfo() {
    this.setData({
      petDog: {} // 将 petDog 变量置为空对象，隐藏狗狗信息
    });
  },

  // 当输入框获得焦点时
  onInputFocus() {
    this.setData({
      heighthead: 271,
      isNavBarFixed: 'fixed',
      isNavBarFixedFlag: false,
      isPlaceholder: true,
    }); // 更新输入框的焦点状态
  },

  // 当输入框失去焦点时
  onInputBlur() {
    this.setData({
      heighthead: 0,
    }); // 更新输入框的焦点状态
  },

  // 打开弹出层
  openPopup() {
    this.setData({
      showPopup: true, // 将 showPopup 设置为 true，打开弹出层
    });
  },

  // 关闭弹出层
  closePopup() {
    this.setData({
      showPopup: false, // 将 showPopup 设置为 false，关闭弹出层
      showPopupInfor: false,
    });
  },

  // 当弹出层关闭时的回调
  onPopupClose() {
    this.closePopup(); // 可以简单地调用 closePopup 来关闭
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