// pages/hometips/hometips.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isNavBarFixed: 'static',
    isNavBarFixedFlag: true,
    isPlaceholder: false,

    id: -1,
    content: '',
    parsedContent: [],
    contentInfo: {},
    formattedDate: '',
  },

  // 获取文本信息
  getDailyTipsByRecommend: function () {
    const that = this;
    wx.request({
      url: app.globalData.serverUrl + '/petdog/dailytips/getDailyTipsContentById', // API 端点
      method: 'GET',
      data: {
        id: that.data.id // 参数
      },
      success: function (res) {
        that.setData({
          content: res.data
        }, () => {
          // 在 setData 完成后调用解析函数
          that.parseContent();
        });
      },
      fail: function (err) {
        console.error('Request failed:', err);
      }
    });
    wx.request({
      url: app.globalData.serverUrl + '/petdog/dailytips/getDailyTipsById', // API 端点
      method: 'GET',
      data: {
        id: that.data.id // 参数
      },
      success: function (res) {
        that.setData({
          contentInfo: res.data
        }, () => {
          let truncated = res.data.gmtCreate.slice(0, 10) + '\t' + res.data.gmtCreate.slice(11, 16);
          that.setData({
            formattedDate: truncated
          });
        });
      },
      fail: function (err) {
        console.error('Request failed:', err);
      }
    });

  },

  // 结构化文本
  parseContent() {
    const rawContent = this.data.content;
    console.log(this.data.content)
    const lines = rawContent.split('\n');
    const parsedContent = [];

    lines.forEach((line) => {
      if (line.startsWith('#')) {
        const hashCount = line.match(/^#+/)[0].length;
        const text = line.replace(/^#+\s*/, '');
        if (hashCount === 1) {
          parsedContent.push({
            type: 'h1',
            text
          });
        } else if (hashCount === 2) {
          parsedContent.push({
            type: 'h2',
            text
          });
        } else if (hashCount === 3) {
          parsedContent.push({
            type: 'h3',
            text
          });
        }
      } else if (line.startsWith('{') && line.endsWith('}')) {
        const imageUrl = line.slice(1, -1);
        parsedContent.push({
          type: 'image',
          url: app.globalData.baseUrl + imageUrl
        });
      } else {
        parsedContent.push({
          type: 'text',
          text: line
        });
      }
    });
    this.setData({
      parsedContent
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
    // 获取传递的 id 参数
    const id = options.id;

    // 将参数保存到页面的数据中
    this.setData({
      id: id
    });

    this.getDailyTipsByRecommend()
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