import React from "react";
import { Routes, Route } from "react-router-dom";
import ArticlePage from "./Pages/ArticlePage";
import AuthorPage from "./Pages/AuthorPage";

export default function App() {
  return (
    <Routes>
      
        <Route path="/" element={<ArticlePage />} />
        <Route path="/authors/:authorId" element={<AuthorPage />} />
        <Route path="/articles/:articleId" element={<ArticlePage />} />
     
    </Routes>
  );
}
