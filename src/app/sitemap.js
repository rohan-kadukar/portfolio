export default function sitemap() {
  const baseUrl = 'https://rohankadukar.com'; // Replace with your actual domain

  // Define your routes
  const routes = [
    '',
    '#about',
    '#projects',
    '#skills',
    '#experience',
    '#education',
    '#contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
} 