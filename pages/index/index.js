//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 首页轮播图数据
    swiperList: [{
        id: 0,
        url: '../../images/index-swiper.png'
      },
      {
        id: 1,
        url: '../../images/index-swiper.png'
      },
      {
        id: 2,
        url: '../../images/index-swiper.png'
      }
    ],
    // 商品详情数据
    shopList: [{
        id: 0,
        url: '../../images/index-recommend-details.jpg',
        member: '铂金会员',
        type: '套餐A',
        num: '九子九仁汤5盒',
        price: '299',
        used: '599.00'
      },
      {
        id: 1,
        url: '../../images/index-recommend-details.jpg',
        member: '普通会员',
        type: '套餐B',
        num: '九子九仁汤5盒',
        price: '2999',
        used: '5999.00'
      },
      {
        id: 2,
        url: '../../images/index-recommend-details.jpg',
        type: '套餐A',
        num: '九子九仁汤5盒',
        price: '399',
        used: '699.00'
      },
      {
        id: 3,
        url: '../../images/index-recommend-details.jpg',
        type: '套餐B',
        num: '九子九仁汤5盒',
        price: '299',
        used: '599.00'
      }
    ],
    // 商品可以滑动区域的数据
    infoList: [{
        id: 0,
        url: '../../images/index-shop-service.png',
        service: '特色采耳',
        timer: '30分钟',
        price: '41.8',
        used: '¥39.9'
      },
      {
        id: 1,
        url: '../../images/index-shop-service.png',
        service: '特色采耳',
        timer: '30分钟',
        price: '41.8',
        used: '¥39.9'
      },
      {
        id: 2,
        url: '../../images/index-shop-service.png',
        service: '特色采耳',
        timer: '30分钟',
        price: '41.8',
        used: '¥39.9'
      },
      {
        id: 3,
        url: '../../images/index-shop-service.png',
        service: '特色采耳',
        timer: '30分钟',
        price: '41.8',
        used: '¥39.9'
      }
    ]
  },
  // 去消息页面
  goIndexNews() {
    wx.navigateTo({
      url: '/pages/indexNews/indexNews'
    })
  },
  // 去套餐详情页面
  goPackageDetails() {
    wx.navigateTo({
      url: '/pages/packageDetails/packageDetails'
    })
  },
  // 去店铺详情页面
  goStoreDetails() {
    wx.navigateTo({
      url: '/pages/storeDetails/storeDetails'
    })
  },
})