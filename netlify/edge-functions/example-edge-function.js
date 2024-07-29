// netlify/edge-functions/example-edge-function.js
export default function handler(request) {
    return new Response('Hello from the edge!', {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
  