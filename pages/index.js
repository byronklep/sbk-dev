import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { getProjectsHome } from '../lib/data'
import Layout from '../components/Layout'
import { SiAboutDotMe } from 'react-icons/fc'
import Link from 'next/link'
import Truncate from 'react-truncate'
// import deLeon from '/images/partners/deleon-logo-white.png'

export const getStaticProps = async () => {
  const data = await getProjectsHome()
  return {
    props: {
      data,
    },
  }
}

export default function Home({ props, data }) {
  const [dropDown, setDropDown] = useState(false)
  const [text, setText] = useState('America')

  const router = useRouter()

  const dropdownHandler = () => {
    setDropDown(!dropDown)
  }

  console.log(data)

  return (
    <Layout>
      <section>
        <div className="mx-auto container md:mt-32 px-6 lg:px-14 xl:px-0">
          <div className="flex justify-between items-center flex-col xl:flex-row xl:space-x-12 space-y-16 xl:space-y-0">
            <div className="flex justify-start items-start flex-col ">
              <div>
                <h1 className="md:text-7xl text-4xl font-black leading-tight  text-white xl:w-4/5	">
                  Hello, I am{' '}
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-indigo-600">
                    Sam Klepper
                  </span>
                  .
                </h1>
              </div>
              <div className="md::mt-8 mt-4">
                <p className="text-2xl leading-6 font-medium  text-white">
                  Full Stack Developer
                </p>
              </div>
              <div className="md:mt-4 mt-2">
                <p className="text-base leading-normal text-gray-400 xl:w-96">
                  I am a Full Stack Web Developer out of Houston, TX with over{' '}
                  <strong>three</strong> years experience. I currently work as a
                  freelance developer but have experience working for local
                  small businesses and startups as well. I have a passion for
                  programming and technology in general, and want to help you
                  build your next project!
                </p>
              </div>
              <div className="mt-12 border-b border-transparent ">
                <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 md:flex-row">
                  <a
                    href="#contact"
                    className="block px-3 py-2 text-sm font-semibold text-center text-white transition-colors duration-200 transform bg-indigo-400 rounded-md hover:bg-green-400">
                    Learn More
                  </a>
                  <Link href="/about">
                    <a
                      href="#"
                      className="block px-3 py-2 text-sm font-semibold text-center text-white transition-colors duration-200 transform bg-pink-400 rounded-md lg:mx-4 hover:bg-blue-300">
                      About Me
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
              <Image
                className="object-cover w-full h-full max-w-2xl rounded-md"
                src="https://images.unsplash.com/photo-1555181126-cf46a03827c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                height={384}
                width={672}
                alt="glasses photo"
                placeholder="blur"
                blurDataURL
              />
              {/* <img
                className="object-cover w-full h-full max-w-2xl rounded-md"
                src="https://images.unsplash.com/photo-1555181126-cf46a03827c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="glasses photo"
              /> */}
            </div>
          </div>
        </div>
      </section>

      <section id="client">
        <div className="mx-auto container pt-36 px-6 lg:px-14 xl:px-0">
          <div className="w-full flex flex-col xl:flex-row justify-between xl:items-center items-start xl:space-x-36 space-y-16 xl:space-y-0 ">
            <div className="flex flex-col justify-start items-start">
              <div>
                <h1 className="md:text-6xl text-5xl font-extrabold  text-white">
                  Clients
                </h1>
              </div>
              <div className="md:mt-8 mt-4">
                <p className="text-base leading-normal text-gray-400 xl:w-64">
                  I have partnered with some local companines and small
                  businesses to help them make their vision come to fruition.
                  Here are a few of the partners I&apos;ve worked with.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-2 justify-around w-full items-center gap-x-4 md:gap-x-36 gap-y-10 md:gap-y-0 ">
              <div className="w-48 flex flex-col justify-start items-start ">
                <div className="flex  justify-start items-start flex-col">
                  <div className="md:w-32 w-16">
                    <Image
                      src="/images/partners/deleon-logo-white.png"
                      alt="DeLeon Safety Solutions"
                      height={100}
                      width={100}
                    />
                    {/* <svg
                      viewBox="0 0 84 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 0L52 64C69.6731 64 84 49.6731 84 32C84 14.3269 69.6731 0 52 0H0ZM55.591 55.7332C67.1424 54.0001 76 44.0344 76 32C76 18.7452 65.2548 8 52 8H38.8333C44.5338 14.3691 48 22.7797 48 32C48 36.1698 47.2896 40.1782 45.9828 43.9078L55.591 55.7332ZM39.6927 36.1661C39.8951 34.8075 40 33.4164 40 32C40 21.8147 34.5617 12.8996 26.4303 8H16.8078L39.6927 36.1661Z"
                        fill="white"
                      />
                    </svg> */}
                  </div>
                  <div className="mt-1">
                    <p className="text-lg md:text-2xl font-semibold lg:leading-6 text-white">
                      DeLeon Safety
                    </p>
                  </div>
                </div>
                <div className="flex mt-9  justify-start items-start flex-col">
                  <div className="md:w-32 w-16">
                    <Image
                      src="/images/partners/ultra-logo-white.png"
                      alt="Ultra Demolition"
                      height={100}
                      width={150}
                    />
                    {/* <svg
                      viewBox="0 0 39 63"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M34.0833 2H4.91667L2 7.9M34.0833 2L37 7.9L25.3333 31.5M34.0833 2L22.4167 25.6M2 7.9H25.3333L19.5 19.7L16.5833 13.8M2 7.9L16.5833 37.4L4.91667 61M2 7.9L22.4167 49.2H16.5833H28.25L10.75 13.8M16.5833 13.8L28.25 37.4M16.5833 13.8L37 55.1M22.4167 13.8H10.75M10.75 13.8L22.4167 37.4M37 55.1L34.0833 61H4.91667M37 55.1H13.6667L19.5 43.3M4.91667 61L2 55.1L13.6667 31.5"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg> */}
                  </div>
                  <div className="mt-1">
                    <p className="text-lg md:text-2xl font-semibold lg:leading-6 text-white">
                      Ultra Demolition
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-48 flex flex-col justify-start items-start ">
                <div className="flex  justify-start items-start flex-col">
                  <div className="md:w-32 w-16">
                    <Image
                      src="/images/partners/edge-logo-white.png"
                      alt="Edge196"
                      height={80}
                      width={80}
                    />
                    {/* <svg
                      viewBox="0 0 102 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 34.1103C0.06616 50.5375 13.4522 64 29.8964 64C46.3811 64 59.7919 50.5918 59.7919 34.1103V29.8907C59.7919 23.1042 65.3148 17.5824 72.1026 17.5824C78.8914 17.5824 84.4133 23.1042 84.4133 29.8907C84.4133 31.8327 85.9883 33.4074 87.9306 33.4074H98.4827C100.426 33.4074 102 31.8327 102 29.8907C102 13.4091 88.5893 0 72.1036 0C55.6189 0 42.2071 13.4091 42.2071 29.8907V34.1103C42.2071 40.8978 36.6843 46.4176 29.8974 46.4176C23.1096 46.4176 17.5867 40.8978 17.5867 34.1103C17.5867 32.1683 16.0117 30.5936 14.0694 30.5936H3.51734C1.575 30.5946 0 32.1683 0 34.1103Z"
                        fill="white"
                      />
                    </svg> */}
                  </div>
                  <div className="mt-4">
                    <p className="text-lg md:text-2xl font-semibold lg:leading-6 text-white">
                      Edge196
                    </p>
                  </div>
                </div>
                <div className="flex mt-9  justify-start items-start flex-col">
                  <div className="md:w-32 w-16">
                    <Image
                      src="/images/partners/tlwc-logo-white.png"
                      alt="TLWC"
                      height={80}
                      width={80}
                    />
                    {/* <svg
                      viewBox="0 0 48 63"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.7778 11.8333V41.3333M11.7778 11.8333H26.4444C29.0377 11.8333 31.5247 12.8693 33.3584 14.7134C35.1921 16.5576 36.2222 19.0587 36.2222 21.6667C36.2222 24.2746 35.1921 26.7758 33.3584 28.6199C31.5247 30.464 29.0377 31.5 26.4444 31.5H11.7778V11.8333ZM11.7778 41.3333C9.18455 41.3333 6.69753 42.3693 4.86384 44.2135C3.03015 46.0576 2 48.5587 2 51.1667M11.7778 41.3333H31.3333C35.2232 41.3333 38.9537 39.2613 41.7042 35.5731C44.4548 31.8849 46 26.8826 46 21.6667C46 16.4507 44.4548 11.4484 41.7042 7.76023C38.9537 4.07202 35.2232 2 31.3333 2H2V51.1667M2 51.1667C2 53.7746 3.03015 56.2758 4.86384 58.1199C6.69753 59.964 9.18455 61 11.7778 61V46.25"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                      />
                    </svg> */}
                  </div>
                  <div className="mt-4">
                    <p className="text-lg md:text-2xl font-semibold lg:leading-6 text-white">
                      TLWC
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-48 flex flex-col justify-start items-start ">
                <div className="flex  justify-start items-start flex-col">
                  <div className="md:w-32 w-16">
                    <Image
                      src="/images/partners/hackmania-logo-white.png"
                      alt="Hackmania"
                      height={80}
                      width={80}
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
                  <div className="mt-1">
                    <p className="text-xl md:text-2xl font-semibold lg:leading-6 text-white">
                      Hackmania
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex mt-9  justify-start items-start flex-col">
                  <div className="md:w-32 w-16">
                    <Image
                      src="/images/partners/mhp-logo-white.png"
                      alt="MH Photography"
                      height={80}
                      width={150}
                    />
                    {/* <svg
                      viewBox="0 0 63 59"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.1538 57H2V2H11.0769M20.1538 57H11.0769V15.75L38.3077 57H47.3846M20.1538 57V29.5M11.0769 2L47.3846 57M11.0769 2H20.1538L51.9231 47.8333V2M47.3846 57H61V2H51.9231M51.9231 2H42.8462V34.6944"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg> */}
                  </div>
                  <div className="mt-4">
                    <p className="text-xl md:text-2xl font-semibold lg:leading-6 text-white">
                      MH Photography
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:hidden w-48 flex flex-col justify-start items-start ">
                <div className="flex   justify-start items-start flex-col">
                  <div className="md:w-32 w-32">
                    <Image
                      src="/images/partners/dcrafts-logo-white.png"
                      alt="Digital Crafts"
                      height={80}
                      width={120}
                    />
                    {/* <svg
                      viewBox="0 0 63 59"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.1538 57H2V2H11.0769M20.1538 57H11.0769V15.75L38.3077 57H47.3846M20.1538 57V29.5M11.0769 2L47.3846 57M11.0769 2H20.1538L51.9231 47.8333V2M47.3846 57H61V2H51.9231M51.9231 2H42.8462V34.6944"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg> */}
                  </div>
                  <div className="mt-1">
                    <p className="text-xl md:text-2xl font-semibold lg:leading-6 text-white">
                      Digital Crafts
                    </p>
                  </div>
                </div>
                <div className="hidden flex mt-9 justify-start items-start flex-col">
                  <div className="md:w-16 w-10">
                    <svg
                      viewBox="0 0 63 63"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2 31.5L0 31.5L2 31.5ZM13.0625 31.5L11.0625 31.5L13.0625 31.5ZM31.5 49.9375L31.5 51.9375L31.5 49.9375ZM49.9375 31.5L51.9375 31.5L49.9375 31.5ZM31.5 0C23.1457 0 15.1335 3.31874 9.22614 9.22614L12.0546 12.0546C17.2118 6.89731 24.2065 4 31.5 4V0ZM9.22614 9.22614C3.31874 15.1335 0 23.1457 0 31.5L4 31.5C4 24.2065 6.89731 17.2118 12.0546 12.0546L9.22614 9.22614ZM0 31.5C0 39.8543 3.31874 47.8665 9.22614 53.7739L12.0546 50.9454C6.89731 45.7882 4 38.7935 4 31.5L0 31.5ZM9.22614 53.7739C15.1335 59.6813 23.1457 63 31.5 63V59C24.2065 59 17.2118 56.1027 12.0546 50.9454L9.22614 53.7739ZM31.5 63C39.8543 63 47.8665 59.6813 53.7739 53.7739L50.9454 50.9454C45.7882 56.1027 38.7935 59 31.5 59V63ZM53.7739 53.7739C59.6813 47.8665 63 39.8543 63 31.5H59C59 38.7935 56.1027 45.7882 50.9454 50.9454L53.7739 53.7739ZM63 31.5C63 23.1457 59.6813 15.1335 53.7739 9.22614L50.9454 12.0546C56.1027 17.2118 59 24.2065 59 31.5H63ZM53.7739 9.22614C47.8665 3.31874 39.8543 0 31.5 0V4C38.7935 4 45.7882 6.89731 50.9454 12.0546L53.7739 9.22614ZM31.5 11.0625C26.0796 11.0625 20.8813 13.2157 17.0485 17.0485L19.8769 19.8769C22.9596 16.7943 27.1405 15.0625 31.5 15.0625L31.5 11.0625ZM17.0485 17.0485C13.2157 20.8813 11.0625 26.0796 11.0625 31.5L15.0625 31.5C15.0625 27.1405 16.7943 22.9596 19.8769 19.8769L17.0485 17.0485ZM11.0625 31.5C11.0625 36.9204 13.2157 42.1187 17.0485 45.9515L19.8769 43.1231C16.7943 40.0404 15.0625 35.8595 15.0625 31.5L11.0625 31.5ZM17.0485 45.9515C20.8813 49.7843 26.0796 51.9375 31.5 51.9375L31.5 47.9375C27.1405 47.9375 22.9596 46.2057 19.8769 43.1231L17.0485 45.9515ZM31.5 51.9375C36.9204 51.9375 42.1187 49.7843 45.9515 45.9515L43.1231 43.1231C40.0404 46.2057 35.8595 47.9375 31.5 47.9375L31.5 51.9375ZM45.9515 45.9515C49.7843 42.1187 51.9375 36.9204 51.9375 31.5L47.9375 31.5C47.9375 35.8595 46.2057 40.0404 43.1231 43.1231L45.9515 45.9515ZM51.9375 31.5C51.9375 26.0796 49.7843 20.8813 45.9515 17.0485L43.1231 19.8769C46.2057 22.9596 47.9375 27.1405 47.9375 31.5L51.9375 31.5ZM45.9515 17.0485C42.1187 13.2157 36.9204 11.0625 31.5 11.0625L31.5 15.0625C35.8595 15.0625 40.0404 16.7943 43.1231 19.8769L45.9515 17.0485ZM19.1881 15.1883C12.691 20.3859 8.9769 26.6947 8.30509 34.0846C7.63993 41.4012 9.98264 49.5007 15.0135 58.3048L18.4865 56.3202C13.684 47.9159 11.7246 40.6508 12.2887 34.4467C12.846 28.3157 15.8923 22.9474 21.6869 18.3117L19.1881 15.1883ZM43.8119 47.8117C50.3006 42.6208 54.0216 36.3813 54.6947 29.0496C55.3609 21.7936 53.0141 13.7583 47.9865 4.95989L44.5135 6.94444C49.3192 15.3544 51.2745 22.5513 50.7115 28.6839C50.1554 34.7407 47.1161 40.0459 41.3131 44.6883L43.8119 47.8117Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="mt-4">
                    <p className="text-xl md:text-2xl font-semibold lg:leading-6 text-white">
                      RempelProhas{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto container mt-36 px-6 lg:px-14 xl:px-0 ">
        <div className="flex flex-col  justify-center items-center">
          <div className="xl:hidden flex flex-col justify-start xl:text-right text-left items-right w-full xl:w-80">
            <div className="">
              <h1 className="text-6xl   text-white">Work</h1>
            </div>
            <div className="mt-8  ">
              <p className="text-base leading-normal text-gray-400 ">
                I am a Web Developer located in Hartford, Connecticut. I
                currently work as a part time Remote Junior Web Developer for
                Coolor, located in Las Vegas. It is a long established fact that
                a reader will be distracted by the readable content{' '}
              </p>
            </div>
            <div className="mt-8 ">
              <a onClick={() => router.push('/work')}>
                <p className="text-base font-semibold  hover:underline text-white cursor-pointer">
                  View all work
                </p>
              </a>
            </div>
          </div>
          <div className="w-full items-center grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 xl:gap-x-6 gap-x-4 md:gap-x-6 mt-16 xl:mt-0 gap-y-4 md:gap-y-0">
            {data.projects.map((project) => (
              <div
                key={project.slug}
                className="w-full xl:w-72 flex flex-col justify-between items-start p-3 md:p-6 bg-gray-800 rounded">
                <div className="w-full">
                  <div className="w-full">
                    <Image
                      className="w-full rounded"
                      src={project.image.url}
                      height={project.image.height}
                      width={project.image.width}
                      alt="spider-web"
                      placeholder="blur"
                      blurDataURL
                    />
                  </div>
                  <div className="md:mt-6 mt-4">
                    <p className="text-xs font-medium leading-3 text-white">
                      {project.title}
                    </p>
                  </div>
                  <div className="md:mt-4 mt-2">
                    <p className="xl:w-60 text-base md:text-2xl font-semibold text-white">
                      <Truncate
                        lines={3}
                        ellipsis={
                          <span>
                            ...{' '}
                            <a
                              className="text-pink-400 hover:text-pink-300"
                              href={`/work/${project.slug}`}>
                              Read more
                            </a>
                          </span>
                        }>
                        {project.description}
                      </Truncate>
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <a
                    onClick={() => router.push('/projectInner')}
                    className="cursor-pointer focus:outline-none focus:underline text-xs leading-3 hover:underline focus:underline text-gray-300">
                    <p className="">Go to project</p>
                  </a>
                </div>
              </div>
            ))}

            {/* <div className="w-full xl:w-72 flex flex-col justify-between items-start h-full p-3 md:p-6 bg-gray-800 rounded">
              <div className="w-full">
                <div className="w-full">
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
                  <p className="xl:w-60 text-base md:text-2xl font-semibold text-white">
                    In Defense of Utility-First CSS
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <a
                  onClick={() => router.push('/projectInner')}
                  className="cursor-pointer focus:outline-none focus:underline text-xs leading-3 hover:underline focus:underline text-gray-300">
                  <p className="">Go to project</p>
                </a>
              </div>
            </div>
            <div className="w-full xl:w-72 flex flex-col h-full justify-between items-start p-3 md:p-6 bg-gray-800 rounded">
              <div className="w-full">
                <div className="w-full">
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
                  <p className="xl:w-60 text-base md:text-2xl font-semibold text-white">
                    Why Javascript Numbers Are Weird (And How to Fix It)
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <a
                  onClick={() => router.push('/projectInner')}
                  className="cursor-pointer focus:outline-none focus:underline text-xs leading-3 hover:underline focus:underline text-gray-300">
                  <p className="">Go to project</p>
                </a>
              </div>
            </div> */}
            <div className="hidden xl:block flex flex-col justify-end text-right items-end w-80">
              <div className="">
                <Link href="/work" passHref>
                  <h1 className="text-6xl font-extrabold  text-white">Work</h1>
                </Link>
              </div>
              <div className="mt-8  ">
                <p className="text-base leading-normal text-gray-400 ">
                  Staying up to date with the latest wev development trends and
                  best practices is something I am passionate about. Check out
                  some of my latest works.
                </p>
              </div>
              <div className="mt-8 flex justify-end">
                <div className="border-b border-transparent hover:border-white">
                  <a
                    onClick={() => router.push('/work')}
                    className="cursor-pointer focus:outline-none  text-base font-bold  text-white">
                    <p>View all work</p>
                  </a>
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
