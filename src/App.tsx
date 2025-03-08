import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Main } from "./components/Main/Main";

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
