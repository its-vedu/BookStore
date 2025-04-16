import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  zIndex: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalStyle = {
  width: '600px',
  maxWidth: '90%',
  height: 'auto',
  maxHeight: '80vh',
  backgroundColor: '#fff',
  borderRadius: '12px',
  padding: '20px',
  position: 'relative',
  overflowY: 'auto',
  boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
};

const closeIconStyle = {
  position: 'absolute',
  top: '16px',
  right: '16px',
  fontSize: '26px',
  color: '#dc2626', // red
  cursor: 'pointer',
};

const tagStyle = {
  backgroundColor: '#fecaca', // red-200
  padding: '6px 12px',
  borderRadius: '8px',
  display: 'inline-block',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const textGrayStyle = {
  color: '#6b7280', // gray-500
  fontSize: '14px',
  marginBottom: '8px',
};

const iconTextRowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '10px',
};

const BookModal = ({ book, onClose }) => {
  return (
    <div style={overlayStyle} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} style={modalStyle}>
        <AiOutlineClose style={closeIconStyle} onClick={onClose} />
        <h2 style={tagStyle}>{book.publishYear}</h2>
        <h4 style={textGrayStyle}>ID: {book._id}</h4>

        <div style={iconTextRowStyle}>
          <PiBookOpenTextLight style={{ color: '#fca5a5', fontSize: '20px' }} />
          <h2 style={{ margin: 0 }}>{book.title}</h2>
        </div>

        <div style={iconTextRowStyle}>
          <BiUserCircle style={{ color: '#fca5a5', fontSize: '20px' }} />
          <h2 style={{ margin: 0 }}>{book.author}</h2>
        </div>

        <p style={{ marginTop: '16px', fontWeight: 'bold' }}>
          Description / Notes:
        </p>
        <p style={{ marginTop: '6px', lineHeight: '1.6', color: '#374151' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
          voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
          necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
          nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
          dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
          vitae voluptate sequi repellat!
        </p>
      </div>
    </div>
  );
};

export default BookModal;
