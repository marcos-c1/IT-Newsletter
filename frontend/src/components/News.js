
import './News.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';


const News = ({multi, title, abstract, created_date, tag, url}) => {

    const [currentTime] = useState(new Date().getHours());
    const [urlNews] = useState(url);
    const redirectToNews = () => {
        window.location.href = urlNews;
    }
    
    /*FIXME: fix the created_date after midnight */
    return (
        <div className="news">
        <div className="news__info">
            <img src={multi} draggable="false" alt="thumbnail"></img>
            <p className="news__title">{title}</p>
            <p className="news__abstract">{abstract}</p>
            <p className="news__created_date">{created_date ? (currentTime - Number(created_date.split('T').pop().slice(0, 2)) > 0 ? (currentTime - Number(created_date.split('T').pop().slice(0, 2)) === 1 ? currentTime - Number(created_date.split('T').pop().slice(0, 2))  + " hour ago" : currentTime - Number(created_date.split('T').pop().slice(0, 2)) + " hours ago") : "Posted a few minutes ago") : 0}</p>
        </div>
        <div className="news__footer">
            <span className="news__tag">{tag}</span>
            <button className="news__redirectBtn" onClick={redirectToNews}>Read article</button>
        </div>
        </div>
    )
}

export default News
