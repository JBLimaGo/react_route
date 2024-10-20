import "./App.css";

// 1 - Config react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import SearchForm from "./components/SearchForm";
import Search from "./pages/Search";
import { Navigate } from "react-router-dom/dist";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - Links com react router */}
        <Navbar />
        {/* 9 - Search */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 6 - nested route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 4 - Carregamento de dados ou Rota Dinamica */}
          <Route path="/products/:id" element={<Product />} />
          {/* 9 - Search */}
          <Route path="/search" element={<Search />} />
          {/* 10 - Redirect */}
          <Route path="/company" element={<Navigate to="about" />} />
          {/* 7 - no match route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
