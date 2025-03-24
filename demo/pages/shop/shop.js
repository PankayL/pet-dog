// pages/shop/shop.js
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
    buttonImageUrals: [{
        image: app.globalData.baseUrl + '/Image/shop/button/classify.jpg',
        text: '分类',
        url: '/pages/shopclassify/shopclassify'
      },
      {
        image: app.globalData.baseUrl + '/Image/shop/button/order.jpg',
        text: '订单',
        url: '/pages/shoporder/shoporder'
      },
      {
        image: app.globalData.baseUrl + '/Image/shop/button/shopping.jpg',
        text: '车篮'
      },
      {
        image: app.globalData.baseUrl + '/Image/shop/button/footprint.jpg',
        text: '足迹'
      },
    ],

    // 特价轮播图
    indicatorDots: true, // 是否显示指示点
    autoplay: true, // 是否自动播放
    interval: 5000, // 自动播放间隔时间
    duration: 500, // 滑动动画时长
    circular: true, // 是否采用衔接滑动
    pages: [
      [{
        imageSrc: app.globalData.baseUrl + '/Image/shop/specialoffer/commodity_01.jpg',
        text: '2人团',
        name: '小玩具',
        price: '￥100',
        originalprice: '￥200'
      }, {
        imageSrc: app.globalData.baseUrl + '/Image/shop/specialoffer/commodity_02.jpg',
        text: '2人团',
        name: '小玩具',
        price: '￥100',
        originalprice: '￥200'
      }, {
        imageSrc: app.globalData.baseUrl + '/Image/shop/specialoffer/commodity_03.jpg',
        text: '2人团',
        name: '小玩具',
        price: '￥100',
        originalprice: '￥200'
      }, {
        imageSrc: app.globalData.baseUrl + '/Image/shop/specialoffer/commodity_04.jpg',
        text: '2人团',
        name: '小玩具',
        price: '￥100',
        originalprice: '￥200'
      }, ],
      [{
        imageSrc: app.globalData.baseUrl + '/Image/shop/specialoffer/commodity_05.jpg',
        text: '2人团',
        name: '小玩具',
        price: '￥100',
        originalprice: '￥200'
      }, {
        imageSrc: app.globalData.baseUrl + '/Image/shop/specialoffer/commodity_06.jpg',
        text: '2人团',
        name: '小玩具',
        price: '￥100',
        originalprice: '￥200'
      }, {
        imageSrc: app.globalData.baseUrl + '/Image/shop/specialoffer/commodity_07.jpg',
        text: '2人团',
        name: '小玩具',
        price: '￥100',
        originalprice: '￥200'
      }, {
        imageSrc: app.globalData.baseUrl + '/Image/shop/specialoffer/commodity_08.jpg',
        text: '2人团',
        name: '小玩具',
        price: '￥100',
        originalprice: '￥200'
      }, ],
    ],

    // 筛选按钮
    buttons: [{
        text: '为您推荐',
        flag: 0
      },
      {
        text: '热销产品',
        flag: 1
      },
      {
        text: '上新啦',
        flag: 2
      },
      {
        text: '狗狗零食',
        flag: 3
      },
      {
        text: '狗狗主粮',
        flag: 4
      },
      {
        text: '日用品',
        flag: 5
      },
      {
        text: '清洁用品',
        flag: 6
      },
      {
        text: '玩具',
        flag: 7
      },
    ],
    current: 0, // 当前选中按钮的索引
    merchandise: [{
        imageSrc: app.globalData.baseUrl + '/Image/shop/specialoffer/commodity_01.jpg',
        name: '小玩具',
        price: '￥100',
        flag: 1
      }, {
        imageSrc: app.globalData.baseUrl + '/Image/shop/specialoffer/commodity_02.jpg',
        name: '小玩具',
        price: '￥100',
        flag: 0
      }, {
        imageSrc: app.globalData.baseUrl + '/Image/shop/specialoffer/commodity_03.jpg',
        name: '小玩具',
        price: '￥100',
        flag: 2
      }, {
        imageSrc: app.globalData.baseUrl + '/Image/shop/specialoffer/commodity_04.jpg',
        name: '小玩具',
        price: '￥100',
        flag: 3
      }, {
        imageSrc: app.globalData.baseUrl + '/Image/shop/specialoffer/commodity_05.jpg',
        name: '小玩具',
        price: '￥100',
        flag: 2
      }, {
        imageSrc: app.globalData.baseUrl + '/Image/shop/specialoffer/commodity_06.jpg',
        name: '小玩具',
        price: '￥100',
        flag: 1
      }, {
        imageSrc: app.globalData.baseUrl + '/Image/shop/specialoffer/commodity_08.jpg',
        name: '小玩具',
        price: '￥100',
        flag: 0
      }, {
        imageSrc: app.globalData.baseUrl + '/Image/shop/specialoffer/commodity_07.jpg',
        name: '小玩具',
        price: '￥100',
        flag: 0
      },

    ],
    displayedMerchandise: [], // 用于展示的商品列表

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

  // 跳转按钮
  goButton(e) {
    let url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: url
    })
  },

  // 点击按钮时触发的事件
  handleTap: function (e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      current: index
    });
    this.filterMerchandise(index);
  },

  // 根据按钮点击筛选商品
  filterMerchandise: function (flag) {
    const merchandise = this.data.merchandise;
    const filteredMerchandise = merchandise.filter(item => item.flag === flag);
    this.setData({
      displayedMerchandise: filteredMerchandise
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 默认加载第一个按钮对应的商品
    this.filterMerchandise(this.data.current);
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