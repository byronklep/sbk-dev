import Link from 'next/link'
import { SiGmail } from 'react-icons/si'
import { FaGitlab } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { SiReadthedocs } from 'react-icons/si'
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'

export default function AboutHeader() {
  return (
    <div>
      <div className="bg-gray-900 pb-32">
        <header className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="md:text-6xl text-5xl font-extrabold  text-white">
              About
            </h1>
          </div>
        </header>
      </div>

      <main className="-mt-32">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            <section className="bg-white dark:bg-gray-800">
              <div className="container px-6 py-8 mx-auto">
                <div className="items-center lg:flex">
                  <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                      Sam Klepper
                    </h2>

                    <p className="mt-4 text-gray-600 dark:text-gray-400 lg:max-w-md">
                      Hi I am Sam , software engineer{' '}
                      <a
                        className="font-bold text-indigo-600 dark:text-indigo-400"
                        href="#">
                        @BakaTeam
                      </a>{' '}
                      , Lorem ipsum, dolor sit amet consectetur adipisicing
                      elit. Illum in sed non alias, fugiat, commodi nemo ut
                      fugit corrupti dolorem sequi ex veniam consequuntur id,
                      maiores beatae ipsa omnis aliquam?
                    </p>

                    <div className="flex mt-4 -mx-2">
                      <Link href="/images/resume.pdf">
                        <a
                          className="mx-2 text-blue-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                          aria-label="Resume"
                          target="_blank"
                          rel="noreferrer">
                          <SiReadthedocs height={32} width={32} />
                        </a>
                      </Link>

                      <a
                        href="mailto:sam@samklepper.com"
                        className="mx-2 text-blue-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                        aria-label="Gmail"
                        target="_blank"
                        rel="noreferrer">
                        <SiGmail height={32} width={32} />
                      </a>

                      <Link href="https://gitlab.com/bklep">
                        <a
                          className="mx-2 text-blue-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                          aria-label="Gitlab"
                          target="_blank"
                          rel="noreferrer">
                          <FaGitlab height={32} width={32} />
                        </a>
                      </Link>

                      <Link href="https://www.linkedin.com/in/samuel-klepper-0435b5193/">
                        <a
                          className="mx-2 text-blue-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                          aria-label="Linkedin"
                          target="_blank"
                          rel="noreferrer">
                          <FaLinkedin height={32} width={32} />
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className="mt-8 lg:mt-0 lg:w-1/2">
                    <div className="flex items-center justify-center lg:justify-end">
                      <div className="max-w-lg">
                        <img
                          className="object-cover object-center w-full h-64 rounded-md shadow"
                          src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between my-10">
                  <h3 className=" text-lg md:text-2xl leading-6 font-medium text-gray-900">
                    Contact Information
                  </h3>
                  <div className="mt-3 flex sm:mt-0 sm:ml-4">
                    <button
                      type="button"
                      className="relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <PhoneIcon
                        className="-ml-1 mr-2 h-5 w-5 "
                        aria-hidden="true"
                      />
                      <span>Phone</span>
                    </button>
                    <button
                      type="button"
                      className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <MailIcon
                        className="-ml-1 mr-2 h-5 w-5 "
                        aria-hidden="true"
                      />
                      <span>Email</span>
                    </button>
                    <button
                      type="button"
                      className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <SiReadthedocs
                        className="-ml-1 mr-2 h-5 w-5 "
                        aria-hidden="true"
                      />
                      <span>Resume</span>
                    </button>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col">
                  <div className="mx-auto py-5 px-20 bg-gray-100 rounded">
                    <ul className="divide-y divide-gray-400">
                      <li className="py-4">Samuel Klepper</li>
                      <li className="py-4">
                        2406 W 18th St.
                        <br />
                        Houston, TX 77008
                      </li>
                      <li className="py-4">713-376-9541</li>
                      <li className="py-4">sam@samklepper.com</li>
                    </ul>
                  </div>
                  <div className="md:w-3/4 px-5">
                    <p className="text-xl bold my-3 mx-2 md:mx-6">
                      Lorem Ipsum
                    </p>
                    <p className="md:px-5 mx-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer nec odio. Praesent libero. Sed cursus ante dapibus
                      diam. Sed nisi. Nulla quis sem at nibh elementum
                      imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
                      tellus sed augue semper porta. Mauris massa. Vestibulum
                      lacinia arcu eget nulla. Class aptent taciti sociosqu ad
                      litora torquent per conubia nostra, per inceptos
                      himenaeos. Curabitur sodales ligula in libero.{' '}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
