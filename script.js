const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

// Function to fetch and log data from URLs
async function fetchAndLogUrls(urls) {
  for (let url of urls) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
    }
  }
}

// Call the function to start fetching and logging
fetchAndLogUrls(urls);
