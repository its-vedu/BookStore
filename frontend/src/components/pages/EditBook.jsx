import React, { useState, useEffect } from 'react';
import BackButton from '../backButton';
import Spinner from '../Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setTitle(response.data.title);
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please check console');
        console.log(error);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = { title, author, publishYear };
    setLoading(true);
    axios.put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div
      style={{
        padding: '24px',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f0f8ff, #e6f7ff)',
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
          color: '#0077b6',
          marginBottom: '24px',
          textAlign: 'center',
          padding: '0 15px',
        }}
      >
        Edit Book
      </h1>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <Spinner />
        </div>
      ) : (
        <div
          style={{
            maxWidth: '600px',  // Ensure the form doesn't go beyond this width
            width: '100%',
            backgroundColor: 'white',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '12px',
            padding: '24px',
            border: '2px solid #00bcd4',
            boxSizing: 'border-box',
            textAlign: 'center',
            margin: '0 auto',
          }}
        >
          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                fontSize: '18px',
                fontWeight: '500',
                color: '#555',
                marginBottom: '8px',
                display: 'block',
              }}
            >
              📘 Title
            </label>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                width: '100%',  // Ensure input takes up the full width
                padding: '12px 15px',
                fontSize: '16px',
                borderRadius: '8px',
                border: '2px solid #ccc',
                outline: 'none',
                transition: 'border-color 0.3s',
                marginBottom: '20px',
                boxSizing: 'border-box',  // Prevent overflow due to padding/borders
              }}
              placeholder='Enter book title'
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                fontSize: '18px',
                fontWeight: '500',
                color: '#555',
                marginBottom: '8px',
                display: 'block',
              }}
            >
              ✍️ Author
            </label>
            <input
              type='text'
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              style={{
                width: '100%',  // Ensure input takes up the full width
                padding: '12px 15px',
                fontSize: '16px',
                borderRadius: '8px',
                border: '2px solid #ccc',
                outline: 'none',
                transition: 'border-color 0.3s',
                marginBottom: '20px',
                boxSizing: 'border-box',  // Prevent overflow due to padding/borders
              }}
              placeholder='Enter author name'
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                fontSize: '18px',
                fontWeight: '500',
                color: '#555',
                marginBottom: '8px',
                display: 'block',
              }}
            >
              📅 Publish Year
            </label>
            <input
              type='number'
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              style={{
                width: '100%',  // Ensure input takes up the full width
                padding: '12px 15px',
                fontSize: '16px',
                borderRadius: '8px',
                border: '2px solid #ccc',
                outline: 'none',
                transition: 'border-color 0.3s',
                marginBottom: '24px',
                boxSizing: 'border-box',  // Prevent overflow due to padding/borders
              }}
              placeholder='Enter publish year'
            />
          </div>

          <button
            onClick={handleEditBook}
            style={{
              width: '100%',  // Make button span full width
              padding: '14px',
              backgroundColor: '#00bcd4',
              color: 'white',
              fontSize: '18px',
              fontWeight: '600',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              boxSizing: 'border-box',  // Prevent overflow due to padding/borders
            }}
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default EditBook;
