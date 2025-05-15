import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://neuralpaths.ai';
  
  // Define your static routes
  const routes = [
    '',
    '/ai-solutions',
    '/responsible-ai',
    '/disclaimer',
    '/privacy-policy',
    '/terms-of-service',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Add products with their specific domains
  const products = [
    {
      name: 'Rovyk',
      url: 'https://rovyk.com',
    },
    {
      name: 'Gitpeek',
      url: 'https://gitpeek.neuralpaths.ai',
    },
    {
      name: 'Tyme',
      url: 'https://tyme.neuralpaths.ai',
    },
    {
      name: 'Ava',
      url: `https://ava.neuralpaths.ai`,
    },
  ].map((product) => ({
    url: product.url,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9, // Higher priority for main products
  }));

  // Add tools with their specific domains
  const tools = [
    {
      name: 'Lawbit',
      url: 'https://lawbit.ai',
    },
    {
      name: 'Okra',
      url: 'https://okra.neuralarc.ai',
    },
    {
      name: 'Spider',
      url: 'https://spider.neuralarc.ai',
    },
    {
      name: 'Pikra',
      url: 'https://pikra.neuralarc.ai',
    },
  ].map((tool) => ({
    url: tool.url,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  

  return [
    ...routes,
    ...products,
    ...tools,
  ];
} 