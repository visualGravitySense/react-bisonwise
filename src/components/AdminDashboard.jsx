import React from "react";
import { Button, Table, Container, Row, Col } from "react-bootstrap";
import './AdminDashboard.css';

const AdminDashboard = ({ theme }) => {
  // Sample data for users, courses, and orders
  const users = [
    { id: 1, name: "Иван Иванов", email: "ivan@example.com", role: "User" },
    { id: 2, name: "Анна Петрова", email: "anna@example.com", role: "Instructor" },
  ];

  const courses = [
    { id: 1, title: "React для начинающих", instructor: "Иван Иванов", price: "4990 ₽" },
    { id: 2, title: "Основы Python", instructor: "Анна Петрова", price: "5990 ₽" },
  ];

  const orders = [
    { id: 1, user: "Иван Иванов", course: "React для начинающих", status: "Completed" },
    { id: 2, user: "Анна Петрова", course: "Основы Python", status: "Pending" },
  ];

  return (
    <Container className={`admin-dashboard ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <h2 className="dashboard-title">Панель администратора</h2>
      
      <Row className="dashboard-section">
        <Col>
          <h3>Пользователи</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Имя</th>
                <th>Email</th>
                <th>Роль</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <Button variant="warning">Редактировать</Button>{' '}
                    <Button variant="danger">Удалить</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      
      <Row className="dashboard-section">
        <Col>
          <h3>Курсы</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Название</th>
                <th>Инструктор</th>
                <th>Цена</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td>{course.id}</td>
                  <td>{course.title}</td>
                  <td>{course.instructor}</td>
                  <td>{course.price}</td>
                  <td>
                    <Button variant="warning">Редактировать</Button>{' '}
                    <Button variant="danger">Удалить</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      
      <Row className="dashboard-section">
        <Col>
          <h3>Заказы</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Пользователь</th>
                <th>Курс</th>
                <th>Статус</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.user}</td>
                  <td>{order.course}</td>
                  <td>{order.status}</td>
                  <td>
                    <Button variant="success">Просмотреть</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
