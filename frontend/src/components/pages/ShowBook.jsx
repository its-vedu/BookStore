import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../backButton';
import Spinner from '../Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '24px', backgroundColor: '#f5fafd', minHeight: '100vh' }}>
      <BackButton />
      <h1
        style={{
          fontSize: '36px',
          fontWeight: '600',
          color: '#0077b6',
          textAlign: 'center',
          marginBottom: '24px',
        }}
      >
        Show Book
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            border: '2px solid #00bcd4',
            borderRadius: '12px',
            width: '100%',
            maxWidth: '600px',
            margin: '0 auto',
            padding: '24px',
            backgroundColor: '#fff',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: '12px',
            }}
          >
            <span
              style={{
                fontSize: '18px',
                fontWeight: '500',
                color: '#4a4a4a',
                marginRight: '8px',
              }}
            >
              <strong>ID:</strong>
            </span>
            <span
              style={{
                fontSize: '18px',
                color: '#0077b6',
                wordWrap: 'break-word',
                wordBreak: 'break-word',
                maxWidth: '300px',
              }}
            >
              {book._id}
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: '12px',
            }}
          >
            <span
              style={{
                fontSize: '18px',
                fontWeight: '500',
                color: '#4a4a4a',
                marginRight: '8px',
              }}
            >
              <strong>Title:</strong>
            </span>
            <span
              style={{
                fontSize: '18px',
                color: '#0077b6',
                wordWrap: 'break-word',
                wordBreak: 'break-word',
                maxWidth: '300px',
              }}
            >
              {book.title}
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: '12px',
            }}
          >
            <span
              style={{
                fontSize: '18px',
                fontWeight: '500',
                color: '#4a4a4a',
                marginRight: '8px',
              }}
            >
              <strong>Author:</strong>
            </span>
            <span
              style={{
                fontSize: '18px',
                color: '#0077b6',
                wordWrap: 'break-word',
                wordBreak: 'break-word',
                maxWidth: '300px',
              }}
            >
              {book.author}
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: '12px',
            }}
          >
            <span
              style={{
                fontSize: '18px',
                fontWeight: '500',
                color: '#4a4a4a',
                marginRight: '8px',
              }}
            >
              <strong>Publish Year:</strong>
            </span>
            <span
              style={{
                fontSize: '18px',
                color: '#0077b6',
                wordWrap: 'break-word',
                wordBreak: 'break-word',
                maxWidth: '300px',
              }}
            >
              {book.publishYear}
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: '12px',
            }}
          >
            <span
              style={{
                fontSize: '18px',
                fontWeight: '500',
                color: '#4a4a4a',
                marginRight: '8px',
              }}
            >
              <strong>Create Time:</strong>
            </span>
            <span
              style={{
                fontSize: '18px',
                color: '#0077b6',
                wordWrap: 'break-word',
                wordBreak: 'break-word',
                maxWidth: '300px',
              }}
            >
              {new Date(book.createdAt).toLocaleString()}
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: '12px',
            }}
          >
            <span
              style={{
                fontSize: '18px',
                fontWeight: '500',
                color: '#4a4a4a',
                marginRight: '8px',
              }}
            >
              <strong>Last Update Time:</strong>
            </span>
            <span
              style={{
                fontSize: '18px',
                color: '#0077b6',
                wordWrap: 'break-word',
                wordBreak: 'break-word',
                maxWidth: '300px',
              }}
            >
              {new Date(book.updatedAt).toLocaleString()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
