import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from '../../components'
import {mainAPI} from '../../API'
import {setNewsData} from '../../redux/slices/news'

import './Home.scss'

const Home = () => {
    const dispatch = useDispatch()
    const {news, country, category} = useSelector(({news}) => news)
    const [fetchData, setFetchData] = useState(true)

    useEffect(async () => {
        try {
            if(fetchData){
                const {articles} = await mainAPI.getNews(country, category)
                dispatch(setNewsData(articles))
                setFetchData(false)
            }
        } catch (error) {
            console.warn(error)
        }
    },[fetchData, country, category])
    
    

    return (
        <div className="Home">
            <div className="Home__cotainerNews">
                {fetchData && <span>Loging...</span>}
                {news && !fetchData && news.map((item, index)=>{return <Card 
                        key={`${item.source.id}_${index}`} 
                        title={item.title} 
                        description={item.description} 
                        urlToImage={item.urlToImage} 
                        url={item.url}
                    />
                })}
            </div>
         
        </div>
    )
}

export default Home
