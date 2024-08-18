import React, { useState } from 'react';

const ArticleForm = ({ article = {} }) => {
    const [title, setTitle] = useState(article.title || '');
    const [content, setContent] = useState(article.content || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle submit logic
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
            <label htmlFor="title" className="block text-sm font-medium mb-2">Título</label>
            <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                required
            />
            <label htmlFor="content" className="block text-sm font-medium mb-2">Contenido</label>
            <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                rows="10"
                required
            />
            <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded"
            >
                Guardar Cambios
            </button>
        </form>
    );
};

export default ArticleForm;
