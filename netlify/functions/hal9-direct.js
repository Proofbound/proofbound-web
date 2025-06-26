// netlify/functions/hal9-direct.js
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // Verify payment session (reuse existing logic)
  const sessionId = event.headers.referer?.includes('session_id=');
  if (!sessionId) {
    return { 
      statusCode: 403, 
      body: JSON.stringify({ error: 'Payment verification required' })
    };
  }

  try {
    const { title, author, book_idea } = JSON.parse(event.body);
    
    // Direct HAL9 API call instead of iframe
    const response = await fetch('https://hal9.com/api/your-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.HAL9_API_KEY}`,
      },
      body: JSON.stringify({ title, author, book_idea }),
    });

    const result = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://proofbound.com',
      },
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};