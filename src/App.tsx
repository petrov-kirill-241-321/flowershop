import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { AddComment } from "./components/Comments/AddComments";
import { Comments } from "./components/Comments/Comments";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" />
      <Route path="/comment" element={<Comments />} />
    </Routes>
  );
}

export default App;
