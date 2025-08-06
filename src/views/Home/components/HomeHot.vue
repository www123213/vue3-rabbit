<script setup>
import { onMounted,ref } from 'vue';
import HomePanel from './HomePanel.vue';
import { getHotAPI } from '@/apis/home';

// 获取数据
const hotList = ref([])

const getHotList = async () => {
    const res = await getHotAPI()
    hotList.value = res.result
}

onMounted(() => getHotList())
</script>

<template>
    <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
        <ul class="goods-list">
            <li v-for="item in hotList" :key="hotList.id">
                <RouterLink to="/">
                    <img v-img-lazy="item.picture" src="" alt="" />
                    <p class="name">{{ item.alt }}</p>
                    <p class="price">&yen;{{ item.id }}</p>
                </RouterLink>
            </li>
        </ul>
    </HomePanel>
</template>

<style scoped lang="scss">
.goods-list{
    display: flex; // 设置列表为弹性布局子元素li会水平排列
    justify-content: space-between;
    height: 406px;

    li{
        width: 306px;
        height: 406px;

        background: #ffffff;
        transition: all .5s; // 过度动画0.5秒平滑过渡

        &:hover{
            transform: translate3d(0, 3px, 0);
            box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
        }

        img{
            width: 306px;
            height: 306px;
        }

        p{
            font-size: 22px;
            padding-top: 12px;
            text-align: center;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    }

    .price{
        color: $priceColor;
    }

}
</style>