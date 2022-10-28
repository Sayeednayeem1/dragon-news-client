import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import NewSummaryCard from '../../Shared/NewSummaryCard/NewSummaryCard';

const Home = () => {
    const allNews = useLoaderData();
    useTitle("Home");
    return (
        <div>
            <h4>Dragon News Home: {allNews.length}</h4>
            {
                allNews.map(news => <NewSummaryCard
                key={news._id}
                news={news}
                ></NewSummaryCard>)
            }
        </div>
    );
};

export default Home;