const ADD_COMMENT = "ADD_COMMENT";
const LIKE_COMMENT = "LIKE_COMMENT";

type InitialStateType = {
  comments: Array<CommentType>;
};

type CommentType = {
  id: number;
  author: string;
  text: string;
  likes: number;
};

const initialState: InitialStateType = {
  comments: [
    {
      id: 1,
      author: "Алексей",
      text: "Цветы бомба! Мне все понравилось!",
      likes: 12,
    },
    { id: 2, author: "Марина", text: "Все супер!", likes: 22 },
    { id: 3, author: "Иван", text: "Огонь!", likes: 15 },
  ],
};

export const commentReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_COMMENT:
      const newComment: CommentType = {
        id: Date.now(),
        author: action.author,
        text: action.text,
        likes: 0,
      };
      return { ...state, comments: [...state.comments, newComment] };

    case LIKE_COMMENT:
      return {
        ...state,
        comments: state.comments.map((comment) =>
          comment.id === action.id
            ? { ...comment, likes: comment.likes + 1 }
            : comment
        ),
      };

    default:
      return state;
  }
};

// Добавление комментария
export function addComment(author: string, text: string) {
  return { type: ADD_COMMENT, author, text };
}

// Лайк на комментарий
export function likeComment(id: number) {
  return { type: LIKE_COMMENT, id };
}
