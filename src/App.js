import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Home from "components/Home";
import Header from "components/Header";
import Footer from "components/Footer";
import PageNotFound from "components/PageNotFound";
import MovieDetail from "components/MovieDetail";

import 'styles.scss';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
