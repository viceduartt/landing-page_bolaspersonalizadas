export default function sitemap() {
  const baseUrl = 'https://bolaspersonalizadas.store'

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0
    }
  ]
}
