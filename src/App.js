import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Navbar from './Navbar/Navbar';
import FirstSection from './FirstSection/FirstSection';
import Legalization from './Legalization/Legalization';
import Counter from './Counter/Counter';
import Question from './Question/Question';
import Footer from './Footer/Footer';
import SubFooter from './SubFooter/SubFooter';
import Testimonial from './Testimonial/Testimonial';
import Dashboard from './pages/Dashboard';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

const LOCAL_STORAGE_KEY = 'testimonialsData';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApiData();
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const fetchApiData = async () => {
    try {
      const response = await axios.get('https://66a111237053166bcabde092.mockapi.io/testimonals/testimonails');
      setData(response.data);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(response.data));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (updatedItem) => {
    try {
      if (!updatedItem.local) {
        await axios.put(`https://66a111237053166bcabde092.mockapi.io/testimonals/testimonails/${updatedItem.id}`, updatedItem);
      }
      const updatedData = data.map(item => (item.id === updatedItem.id ? updatedItem : item));
      setData(updatedData);
    } catch (error) {
      alert("Error updating item: " + error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const item = data.find(item => item.id === id);
      if (item && !item.local) {
        await axios.delete(`https://66a111237053166bcabde092.mockapi.io/testimonals/testimonails/${id}`);
      }
      const updatedData = data.filter(item => item.id !== id);
      setData(updatedData);
    } catch (error) {
      alert("Error deleting item: " + error.message);
    }
  };

  const handleAdd = async (newItem) => {
    try {
      const response = await axios.post('https://66a111237053166bcabde092.mockapi.io/testimonals/testimonails', newItem);
      const addedItem = response.data;
      const updatedData = [...data, addedItem];
      setData(updatedData);
    } catch (error) {
      alert("Error adding item: " + error.message);
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/dashboard" element={<Dashboard data={data} onUpdate={handleUpdate} onDelete={handleDelete} onAdd={handleAdd} />} />
          <Route path="/" element={
            <>
              <Navbar />
              <FirstSection />
              <Legalization />
              <Counter />
              <Testimonial data={data} loading={loading} error={error} />
              <Question />
              <Footer />
              <SubFooter />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
