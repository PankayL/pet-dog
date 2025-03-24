// pages/trend/trend.js
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
    meaushow: -1,
    showPopup: false,
    heighthead: 0,

    posts: [
        {
            avatar: app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg",
            nickname: '小明',
            time: '2分钟前',
            content: '今天天气不错，好想去看海呀！今天天气不错，好想去看海呀！',
            imgList: [],
            prizeList: ['小红', '傻蛋', '大春', '海洋', '殊词', '逸帆', '落雪', '钟白' , '桥川', '十三', '一心'],
            pingList: [
                { flag: 0, nickName: '小红', content: '我们一起去呀！还可以去吃好吃的可口小海鲜~'},
                { flag: 1, nickName1: '小明', nickName2: '小红', content: '好姐妹一辈子!'},
                { flag: 0, nickName: '傻蛋', content: '我也好想去'},
                { flag: 0, nickName: '大春', content: '一起!'},
            ]
        },{
            avatar: app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg",
            nickname: '小明',
            time: '2分钟前',
            content: '今天天气不错，好想去看海呀！今天天气不错，好想去看海呀！',
            video: app.globalData.baseUrl + "/video/video_01.mp4",
            prizeList: [],
            pingList: [
                { flag: 0, nickName: '小红', content: '我们一起去呀!'},
                { flag: 1, nickName1: '小明', nickName2: '小红', content: '好姐妹一辈子!'},
                { flag: 0, nickName: '傻蛋', content: '我也好想去'},
                { flag: 0, nickName: '大春', content: '一起!'},
            ]
        },{
            avatar: app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg",
            nickname: '小明',
            time: '2分钟前',
            content: '今天天气不错，好想去看海呀！哈哈哈哈',
            imgList: [app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", ],
            prizeList: ['小红', '傻蛋', '大春', '海洋', '殊词', '逸帆', '落雪', '钟白' , '桥川', '十三', '一心'],
            pingList: []
        },{
            avatar: app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg",
            nickname: '小明',
            time: '2分钟前',
            content: '今天天气不错，好想去看海呀！',
            imgList: [app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_4.jpg", ],
            prizeList: [],
            pingList: []
        },{
            avatar: app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg",
            nickname: '小明',
            time: '2分钟前',
            content: '今天天气不错，好想去看海呀！',
            imgList: [app.globalData.baseUrl + "/Image/home/adopt/dog_4.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_3.jpg", ],
            prizeList: [],
            pingList: []
        },{
            avatar: app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg",
            nickname: '小明',
            time: '2分钟前',
            content: '今天天气不错，好想去看海呀！',
            imgList: [app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", ],
            prizeList: [],
            pingList: []
        },{
            avatar: app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg",
            nickname: '小明',
            time: '2分钟前',
            content: '今天天气不错，好想去看海呀！',
            imgList: [app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg",],
            prizeList: [],
            pingList: []
        },{
            avatar: app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg",
            nickname: '小明',
            time: '2分钟前',
            content: '今天天气不错，好想去看海呀！',
            imgList: [app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", ],
            prizeList: [],
            pingList: []
        },{
            avatar: app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg",
            nickname: '小明',
            time: '2分钟前',
            content: '今天天气不错，好想去看海呀！',
            imgList: [app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", ],
            prizeList: [],
            pingList: []
        },{
            avatar: app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg",
            nickname: '小明',
            time: '2分钟前',
            content: '今天天气不错，好想去看海呀！',
            imgList: [app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", ],
            prizeList: [],
            pingList: []
        },{
            avatar: app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg",
            nickname: '小明',
            time: '2分钟前',
            content: '今天天气不错，好想去看海呀！',
            imgList: [app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg", ],
            prizeList: [],
            pingList: []
        },
        // {
        //   id: 2,
        //   avatar: app.globalData.baseUrl + "/Image/home/adopt/dog_6.jpg",
        //   nickname: '小红',
        //   time: '1小时前',
        //   content: '出去散步啦',
        //   liked: false,
        //   likes: 10,
        //   showCommentInput: false,
        //   commentInput: '',
        //   comments: []
        // }
    ],

  },

  // 当输入框获得焦点时
  onInputFocus() {
    this.setData({ 
        heighthead: 220,
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
      meaushow: -1,
      showPopup: true, // 将 showPopup 设置为 true，打开弹出层
    });
  },

  // 关闭弹出层
  closePopup() {
    this.setData({
      showPopup: false, // 将 showPopup 设置为 false，关闭弹出层
    });
  },

  // 当弹出层关闭时的回调
  onPopupClose() {
    this.closePopup(); // 可以简单地调用 closePopup 来关闭
  },

  // 查看图片
  scanImage(e) {
    this.setData({
        meaushow: -1
    })
    const current = e.currentTarget.dataset.src;
    const urls = e.currentTarget.dataset.urls;
    wx.previewImage({
      urls: urls,
      current: current
    })
  },
  
  // 展开评论与点赞
  showMeau(e) {
    let index = e.currentTarget.dataset.index
    if (this.data.meaushow != index) {
        this.setData({
            meaushow: index
        })
    } else {
        this.setData({
            meaushow: -1
        })
    }
    
  },

  // 评论
  comment(e) {
    this.setData({
        show: true
    })
  },

  // 删除动态
  delete(e) {
    // 隐藏评论点赞弹窗
    this.setData({
        meaushow: -1
    })

      let index = e.currentTarget.dataset.index
      let list = this.data.posts
      wx.showModal({
        title: '删除此动态？',
        content: '',
        complete: (res) => {
          if (res.cancel) {
            
          }
      
          if (res.confirm) {
            list.splice(index, 1)
            this.setData({
                posts: list
            })
            wx.showToast({
              title: '已删除',
            })
          }
        }
      })
  },

  // 前往动态发布页面
  goTrendadd() {
      // 隐藏评论点赞弹窗
    this.setData({
        meaushow: -1
    })
    wx.navigateTo({
        url: "/pages/trendadd/trendadd",
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
    // 隐藏评论点赞弹窗
    this.setData({
        meaushow: -1
    })
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

      // 隐藏评论点赞弹窗
        this.setData({
            meaushow: -1
        })
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
    // this.judegSign()
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