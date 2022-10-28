import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewSummaryCard from '../../Shared/NewSummaryCard/NewSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h4>this is Category has: {categoryNews.length}</h4>
            {
                categoryNews.map(news => <NewSummaryCard
                key={news.id}
                news={news}
                ></NewSummaryCard>)
            }
        </div>
    );
};

export default Category;