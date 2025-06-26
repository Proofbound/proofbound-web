// netlify/functions/hal9-direct.js
// Remove this line: const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  console.log('=== HAL9 Direct Function Called ===');
  console.log('Method:', event.httpMethod);
  console.log('HAL9_API_KEY present:', !!process.env.HAL9_API_KEY);

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // Simple session verification - check if referer has session_id
  const referer = event.headers.referer || '';
  if (!referer.includes('session_id=')) {
    console.log('No session_id in referer:', referer);
    return { 
      statusCode: 403, 
      body: JSON.stringify({ error: 'Payment verification required' })
    };
  }

  try {
    const { title, author, book_idea } = JSON.parse(event.body);
    console.log('Parsed data:', { title, author });
    
    // Call HAL9 API using built-in fetch
    const response = await fetch('https://api.hal9.com/books/bookgeneratorapi/proxy/toc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.HAL9_API_KEY}`,
      },
      body: JSON.stringify({ title, author, book_idea }),
    });

    if (!response.ok) {
      throw new Error(`HAL9 API error: ${response.status}`);
    }

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
    console.error('Error:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};