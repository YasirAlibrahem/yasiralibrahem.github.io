import './App.css';
import {ThemeProvider, BaseStyles,PageLayout, Button, Link } from '@primer/react';
import BlogPosts from './BlogPosts';
import posts from './postsManifest';
import { useState } from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { MarkGithubIcon, MailIcon } from '@primer/octicons-react';

function App() {
  const [colorMode, setColorMode] = useState('light');
  const location = useLocation();
  const isPostPage = location.pathname.startsWith('/posts/');

  return (
    <ThemeProvider colorMode={colorMode} preventSSRMismatch>
      <BaseStyles>
        <div className="App">
          <PageLayout containerWidth="full" className="PageLayout">
            {/* <PageLayout.Header>
              <h1 label="Header" height={64}> Yasir Alibrahem's Blog </h1>
            </PageLayout.Header> */}
            <PageLayout.Content className="PageLayout.Content">
              <BlogPosts />
            </PageLayout.Content>
            <PageLayout.Pane sticky divider="line" hidden={{narrow: true}}>
              <div className="SidebarPane">
                <div className="SidebarToolbar">
                  <Button className="ThemeToggle" onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
                    {colorMode === 'light' ? '🌙' : '🌞'}
                  </Button>
                </div>
                <div className="SidebarContent">
                  <img src={process.env.PUBLIC_URL + '/profile-headshot.jpg'} alt="Profile" className="ProfileImage" />
                  <h1 label="Header" height={64}> Yasir Alibrahem </h1>
                  <p>
                    Musings on productivity, technology, communication, sustainability, and intentionality from a generalist engineer and a lens of economics. 
                  </p>
                  <p>All views expressed are my own and do not reflect the views of my employer.</p>
                  <div className="SocialLinks">
                    <Link href="mailto:alibrahem.yasir@gmail.com" aria-label="Email Yasir">
                      <MailIcon size={16} />
                    </Link>{' '}
                    <Link href="https://github.com/yasiralibrahem" aria-label="Yasir on GitHub">
                      <MarkGithubIcon size={16} />
                    </Link>{' '}
                    <Link href="https://www.linkedin.com/in/yasiralibrahem/" aria-label="Yasir on LinkedIn">
                      <img
                        src={process.env.PUBLIC_URL + '/linkedin.svg'}
                        alt="LinkedIn"
                        width="16"
                        height="16"
                        className="SocialIcon"
                      />
                    </Link>
                  </div>
                  {isPostPage && (
                    <>
                      <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid currentColor', opacity: 0.3 }} />
                      <h3 style={{ marginBottom: '8px', textAlign: 'left' }}>All Posts</h3>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
                        {posts.map((p) => (
                          <li key={p.slug} style={{ marginBottom: '6px' }}>
                            <RouterLink to={`/posts/${p.slug}`} style={{ fontSize: '14px' }}>
                              {p.title}
                            </RouterLink>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </PageLayout.Pane>
            <PageLayout.Footer divider="line" className="PageLayout.Footer">
              <h5 label="Footer" height={64}> © 2024 Yasir Alibrahem </h5>
              {/* <Link href="/wholesome/privacypolicy">Privacy Policy</Link> */}
            </PageLayout.Footer>
          </PageLayout>
        </div>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;