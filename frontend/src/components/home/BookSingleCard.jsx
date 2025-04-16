import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '12px',
  padding: '20px',
  margin: '20px',
  backgroundColor: '#fff',
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
  position: 'relative',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
};

const cardHoverStyle = {
  transform: 'scale(1.02)',
  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
};

const badgeStyle = {
  position: 'absolute',
  top: '10px',
  right: '15px',
  padding: '5px 10px',
  borderRadius: '8px',
  backgroundColor: '#fecaca',
  fontWeight: 'bold',
};

const idStyle = {
  margin: '10px 0',
  color: '#6b7280', // Tailwind's gray-500
  fontSize: '14px',
};

const rowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  margin: '6px 0',
};

const iconStyle = {
  fontSize: '22px',
  color: '#f87171', // red-400
};

const bottomIconsStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '20px',
  padding: '10px',
};

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={isHovered ? { ...cardStyle, ...cardHoverStyle } : cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 style={badgeStyle}>{book.publishYear}</h2>
      <h4 style={idStyle}>{book._id}</h4>
      <div style={rowStyle}>
        <PiBookOpenTextLight style={iconStyle} />
        <h2>{book.title}</h2>
      </div>
      <div style={rowStyle}>
        <BiUserCircle style={iconStyle} />
        <h2>{book.author}</h2>
      </div>
      <div style={bottomIconsStyle}>
        <BiShow
          style={{ fontSize: '24px', color: '#1e3a8a', cursor: 'pointer' }}
          onClick={() => setShowModal(true)}
          title="Quick View"
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle
            style={{ fontSize: '22px', color: '#065f46' }}
            title="More Info"
          />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit
            style={{ fontSize: '22px', color: '#ca8a04' }}
            title="Edit Book"
          />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete
            style={{ fontSize: '22px', color: '#dc2626' }}
            title="Delete Book"
          />
        </Link>
      </div>
      {showModal && <BookModal book={book} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default BookSingleCard;
