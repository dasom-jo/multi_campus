import { useState } from 'react';
import './News_list.css';
import axios from 'axios';
import { useEffect } from 'react';
import NewsItems from './NewItems';

const News = () => {
    
    const [articles, setArticles] = useState([]);

    const getNews = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=f047d047f72c46dbb1b0d9a47af199f3`)
            console.log(response.data.articles);
            setArticles(response.data.articles);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(()=>{
        getNews();
    }, [])
    
    return (
        <div className='news_list'>
            {articles.map((article, idx) => (
                <NewsItems key={idx} article={article} />
            ))}
        </div>
    );
}

export default News;