import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../home/BooksTable';
import BooksCard from '../home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '24px', backgroundColor: '#f5fafd', minHeight: '100vh' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '24px',
        }}
      >
        <button
          onClick={() => setShowType('table')}
          style={{
            backgroundColor: '#00bcd4',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
        >
          Table
        </button>
        <button
          onClick={() => setShowType('card')}
          style={{
            backgroundColor: '#00bcd4',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
        >
          Card
        </button>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
        }}
      >
        <h1
          style={{
            fontSize: '36px',
            fontWeight: '600',
            color: '#0077b6',
            textAlign: 'center',
            margin: '0',
            padding: '0 15px',
          }}
        >
          Books List
        </h1>
        <Link to='/books/create'>
          <MdOutlineAddBox
            style={{
              fontSize: '40px',
              color: '#00bcd4',
              cursor: 'pointer',
              transition: 'color 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.color = '#0077b6')}
            onMouseOut={(e) => (e.target.style.color = '#00bcd4')}
          />
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
