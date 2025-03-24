// index.js
const app = getApp();
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '请登录',
      gender: 0, // 1 = Male, 2 = Female, 0 = Unknown
      region: '郑州',
    },
    showAreaPicker: false, // 控制地区选择器的显示
  },

  changeAvatar() {
    const self = this;
    wx.chooseImage({
      count: 1,
      success(res) {
        const tempFilePaths = res.tempFilePaths;
        self.setData({
          'userInfo.avatarUrl': tempFilePaths[0],
        });
      },
    });
  },

  editNickname() {
    const self = this;
    wx.showModal({
      title: '编辑昵称',
      editable: true,
      success(res) {
        if (res.confirm && res.content) {
          self.setData({
            'userInfo.nickName': res.content,
          });
        }
      },
    });
  },

  editGender() {
    const self = this;
    wx.showActionSheet({
      itemList: ['男', '女', '未知'],
      success(res) {
        self.setData({
          'userInfo.gender': res.tapIndex + 1,
        });
      },
    });
  },

  onChooseLocation() {
    const self = this;

    wx.authorize({
      scope: 'scope.userLocation',
      success() {
        wx.chooseLocation({
          success(res) {
            self.setData({
              'userInfo.region': `${res.province}, ${res.city}, ${res.name}`,
            });
          },
          fail() {
            wx.showToast({
              title: '无法获取位置',
              icon: 'error',
            });
          },
        });
      },
      fail() {
        wx.showModal({
          title: '位置授权',
          content: '应用需要您的位置权限以选择地址，请在设置中开启。',
          success(res) {
            if (res.confirm) {
              wx.openSetting({
                success(settingData) {
                  if (settingData.authSetting['scope.userLocation']) {
                    wx.chooseLocation({
                      success(res) {
                        self.setData({
                          'userInfo.region': `${res.province}, ${res.city}, ${res.name}`,
                        });
                      },
                      fail() {
                        wx.showToast({
                          title: '无法获取位置',
                          icon: 'error',
                        });
                      },
                    });
                  }
                },
              });
            }
          },
        });
      },
    });
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

  isStringEmpty(str) {
    // 如果字符串是 null、undefined，或者长度为 0，或者只包含空格，则认为是空
    return str === null || str === undefined || str.trim().length === 0;
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(app.globalData.userInfo.avatarUrl)
    console.log(app.globalData.userInfo)
    if (!(this.isStringEmpty(app.globalData.userInfo.avatarUrl))) {
      this.setData({
        'userInfo.avatarUrl': app.globalData.baseUrl + app.globalData.userInfo.avatarUrl,
        'userInfo.nickName': app.globalData.userInfo.nickname,
        'userInfo.gender': 1
      })
    }
    // console.log(app.globalData.userInfo)
    console.log(this.data.userInfo.nickName)
    this.judegSign()
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
    // 每次页面显示时，刷新数据
    this.onLoad();
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