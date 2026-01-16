import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<h6>404 Page Not Found</h6>} />
    </Routes>
  );
};

export default App;
