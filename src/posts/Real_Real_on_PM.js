import frontMatter from 'front-matter';
import { marked } from 'marked'
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const RealRealonPM = () => {
const [post, setPost] = useState([]);
const location = useLocation();

useEffect(() => {
    fetch('2024-07-20.md')
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
        <Link to={`/posts/RealRealonPM`}>
          <img src={process.env.PUBLIC_URL + '/team.png'} alt="Post Cover" style={{borderRadius: '5%', width: '100%', height: '50%'}} />
        </Link>
        <br />
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

export default RealRealonPM;