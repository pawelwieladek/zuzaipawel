import Head from 'next/head'

export default function Page({ children }) {
  return (
    <main>
      <Head>
        <title>Zuzanna i Paweł biorą ślub!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&family=Hind+Siliguri:wght@300;400;700&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/c9c81a6bf5.js" crossOrigin="anonymous"></script>
        <script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js"></script>
      </Head>
      {children}
    </main>
  )
}
