import './App.css';
import PostList from './PostList'
import FundamentalConceptsInGenAI from './posts/Fundamental_Concepts_in_GenAI'
import HowToAvoidAClimateDisaster from './posts/How_to_Avoid_a_Climate_Disaster';
import ThoughtsOnSalesEngineering from './posts/Thoughts_on_Sales_Engineering';
import DeveloperProuctivity101 from './posts/Developer_Productivity_101';
import RealRealonPM from './posts/Real_Real_on_PM';
import WholesomePrivacyPolicy from './wholesome/PrivacyPolicy';
import { Routes, Route } from 'react-router-dom';
import React from 'react';

const BlogPosts = () => {
  return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="BlogPost">
            <Routes>
                <Route path="/" element={<PostList />} />
                <Route path="/posts/RealRealonPM" element={<RealRealonPM />} />
                <Route path="/posts/DeveloperProuctivity101" element={<DeveloperProuctivity101 />} />
                <Route path="/posts/FundamentalConceptsInGenAI" element={<FundamentalConceptsInGenAI />} />
                {/* might add <link> inside <route>, but that caused rendering issues */}
                <Route path="/posts/HowToAvoidAClimateDisaster" element={<HowToAvoidAClimateDisaster />} />
                <Route path="/posts/ThoughtsOnSalesEngineering" element={<ThoughtsOnSalesEngineering />} />
                <Route path="/wholesome/privacypolicy" element={<WholesomePrivacyPolicy />} />
            </Routes>
            </div>
        </div>
    )};

export default BlogPosts;