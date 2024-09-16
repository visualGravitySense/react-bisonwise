import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`header-navbar w-100 ${theme}`} // Добавляем класс в зависимости от темы
    >
      {/* Логотип */}
      <Navbar.Brand href="/">BisonWise</Navbar.Brand>

      {/* Кнопка для мобильной версии */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
 
      {/* Меню */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Главная</Nav.Link>
          <Nav.Link href="/courses">Курсы</Nav.Link>
          <Nav.Link href="/about">О нас</Nav.Link>
          {/* <Nav.Link href="/contact">Контакты</Nav.Link> */}
          <Nav.Link href="/profile">Кабинет</Nav.Link>
        </Nav>

        {/* Переключатель языков */}
        <NavDropdown title="Язык" id="language-switch" className="nav-dropdown">
          <NavDropdown.Item href="#ru">Русский</NavDropdown.Item>
          <NavDropdown.Item href="#en">English</NavDropdown.Item>
          <NavDropdown.Item href="#fr">Eesti</NavDropdown.Item>
        </NavDropdown>

        {/* Поиск */}
        <Form className="d-flex mx-3">
          <FormControl
            type="search"
            placeholder="Поиск курсов"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Поиск</Button>
        </Form>

        {/* Переключатель темного/светлого режима */}
        <Button
          className="theme-toggle-btn"
          variant={theme === 'light' ? 'dark' : 'light'}
          onClick={toggleTheme}
        >
          {theme === 'light' ? 'Темный режим' : 'Светлый режим'}
        </Button>

        {/* Войти/Регистрация */}
        <Nav.Link href="/login" className="ms-3">Войти</Nav.Link>
        <Nav.Link href="/register">Регистрация</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
