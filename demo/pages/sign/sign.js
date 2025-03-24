// pages/sign/sign.js
const app = getApp();
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'



Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
  },

  initPage() {
    console.log(123456)
    wx.login({
      success: (loginRes) => {
        if (loginRes.code) {
          // 发送登录凭证到后端，注册用户
          wx.request({
            url: app.globalData.serverUrl + '/petdog/user/initPage',
            method: 'POST',
            data: {
              code: loginRes.code,
            },
            success: (requestRes) => {
              const statusCode = requestRes.statusCode;
              if (statusCode === 200) {
                console.log(requestRes.data)
                this.setData({
                  'userInfo.nickName': requestRes.data.nickname,
                  'userInfo.avatarUrl': app.globalData.baseUrl + requestRes.data.avatarUrl,
                  hasUserInfo: true,
                });
              }
              this.concludeInit();
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
        }
      },
      fail: (err) => {
        // 处理登录失败
        console.error('Login failed:', err);
        wx.showToast({
          title: '登录失败',
          icon: 'error',
        });
      },
    });
  },
  // 结束初始化    
  concludeInit() {
    this.setData({
      isLoading: false
    })
    wx.hideLoading(); // 隐藏加载动画
  },
  // ,事件处理函数
  bindViewTap() {
    wx.login({
      success: (loginRes) => {
        if (loginRes.code) {
          // 发送登录凭证到后端，注册用户
          wx.request({
            url: app.globalData.serverUrl + '/petdog/user/addUser',
            method: 'POST',
            data: {
              code: loginRes.code,
              nickName: this.data.userInfo.nickName,
            },
            success: (requestRes) => {
              const statusCode = requestRes.statusCode;
              if (statusCode === 201 || statusCode === 200) {
                // 将用户信息存储到全局变量
                app.globalData.userInfo = requestRes.data;
                app.globalData.register = 1
                console.log(app.globalData.userInfo)
                // 根据状态码决定注册还是登录
                const message = (statusCode === 201) ? '注册成功' : '登录成功';

                if (statusCode === 201) {
                  // 上传头像
                  this.uploadAvatar();
                } else {
                  // 跳转到主页
                  wx.navigateBack({
                    delta: 1, // 返回上一级页面
                  });
                  wx.showToast({
                    title: message,
                    icon: 'success',
                  });
                }
              } else {
                // 注册/登录失败
                wx.showToast({
                  title: '注册失败',
                  icon: 'error',
                });
              }
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
        } else {
          // 登录失败
          wx.showToast({
            title: '登录失败',
            icon: 'error',
          });
        }
      },
      fail: (err) => {
        // 处理登录失败
        console.error('Login failed:', err);
        wx.showToast({
          title: '登录失败',
          icon: 'error',
        });
      },
    });
  },
  // 上传头像函数
  uploadAvatar() {
    wx.uploadFile({
      url: app.globalData.serverUrl + '/petdog/user/uploadAvatar',
      filePath: this.data.userInfo.avatarUrl,
      name: 'avatar',
      formData: {
        openid: app.globalData.userInfo.openid,
      },
      success: (res) => {
        if (res.statusCode === 200) {
          app.globalData.userInfo.avatarUrl = res.data;
          // 跳转到主页
          wx.navigateBack({
            delta: 1, // 返回上一级页面
          });
          wx.showToast({
            title: '注册成功',
            icon: 'success',
          });
        } else {
          wx.showToast({
            title: '头像上传失败',
            icon: 'error',
          });
        }
      },
      fail: (err) => {
        console.error('Upload failed:', err);
        wx.showToast({
          title: '头像上传失败',
          icon: 'error',
        });
      },
    });
  },
  onChooseAvatar(e) {
    const {
      avatarUrl
    } = e.detail
    const {
      nickName
    } = this.data.userInfo
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  onInputChange(e) {
    const nickName = e.detail.value
    const {
      avatarUrl
    } = this.data.userInfo
    this.setData({
      "userInfo.nickName": nickName,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.showLoading({
      title: '加载中...'
    });
    this.initPage()
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