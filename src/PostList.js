import { Link } from 'react-router-dom';
import posts from './postsManifest';
import './App.css';

const PostList = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      {posts.map((p) => (
        <div key={p.slug} style={{ flex: '0 0 47%', marginBottom: '3%' }}>
          <Link to={`/posts/${p.slug}`}>
            <img
              src={`${process.env.PUBLIC_URL}/${p.cover}`}
              alt="Post Cover"
              style={{ borderRadius: '5%', width: '100%' }}
            />
          </Link>
          <h2 style={{ textAlign: 'center' }}>{p.title}</h2>
          <p style={{ textAlign: 'left' }}>{p.date}</p>
          <p style={{ textAlign: 'left' }}>{p.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;