import { useState } from 'react'
import { useRouter } from 'next/router'

import Layout from '../components/Layout'

const Work = () => {
  const [dropDown, setDropDown] = useState(false)
  const [text, setText] = useState('America')
  const [sidebar, setSidebar] = useState(false)

  const router = useRouter()

  const dropdownHandler = () => {
    setDropDown(!dropDown)
  }

  return (
    <Layout title="My Work">
      <section className="mt-14">
        <div className="mx-auto container  px-6 lg:px-14 xl:px-0">
          <div className="flex flex-col justify-center items-start">
            <div className="flex justify-start items-start">
              <h1 className="xl:text-6xl md:text-5xl text-4xl font-extrabold  text-white">
                Highlights
              </h1>
            </div>
            <div className="flex justify-start items-start flex-col md:flex-row md:space-x-8 mt-8	">
              <div className="px-8 py-10 mt-4 bg-gray-800 flex  justify-start items-start flex-col rounded">
                <div className="">
                  <p className="text-xs font-medium leading-3 text-white">
                    JAVASCRIPT
                  </p>
                </div>
                <div className="md:mt-2">
                  <p className="text-2xl md:text-3xl font-semibold lg:leading-7 text-white">
                    Front-end architecture
                  </p>
                </div>
                <div className="mt-2 md:mt-4 ">
                  <p className="text-base leading-normal text-gray-300 ">
                    It is a long established fact that a reader will be
                    distracted by the readable content for remote Junior Web
                    Developer for Coolor, located in Las Vegas
                  </p>
                </div>
                <div className="mt-3 md:mt-6">
                  <div className="inline-flex space-x-2 items-center justify-start w-40 h-4">
                    <svg
                      width="14"
                      height="2"
                      viewBox="0 0 14 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect width="14" height="2" fill="#9CA3AF" />
                    </svg>

                    <p className="text-base leading-none text-gray-400">
                      Schinner Systems
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-8 py-10 mt-4 bg-gray-800 flex  justify-start items-start flex-col rounded">
                <div className="">
                  <p className="text-xs font-medium leading-3 text-white">
                    JAVASCRIPT
                  </p>
                </div>
                <div className="md:mt-2">
                  <p className="text-2xl md:text-3xl font-semibold lg:leading-7  text-white">
                    Building an MVP in react
                  </p>
                </div>
                <div className="mt-2 md:mt-4 ">
                  <p className="text-base leading-normal text-gray-300 ">
                    It is a long established fact that a reader will be
                    distracted by the readable content for remote Junior Web
                    Developer for Coolor, located in Las Vegas
                  </p>
                </div>
                <div className="mt-3 md:mt-6">
                  <div className="inline-flex space-x-2 items-center justify-start w-40 h-4">
                    <svg
                      width="14"
                      height="2"
                      viewBox="0 0 14 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect width="14" height="2" fill="#9CA3AF" />
                    </svg>

                    <p className="text-base leading-none text-gray-400">
                      {' '}
                      Casper LLC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24">
        <div className="mx-auto container px-6 lg:px-14 xl:px-0">
          <div className="flex justify-center items-start flex-col space-y-8">
            <div className="flex justify-start items-start">
              <h1 className="xl:text-6xl md:text-5xl text-4xl font-extrabold text-right text-white">
                Work
              </h1>
            </div>
            <div className="w-full items-center grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 xl:gap-x-6 xl:gap-y-6 gap-x-4 md:gap-x-6 mt-16 xl:mt-0 gap-y-4 md:gap-y-6">
              <div className=" flex flex-col justify-between items-start p-3 md:p-6 bg-gray-800 rounded">
                <div className="w-full">
                  <div className="flex justify-center items-center w-full">
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
                    <p className=" text-base md:text-2xl font-semibold lg:leading-8 text-white">
                      Building an Interactive Showcase with Vue.js & Vue Instant
                      Search{' '}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    onClick={() => router.push('/projectInner')}
                    className="cursor-pointer focus:outline-none focus:underline text-xs  hover:underline focus:underline text-gray-300">
                    <p>Go to project</p>
                  </a>
                </div>
              </div>
              <div className=" flex flex-col justify-between items-start h-full p-3 md:p-6 bg-gray-800 rounded">
                <div className="w-full">
                  <div className="w-full flex justify-center items-center">
                    <img
                      className="w-full"
                      src={
                        'https://cdn.tuk.dev/assets/templates/portfolio/book.png'
                      }
                      alt="book"
                    />
                  </div>
                  <div className="md:mt-6 mt-4">
                    <p className="text-xs font-medium leading-3 text-white">
                      JAVASCRIPT
                    </p>
                  </div>
                  <div className="md:mt-4 mt-2">
                    <p className=" text-base md:text-2xl font-semibold lg:leading-8 text-white">
                      In Defense of Utility-First CSS
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    onClick={() => router.push('/projectInner')}
                    className="cursor-pointer focus:outline-none focus:underline text-xs  hover:underline focus:underline text-gray-300">
                    <p>Go to project</p>
                  </a>
                </div>
              </div>
              <div className=" flex flex-col h-full justify-between items-start p-3 md:p-6 bg-gray-800 rounded">
                <div className="w-full">
                  <div className="w-full justify-end items-center">
                    <img
                      className="w-full"
                      src={
                        'https://cdn.tuk.dev/assets/templates/portfolio/coding.png'
                      }
                      alt="book"
                    />
                  </div>
                  <div className="md:mt-6 mt-4">
                    <p className="text-xs font-medium leading-3 text-white">
                      JAVASCRIPT
                    </p>
                  </div>
                  <div className="md:mt-4 mt-2">
                    <p className=" text-base md:text-2xl font-semibold lg:leading-8 text-white">
                      Why Javascript Numbers Are Weird (And How to Fix It)
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    onClick={() => router.push('/projectInner')}
                    className="cursor-pointer focus:outline-none focus:underline text-xs  hover:underline focus:underline text-gray-300">
                    <p>Go to project</p>
                  </a>
                </div>
              </div>
              <div className=" flex flex-col h-full justify-between items-start p-3 md:p-6 bg-gray-800 rounded">
                <div className="w-full">
                  <div className="w-full items-center justify-center">
                    <img
                      className="w-full"
                      src={
                        'https://cdn.tuk.dev/assets/templates/portfolio/chrome.png'
                      }
                      alt="book"
                    />
                  </div>
                  <div className="md:mt-6 mt-4">
                    <p className="text-xs font-medium leading-3 text-white">
                      JAVASCRIPT
                    </p>
                  </div>
                  <div className="md:mt-4 mt-2">
                    <p className="xl:w-60 text-base md:text-2xl font-semibold lg:leading-8 text-white">
                      Scalable Responsive Systems
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    onClick={() => router.push('/projectInner')}
                    className="cursor-pointer focus:outline-none focus:underline text-xs  hover:underline focus:underline text-gray-300">
                    <p>Go to project</p>
                  </a>
                </div>
              </div>
              <div className=" flex flex-col justify-between items-start p-3 md:p-6 bg-gray-800 rounded">
                <div className="w-full">
                  <div className="flex justify-center items-center w-full">
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
                    <p className=" text-base md:text-2xl font-semibold lg:leading-8 text-white">
                      Building an Interactive Showcase with Vue.js & Vue Instant
                      Search{' '}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    onClick={() => router.push('/projectInner')}
                    className="cursor-pointer focus:outline-none focus:underline text-xs  hover:underline focus:underline text-gray-300">
                    <p>Go to project</p>
                  </a>
                </div>
              </div>
              <div className=" flex flex-col justify-between items-start h-full p-3 md:p-6 bg-gray-800 rounded">
                <div className="w-full">
                  <div className="w-full flex justify-center items-center">
                    <img
                      className="w-full"
                      src={
                        'https://cdn.tuk.dev/assets/templates/portfolio/book.png'
                      }
                      alt="book"
                    />
                  </div>
                  <div className="md:mt-6 mt-4">
                    <p className="text-xs font-medium leading-3 text-white">
                      JAVASCRIPT
                    </p>
                  </div>
                  <div className="md:mt-4 mt-2">
                    <p className=" text-base md:text-2xl font-semibold lg:leading-8 text-white">
                      In Defense of Utility-First CSS
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    onClick={() => router.push('/projectInner')}
                    className="cursor-pointer focus:outline-none focus:underline text-xs  hover:underline focus:underline text-gray-300">
                    <p>Go to project</p>
                  </a>
                </div>
              </div>
              <div className=" flex flex-col h-full justify-between items-start p-3 md:p-6 bg-gray-800 rounded">
                <div className="w-full">
                  <div className="w-full justify-end items-center">
                    <img
                      className="w-full"
                      src={
                        'https://cdn.tuk.dev/assets/templates/portfolio/coding.png'
                      }
                      alt="book"
                    />
                  </div>
                  <div className="md:mt-6 mt-4">
                    <p className="text-xs font-medium leading-3 text-white">
                      JAVASCRIPT
                    </p>
                  </div>
                  <div className="md:mt-4 mt-2">
                    <p className=" text-base md:text-2xl font-semibold lg:leading-8 text-white">
                      Why Javascript Numbers Are Weird (And How to Fix It)
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    onClick={() => router.push('/projectInner')}
                    className="cursor-pointer focus:outline-none focus:underline text-xs  hover:underline focus:underline text-gray-300">
                    <p>Go to project</p>
                  </a>
                </div>
              </div>
              <div className=" flex flex-col h-full justify-between items-start p-3 md:p-6 bg-gray-800 rounded">
                <div className="w-full">
                  <div className="w-full items-center justify-center">
                    <img
                      className="w-full"
                      src={
                        'https://cdn.tuk.dev/assets/templates/portfolio/chrome.png'
                      }
                      alt="book"
                    />
                  </div>
                  <div className="md:mt-6 mt-4">
                    <p className="text-xs font-medium leading-3 text-white">
                      JAVASCRIPT
                    </p>
                  </div>
                  <div className="md:mt-4 mt-2">
                    <p className="xl:w-60 text-base md:text-2xl font-semibold lg:leading-8 text-white">
                      Scalable Responsive Systems
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    onClick={() => router.push('/projectInner')}
                    className="cursor-pointer focus:outline-none focus:underline text-xs  hover:underline focus:underline text-gray-300">
                    <p>Go to project</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24">
        <div className="container mx-auto px-6 lg:px-14 xl:px-0">
          <div className="flex justify-start items-start flex-col space-y-14">
            <div className="">
              <h1 className="xl:text-6xl md:text-5xl text-4xl font-extrabold text-white">
                Technology stack
              </h1>
            </div>
            <div className="flex flex-col space-y-4  md:space-y-14">
              <div>
                <div className=" flex md:justify-start justify-between item-start flex-row space-x-3 xl:space-x-14 md:space-x-4 border-gray-700 border-b w-full h-full">
                  <div>
                    <button className=" font-medium lg:leading-6 focus:outline-none  pb-2 md:pb-4 xl:pb-2 text-xs md:text-xl xl:text-2xl pr-2 md:mr-0 border-b-2 xl:border-b-4 border-transparent focus:border-white text-gray-400 hover:text-white focus:text-white">
                      <p>Back-end</p>
                    </button>
                  </div>
                  <div>
                    <button className=" font-medium lg:leading-6 focus:outline-none  pb-2 md:pb-4 xl:pb-2 text-xs md:text-xl xl:text-2xl  pr-2 md:mr-0 border-b-2 xl:border-b-4 border-transparent focus:border-white text-gray-400 hover:text-white focus:text-white">
                      <p>Front-end</p>
                    </button>
                  </div>
                  <div>
                    <button className=" font-medium lg:leading-6 focus:outline-none text-left  pb-2 md:pb-4 xl:pb-2 text-xs md:text-xl xl:text-2xl  pr-2 md:mr-0 border-b-2 xl:border-b-4 border-transparent focus:border-white text-gray-400 hover:text-white focus:text-white">
                      <p>Infrastructure & tools</p>
                    </button>
                  </div>
                  <div>
                    <button className=" font-medium lg:leading-6 focus:outline-none  pb-2 md:pb-4 xl:pb-2 text-xs md:text-xl xl:text-2xl  pr-2 md:mr-0 border-b-2 xl:border-b-4 border-transparent focus:border-white text-gray-400 hover:text-white focus:text-white">
                      <p>Testing</p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center items-center flex-col space-y-6">
                <div className="w-full flex justify-center xl:items-center xl:flex-row flex-col xl:space-x-6 space-y-6 xl:space-y-0 ">
                  <div className="flex xl:flex-row md:space-x-6 space-x-2 ml-2 md:ml-0">
                    <div className="inline-flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        NodeJS
                      </p>
                    </div>
                    <div className="inline-flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        Python
                      </p>
                    </div>
                    <div className="inline-flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        PHP
                      </p>
                    </div>

                    <div className="inline-flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        GraphQL
                      </p>
                    </div>

                    <div className="hidden sm:flex flex-shrink-0 items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-base leading-none text-white">
                        Web Sockets
                      </p>
                    </div>

                    <div className="hidden md:inline-flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-base leading-none text-white">
                        Express
                      </p>
                    </div>
                    <div className="hidden sm:flex xl:hidden items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        Hapi
                      </p>
                    </div>

                    <div className="hidden sm:flex md:hidden lg:flex xl:hidden items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        NestJS
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row md:space-x-6 space-x-2 ml-2 md:ml-0">
                    <div className="flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        Koa
                      </p>
                    </div>

                    <div className="flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        Hapi
                      </p>
                    </div>

                    <div className="flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        NestJS
                      </p>
                    </div>

                    <div className="flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className=" text-xs md:text-base leading-none text-white">
                        Django
                      </p>
                    </div>

                    <div className="hidden md:flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-base leading-none text-white">
                        Laravel
                      </p>
                    </div>

                    <div className="hidden sm:flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        Wordpress
                      </p>
                    </div>
                    <div className="hidden sm:flex xl:hidden items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        Koa
                      </p>
                    </div>

                    <div className="hidden sm:flex md:hidden lg:flex  xl:hidden items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        Hapi
                      </p>
                    </div>

                    <div className="hidden sm:flex md:hidden lg:flex xl:hidden items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        NestJS
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center xl:items-center xl:flex-row flex-col xl:space-x-6 space-y-6 xl:space-y-0 ">
                  <div className="flex flex-row md:space-x-6 space-x-2">
                    <div className="hidden md:inline-flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-base leading-none text-white">
                        NodeJS
                      </p>
                    </div>
                    <div className="hidden sm:inline-flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        Python
                      </p>
                    </div>
                    <div className="hidden sm:inline-flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        PHP
                      </p>
                    </div>

                    <div className="inline-flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className=" text-xs md:text-base leading-none text-white">
                        GraphQL
                      </p>
                    </div>

                    <div className="flex flex-shrink-0 items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        Web Sockets
                      </p>
                    </div>

                    <div className="inline-flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        Express
                      </p>
                    </div>
                    <div className="hidden sm:flex xl:hidden items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        Koa
                      </p>
                    </div>

                    <div className="hidden sm:flex md:hidden lg:flex xl:hidden items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        Hapi
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row md:space-x-6 space-x-2">
                    <div className="hidden md:flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-base leading-none text-white">Koa</p>
                    </div>

                    <div className="hidden md:flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-base leading-none text-white">Hapi</p>
                    </div>

                    <div className="flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        NestJS
                      </p>
                    </div>

                    <div className="hidden sm:flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-base leading-none text-white">
                        Django
                      </p>
                    </div>

                    <div className="flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        Laravel
                      </p>
                    </div>

                    <div className="flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        Wordpress
                      </p>
                    </div>
                    <div className="hidden sm:flex xl:hidden items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        Koa
                      </p>
                    </div>

                    <div className="hidden sm:flex md:hidden lg:flex xl:hidden items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        Hapi
                      </p>
                    </div>

                    <div className="hidden sm:flex md:hidden lg:flex xl:hidden items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        NestJS
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center xl:items-center xl:flex-row flex-col xl:space-x-6 space-y-6 xl:space-y-0 ">
                  <div className="flex flex-row md:space-x-6 space-x-2 ml-2 md:ml-0">
                    <div className="inline-flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        NodeJS
                      </p>
                    </div>
                    <div className="inline-flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        Python
                      </p>
                    </div>
                    <div className="inline-flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        PHP
                      </p>
                    </div>

                    <div className="hidden md:inline-flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-base leading-none text-white">
                        GraphQL
                      </p>
                    </div>

                    <div className="hidden sm:flex flex-shrink-0 items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-base leading-none text-white">
                        Web Sockets
                      </p>
                    </div>

                    <div className="hidden sm:inline-flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-base leading-none text-white">
                        Express
                      </p>
                    </div>
                    <div className="hidden sm:flex xl:hidden items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        Koa
                      </p>
                    </div>

                    <div className="hidden sm:flex md:hidden lg:flex xl:hidden items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        NestJS
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row md:space-x-6  space-x-2 ml-2 md:ml-0">
                    <div className="flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        Koa
                      </p>
                    </div>

                    <div className="flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        Hapi
                      </p>
                    </div>

                    <div className="hidden md:flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-base leading-none text-white">
                        NestJS
                      </p>
                    </div>

                    <div className="hidden md:flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-base leading-none text-white">
                        Django
                      </p>
                    </div>

                    <div className="hidden sm:flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-base leading-none text-white">
                        Laravel
                      </p>
                    </div>

                    <div className="hidden sm:flex items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-base leading-none text-white">
                        Wordpress
                      </p>
                    </div>
                    <div className="hidden sm:flex xl:hidden items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        Koa
                      </p>
                    </div>

                    <div className="hidden sm:flex md:hidden lg:flex xl:hidden items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        Hapi
                      </p>
                    </div>

                    <div className="hidden sm:flex md:hidden lg:flex xl:hidden items-center justify-start px-4 py-2 bg-gray-800 rounded">
                      <p className="text-xs md:text-base leading-none text-white">
                        NestJS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mt-36">
        <div className="mx-auto container px-6 lg:px-14 xl:px-0">
          <div className="flex xl:flex-row flex-col justify-between item-start">
            <div className="flex justify-center item-start flex-col">
              <div>
                <p className="md:text-6xl text-4xl font-extrabold text-white">
                  By the numbers
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
                          taIndex="0"
                          className=" focus:outline-none focus:text-gray-400  cursor-pointer text-white dark:text-gray-400 dark:hover:text-white hover:bg-indigo-700 hover:text-gray-400 ">
                          <div className=" px-3 py-3 text-base leading-3 tracking-normal   font-normal">
                            China
                          </div>
                        </a>
                      </li>
                      <li onClick={() => setText('America')}>
                        {' '}
                        <a
                          taIndex="0"
                          className=" focus:outline-none focus:text-gray-400  cursor-pointer text-white dark:text-gray-400 dark:hover:text-white  hover:bg-indigo-700 hover:text-gray-400 ">
                          <div className="px-3 py-3 text-base leading-3 tracking-normal  font-normal">
                            America
                          </div>
                        </a>
                      </li>
                      <li onClick={() => setText('France')}>
                        {' '}
                        <a
                          taIndex="0"
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
export default Work
