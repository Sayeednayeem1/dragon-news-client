import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import NewSummaryCard from '../../Shared/NewSummaryCard/NewSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    useTitle('Category');
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