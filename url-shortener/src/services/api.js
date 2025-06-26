export async function shortenUrl(url) {
  // Simulate API response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        shortUrl: `https://short.ly/${Math.random().toString(36).slice(2, 8)}`,
        originalUrl: url,
        expiry: '30 mins',
      });
    }, 500);
  });
}