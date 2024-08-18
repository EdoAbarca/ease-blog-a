import React from 'react';
import ArticleList from '../components/ArticleList';

const HomePage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Blog</h1>
            <ArticleList />
        </div>
    );
};

export default HomePage;
