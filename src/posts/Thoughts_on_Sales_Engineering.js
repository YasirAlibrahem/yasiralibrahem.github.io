import frontMatter from 'front-matter';
import { marked } from 'marked'
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ThoughtsOnSalesEngineering = () => {
const [post, setPost] = useState([]);
const location = useLocation();

useEffect(() => {
    fetch('2021-08-21.md')
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
        <Link to={`/posts/ThoughtsOnSalesEngineering`}>
          <img src={process.env.PUBLIC_URL + '/cover-san-francisco.png'} alt="Post Cover" style={{borderRadius: '5%', width: '100%', height: '50%'}} />
        </Link>
        <h2 style={{ textAlign: 'center' }}>{post.title}</h2>
        <p style={{ textAlign: 'left' }}>{post.date}</p>
        {location.pathname === '/' && <div>
          <p style={{ textAlign: 'left' }}>{post.excerpt}</p>
          {/* <Link style={{ float: 'left' }} to={`/posts/ThoughtsOnSalesEngineering`}>Read More</Link>   */}
          </div>}
        {location.pathname !== '/' && <div style={{textAlign: 'justify'}} dangerouslySetInnerHTML={{ __html: post.content}} />}
    </div>
  )
}

export default ThoughtsOnSalesEngineering;

// import post1 from './2021-08-21.md';