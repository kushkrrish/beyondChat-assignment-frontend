import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleDetail from "./pages/ArticleDetails";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
