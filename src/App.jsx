import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import WriteArticle from "./Pages/WriteArticle";
import BlogTitles from "./Pages/BlogTitles";
import GenerateImages from "./Pages/GenerateImages";
import RemoveBackground from "./Pages/RemoveBackground";
import ReviewResume from "./Pages/ReviewResume";
import Community from "./Pages/Community";
import RemoveObject from "./Pages/RemoveObject";

const App = () => {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Home />} />

        {/* Layout route with nested pages */}
        <Route path="/ai" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="write-article" element={<WriteArticle />} />
          <Route path="blog-titles" element={<BlogTitles />} />
          <Route path="generate-images" element={<GenerateImages />} />
          <Route path="remove-background" element={<RemoveBackground />} />
          <Route path="remove-object" element={<RemoveObject />} />
          <Route path="review-resume" element={<ReviewResume />} />
          <Route path="community" element={<Community />} />

        </Route>

      </Routes>
    </div>
  );
};

export default App;
