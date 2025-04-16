import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import CreateBook from './components/pages/CreateBooks';
import ShowBook from './components/pages/ShowBook';
import EditBook from './components/pages/EditBook';
import DeleteBook from './components/pages/DeleteBook';
import './index.css';

const App = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen p-4">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books/create' element={<CreateBook />} />
          <Route path='/books/details/:id' element={<ShowBook />} />
          <Route path='/books/edit/:id' element={<EditBook />} />
          <Route path='/books/delete/:id' element={<DeleteBook />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;