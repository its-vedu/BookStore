import React from 'react';
import BookSingleCard from './BookSingleCard';

const BooksCard = ({ books }) => {
  return (
    <div
      style={{
        backgroundColor: '#f9fafb', // light neutral background
        padding: '50px 20px',
        borderRadius: '16px',
        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
        margin: '20px auto',
        maxWidth: '1400px',
        fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontSize: '32px',
          fontWeight: '600',
          marginBottom: '40px',
          color: '#1f2937', // slate-800
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
        }}
      >
        📚 Explore Our Collection
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', // Increased minimum width for grid layout
          gap: '32px',
          justifyItems: 'center',
        }}
      >
        {books.map((item) => (
          <div 
            key={item._id} 
            style={{
              width: '380px', // Increase individual card width
              maxWidth: '100%',
            }}
          >
            <BookSingleCard book={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksCard;
