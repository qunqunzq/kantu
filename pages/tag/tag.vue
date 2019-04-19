<template>
	<view class="grid col-2 padding-sm">
		<view class="padding-sm" >
			<view class="bg-gradual-red padding radius text-center shadow-blur" >
				<view class="text-lg"><text>婚礼</text></view> 
			</view>
		</view>
		<view class="padding-sm">
			<view class="bg-gradual-orange padding radius text-center shadow-blur">
				<view class="text-lg"><text>写真</text></view>
			</view>
		</view>
		<view class="padding-sm">
			<view class="bg-gradual-green padding radius text-center shadow-blur">
				<view class="text-lg"><text>产品</text></view>
			</view>
		</view>
		<view class="padding-sm">
			<view class="bg-gradual-blue padding radius text-center shadow-blur">
				<view class="text-lg"><text>小姐姐</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	 
	export default {
		methods: {
			goList(value) {
				uni.navigateTo({
					url: '../list/list?type=' + value.type + '&id=' + value.id
				})
			}
		}
	}
</script>

<style>
.text-lg{
  width: 280upx; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
text{
	font-size:40upx;
	letter-spacing:10upx
}
</style>
