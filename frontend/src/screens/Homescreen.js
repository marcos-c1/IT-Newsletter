import './Homescreen.css'
import {useEffect, useState} from 'react';

/*TODO: use fs module to create an file in json to put all the news in database*/

// Components
import Navbar from '../components/Navbar';
import News from '../components/News';

// Token
require("dotenv").config();

const Homescreen = () => {
    const [news, setNews] = useState([{}]);
    const [multimedia, setMultimedia] = useState([{}]);

    const NYT_TOKEN = process.env.REACT_APP_NYT_API_TOKEN;

    const fetchMultimedia = (results) => {
        const mt = results.map((news) => news.multimedia);
            const img = [];
            for (let mult of mt){
                if (mult){
                    for (let obj of mult){
                        const {format} = obj;
                        if(format === "mediumThreeByTwo210"){
                            /*FIXME: some objects have different slug_name which means that cant be equal to url.slug_name
                            */
                            let slug_name = (obj.url).split('/')[8];
                            img.push({url: obj.url, slug_name: slug_name}); 
                        }    
                    } 
                }
            }
            return img;
    }
    useEffect(() => {
        const fetchDataApi = async() => {
            const newsFromApi = await fetchData();
            //Array of news extraction result
            const {results} = newsFromApi;
            //console.log(JSON.stringify(results));
            const mt = fetchMultimedia(results);

            setNews(results);
            setMultimedia(mt);
        }
        fetchDataApi();
    }, [])
    
    const fetchData = async() => {
        // https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key={NYT_TOKEN}
        const res = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${NYT_TOKEN}`)
        const data = await res.json()        
        return data
    }
    return (
        <div className="homescreen">
            <Navbar />
            <h2 className="homescreen__title">Lastest News</h2>
            <h3 className="homescreen__tagNews"></h3>
            <div className="homescreen__news">
                {news.map((news, index) => (
                        <News
                        key={news.slug_name}
                        multi={news.slug_name && multimedia.map(m => m.slug_name) ? multimedia.map(m => m.url)[index] : ""}
                        title={news.title}
                        abstract={news.abstract}
                        created_date={news.created_date} 
                        tag={news.section ? news.section : news.subsection}
                        url={news.url}
                        />  
                    )
                )}
            </div>
        </div>
    )
}

export default Homescreen
