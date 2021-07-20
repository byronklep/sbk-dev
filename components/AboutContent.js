import { MailIcon, PhoneIcon } from '@heroicons/react/solid'

export default function AboutContent() {
  return (
    <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 rounded-lg mx-8">
      <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
        <div className="ml-4 mt-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 rounded-full"
                src="/images/sam-front.jpg"
                alt=""
              />
            </div>
            <div className="ml-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Sam Klepper
              </h3>
              <p className="text-sm text-gray-500">
                <a href="#">@samklepdev</a>
              </p>
            </div>
          </div>
        </div>
        <div className="ml-4 mt-4 flex-shrink-0 flex">
          <button
            type="button"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <PhoneIcon
              className="-ml-1 mr-2 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <span>Phone</span>
          </button>
          <button
            type="button"
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <MailIcon
              className="-ml-1 mr-2 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <span>Email</span>
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <section className="bg-white rounded-lg shadow mt-5">
          <div className="container px-6 py-8 mx-auto">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <h1 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                  Default Taiwindcss Config
                </h1>

                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Dignissim fusce tortor, ac sed malesuada blandit. Et mi
                  gravida sem feugiat.
                </p>
              </div>

              <div>
                <h1 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                  Fully Responsive Components
                </h1>

                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Dignissim fusce tortor, ac sed malesuada blandit. Et mi
                  gravida sem feugiat.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
