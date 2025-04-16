import React, { useState } from 'react';
import BackButton from '../backButton';
import Spinner from '../Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book created successfully!', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Something went wrong!', { variant: 'error' });
        console.error(error);
      });
  };

  return (
    <div
      style={{
        padding: '24px',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e0f7fa, #80deea)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <BackButton />
      <h1
        style={{
          fontSize: '36px',
          fontWeight: '600',
          color: '#0288d1',
          marginBottom: '24px',
          textAlign: 'center',
          padding: '0 15px',
        }}
      >
        Create a New Book
      </h1>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <Spinner />
        </div>
      ) : (
        <div
          style={{
            maxWidth: '600px',
            width: '100%',
            backgroundColor: 'white',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '12px',
            padding: '24px',
            border: '2px solid #81d4fa',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                fontSize: '18px',
                fontWeight: '500',
                color: '#333',
                marginBottom: '8px',
                display: 'block',
              }}
            >
              📘 Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                border: '2px solid #80deea',
                borderRadius: '8px',
                fontSize: '16px',
                outline: 'none',
                transition: 'border 0.3s ease',
                boxSizing: 'border-box',
              }}
              placeholder="Enter book title"
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                fontSize: '18px',
                fontWeight: '500',
                color: '#333',
                marginBottom: '8px',
                display: 'block',
              }}
            >
              ✍️ Author
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                border: '2px solid #80deea',
                borderRadius: '8px',
                fontSize: '16px',
                outline: 'none',
                transition: 'border 0.3s ease',
                boxSizing: 'border-box',
              }}
              placeholder="Enter author name"
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label
              style={{
                fontSize: '18px',
                fontWeight: '500',
                color: '#333',
                marginBottom: '8px',
                display: 'block',
              }}
            >
              📅 Publish Year
            </label>
            <input
              type="number"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                border: '2px solid #80deea',
                borderRadius: '8px',
                fontSize: '16px',
                outline: 'none',
                transition: 'border 0.3s ease',
                boxSizing: 'border-box',
              }}
              placeholder="Enter year"
            />
          </div>

          <button
            onClick={handleSaveBook}
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: '#0288d1',
              color: 'white',
              fontSize: '18px',
              fontWeight: '600',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              boxSizing: 'border-box',
            }}
          >
            Save Book
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateBooks;
