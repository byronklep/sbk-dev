import { FormspreeProvider } from '@formspree/react'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
function MyApp({ Component, pageProps }) {
  return (
    <FormspreeProvider project="1731384400056155780">
      <div className="bg-gray-900 min-h-screen overflow-x-hidden">
        <Component {...pageProps} />
      </div>
    </FormspreeProvider>
  )
}

export default MyApp
