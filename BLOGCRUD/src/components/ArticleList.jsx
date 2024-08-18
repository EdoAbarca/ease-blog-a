import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Fetch articles from backend
        fetch('/api/articles')
            .then(response => response.json())
            .then(data => setArticles(data));
    }, []);

    return (
        <div>
            {articles.map(article => (
                <div key={article.id} className="mb-4 p-4 border rounded">
                    <h2 className="text-xl font-bold">{article.title}</h2>
                    <p className="text-sm text-gray-600">{article.excerpt}</p>
                    <Link to={`/article/${article.id}`} className="text-blue-500">Leer más</Link>
                </div>
            ))}
        </div>
    );
};

export default ArticleList;
