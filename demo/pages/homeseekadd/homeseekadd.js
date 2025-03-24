// pages/homeseekadd/homeseekadd.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isNavBarFixed: 'static',
    isNavBarFixedFlag: true,
    isPlaceholder: false,
    list: [],
    flag: 1,

    seekdog: {
      title: '',
      description: '',
      location: '',
      contact: '',
    }

  },

  submitForm() {
    const title = this.data.seekdog.title;
    const contact = this.data.seekdog.contact;
    const location = this.data.seekdog.location;
    const description = this.data.seekdog.description;

    if (!title || !location || !contact) {
      wx.showToast({
        title: '请填写标题、地点、联系方式',
        icon: 'none',
      });
      return;
    }

    wx.request({
      url: app.globalData.serverUrl + '/petdog/seekdog/addSeekDog',
      method: 'POST',
      data: {
        title: title,
        contact: contact,
        location: location,
        description: description,
        openid: app.globalData.userInfo.openid,
      },
      success: (requestRes) => {
        // 跳转到主页
        wx.navigateBack({
          delta: 1, // 返回上一级页面
        });
        wx.showToast({
          title: '提交成功！',
          icon: 'success',
        });
      },
      fail: (err) => {
        // 处理请求失败
        console.error('Request failed:', err);
        wx.showToast({
          title: '网络错误',
          icon: 'error',
        });
      },
    });


  },

  onInputTitle(event) {
    this.setData({
      'seekdog.title': event.detail.value
    });
  },

  onInputDescription(event) {
    this.setData({
      'seekdog.description': event.detail.value
    });
  },

  onInputLocation(event) {
    this.setData({
      'seekdog.location': event.detail.value
    });
  },

  onInputPhone(event) {
    this.setData({
      'seekdog.contact': event.detail.value
    });
  },

  // 上传图片  
  chooseImage() {
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
        that.setData({
          list: that.data.list.concat(res.tempFiles.map(file => file.tempFilePath)),
          flag: 0
        });

        // 上传完成后关闭 loading 动画
        wx.hideLoading();
      }
    })
  },

  // 查看图片
  scanImage(e) {
    let imgList = this.data.list;
    let index = e.currentTarget.dataset.index
    wx.previewImage({
      urls: imgList,
      current: imgList[index]
    })
  },

  // 删除图片
  deleteImages(e) {
    let that = this
    let dele = e.currentTarget.dataset.src
    let images = that.data.list

    wx.showModal({
      title: '删除图片',
      content: '确认删除这张图片吗',
      complete: (res) => {
        if (res.cancel) {

        }

        if (res.confirm) {
          for (var i = 0; i < images.length; i++) {
            if (images[i] == dele) {
              images.splice(i, 1)
              that.setData({
                list: images,
                flag: 1
              })
            }
          }
        }
      }
    })

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
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.judegSign();
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