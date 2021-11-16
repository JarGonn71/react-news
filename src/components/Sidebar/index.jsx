import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setNewsCountry, setNewsCategory} from '../../redux/slices/news'

import './Sidebar.scss'

const Categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
const countrys = ['ae', 'ar', 'at', 'au', 'be','bg','br','ca','ch','cn','co','cu','cz','de','eg','fr','gb','gr','hk','hu','id','ie','il',
                    'in','it','jp','kr','lt','lv','ma','mx','my','ng','nl','no','nz','ph','pl',
                    'pt','ro','rs','ru','sa','se','sg','si','sk','th','tr,tw','ua','us','ve','za']

const Sidebar = () => {
    const dispatch = useDispatch()
    const {country, category} = useSelector(({news}) => news)
    const [activeCountry, setActiveCountry] = useState(country)
    const [activeСategory, setActiveСategory] = useState('Выберите категорию')
    
    const setCountry = () =>{
        dispatch(setNewsCountry(activeCountry))
    }

    const setCategory = () =>{
        dispatch(setNewsCategory(activeСategory))
    }

    return (
        <div className="Sidebar">
            <div className="Sidebar__container">
                <div className="Item">
                    Страна:  
                    <div className="Sidebar__SetItem">
                        {activeCountry }

                    </div>
                </div>
                <div className="Item">
                    Категория: 
                    <div className="Sidebar__SetItem">{activeСategory }</div>
                </div>
               
               
            </div>
        </div>
    )
}

export default Sidebar
