// pages/home/home.js
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
    slideshowImageUrls: [],
    tipsImageUral: app.globalData.baseUrl + '/Image/home/daytips/tips.jpg',
    dailyTips: [],
    buttonImageUrals: [{
      image: app.globalData.baseUrl + '/Image/home/button/science.jpg',
      text: '科普',
      url: '/pages/homescience/homescience'
    }, {
      image: app.globalData.baseUrl + '/Image/home/button/seekpet.jpg',
      text: '寻宠',
      url: '/pages/homeseek/homeseek'
    }, {
      image: app.globalData.baseUrl + '/Image/home/button/activity.jpg',
      text: '活动',
      url: '/pages/homeactivity/homeactivity'
    }, {
      image: app.globalData.baseUrl + '/Image/home/button/amusement.jpg',
      text: '娱乐',
      url: '/pages/homeentertainment/homeentertainment'
    }, ],
    discussImageUral: [
      app.globalData.baseUrl + '/Image/home/discuss/discuss_1.jpg'
    ],
    cardData: [
      [{
          image: app.globalData.baseUrl + '/Image/home/adopt/dog_1.jpg',
          name: '毛毛',
          label: [{
              text: '绝育',
              color: '#FD91C7'
            },
            {
              text: '驱虫',
              color: '#FD91C7'
            },

          ],
          labelColor: '#FD91C7',
          region: '河南省郑州市'
        },
        {
          image: app.globalData.baseUrl + '/Image/home/adopt/dog_6.jpg',
          name: '柯柯',
          label: [{
              text: '绝育',
              color: '#FD91C7'
            },
            {
              text: '免疫',
              color: '#FD91C7'
            },

          ],
          labelColor: '#FD91C7',
          region: '河南省郑州市'
        }
      ],
      [{
          image: app.globalData.baseUrl + '/Image/home/adopt/dog_3.jpg',
          name: '云云',
          label: [{
              text: '绝育',
              color: '#FD91C7'
            },
            {
              text: '驱虫',
              color: '#FD91C7'
            },
            {
              text: '免疫',
              color: '#FD91C7'
            },

          ],
          labelColor: '#FD91C7',
          region: '河南省郑州市'
        },
        {
          image: app.globalData.baseUrl + '/Image/home/adopt/dog_4.jpg',
          name: '小小',
          label: [{
              text: '绝育',
              color: '#FD91C7'
            },
            {
              text: '免疫',
              color: '#FD91C7'
            },

          ],
          labelColor: '#FD91C7',
          region: '河南省郑州市'
        }
      ],
      [{
          image: app.globalData.baseUrl + '/Image/home/adopt/dog_5.jpg',
          name: '球球',
          label: [{
              text: '绝育',
              color: '#FD91C7'
            },
            {
              text: '驱虫',
              color: '#FD91C7'
            },

          ],
          labelColor: '#FD91C7',
          region: '河南省郑州市'
        },
        {
          image: app.globalData.baseUrl + '/Image/home/adopt/dog_2.jpg',
          name: '齐齐',
          label: [{}

          ],
          labelColor: '#FD91C7',
          region: '河南省郑州市'
        }
      ],
    ]
  },

  // 获取资源信息
  getDailyTipsByRecommend() {
    const that = this;
    wx.request({
      url: app.globalData.serverUrl + '/petdog/dailytips/getDailyTipsByRecommend', // API 端点
      method: 'GET',
      success: function (res) {
        if (res.statusCode === 200) { // 确保成功
          that.setData({
            dailyTips: res.data
          }), () => {
            // console.log(that.data.dailyTips); 
          };
        } else {
          console.error('Failed to get daily tips:', res.statusCode);
        }
      },
      fail: function (error) {
        that.setData({
          dailyTips: [{
            id: 1,
            title: "000000"
          }, {
            id: 2,
            title: "111111"
          }]
        })
        console.error('Request failed:', error);
      }
    });
  },
  getSlideshowByRecommend() {
    const that = this;
    that.setData({
      slideshowImageUrls: []
    })
    wx.request({
      url: app.globalData.serverUrl + '/petdog/slideshow/getSlideShowByRecommend', // API 端点
      method: 'GET',
      success: function (res) {
        if (res.statusCode === 200) { // 确保成功
          const updatedUrls = res.data.map((item) => {
            return app.globalData.baseUrl + item;
          });
          that.setData({
            slideshowImageUrls: updatedUrls
          }), () => {
            // console.log(that.data.dailyTips); 
          };
        } else {
          console.error('Failed to get daily tips:', res.statusCode);
        }
      },
      fail: function (error) {
        that.setData({
          dailyTips: []
        })
        console.error('Request failed:', error);
      }
    });
  },

  // 去更多页面
  goToMore(e) {
    wx.navigateTo({
      url: '/pages/homemore/homemore'
    })

  },
  // 跳转按钮
  goButton(e) {
    let url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: url
    })
  },
  godiscuss(e) {
    wx.navigateTo({
      url: '/pages/homediscuss/homediscuss'
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getDailyTipsByRecommend();
    this.getSlideshowByRecommend();
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