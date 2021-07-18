import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SiGmail } from 'react-icons/si'
import { FaGitlab } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { SiReadthedocs } from 'react-icons/si'

export default function Header() {
  const [sidebar, setSidebar] = useState(false)

  return (
    <>
      <section className="mx-auto container px-6 lg:px-14 xl:px-0">
        <div className="hidden md:flex justify-between items-center pt-16 mb-12">
          <div className="flex flex-row items-center space-x-10">
            <div>
              <img
                className=""
                src="/images/sbk-logo-white.svg"
                alt="SbK logo"
                height={90}
                width={90}
              />
            </div>
            <div>
              <Link href="/">
                <a className="cursor-pointer text-base hover:text-gray-300 focus:outline-none focus:text-gray-300 font-semibold leading-none text-white">
                  <p>Home</p>
                </a>
              </Link>
            </div>
            <div>
              <Link href="/about">
                <a
                  href="#"
                  className="cursor-pointer text-base hover:text-gray-300 focus:outline-none focus:text-gray-300 font-semibold leading-none text-white">
                  <p>About</p>
                </a>
              </Link>
            </div>
            <div>
              <Link href="/work">
                <a className="cursor-pointer text-base hover:text-gray-300 focus:outline-none focus:text-gray-300 font-semibold leading-none text-white">
                  <p>Work</p>
                </a>
              </Link>
            </div>
            <div>
              <Link href="/contact">
                <a className="cursor-pointer text-base hover:text-gray-300 focus:outline-none focus:text-gray-300 font-semibold leading-none text-white">
                  <p>Contact</p>
                </a>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-6">
            <div className="flex justify-center items-center rounded-lg">
              <button className="text-white text-2xl hover:text-gray-300 focus:outline-none focus:text-gray-300">
                <SiReadthedocs height={32} width={32} />
              </button>
            </div>
            <div className="flex justify-center items-center rounded-lg">
              <button className="text-white text-2xl hover:text-gray-300 focus:outline-none focus:text-gray-300">
                <SiGmail height={32} width={32} />
              </button>
            </div>
            <div className="flex justify-center items-center rounded-lg">
              <button className="text-white text-2xl hover:text-gray-300 focus:outline-none focus:text-gray-300">
                <FaGitlab height={32} width={32} />
              </button>
            </div>
            <div className="flex justify-center items-center rounded-lg">
              <button className="text-white text-2xl hover:text-gray-300 focus:outline-none focus:text-gray-300">
                <FaLinkedin height={32} width={32} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="relative md:hidden mx-auto container w-full px-6 pb-20 pt-6  ">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center">
            <button
              className="text-white"
              id="menu"
              aria-label="open menu"
              onClick={() => setSidebar(true)}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 10H3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 6H3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 14H3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 18H3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-center items-center space-x-6">
            <div className="flex justify-center items-center rounded-lg">
              <button className="hover:text-gray-300 focus:outline-none focus:text-gray-300 text-white text-2xl">
                <SiReadthedocs height={32} width={32} />
              </button>
            </div>
            <div className="flex justify-center items-center rounded-lg">
              <button className="hover:text-gray-300 focus:outline-none focus:text-gray-300 text-white text-2xl">
                <SiGmail height={32} width={32} />
              </button>
            </div>
            <div className="flex justify-center items-center rounded-lg">
              <button className="hover:text-gray-300 focus:outline-none focus:text-gray-300 text-white text-2xl">
                <FaGitlab height={32} width={32} />
              </button>
            </div>
            <div className="flex justify-center items-center rounded-lg">
              <button className="hover:text-gray-300 focus:outline-none focus:text-gray-300 text-white text-2xl">
                <FaLinkedin height={32} width={32} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          !sidebar
            ? 'bg-white fixed top-0 w-full h-full transform -translate-x-full z-40 transition duration-700 md:hidden'
            : 'bg-white fixed top-0 w-full h-full transform translate-x-0 z-40 transition duration-700 md:hidden'
        }
        id="mobile-nav">
        <div
          className=" opacity-50 w-full h-full"
          onClick={() => setSidebar(false)}></div>
        <div className="bg-gray-900 w-full  h-full shadow-lg  z-40 fixed overflow-y-auto z-40 top-0    flex-col justify-between xl:hidden pb-4 transition duration-500 ease-in-out">
          <div className="px-6 h-full">
            <div className="flex flex-col  justify-between h-full w-full">
              <div>
                <div className="border-b border-gray-300  flex justify-between items-center">
                  <div className="w-20 text-white">
                    {/* SVG Logo */}
                    <img
                      className="fill-current text-green-600"
                      src="/images/sbk-logo-white.svg"
                      alt="SbK logo"
                    />

                    {/* <svg
                      viewBox="0 0 63 63"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2 31.5L0 31.5L2 31.5ZM13.0625 31.5L11.0625 31.5L13.0625 31.5ZM31.5 49.9375L31.5 51.9375L31.5 49.9375ZM49.9375 31.5L51.9375 31.5L49.9375 31.5ZM31.5 0C23.1457 0 15.1335 3.31874 9.22614 9.22614L12.0546 12.0546C17.2118 6.89731 24.2065 4 31.5 4V0ZM9.22614 9.22614C3.31874 15.1335 0 23.1457 0 31.5L4 31.5C4 24.2065 6.89731 17.2118 12.0546 12.0546L9.22614 9.22614ZM0 31.5C0 39.8543 3.31874 47.8665 9.22614 53.7739L12.0546 50.9454C6.89731 45.7882 4 38.7935 4 31.5L0 31.5ZM9.22614 53.7739C15.1335 59.6813 23.1457 63 31.5 63V59C24.2065 59 17.2118 56.1027 12.0546 50.9454L9.22614 53.7739ZM31.5 63C39.8543 63 47.8665 59.6813 53.7739 53.7739L50.9454 50.9454C45.7882 56.1027 38.7935 59 31.5 59V63ZM53.7739 53.7739C59.6813 47.8665 63 39.8543 63 31.5H59C59 38.7935 56.1027 45.7882 50.9454 50.9454L53.7739 53.7739ZM63 31.5C63 23.1457 59.6813 15.1335 53.7739 9.22614L50.9454 12.0546C56.1027 17.2118 59 24.2065 59 31.5H63ZM53.7739 9.22614C47.8665 3.31874 39.8543 0 31.5 0V4C38.7935 4 45.7882 6.89731 50.9454 12.0546L53.7739 9.22614ZM31.5 11.0625C26.0796 11.0625 20.8813 13.2157 17.0485 17.0485L19.8769 19.8769C22.9596 16.7943 27.1405 15.0625 31.5 15.0625L31.5 11.0625ZM17.0485 17.0485C13.2157 20.8813 11.0625 26.0796 11.0625 31.5L15.0625 31.5C15.0625 27.1405 16.7943 22.9596 19.8769 19.8769L17.0485 17.0485ZM11.0625 31.5C11.0625 36.9204 13.2157 42.1187 17.0485 45.9515L19.8769 43.1231C16.7943 40.0404 15.0625 35.8595 15.0625 31.5L11.0625 31.5ZM17.0485 45.9515C20.8813 49.7843 26.0796 51.9375 31.5 51.9375L31.5 47.9375C27.1405 47.9375 22.9596 46.2057 19.8769 43.1231L17.0485 45.9515ZM31.5 51.9375C36.9204 51.9375 42.1187 49.7843 45.9515 45.9515L43.1231 43.1231C40.0404 46.2057 35.8595 47.9375 31.5 47.9375L31.5 51.9375ZM45.9515 45.9515C49.7843 42.1187 51.9375 36.9204 51.9375 31.5L47.9375 31.5C47.9375 35.8595 46.2057 40.0404 43.1231 43.1231L45.9515 45.9515ZM51.9375 31.5C51.9375 26.0796 49.7843 20.8813 45.9515 17.0485L43.1231 19.8769C46.2057 22.9596 47.9375 27.1405 47.9375 31.5L51.9375 31.5ZM45.9515 17.0485C42.1187 13.2157 36.9204 11.0625 31.5 11.0625L31.5 15.0625C35.8595 15.0625 40.0404 16.7943 43.1231 19.8769L45.9515 17.0485ZM19.1881 15.1883C12.691 20.3859 8.9769 26.6947 8.30509 34.0846C7.63993 41.4012 9.98264 49.5007 15.0135 58.3048L18.4865 56.3202C13.684 47.9159 11.7246 40.6508 12.2887 34.4467C12.846 28.3157 15.8923 22.9474 21.6869 18.3117L19.1881 15.1883ZM43.8119 47.8117C50.3006 42.6208 54.0216 36.3813 54.6947 29.0496C55.3609 21.7936 53.0141 13.7583 47.9865 4.95989L44.5135 6.94444C49.3192 15.3544 51.2745 22.5513 50.7115 28.6839C50.1554 34.7407 47.1161 40.0459 41.3131 44.6883L43.8119 47.8117Z"
                        fill="white"
                      />
                    </svg> */}
                  </div>
                  <div className="mt-6 flex w-full items-end justify-end">
                    <div className=" pb-8 flex items-center justify-end w-full">
                      <button
                        id="cross"
                        aria-label="close menu"
                        className="focus:outline-none focus:ring-2 rounded-md text-white"
                        onClick={() => setSidebar(false)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-x"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z"></path>
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <ul className="">
                  <li>
                    <a className="cursor-pointer">
                      <div className="text-gray-800 pt-10">
                        <div className="flex items-center  hover:text-gray-300 text-base text-white">
                          <Link href="/">
                            <a className="focus:outline-none cursor-pointer">
                              Home
                            </a>
                          </Link>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer">
                      <div className="text-gray-800 pt-8">
                        <div className="flex items-center">
                          <div className="flex items-center hover:text-gray-300 text-base text-white">
                            <Link href="/about">
                              <a className="focus:outline-none  cursor-pointer ">
                                About
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer">
                      <div className="text-gray-800 pt-8">
                        <div className="flex items-center  hover:text-gray-300 text-base text-white">
                          <Link href="/work">
                            <a className="focus:outline-none cursor-pointer ">
                              Work
                            </a>
                          </Link>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="text-gray-800 pt-8 cursor-pointer">
                    <div className="flex items-center ">
                      <div className="flex items-center  hover:text-gray-300 text-base text-white">
                        <div className="w-6 h-6 md:w-8 md:h-8 ">
                          <Link href="/contact">
                            <a className="focus:outline-none cursor-pointer ">
                              Contact
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
