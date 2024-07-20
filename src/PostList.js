import './App.css';
import FundamentalConceptsInGenAI from './posts/Fundamental_Concepts_in_GenAI'
import HowToAvoidAClimateDisaster from './posts/How_to_Avoid_a_Climate_Disaster';
import ThoughtsOnSalesEngineering from './posts/Thoughts_on_Sales_Engineering';
import DeveloperProductivity101 from './posts/Developer_Productivity_101';
import RealRealonPM from './posts/Real_Real_on_PM';

const PostList = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      <div style={{ flex: '0 0 47%', marginBottom: '3%' }}>
        <RealRealonPM />
      </div>
      <div style={{ flex: '0 0 47%', marginBottom: '3%' }}>
        <DeveloperProductivity101 />
      </div>
      <div style={{ flex: '0 0 47%', marginBottom: '3%' }}>
        <FundamentalConceptsInGenAI />
      </div>
      <div style={{ flex: '0 0 47%', marginBottom: '3%' }}>
        <HowToAvoidAClimateDisaster />
      </div>
      <div style={{ flex: '0 0 47%', marginBottom: '3%' }}>
        <ThoughtsOnSalesEngineering />
      </div>
    </div>
  );
}

export default PostList;