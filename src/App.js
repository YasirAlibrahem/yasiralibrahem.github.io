import './App.css';
import {ThemeProvider, BaseStyles,PageLayout, Button, Link } from '@primer/react';
import BlogPosts from './BlogPosts';
import { useState } from 'react';
import { MarkGithubIcon, MailIcon } from '@primer/octicons-react';

function App() {
  const [colorMode, setColorMode] = useState('light');

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