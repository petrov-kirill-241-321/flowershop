import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import NotFound from './NotFound';
import Home from './Home'; // Ваш компонент главной страницы

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/404" component={NotFound} />
                <Route path="/home" component={Home} />
                <Route path="/" exact component={Login} /> {/* По умолчанию перенаправляем на страницу логина */}
                <Route component={NotFound} /> {/* Перенаправление на 404 для несуществующих маршрутов */}
