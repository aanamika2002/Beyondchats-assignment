require('dotenv').config();
const axios = require('axios');

const API = process.env.LARAVEL_API_URL;


async function enhanceArticle(originalArticle) {
  return {
    title: originalArticle.title + ' (Enhanced)',
    excerpt: originalArticle.excerpt,
    content: `
      <h2>Enhanced Version</h2>
      <p>This article has been improved for better clarity and structure.</p>
      ${originalArticle.content}
    `,
    author: originalArticle.author,
    published_date: new Date().toISOString().split('T')[0],
    url: originalArticle.url + '-enhanced',
    is_enhanced: true,
    parent_article_id: originalArticle.id
  };
}

async function run() {
  try {
    
    const res = await axios.get(`${API}/articles/latest`);
    const article = res.data;

    
    const enhanced = await enhanceArticle(article);

    
    await axios.post(`${API}/articles`, enhanced);

    console.log('✅ Article enhanced successfully');
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

run();
