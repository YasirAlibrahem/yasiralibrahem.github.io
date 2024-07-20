import './App.css';
import {ThemeProvider, BaseStyles,PageLayout, Button, Link } from '@primer/react';
import BlogPosts from './BlogPosts';
import { useState } from 'react';
import { MarkGithubIcon, MailIcon } from '@primer/octicons-react';

function App() {
  const [colorMode, setColorMode] = useState('dark');

  return (
    <ThemeProvider colorMode={colorMode} preventSSRMismatch>
      <BaseStyles>
        <div className="App">
          <PageLayout className="PageLayout">
            {/* <PageLayout.Header>
              <h1 label="Header" height={64}> Yasir Alibrahem's Blog </h1>
            </PageLayout.Header> */}
            <PageLayout.Content className="PageLayout.Content">
              <BlogPosts />
            </PageLayout.Content>
            <PageLayout.Pane sticky divider="line" hidden={{narrow: true}}>
              <Button style={{ float:'right'}} onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
                {colorMode === 'light' ? '🌙' : '🌞'}
              </Button>
              <img src={process.env.PUBLIC_URL + '/chrome-512x512.png'} alt="Profile" style={{borderRadius: '50%', width: '100px', height: '100px'}} />
              <h1 label="Header" height={64}> Yasir Alibrahem </h1>
              <p>
                Musings on productivity, technology, communication, sustainability, and intentionality from a generalist engineer and a lens of economics. 
              </p>
              <p>All views expressed are my own and do not reflect the views of my employer.</p>
              <Link href="mailto:alibrahem.yasir@gmail.com">
                <MailIcon size={16} />
              </Link>{' '}
              <Link href="https://github.com/yasiralibrahem">
                <MarkGithubIcon size={16} />
              </Link>{' '}
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