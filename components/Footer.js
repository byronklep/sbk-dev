import Link from 'next/link'
import { SiGmail } from 'react-icons/si'
import { FaGitlab } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { SiReadthedocs } from 'react-icons/si'

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
              <div className="px-6">
                <div>
                  <Link href="/">
                    <a className="text-xl font-bold text-gray-300 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                      <img
                        src="/images/sbk-logo-white.svg"
                        alt="SbK Logo"
                        width={80}
                      />
                    </a>
                  </Link>
                </div>

                <p className="max-w-md mt-2 text-gray-400 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, nisi! Id.
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
            </div>

            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                <div>
                  <h3 className="text-gray-300 uppercase dark:text-white">
                    About
                  </h3>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-400 dark:text-gray-400 hover:underline">
                    Company
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-400 dark:text-gray-400 hover:underline">
                    community
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-400 dark:text-gray-400 hover:underline">
                    Careers
                  </a>
                </div>

                <div>
                  <h3 className="text-gray-300 uppercase dark:text-white">
                    Blog
                  </h3>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-400 dark:text-gray-400 hover:underline">
                    Tec
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-400 dark:text-gray-400 hover:underline">
                    Music
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-400 dark:text-gray-400 hover:underline">
                    Videos
                  </a>
                </div>

                <div>
                  <h3 className="text-gray-300 uppercase dark:text-white">
                    Products
                  </h3>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-400 dark:text-gray-400 hover:underline">
                    Mega cloud
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-400 dark:text-gray-400 hover:underline">
                    Aperion UI
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-400 dark:text-gray-400 hover:underline">
                    Meraki UI
                  </a>
                </div>

                <div>
                  <h3 className="text-gray-300 uppercase dark:text-white">
                    Contact
                  </h3>
                  <span className="block mt-2 text-sm text-gray-400 dark:text-gray-400 hover:underline">
                    +1 713-376-9541
                  </span>
                  <span className="block mt-2 text-sm text-gray-400 dark:text-gray-400 hover:underline">
                    sam@samklepper.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />

          <div>
            <p className="text-center text-gray-400 dark:text-white">
              © SbK 2021 - All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
