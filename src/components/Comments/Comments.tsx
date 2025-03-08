import { useSelector } from "react-redux";
import { RootState } from "../../../redux/redux-store";
import { Comment } from "./Comment";
import { AddComment } from "./AddComments";
import s from "./Comments.module.css";
import { Header } from "../Header/Header";

export const Comments = () => {
  const comments = useSelector(
    (state: RootState) => state.commentsPage.comments
  );

  return (
    <div className={s.commentsContainer}>
      <Header />
      <h2 className={s.title}>Отзывы</h2>
      <div className={s.commentsList}>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            id={comment.id}
            author={comment.author}
            text={comment.text}
            likes={comment.likes}
          />
        ))}
      </div>
      <AddComment />
    </div>
  );
};
