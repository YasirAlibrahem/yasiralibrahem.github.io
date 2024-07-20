import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';

const WholesomePrivacyPolicy = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/wholesome/privacypolicy.md')
      .then(response => response.text())
      .then(text => setMarkdown(text));
  }, []);

  return (
    <div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};


export default WholesomePrivacyPolicy;