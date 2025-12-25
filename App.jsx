import { useEffect, useState } from 'react';
import axios from 'axios';

const API = 'http://localhost:8000/api/v1/articles';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(API).then(res => {
      setArticles(res.data.data);
    });
  }, []);

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>BeyondChats Blog</h1>

      {articles.map(article => (
        <div key={article.id} style={{ marginBottom: '30px' }}>
          <h3>
            {article.title}
            {article.is_enhanced && ' ✨'}
          </h3>

          <p>{article.excerpt}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
