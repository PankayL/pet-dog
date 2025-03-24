// pages/shopclassify/shopclassify.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isNavBarFixed: 'static',
    isNavBarFixedFlag: true,
    isPlaceholder: false,

    categories: ['玩具', '服装', '食品', '家居用品'], // 商品类别
    currentCategory: 0, // 当前选中的商品类别
    products: [ // 商品数据
      {
        category: '玩具',
        name: '套绳',
        image: app.globalData.baseUrl + '/Image/shop/specialoffer/commodity_01.jpg',
        price: '$15'
      },
      {
        category: '玩具',
        name: '冰凉垫子',
        image: app.globalData.baseUrl + '/Image/shop/specialoffer/commodity_02.jpg',
        price: '$56'
      },
      {
        category: '玩具',
        name: '周边抱枕',
        image: app.globalData.baseUrl + '/Image/shop/specialoffer/commodity_03.jpg',
        price: '$86'
      },
      {
        category: '玩具',
        name: '毛绒娃娃',
        image: app.globalData.baseUrl + '/Image/shop/specialoffer/commodity_04.jpg',
        price: '$72'
      },
      {
        category: '服装',
        name: 'T恤',
        image: 'https://example.com/tshirt.jpg',
        price: '$19.99'
      },
      {
        category: '食品',
        name: '牛奶',
        image: 'https://example.com/milk.jpg',
        price: '$2.99'
      },
      {
        category: '家居用品',
        name: '抱枕',
        image: 'https://example.com/pillow.jpg',
        price: '$29.99'
      },
    ],
    filteredProducts: [] // 根据类别筛选后的商品数据
  },

  onLoad: function () {
    // 页面加载时，默认展示第一个类别的商品
    this.filterProducts(0);
  },

  switchCategory: function (e) { // 切换商品类别
    let index = e.currentTarget.dataset.index;
    this.setData({
      currentCategory: index
    });
    this.filterProducts(index);
  },

  filterProducts: function (index) { // 根据类别筛选商品
    let category = this.data.categories[index];
    let filteredProducts = this.data.products.filter(product => product.category === category);
    this.setData({
      filteredProducts: filteredProducts
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