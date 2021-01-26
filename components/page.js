import Head from 'next/head'

export default function Page({ children }) {
  return (
    <main>
      <Head>
        <title>Zuzanna i Paweł biorą ślub!</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&family=Hind+Siliguri:wght@300;400;700&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/c9c81a6bf5.js" crossOrigin="anonymous"></script>
        <script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js"></script>
        <meta charset="utf-8"/>
        <meta name="description" content="Strona weselna, tylko dla gości"/>
        <meta name="image" content="https://zuzaipawel.pl/images/og-seo.jpg"/>
        <meta itemprop="name" content="Zuzia i Paweł biorą ślub!"/>
        <meta itemprop="description" content="Strona weselna, tylko dla gości"/>
        <meta itemprop="image" content="https://zuzaipawel.pl/images/og-seo.jpg"/>
        <meta name="og:title" content="Zuzia i Paweł biorą ślub!"/>
        <meta name="og:description" content="Strona weselna, tylko dla gości"/>
        <meta name="og:image" content="https://zuzaipawel.pl/images/og-seo.jpg"/>
        <meta name="og:url" content="https://zuzaipawel.pl/"/>
        <meta name="og:site_name" content="Zuzia i Paweł biorą ślub!"/>
        <meta name="og:locale" content="pl_PL"/>
        <meta name="og:type" content="website"/>
      </Head>
      {children}
    </main>
  )
}
