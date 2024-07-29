import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = ({ data, onUpdate, onDelete, onAdd }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(null);
  const [newItem, setNewItem] = useState({
    imgUrl: '',
    title: '',
    description: '',
    rating: 0,
    name: '',
    jobTitle: '',
  });
  const [editingItem, setEditingItem] = useState({
    imgUrl: '',
    title: '',
    description: '',
    rating: 0,
    name: '',
    jobTitle: '',
  });

  const handleInputChange = (e, isEdit = false) => {
    const { name, value } = e.target;
    if (isEdit) {
      setEditingItem({ ...editingItem, [name]: value });
    } else {
      setNewItem({ ...newItem, [name]: value });
    }
  };

  const handleAdd = () => {
    onAdd(newItem);
    setIsAdding(false);
    setNewItem({
      imgUrl: '',
      title: '',
      description: '',
      rating: 0,
      name: '',
      jobTitle: '',
    });
  };

  const handleEdit = (item) => {
    setIsEditing(item.id);
    setEditingItem(item);
  };

  const handleUpdateSubmit = () => {
    onUpdate(editingItem);
    setIsEditing(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      onDelete(id);
    }
  };

  const renderStars = (rating) => {
    const maxRating = 5;
    const limitedRating = Math.min(rating, maxRating);
    return '★'.repeat(limitedRating).padEnd(maxRating, '☆');
  };

  return (
    <div className="dashboard">
      <h1 className="my-4">Dashboard</h1>
      <button className="add-button mb-4" onClick={() => setIsAdding(true)}>Add +</button>

      {isAdding && (
        <div className="add-form">
          <input
            type="text"
            name="imgUrl"
            placeholder="Image URL"
            value={newItem.imgUrl}
            onChange={(e) => handleInputChange(e)}
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newItem.title}
            onChange={(e) => handleInputChange(e)}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newItem.description}
            onChange={(e) => handleInputChange(e)}
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            value={newItem.rating}
            onChange={(e) => handleInputChange(e)}
            min="0"
            max="5"
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newItem.name}
            onChange={(e) => handleInputChange(e)}
          />
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={newItem.jobTitle}
            onChange={(e) => handleInputChange(e)}
          />
          <button onClick={handleAdd}>Submit</button>
          <button onClick={() => setIsAdding(false)}>Cancel</button>
        </div>
      )}

      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Rating</th>
            <th>Name</th>
            <th>Job Title</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {isEditing === item.id ? (
                <>
                  <td data-label="Image"><input type="text" name="imgUrl" value={editingItem.imgUrl} onChange={(e) => handleInputChange(e, true)} /></td>
                  <td data-label="Title"><input type="text" name="title" value={editingItem.title} onChange={(e) => handleInputChange(e, true)} /></td>
                  <td data-label="Description"><input type="text" name="description" value={editingItem.description} onChange={(e) => handleInputChange(e, true)} /></td>
                  <td data-label="Rating"><input type="number" name="rating" value={editingItem.rating} onChange={(e) => handleInputChange(e, true)} min="0" max="5" /></td>
                  <td data-label="Name"><input type="text" name="name" value={editingItem.name} onChange={(e) => handleInputChange(e, true)} /></td>
                  <td data-label="Job Title"><input type="text" name="jobTitle" value={editingItem.jobTitle} onChange={(e) => handleInputChange(e, true)} /></td>
                  <td data-label="Update"><button onClick={handleUpdateSubmit}>Submit</button></td>
                  <td data-label="Cancel"><button onClick={() => setIsEditing(null)}>Cancel</button></td>
                </>
              ) : (
                <>
                  <td data-label="Image"><img src={item.imgUrl} alt="Avatar" className="dashboard-img" /></td>
                  <td data-label="Title">{item.title}</td>
                  <td data-label="Description">{item.description}</td>
                  <td data-label="Rating" className="rating-stars">{renderStars(item.rating)}</td>
                  <td data-label="Name">{item.name}</td>
                  <td data-label="Job Title">{item.jobTitle}</td>
                  <td data-label="Update"><button className="update-button" onClick={() => handleEdit(item)}>Update</button></td>
                  <td data-label="Delete"><button className="delete-button" onClick={() => handleDelete(item.id)}>Delete</button></td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
