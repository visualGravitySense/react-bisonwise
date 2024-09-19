import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Profile.css';

const Profile = ({ theme }) => {
  const [editing, setEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Алексей Петров',
    email: 'alexey@example.com',
    courses: [
      { title: 'Курс по React', progress: '80%' },
      { title: 'Курс по Веб-дизайну', progress: '100%' },
    ],
  });

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <section className={`profile-section ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <h2>Профиль пользователя</h2>

      <div className="profile-info">
        {!editing ? (
          <>
            <p><strong>Имя:</strong> {userInfo.name}</p>
            <p><strong>Email:</strong> {userInfo.email}</p>
            <Button className="btn-edit" onClick={handleEditToggle}>Редактировать профиль</Button>
          </>
        ) : (
          <>
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleInputChange}
              className="edit-input"
            />
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              className="edit-input"
            />
            <Button className="btn-save" onClick={handleEditToggle}>Сохранить</Button>
          </>
        )}
      </div>

      <h3>Приобретенные курсы</h3>
      <div className="user-courses">
        {userInfo.courses.length > 0 ? (
          userInfo.courses.map((course, index) => (
            <div key={index} className="course-card">
              <h4>{course.title}</h4>
              <p>Прогресс: {course.progress}</p>
            </div>
          ))
        ) : (
          <p>Вы еще не приобрели ни одного курса.</p>
        )}
      </div>
    </section>
  );
};

export default Profile;
