import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'

/* This example requires Tailwind CSS v2.0+ */
export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-screen pt-8 pb-12 flex flex-col bg-gray-50 rounded-lg">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 flex justify-center">
            <Link href="/">
              <a className="inline-flex">
                <span className="sr-only">Workflow</span>
                <Image
                  className="h-12 w-auto"
                  src="/images/sbk-logo.svg"
                  alt="Go Back"
                  height={100}
                  width={100}
                />
              </a>
            </Link>
          </div>
          <div className="py-4">
            <div className="text-center">
              <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                404 error
              </p>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                Page not found.
              </h1>
              <p className="mt-2 text-base text-gray-500">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className="mt-6">
                <Link href="/">
                  <a className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                    Go back home<span aria-hidden="true"> &rarr;</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
