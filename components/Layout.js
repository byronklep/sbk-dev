import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, title, keywords, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto my-7 bg-gray-900">{children}</main>
      <Footer />
    </>
  )
}

Layout.defaultProps = {
  title: "Sam's Web Dev Portfolio",
  keywords:
    'development, website, programming, app, javascript, html, css, business',
  description: 'Web development porfolio',
}
