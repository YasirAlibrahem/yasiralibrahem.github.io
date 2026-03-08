import './App.css';
import PostList from './PostList';
import Post from './Post';
import WholesomePrivacyPolicy from './wholesome/PrivacyPolicy';
import { Routes, Route } from 'react-router-dom';
import React from 'react';

const BlogPosts = () => {
  return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="BlogPost">
            <Routes>
                <Route path="/" element={<PostList />} />
                <Route path="/posts/:slug" element={<Post />} />
                <Route path="/wholesome/privacypolicy" element={<WholesomePrivacyPolicy />} />
            </Routes>
            </div>
        </div>
    )};

export default BlogPosts;