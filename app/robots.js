export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/3432432dfgfdgf23432treert',
          '/_next',
          '/auth',
          '/getdb',
          '/buy'
        ]
      }
    ],
    sitemap: 'https://bolaspersonalizadas.store/sitemap.xml',
    host: 'https://bolaspersonalizadas.store'
  }
}
