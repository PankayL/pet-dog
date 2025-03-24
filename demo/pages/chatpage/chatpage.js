// pages/chatpage/chatpage.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isNavBarFixed: 'static',
    isNavBarFixedFlag: true,
    isPlaceholder: false,
    isPlaceholder_1: false,
    name: '',
    heighthead: 0,

    messages: [
        { 
            flag: 0, content: '您好呀！', 
            avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_1.jpg', 
        },{ 
            flag: 0, content: '我有个问题想请教您！', 
            avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_1.jpg', 
        },{ 
            flag: 1, content: '客气了，尽管说便是', 
            avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_4.jpg',  
        },{ 
            flag: 0, content: '怎么开口呢', 
            avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_1.jpg',  
        },{ 
            flag: 0, content: '有些小羞愧', 
            avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_1.jpg',  
        },{ 
            flag: 0, content: '本来是不想叨扰的', 
            avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_1.jpg',  
        },{ 
            flag: 0, content: '实在是不能', 
            avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_1.jpg',  
        },{ 
            flag: 1, content: '尽管说，没关系的' , 
            avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_4.jpg', 
        },{ 
            flag: 1, content: '如果有需要' , 
            avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_4.jpg', 
        },{ 
            flag: 1, content: '我会尽力提供帮助的' , 
            avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_4.jpg', 
        },{ 
            flag: 0, content: '好的', 
            avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_1.jpg',  
        },{ 
            flag: 0, content: '其实也不是什么要紧的是', 
            avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_1.jpg',  
        },{ 
            flag: 0, content: '就是想请教您一个问题', 
            avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_1.jpg',  
        },{ 
            flag: 0, content: '就是......', 
            avatar: app.globalData.baseUrl + '/Image/home/adopt/dog_1.jpg',  
        },
    ]

  },

  // 当输入框获得焦点时
  onInputFocus() {
    this.setData({ 
        heighthead: 260,
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
    // 从 URL 参数中获取数据
    const name = options.name;

    // 你可以将这些数据保存到页面的 data 中，或者执行其他操作
    this.setData({
      name: name,
    });
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