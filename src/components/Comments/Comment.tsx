import React from "react";
import { useDispatch } from "react-redux";
import { likeComment } from "../../../redux/redux-comment";
import { Heart } from "lucide-react";
import s from "./Comments.module.css";

export const Comment = ({ id, author, text, likes }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.comment}>
      <p className={s.author}>{author}</p>
      <p className={s.text}>{text}</p>
      <div className={s.actions}>
        <button
          onClick={() => dispatch(likeComment(id))}
          className={s.likeButton}
        >
          <Heart
            size={18}
            color={likes > 0 ? "red" : "black"}
            fill={likes > 0 ? "red" : "none"}
          />
          <span>{likes}</span>
        </button>
      </div>
    </div>
  );
};
