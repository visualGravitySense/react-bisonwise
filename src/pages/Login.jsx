import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import './LoginRegister.css';

const Login = ({ theme }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <section className={`login-register ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="form-container">
              <h2>{isLogin ? "Вход" : "Регистрация"}</h2>
              <Form>
                {!isLogin && (
                  <>
                    <Form.Group controlId="formName">
                      <Form.Label>Имя</Form.Label>
                      <Form.Control type="text" placeholder="Введите ваше имя" />
                    </Form.Group>
                    <Form.Group controlId="formLastName">
                      <Form.Label>Фамилия</Form.Label>
                      <Form.Control type="text" placeholder="Введите вашу фамилию" />
                    </Form.Group>
                  </>
                )}
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Введите email" />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Пароль</Form.Label>
                  <Form.Control type="password" placeholder="Введите пароль" />
                </Form.Group>
                <Button className="btn-submit" type="submit">
                  {isLogin ? "Войти" : "Зарегистрироваться"}
                </Button>
              </Form>
              <Button className="toggle-btn" onClick={toggleForm}>
                {isLogin ? "Создать новый аккаунт" : "Уже есть аккаунт? Войти"}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
