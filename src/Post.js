import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import posts from './postsManifest';
import './App.css';

const Post = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const meta = posts.find((p) => p.slug === slug);

  useEffect(() => {
    if (!meta) return;
    fetch(`${process.env.PUBLIC_URL}/${meta.mdFile}`)
      .then((r) => r.text())
      .then((text) => {
        setContent(DOMPurify.sanitize(marked(text)));
      });
  }, [meta]);

  if (!meta) return <p>Post not found.</p>;

  return (
    <div>
      <div style={{ overflow: 'hidden', borderRadius: '5%' }}>
        <img
          src={`${process.env.PUBLIC_URL}/${meta.cover}`}
          alt="Post Cover"
          style={{ width: '100%', marginBottom: '-20%', display: 'block' }}
        />
      </div>
      <h2 style={{ textAlign: 'center' }}>{meta.title}</h2>
      <p style={{ textAlign: 'left' }}>{meta.date}</p>
      <div
        style={{ textAlign: 'left' }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default Post;
