import React from 'react';
import ArticleForm from '../components/ArticleForm';

const EditPostPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Editar Artículo</h1>
            <ArticleForm />
        </div>
    );
};

export default EditPostPage;
