import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import DynamicRoute from "./components/DynamicRoute";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Page404 from "./components/Page404";
import UseRefHook from "./components/useRefHook";
import Sccanner from "./components/Test";
import UseMemoExample from "./useMemo/MemoHook";
import Dashboard from "./lazyLoading/Dashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<DynamicRoute />} />
          <Route path="/*" element={<Page404 />} />
          <Route path="/useref" element={<UseRefHook />} />
          <Route path="/test" element={<Sccanner />} />
          <Route path="/memo" element={<UseMemoExample />} />
          <Route path="/lazy" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
