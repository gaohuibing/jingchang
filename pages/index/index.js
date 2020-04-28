// pages/index/index.js
let oss = 'https://jcxcx.sunkoda.com/upload';
Page({

      /**
       * 页面的初始数据
       */
      data: {

            bgImg: {
                  width: '',
                  height: ''
            },
            scrollLeft: '',
            // 小图原始宽高，原始定位写死
            imgs: [
                  // 聯動金閶
                  {
                        width: 922,
                        height: 454,
                        left: 1340, //1370
                        top: 100,
                        src: '/images/stit1.png',
                        zIndex: 2,
                        id: 0,
                        name: '聯動金閶'
                  },
                  {
                        width: 591,
                        height: 241,
                        left: 1440,
                        top: 610,
                        src: '/images/stit2.png',
                        zIndex: 2,
                        id: 0,
                        name: '聯動金閶'
                  },
                  // 北码头
                  {
                        width: 200,
                        height: 200,
                        left: 1463,
                        top: 1324,
                        src: oss + '/material/bmt.png',
                        zIndex: 2,
                        id: 2,
                        name: '北码头'
                  },
                  //c曹沧洲
                  {
                        width: 200,
                        height: 200,
                        left: 2100,
                        top: 903,
                        src: oss + '/material/ccz.png',
                        id: 3,
                        name: '曹沧洲故居'
                  },
                  // 阊门
                  {
                        width: 702,
                        height: 402,
                        left: 1475,
                        top: 1433,
                        src: oss + '/material/cm.png',
                        id: 1,
                        name: '阊门'
                  },
                  // 寒山寺（枫桥景区）
                  {
                        width: 819,
                        height: 294,
                        left: 416,
                        top: 2026,
                        src: oss + '/material/hss.png',
                        id: 4,
                        name: '枫桥景区'
                  },
                  // 陆润庠
                  {
                        width: 200,
                        height: 200,
                        left: 3266,
                        top: 1280,
                        src: oss + '/material/lry.png',
                        id: 5,
                        name: '陆润庠故居'
                  },
                  // 南浩街
                  {
                        width: 200,
                        height: 200,
                        left: 1279,
                        top: 2149,
                        src: oss + '/material/nhj.png',
                        id: 6,
                        name: '南浩街'
                  },
                  // 泰伯庙
                  {
                        width: 669,
                        height: 395,
                        left: 1962,
                        top: 1144,
                        src: oss + '/material/qbm.png',
                        id: 7,
                        name: '泰伯庙'
                  },
                  // 唐寅
                  {
                        width: 651,
                        height: 525,
                        left: 2795,
                        top: 229,
                        src: oss + '/material/ty.png',
                        id: 10,
                        name: '唐寅历史文化片区'
                  },
                  // 铁铃关（枫桥景区）
                  {
                        width: 594,
                        height: 364,
                        left: 128,
                        top: 1611,
                        src: oss + '/material/tlg.png',
                        id: 8,
                        name: '枫桥景区'
                  },
                  // 文山禅寺
                  {
                        width: 512,
                        height: 341,
                        left: 2558,
                        top: 906,
                        src: oss + '/material/tscs.png',
                        id: 9,
                        name: '文丞相弄'
                  },
                  // 西中市
                  {
                        width: 200,
                        height: 200,
                        left: 2164,
                        top: 1587,
                        src: oss + '/material/xzs.png',
                        id: 11,
                        name: '西中市'
                  },
                  // 艺圃
                  {
                        width: 200,
                        height: 200,
                        left: 2076,
                        top: 2014,
                        src: oss + '/material/yp.png',
                        id: 12,
                        name: '艺圃'
                  },
                  // 占鱼墩
                  {
                        width: 717,
                        height: 290,
                        left: 1243,
                        top: 1889,
                        src: oss + '/material/zyd.png',
                        id: 13,
                        name: '占鱼墩'
                  },
                  // 文丞相弄
                  {
                        width: 182,
                        height: 142,
                        left: 2718,
                        top: 1155,
                        src: oss + '/material/wcx.png',
                        id: 14,
                        name: '文丞相弄'
                  },
                  // 枫桥景区
                  {
                        width: 165,
                        height: 141,
                        left: 595,
                        top: 1850,
                        src: oss + '/material/fq.png',
                        id: 15,
                        name: '枫桥景区'
                  }
            ]
      },

      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function (options) {
            this.imagesOnload()
      },

      /**
       * 生命周期函数--监听页面初次渲染完成
       */
      onReady: function () {

      },

      /**
       * 生命周期函数--监听页面显示
       */
      onShow: function () {

      },

      /**
       * 生命周期函数--监听页面隐藏
       */
      onHide: function () {

      },

      /**
       * 生命周期函数--监听页面卸载
       */
      onUnload: function () {

      },

      /**
       * 页面相关事件处理函数--监听用户下拉动作
       */
      onPullDownRefresh: function () {

      },

      /**
       * 页面上拉触底事件的处理函数
       */
      onReachBottom: function () {

      },

      /**
       * 用户点击右上角分享
       */
      onShareAppMessage: function () {

      },
      // 图片处理
      imagesOnload() {
            let whRatio = 1.4145; // 大图宽高比(宽/高)       
            let winHeight = wx.getSystemInfoSync().windowHeight;
            this.setData({
                  'bgImg.width': winHeight * whRatio,
                  'bgImg.height': winHeight,

            })
            // 缩放比（大图原始宽/缩放后的宽, 计算小图宽高）
            let fitRatio = 3508 / this.data.bgImg.width
            console.log(fitRatio)
            let originImgs = this.data.imgs;
            originImgs.map((item, index) => {
                  item.src = item.src + "?" + Math.floor((Math.random()+Math.floor(Math.random()*9+1))*Math.pow(10,9))
                  item.width = item.width / fitRatio;
                  item.height = item.height / fitRatio;
                  item.left = item.left / fitRatio;
                  item.top = item.top / fitRatio
            })
            this.setData({
                  imgs: originImgs
            })

            setTimeout(h => {
                  this.setData({
                        scrollLeft: '280'
                  })
            }, 0)
      },
      imgTap(e) {
            let id = e.currentTarget.dataset.id;
            let name = e.currentTarget.dataset.name;
            if (id) {
                  if (id == '4' || id == '8' || id == '15') {
                        wx.navigateTo({
                              url: `../detailsFq/details?id=${id}&name=${name}`,
                        })
                  } else {
                        wx.navigateTo({
                              url: `../details/details?id=${id}&name=${name}`,
                        })
                  }

            }

      }
})