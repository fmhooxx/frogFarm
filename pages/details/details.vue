<template>
<!-- 会员年卡商品详情页 -->
	<view>
		<view class="search-box">
			<view class="search"></view>
			<view class="search-content">
				<view class="search-img">
					<image src="/static/images/search.png"></image>
				</view>
				<view class="search-text">商品搜索</view>
			</view>
			<view>
				<image ></image>
			</view>
		</view>
		<view class="base-cates">
			<!-- 左边 -->
			<scroll-view scroll-y class="cates-left">
				<view
					v-for="item in list"
					:key="item.id"
					class="left-text"
					:class="{active: item.id === isActive}"
					@click="tabTap(item.id)"
				>{{item.uname}}</view>
			</scroll-view>
			<!-- 右边 -->
			<scroll-view scroll-y class="cates-right">
				<block v-for="(item, index) in secondCates" :key="index">
					<view class="right">
						<view class="item-img">
							<image :src="item.url"></image>
						</view>
						<view class="box">
							<view class="title">{{item.title}}</view>
							<view class="weight">{{item.weight}}</view>
							<view class="new">{{item.new}}</view>
							<view class="item-footer">
								<view class="member">{{item.member}}</view>
								<view class="limit" v-show="item.text">
									<image src="/static/images/6.png"></image>
									<text class="text">{{item.text}}</text>
								</view>
								<view class="jiahao">
									<image src="/static/images/vip-add@2x.png"></image>
								</view>
							</view>
						</view>
					</view>
				</block>
			</scroll-view>
			<suspension></suspension>
		</view>
	</view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
        id: 0,
        uname: '时令水果',
        children: [
            {
              pid: 0,
              url: '/static/images/8.png',
              title: '冷冻鸡翅根',
              weight: '500g',
              new: '¥49.90',
              member: '¥45.00',
              text: '会员价'
            },
            {
              pid: 1,
              url: '/static/images/8.png',
              title: '冷冻鸡翅根',
              weight: '500g',
              new: '¥49.90',
              member: '¥45.00',
              text: '会员价'
            }
          ]
        },
        {
        id: 1,
        uname: '禽类水产',
        children: [
            {
              pid: 10,
              url: '/static/images/1.png',
              title: '白萝卜',
              weight: '1000g',
              new: '¥9.90',
              member: '¥5.00',
              text: '会员价'
            }
          ]
        },
        {
        id: 2,
        uname: '粮油副食',
        children: [
            {
              pid: 20,
              url: '/static/images/green-orderlistA.png',
              title: '大白菜',
              weight: '500g',
              new: '¥4.90',
              member: '¥2.00',
              text: '会员价'
            }
          ]
        },
        {
        id: 3,
        uname: '肉类',
        children: [
            {
              pid: 30,
              url: '/static/images/green-orderlistB.png',
              title: '蟠桃',
              weight: '500g',
              new: '¥29.90',
              member: '¥25.00',
              text: '会员价'
            }
          ]
        },
        {
        id: 4,
        uname: '蔬菜菌菇',
        children: [
            {
              pid: 40,
              url: '/static/images/vip-goodsC@2x.jpg',
              title: '基围虾',
              weight: '500g',
              new: '¥490.90',
              member: '¥450.00',
              text: '会员价'
            }
          ]
        },
        {
        id: 5,
        uname: '调味干货',
        children: [
            {
              pid: 50,
              url: '/static/images/detail-lunbo.jpg',
              title: '冷冻鸡翅根',
              weight: '500g',
              new: '¥49.90',
            }
          ]
        },
        {
        id: 6,
        uname: '蛋类',
        children: [
            {
              pid: 60,
              url: '/static/images/green-cart.png',
              title: '冷冻鸡翅根',
              weight: '500g',
              new: '¥49.90',
              member: '¥45.00',
              text: '会员价'
            }
          ]
        }
      ],
      // 选中项
      isActive: 0,
      num: 0,
      secondCates: []
    }
  },
  mounted() {
    this.secondCates = this.list[this.num].children
  },
  methods: {
		// 点击左边 重新加载数据
    tabTap(id) {
      this.isActive = id
      let result = this.list.findIndex(item => {
        return item.id == id
      })
      this.num = result
      this.secondCates = this.list[this.num].children
    }
  }
}
</script>

<style lang="less" scoped>
image {
  width: 100%;
  height: 100%;
}
.search-box {
	margin-top: 12rpx;
	position: relative;
	margin-bottom: 40rpx;
	height: 56rpx;
	.search {
		margin: auto;
		width: 693rpx;
		height: 56rpx;
		background:rgba(247,247,247,1);
		border-radius: 28rpx;
	}
	.search-content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		line-height: 30rpx;
		.search-img {
			width: 30rpx;
			height: 30rpx;
		}
		.search-text {
			margin-left: 16rpx;
			font-size: 26rpx;
			font-family:Source Han Sans CN;
			font-weight: 400;
			color:rgba(206,206,206,1);
		}
	}
}
.box {
  width: 100%;
}
.base-cates {
  position: fixed;
  margin-top: 30rpx;
  height: 100%;
  display: flex;
  font-size: 26rpx;
  color: #666;
  width: 100%;
  .cates-left {
    width: 22%;
    background-color: #fff;
    margin-right: 20rpx;
    .left-text {
      text-align: center;
      height: 64rpx;
      line-height: 64rpx;
      width: 160rpx;
      margin: 20rpx 0;
      color: #666;
    }
    .active {
      background-color: #fff;
      border-left: 6rpx solid #279524;
      color: #333;
    }
  }
  .cates-right {
    width: 70%;
    background-color: #fff;
    .right {
      display: flex;
      margin-bottom: 52rpx;
      position: relative;
      .item-img {
        width: 244rpx;
        height: 160rpx;
        margin-right: 22rpx;
      }
      .title {
        font-size: 28rpx;
        color: #333;
      }
      .weight {
        font-size: 24rpx;
        color: #999;
        margin: 20rpx 0;
      }
      .new {
        color: #ff4543;
        font-size: 32rpx;
        margin-bottom: 15rpx;
      }
      .item-footer {
        display: flex;
				position: relative;
        .member {
          color: #279524;
          font-size: 24rpx;
          margin-right: 14rpx;
        }
        .limit {
          width: 66rpx;
					height: 24rpx;
					line-height: 46rpx;
          position: relative;
          .text {
						position: absolute;
						top: -1rpx;
						left: 10rpx;
						font-size: 18rpx;
						color: #fff;
					}
        }
        .jiahao {
          width:50rpx;
					height:50rpx;
					margin-right: 22rpx;
					position: absolute;
					top: -8rpx;
					right: 0;
        }
      }
    }
  }
}
</style>
