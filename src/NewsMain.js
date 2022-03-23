import React, { useEffect, useState } from 'react'
import NavBar from './Navbar';
import NewsContents from './Newscontent';
import Footer from './Footer';

const NewsApi = () => {
    const [news, setnews] = useState([]);
    
    const GetNewsApi = async () => {
        let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=ac47b9c549144c17b90666133a344f35`);
        let res = await response.json();
        let results = res.articles.map((currElem, index) => {
            return (
                <div >
                    <NewsContents text={currElem} key={index} index={index} />

                </div>
            );
        })

        setnews(results)
    }

    useEffect(() => {
        GetNewsApi()
    }, [])

    return (
        <>
        <NavBar />
      
            <div className="main">
                
                <div className="p-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-0">{news}</div>
            </div>
            <Footer />

        </>
    );
}
export default NewsApi;