import * as axios from 'axios'

const instance = axios.create({
    withCreaentials: true,
    baseURL: 'https://newsapi.org/v2/',
})

// business entertainment general health science sports technology

    export const mainAPI = {
        async getNews(country, category ){
            const {data} = await instance.get(`top-headlines?country=${country}${category ? `&category=${category}` : ''}&pageSize=100`,
            {
                headers: {
                    "Authorization": "813dfff781714067a7e86b5fc4884404"
                }
            })
            return data
        },
        async searchNews(search){
            const {data} = await instance.get(`everything?q=${search}`,
            {
                headers: {
                    "Authorization": "813dfff781714067a7e86b5fc4884404"
                }
            })
            return data
        },
    }
    