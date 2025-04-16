import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  return (
    <div className="flex justify-start">
      <Link
        to={destination}
        style={{
          backgroundColor: '#0284c7', // Sky Blue color
          color: 'white',
          padding: '10px 20px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          fontSize: '16px',
          fontWeight: '500',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
        }}
        className="hover:bg-sky-700 hover:scale-105"
      >
        <BsArrowLeft className="text-2xl mr-2" />
        Back
      </Link>
    </div>
  );
};

export default BackButton;
