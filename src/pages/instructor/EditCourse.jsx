import React, { useState } from 'react';

const EditCourse = () => {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    price: '',
    videos: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(courseData);
    // Логика добавления/редактирования курса
  };

  return (
    <div>
      <h2>Create/Edit Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={courseData.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={courseData.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={courseData.price}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Save Course</button>
      </form>
    </div>
  );
};

export default EditCourse;
