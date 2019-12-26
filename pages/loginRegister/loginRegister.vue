<template>
  <!-- 注册页面 ming -->
  <view class="login">
    <!-- 登录 -->
    <view class="login-title">登录/注册</view>
    <!-- 注册 -->
    <view class="login-register">新号码自动注册</view>
    <!-- 输入手机号码和验证码区域 -->
    <view class="login-content">
      <view class="login-tel">
        <input placeholder="请输入手机号" type="number" v-model="phone" focus placeholder-class="tel-password-class" />
				<view>|<text v-if="isLogin" @click="login">获取验证码</text><text v-else>剩余{{num}}秒</text></view>
      </view>
      <view class="login-password">
        <input placeholder="请输入收到的验证码" type="number" v-model="verificationVal" placeholder-class="tel-password-class" />
      </view>
    </view>
    <!-- 登录按钮 -->
    <view class="login-btn" :class="{ active: isActive }">
      <button class="btn" :class="{ active: isActive }" @click="goLoginSetLoginPassword">登录</button>
    </view>
    <!-- 密码登录区域 -->
    <!-- <view class="login-text">
      <view>密码登录</view>
    </view> -->
    <!-- 第三方登录 -->
    <view class="login-third">
      <view class="third-text">第三方账号登录</view>
      <button class="third-img">
        <image src="/static/images/wechart.png"></image>
      </button>
      <view class="third-weixin">微信登录</view>
      <view class="third-footer">登录注册即表示你同意《<text>蛙农场用户协议</text>》和《<text>蛙农场隐私协议</text>》</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 手机号码输入的内容
      phone: '',
      // 验证码输入的内容
      verificationVal: '',
      // 收到的验证码
      code: '',
      // 控制发送以及剩余时间的切换显示
      isLogin: true,
      // 定时器命名
      timer: "",
      // 倒计时内容
      num: 60,
    };
  },
  methods: {
		// (去设置登录密码页面 暂时废弃 直接使用验证码登录 然后跳转到输入邀请码页面)
		goLoginSetLoginPassword() {
      // 手机号码正则表达式
       var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/
			if (reg.test(this.phone) && this.verificationVal == this.code ) {
        // return uni.navigateTo({
        //   url: "/pages/loginSetLoginPassword/loginSetLoginPassword"
        // })
        // 先假定一个字段 来判断用户的登录状态 未设置过期时间
        uni.setStorageSync('userLogin', this.phone)
        return uni.navigateTo({
          url: "/pages/loginInvitationCode/loginInvitationCode"
        })
      } else {
        uni.showToast({
            title: '请输入手机号码或验证码',
            duration: 2000,
            icon: 'none'
        })
      }
    },
    // 获取验证码
    login() {
      // 手机号码正则表达式
       var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/
      if (reg.test(this.phone)) {
        this.isLogin = false
        // 调用倒计时函数
        this.countDown()
        uni.request({
          url: 'http://192.168.1.166:8086/WNC/wxlogin/register',
          data: {
            phone: this.phone
          },
          header: {
          'Content-Type': "application/x-www-form-urlencoded; charset=utf-8"
          },
          success: res => {
            console.log(res)
            this.code = res.data.code
            uni.setStorageSync('phone', this.phone)
          }
        })
      } else {
        uni.showToast({
            title: '请输入正确的手机号码',
            duration: 2000,
            icon: 'none'
        });
      }
    },
    // 倒计时效果
    countDown() {
      // 获取倒计时初始值
      var time = this.num;
      // 未定时器命名
      this.timer = setInterval(() => {
        // 每隔一秒 num 就减一，实现同步
        time--;
        // 然后把 num 存进 data，好让用户知道时间在倒计着
        this.num = time;
        // 在倒计时还未到0时，这中间可以做其他的事情，按项目需求来
        if (time == 0) {
          // 这里特别要注意，计时器是始终一直在走的，如果你的时间为0，那么就要关掉定时器！不然相当耗性能
          // 因为timer是存在data里面的，所以在关掉时，也要在data里取出后再关闭
          clearInterval(this.timer);
          // 当时间为 0 的时候 隐藏定时的内容 显示发送的内容 并且为定时器重新赋值
          (this.isLogin = true),
            (this.num = 60);
        }
      }, 1000);
    }
  },
  computed: {
    isActive() {
      if (this.phone === '' || this.verificationVal === '') {
        return false
      }
      return true
    }
  },
};
</script>

<style>
page {
  background-color: #fff;
}
</style>

<style lang="less" scoped>
image {
  width: 100%;
  height: 100%;
}
.active {
  background-color: #279524 !important;
  opacity: 1 !important;
}
.login {
  padding: 0 56rpx;
  // 登录
  .login-title {
    font-size: 48rpx;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(38, 38, 38, 1);
    margin-bottom: 24rpx;
  }
  // 注册
  .login-register {
    font-size: 30rpx;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(151, 151, 151, 1);
  }
  // 手机号 验证码区域
  .login-content {
    > view {
      height: 80rpx;
      border-bottom: 1rpx solid #ECECEC;
    }
    .login-tel {
			margin-top: 123rpx;
			display: flex;
			justify-content: space-between;
			// font-size: 30rpx;
			> input {
				width: 69%;
			}
			> view {
				color:rgba(201,200,207,1);
				text {
					display: inline-block;
					width: 160rpx;
					height: 50rpx;
					line-height: 50rpx;
					text-align: center;
					background:rgba(255,255,255,1);
					border: 1rpx solid rgba(201, 200, 207, 1);
					border-radius:25rpx;
					font-size: 26rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color:rgba(168,168,168,1);
					margin-left: 20rpx;
				}
			}
    }
    .login-password {
      margin: 94rpx 0;
    }
    // 请输入手机号码和验证码的 placeholder 样式
    .tel-password-class {
      font-size: 30rpx !important;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(201, 200, 207, 1);
    }
  }
  // 登录按钮
  .login-btn {
    width: 630rpx;
    height: 90rpx;
    margin-bottom: 33rpx;
    border-radius: 42rpx;
    .btn {
      width: 100%;
      background: rgba(39, 149, 36, 1);
      opacity: 0.5;
      border-radius: 42rpx;
      font-size: 36rpx;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color:rgba(255,255,255,1);
    }
  }
  // 密码登录
  .login-text {
		float: right;
    font-size: 24rpx;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color:rgba(165,165,165,1);
  }
  // 第三方登录区域
  .login-third {
    position: absolute;
    bottom: 60rpx;
    text-align: center;
    .third-text {
      font-size: 30rpx;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color:rgba(165,165,165,1);
    }
    .third-img {
      margin: 20rpx auto 20rpx;
      width: 88rpx;
      height: 88rpx;
      border-radius: 50%;
      padding: 0;
      image {
        width: 88rpx;
        height: 88rpx;
        border-radius: 50%;
      }
    }
    .third-weixin {
      font-size: 22rpx;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color:rgba(104,104,104,1);
      margin-bottom: 38rpx;
    }
    .third-footer {
      font-family: Source Han Sans CN;
      font-size: 22rpx;
      font-weight: 400;
      color: #A8A8A8;
      text {
        color: #4BAA58;
      }
    }
  }
}
</style>