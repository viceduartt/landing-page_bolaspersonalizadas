import './reset.css';
import './style.css';




export async function generateMetadata({ params }) {
  const baseUrl = 'https://eurobyte.store/'

  const title = 'Bolas Personalizadas para Festas e Eventos | BolasPersonalizadas'
  const image = `${baseUrl}/favicon.png`
  const url = `${baseUrl}`
  const description = 'Bolas personalizadas para festas, eventos e marcas. Produção sob medida, impressão de alta qualidade e entrega rápida em todo o Brasil.'


  //console.log(meta)

  return {
    icons: {
      icon: '/favicon.png',
      apple: '/apple-touch-icon.png',
      shortcut: '/favicon.png'
    },

    title,
    description,
    url,
    type: 'website',
    images: [
      {
        url: image,
        width: 1200,
        height: 630
      }
    ],


    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image]
    }
  }
}

export default async function RootLayout({ children, params }) {

  return (
    <html lang="pt-BR" translate='no'>
      <body>
        {children}
      </body>
    </html>
  )
}
