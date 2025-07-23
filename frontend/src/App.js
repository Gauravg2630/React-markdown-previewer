import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import './App.css';

marked.setOptions({ breaks: true });

function App() {
  const [markdown, setMarkdown] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/markdown')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not OK');
        return res.json();
      })
      .then((data) => {
        if (data.markdown) setMarkdown(data.markdown);
      })
      .catch((err) => console.error('Error fetching:', err));
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleReset = () => {
    setMarkdown('');
    saveMarkdown('');
  };

  const handleChange = (e) => {
    const newMarkdown = e.target.value;
    setMarkdown(newMarkdown);
    saveMarkdown(newMarkdown);
  };

  const saveMarkdown = (data) => {
    fetch('http://localhost:5000/api/markdown', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ markdown: data }),
    }).catch((err) => console.error('Error saving:', err));
  };

  const copyMarkdown = () => {
    navigator.clipboard.writeText(markdown).then(() => {
      alert('Markdown copied!');
    });
  };

  const copyPreviewHTML = () => {
    navigator.clipboard.writeText(marked(markdown)).then(() => {
      alert('HTML copied!');
    });
  };

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <header>
        <h1>📝 Markdown Previewer</h1>
        <div className="toolbar">
          <button onClick={toggleTheme}>
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
          <button onClick={handleReset}>🔄 Reset</button>
          <button onClick={copyMarkdown}>📋 Copy Markdown</button>
          <button onClick={copyPreviewHTML}>📋 Copy HTML</button>
        </div>
      </header>

      <main className="container">
        <textarea
          id="editor"
          value={markdown}
          onChange={handleChange}
          placeholder="Write Markdown here..."
        />
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </main>
    </div>
  );
}

export default App;
