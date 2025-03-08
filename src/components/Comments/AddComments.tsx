import { useRef } from "react";
import s from "./Comments.module.css";
import { useDispatch } from "react-redux";
import { addComment } from "../../../redux/redux-comment";

export const AddComment = () => {
  const dispatch = useDispatch();
  const nameRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function onClick() {
    if (nameRef.current?.value.trim() && inputRef.current?.value.trim()) {
      dispatch(addComment(nameRef.current.value, inputRef.current.value));
      nameRef.current.value = "";
      inputRef.current.value = "";
    }
  }

  return (
    <div className={s.addComment}>
      <input ref={nameRef} className={s.input} placeholder="Ваше имя..." />
      <input
        ref={inputRef}
        className={s.input}
        placeholder="Добавить комментарий..."
      />
      <button onClick={onClick} className={s.button}>
        Добавить
      </button>
    </div>
  );
};
