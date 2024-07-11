import React, { useState, useEffect } from 'react';

// BookCard component to display each published book
const BookCard = ({ book }) => (
  <div className="card card-compact bg-base-100 w-96 shadow-xl ">
    <div className="card-body space-y-2 m-3">
      <h2 className="card-title">{book.title}</h2>
      <p>{book.description}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Free to read</button>
      </div>
    </div>
  </div>
);

function Publish() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const savedBooks = localStorage.getItem('books');
    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author, description };
    setBooks([...books, newBook]);
    setTitle('');
    setAuthor('');
    setDescription('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Publish Your Thought</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Publish
        </button>
      </form>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Published Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Publish;
