import React, { FC } from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

export const Header: FC = () => {
  return (
    <header className={s.header}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to="/" className={s.link}>
            главная
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/comment" className={s.link}>
            отзывы
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/login" className={s.link}>
            войти
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
