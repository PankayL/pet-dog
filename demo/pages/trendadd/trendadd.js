// pages/trendadd/trendadd.js
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
    content: '',
  },

  // 上传图片  
  chooseImage() {
    let that = this; // 保存当前上下文的引用
    wx.chooseMedia({
        count: 9,
        mediaType: ['image', 'video'],
        sourceType: ['album', 'camera'],
        success(res) {
        wx.showLoading({
            title: '上传中...',
        })
        // tempFilePath可以作为img标签的src属性显示图片
        // 使用concat方法将新的临时文件路径添加到list数组中
        that.setData({
            list: that.data.list.concat(res.tempFiles.map(file => file.tempFilePath))
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
                        list: images
                    })
                }
            }
        }
      }
    })
    
  },

  // 获取文案
  getcontent(e) {
    let content = e.detail.value
    this.setData({
        content
    })
  },

  // 发表动态
  publish() {
    let content = this.data.content
    let imaList = this.data.list

    if (!content) {
        wx.showToast({
          title: '请输入文案',
          icon: 'none'
        })
    } else {
        wx.showModal({
          title: '确认发表',
          content: '',
          complete: (res) => {
            if (res.cancel) {
              
            }
        
            if (res.confirm) {
              
            }
          }
        })
    }
  },

  // 获取当前页面滚动的距离
  onPageScroll(e) {
    
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