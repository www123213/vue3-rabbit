import httpInstance from "@/utils/http";

// export function getCategoryAPI(){
//     return httpInstance({
//         url: '/home/category/head'
//     })
// }

export const getCategoryAPI = () => httpInstance({
    url: '/home/category/head'
})