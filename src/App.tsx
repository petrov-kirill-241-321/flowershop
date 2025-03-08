import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Main } from "./components/Main/Main";

import { Comments } from "./components/Comments/Comments";
import { Login } from "./components/Login/Login";
import { NotFound } from "./components/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/comment" element={<Comments />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
