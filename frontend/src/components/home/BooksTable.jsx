import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const tableStyle = {
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: '10px',
  backgroundColor: '#f9fafb',
  borderRadius: '12px',
};

const thStyle = {
  border: '1px solid #475569',
  borderRadius: '8px',
  padding: '10px',
  backgroundColor: '#e2e8f0',
  fontWeight: 'bold',
};

const tdStyle = {
  border: '1px solid #475569',
  borderRadius: '8px',
  textAlign: 'center',
  padding: '8px',
  backgroundColor: '#ffffff',
};

const iconContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '16px',
};

const BooksTable = ({ books }) => {
  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>No</th>
          <th style={thStyle}>Title</th>
          <th style={thStyle}>Author</th>
          <th style={thStyle}>Publish Year</th>
          <th style={thStyle}>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id}>
            <td style={tdStyle}>{index + 1}</td>
            <td style={tdStyle}>{book.title}</td>
            <td style={tdStyle}>{book.author}</td>
            <td style={tdStyle}>{book.publishYear}</td>
            <td style={tdStyle}>
              <div style={iconContainerStyle}>
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle style={{ fontSize: '22px', color: '#15803d' }} title="Details" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit style={{ fontSize: '22px', color: '#ca8a04' }} title="Edit" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete style={{ fontSize: '22px', color: '#dc2626' }} title="Delete" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
