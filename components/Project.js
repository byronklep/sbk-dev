import Link from 'next/link'

export default function Project() {
  return (
    <>
      <div className="w-full xl:w-72 flex flex-col justify-between items-start p-3 md:p-6 bg-gray-800 rounded">
        <div className="w-full">
          <div className="w-full">
            <img
              className="w-full"
              src={
                'https://cdn.tuk.dev/assets/templates/portfolio/rectangle.png'
              }
              alt="spider-web"
            />
          </div>
          <div className="md:mt-6 mt-4">
            <p className="text-xs font-medium leading-3 text-white">
              JAVASCRIPT
            </p>
          </div>
          <div className="md:mt-4 mt-2">
            <p className="xl:w-60 text-base md:text-2xl font-semibold text-white">
              Building an Interactive Showcase with Vue.js & Vue Instant Search{' '}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <Link href={`/work/${project.slug}`}>
            <a className="cursor-pointer focus:outline-none focus:underline text-xs leading-3 hover:underline focus:underline text-gray-300">
              <p className="">Go to project</p>
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
