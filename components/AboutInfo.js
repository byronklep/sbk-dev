import Link from 'next/link'
import { PaperClipIcon } from '@heroicons/react/solid'

export default function AboutInfo() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-14">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Sam Klepper
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          JavaScript enthusiast.
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Position</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Full Stack Developer
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              2406 W 18th St, Houston, TX
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <a
                className="text-blue-600"
                href="mailto:sam@samklepper.com"
                aria-label="Gmail"
                target="_blank"
                rel="noreferrer">
                sam@samklepper.com
              </a>
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">GitLab</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <a
                className="text-blue-600"
                href="https://gitlab.com/bklep"
                aria-label="GitLab"
                target="_blank"
                rel="noreferrer">
                gitlab.com/bklep
              </a>
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Linkedin</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <a
                className="text-blue-600"
                href="https://www.linkedin.com/in/samuel-klepper-0435b5193/"
                aria-label="Linkedin"
                target="_blank"
                rel="noreferrer">
                linkedin.com/samklepper
              </a>
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Phone</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <a
                className="text-blue-600"
                href="tel:7133769541"
                aria-label="Phone"
                target="_blank"
                rel="noreferrer">
                (713) 376 - 9541
              </a>
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              I have always had an undying curiosity for technology and all it
              had to offer the world. After graduating from Digital Crafts
              coding bootcamp, I gained the necessary skills to create
              responsive, robust web applications ready for today&apos;s fast
              paced world.
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <PaperClipIcon
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2 flex-1 w-0 truncate">
                      sbk_resume.pdf
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <Link href="/images/resume.pdf">
                      <a
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                        aria-label="Resume"
                        target="_blank"
                        rel="noreferrer">
                        Download
                      </a>
                    </Link>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
