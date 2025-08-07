// 封装分类数据业务相关代码
import { getCategoryAPI } from '@/apis/category';
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

export function useCategory(){
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async() => {
        const res = await getCategoryAPI(route.params.id)
        categoryData.value = res.result
        }

    // 自动追踪内部依赖的响应式数据
    watchEffect(() => getCategory())

    return {
        categoryData
    }

// // 目标：路由参数变化的时候 可以把分类数据接口重新发送
// import { onBeforeRouteUpdate } from 'vue-router'
// 路由守卫
// onBeforeRouteUpdate((to) => {
//     // 存在问题: 使用最新的路由参数请求最新的分类数据
//     getCategory(to.params.id)
// })
}