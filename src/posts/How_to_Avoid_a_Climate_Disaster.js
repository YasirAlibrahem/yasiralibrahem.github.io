import frontMatter from 'front-matter';
import { marked } from 'marked'
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HowToAvoidAClimateDisaster = () => {
const [post, setPost] = useState([]);
const location = useLocation();

useEffect(() => {
    fetch("2024-01-06.md")
    .then(response => response.text())
    .then(text => {
        const parsedMarkdown = frontMatter(text);
        const title = parsedMarkdown.attributes.title;
        const date = parsedMarkdown.attributes.publish_date;
        const excerpt = parsedMarkdown.attributes.excerpt;
        const content = marked(parsedMarkdown.body);
        setPost({ title, date, excerpt, content })
    });
}, []);

  return (
    <div>
        <Link to={`/posts/HowToAvoidAClimateDisaster`}>
          <img src={process.env.PUBLIC_URL + '/climate-change-01.png'} alt="Post Cover" style={{borderRadius: '5%', width: '100%', height: '50%'}} />
        </Link>  
        <br />
        <h2 style={{ textAlign: 'center' }}>{post.title}</h2>
        <p style={{ textAlign: 'left' }}>{post.date}</p>
        {location.pathname === '/' && <div>
          <p style={{ textAlign: 'left' }}>{post.excerpt}</p>
          {/* <Link style={{ float: 'left' }} to={`/posts/HowToAvoidAClimateDisaster`}>Read More</Link>   */}
          </div>}
        {location.pathname !== '/' && <div style={{textAlign: 'left'}} dangerouslySetInnerHTML={{ __html: post.content}} />}
    </div>
  )
}

export default HowToAvoidAClimateDisaster;