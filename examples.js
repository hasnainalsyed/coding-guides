const headings = document.querySelectorAll('[data-heading]');

headings.forEach(heading => {
  const level = heading.getAttribute('data-heading-level') || '1';
  const tagName = `h${level}`;
  const newHeading = document.createElement(tagName);
  newHeading.innerHTML = heading.innerHTML;
  heading.replaceWith(newHeading);
});

/**
 * * Use `fetch` with appropriate HTTP methods:
 * * `GET`
 * * `POST`
 * * `PUT`
 * ! Handle errors and loading states properly
 * ! Never expose sensitive tokens on the frontend
 */

// Example fetch usage
fetch('https://api.example.com/data', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN_HERE'
  }
}).then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }
  return response.json();
}).then(data => {
  console.log(data);
}).catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});

