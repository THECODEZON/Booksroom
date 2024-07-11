import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('Book'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-slate-800 p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Books List</h1>
      <Link to="/publish" className="mb-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
        Publish a New Book
      </Link>
      <div className="w-full max-w-4xl">
        {books.length === 0 ? (
          <p className="text-white">No books available.</p>
        ) : (
          <ul className="space-y-4">
            {books.map((book) => (
              <li key={book.id} className="bg-slate-700 p-4 rounded shadow-md">
                <h2 className="text-2xl font-bold text-white">{book.title}</h2>
                <p className="text-white">by {book.author}</p>
                <p className="text-white">{book.description}</p>
                {book.image && (
                  <img src={book.image} alt={book.title} className="mt-4 max-h-64 object-cover rounded" />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Books;
