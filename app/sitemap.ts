import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://neural-paths.com';
  
  // Define your static routes
  const routes = [
    '',
    '/products',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Add dynamic routes for products
  const products = [
    {
      slug: 'rovyk',
      name: 'Rovyk',
    },
    {
      slug: 'ava',
      name: 'Ava',
    },
    {
      slug: 'gitpeek',
      name: 'Gitpeek',
    },
    {
      slug: 'tyme',
      name: 'Tyme',
    },
  ].map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...routes, ...products];
} 