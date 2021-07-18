import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'

export default function Contact() {
  const [dropDown, setDropDown] = useState(false)
  const [text, setText] = useState('America')

  const router = useRouter()

  const dropdownHandler = () => {
    setDropDown(!dropDown)
  }

  return (
    <Layout title="Contact Sam Klepper">
      <section id="contact" className="mt-36">
        <div className="mx-auto container px-6 lg:px-14 xl:px-0">
          <div className="flex xl:flex-row flex-col justify-between item-start">
            <div className="flex justify-center item-start flex-col">
              <div>
                <p className="md:text-6xl text-4xl font-extrabold text-white">
                  Let&apos;s Get In{' '}
                  <span className="text-indigo-700">Touch</span>
                </p>
              </div>
              <div className="grid grid-cols-2 md:mt-12 mt-6 gap-y-8">
                <div className="flex flex-col justify-start items-start">
                  <p className="text-xl md:text-3xl font-bold  text-white">
                    1000+
                  </p>
                  <p className=" md:mt-4 text-lg md:text-2xl font-light leading-normal text-gray-300">
                    Projects
                  </p>
                </div>
                <div className="flex flex-col justify-start items-start">
                  <p className="text-xl md:text-3xl font-bold  text-white">
                    88%
                  </p>
                  <p className=" md:mt-4 text-lg md:text-2xl font-light leading-normal text-gray-300">
                    Retention
                  </p>
                </div>
                <div className="flex flex-col justify-start items-start">
                  <p className="text-xl md:text-3xl font-bold  text-white">
                    90%
                  </p>
                  <p className=" md:mt-4 text-lg md:text-2xl font-light leading-normal text-gray-300">
                    Client retention
                  </p>
                </div>
                <div className="flex flex-col justify-start items-start">
                  <p className="text-xl md:text-3xl font-bold  text-white">
                    90,000+
                  </p>
                  <p className=" md:mt-4 text-lg md:text-2xl font-light leading-normal text-gray-300">
                    Users impacted
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 mb-10 sm:w-9/12  xl:mt-0 lg:w-4/5 xl:w-2/5 flex-col bg-gray-800 md:p-10 p-4 flex justify-center items-start space-y-9">
              <div className="flex justify-center items-center w-full flex-col md:space-y-6 space-y-4">
                <div className="w-full flex justify-start items-center">
                  <input
                    className="focus:ring-2  focus:ring-gray-300 focus:outline-none bg-gray-700  rounded w-full py-3 pl-2 text-base leading-none placeholder:text-gray-300 text-gray-300"
                    type="text"
                    placeholder="Your name"
                  />
                </div>
                <div className="w-full flex justify-start items-center">
                  <input
                    className="focus:ring-2  focus:ring-gray-300 focus:outline-none bg-gray-700  rounded w-full py-3 pl-2 text-base leading-none placeholder:text-gray-300 text-gray-300"
                    type="email"
                    placeholder="Email address"
                  />
                </div>

                <div className="w-full relative">
                  <button
                    onClick={dropdownHandler}
                    className="focus:ring-2  focus:ring-gray-300 focus:outline-none w-full flex justify-between items-center bg-gray-700  rounded "
                    data-menu>
                    <p className="pl-2  py-3 text-gray-300 text-base ">
                      {text}
                    </p>
                    <div className="cursor-pointer text-white mr-3">
                      {dropDown ? (
                        <svg
                          id="svg2"
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-chevron-up"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="6 15 12 9 18 15" />
                        </svg>
                      ) : (
                        <svg
                          id="svg1"
                          xmlns="http://www.w3.org/2000/svg"
                          className=" icon icon-tabler icon-tabler-chevron-up"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      )}
                    </div>
                  </button>
                  {dropDown && (
                    <ul
                      onClick={() => setDropDown(false)}
                      className="transition duration-300  ease-out bg-gray-700 dark:bg-gray-800 shadow rounded mt-2 py-1 w-full absolute">
                      <li onClick={() => setText('China')}>
                        {' '}
                        <a
                          tabIndex="0"
                          className=" focus:outline-none focus:text-gray-400  cursor-pointer text-white dark:text-gray-400 dark:hover:text-white hover:bg-indigo-700 hover:text-gray-400 ">
                          <div className=" px-3 py-3 text-base leading-3 tracking-normal   font-normal">
                            China
                          </div>
                        </a>
                      </li>
                      <li onClick={() => setText('America')}>
                        {' '}
                        <a
                          tabIndex="0"
                          className=" focus:outline-none focus:text-gray-400  cursor-pointer text-white dark:text-gray-400 dark:hover:text-white  hover:bg-indigo-700 hover:text-gray-400 ">
                          <div className="px-3 py-3 text-base leading-3 tracking-normal  font-normal">
                            America
                          </div>
                        </a>
                      </li>
                      <li onClick={() => setText('France')}>
                        {' '}
                        <a
                          tabIndex="0"
                          className=" focus:outline-none focus:text-gray-400  cursor-pointer text-white dark:text-gray-400 dark:hover:text-white hover:bg-indigo-700 hover:text-gray-400">
                          <div className=" text-base leading-3 tracking-normal py-3  px-3 font-normal">
                            France
                          </div>
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
                <div className="w-full flex justify-start items-center">
                  <textarea
                    className="focus:ring-2 focus:ring-gray-300 focus:outline-none bg-gray-700 resize-none  rounded w-full py-3 px-2 text-base leading-none placeholder:text-gray-300 text-gray-300"
                    placeholder="Project Description"
                    cols="30"
                    rows="5"></textarea>
                </div>
              </div>
              <div className="w-full border rounded-sm border-white ">
                <button className="focus:ring-2  focus:ring-gray-300 w-full focus:outline-none focus:text-gray-300  hover:text-gray-300 hover:bg-gray-900 text-base font-medium py-3 leading-none text-white">
                  <p>Let’s get started on your project</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
