// pages/shoporder/shoporder.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isNavBarFixed: 'static',
    isNavBarFixedFlag: true,
    isPlaceholder: false,

    orders: [ // 订单数据
      {
        orderId: '20240514001',
        date: '2024-05-14 10:00:00',
        status: '待付款',
        name: '套绳',
        image: app.globalData.baseUrl + '/Image/shop/specialoffer/commodity_01.jpg',
        price: '$15'
      },
      {
        orderId: '20240514002',
        date: '2024-05-14 11:30:00',
        status: '已付款',
        name: '冰凉垫子',
        image: app.globalData.baseUrl + '/Image/shop/specialoffer/commodity_02.jpg',
        price: '$56'
      },
      {
        orderId: '20240514003',
        date: '2024-05-14 13:45:00',
        status: '已发货',
        name: '周边抱枕',
        image: app.globalData.baseUrl + '/Image/shop/specialoffer/commodity_03.jpg',
        price: '$86'
      },
    ],
    statusOptions: ['全部', '待付款', '已付款', '已发货'], // 筛选条件
    selectedStatus: '全部', // 当前选中的筛选条件
    filteredOrders: [] // 根据筛选条件过滤后的订单数据
  },

  onLoad: function() {
    // 页面加载时，默认展示全部订单
    this.filterByStatus({ currentTarget: { dataset: { value: '全部', index: 0 } } });
  },

  filterByStatus: function(e) { // 根据状态筛选订单
    let value = e.currentTarget.dataset.value;
    let index = e.currentTarget.dataset.index;
    this.setData({
      selectedStatus: value
    });
    let filteredOrders = this.data.orders.filter(order => value === '全部' || order.status === value);
    this.setData({
      filteredOrders: filteredOrders
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