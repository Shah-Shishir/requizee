import Home from "./containers/Home";
import Questions from "./containers/Questions";
import Result from "./containers/Result";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/questions" element={<Questions />}></Route>
      <Route path="/result" element={<Result />}></Route>
    </Routes>
  );
};

export default App;
