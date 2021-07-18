import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { SiGmail } from 'react-icons/si'
import { FaGitlab } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

export default function Header() {
  const [sidebar, setSidebar] = useState(false)

  const router = useRouter()

  return (
    <>
      <section className="mx-auto container px-6 lg:px-14 xl:px-0">
        <div className="hidden md:flex justify-between items-center pt-16 mb-12">
          <div className="flex flex-row items-center space-x-10">
            <div>
              <Link href="/">
                <a className="cursor-pointer text-base hover:text-gray-300 focus:outline-none focus:text-gray-300 font-semibold leading-none text-white">
                  <p>Intro</p>
                </a>
              </Link>
            </div>
            <div>
              <Link href="#client">
                <a
                  href="#"
                  className="cursor-pointer text-base hover:text-gray-300 focus:outline-none focus:text-gray-300 font-semibold leading-none text-white">
                  <p>Clients</p>
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
              <Link href="#contact">
                <a
                  href="#"
                  className="cursor-pointer text-base hover:text-gray-300 focus:outline-none focus:text-gray-300 font-semibold leading-none text-white">
                  <p>Contact</p>
                </a>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-6">
            <div className="flex justify-center items-center rounded-lg">
              <button className="text-white text-2xl hover:text-gray-300 focus:outline-none focus:text-gray-300">
                <SiGmail height={32} width={32} />
                {/* <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M29.5493 7.54136C28.5314 7.99162 27.452 8.28732 26.3467 8.41869C27.5117 7.72194 28.3836 6.62538 28.8 5.33336C27.7067 5.98402 26.508 6.44002 25.2587 6.68669C24.4195 5.7888 23.3072 5.19331 22.0946 4.9928C20.8821 4.7923 19.6373 4.99801 18.5537 5.57796C17.4701 6.15791 16.6085 7.0796 16.1028 8.19975C15.5971 9.31989 15.4757 10.5757 15.7573 11.772C13.5402 11.6609 11.3711 11.0847 9.39106 10.0809C7.411 9.0771 5.66418 7.66809 4.26401 5.94536C3.7684 6.79662 3.50795 7.76433 3.50934 8.74936C3.50934 10.6827 4.49334 12.3907 5.98934 13.3907C5.10402 13.3628 4.23819 13.1237 3.46401 12.6934V12.7627C3.46428 14.0503 3.90983 15.2982 4.72514 16.2948C5.54044 17.2914 6.67532 17.9753 7.93734 18.2307C7.1155 18.4534 6.25375 18.4862 5.41734 18.3267C5.77317 19.435 6.46668 20.4043 7.4008 21.0988C8.33491 21.7934 9.46285 22.1784 10.6267 22.2C9.46998 23.1085 8.14558 23.78 6.72918 24.1763C5.31279 24.5725 3.83218 24.6857 2.37201 24.5094C4.92094 26.1486 7.88814 27.0189 10.9187 27.016C21.176 27.016 26.7853 18.5187 26.7853 11.1494C26.7853 10.9094 26.7787 10.6667 26.768 10.4294C27.8598 9.64025 28.8021 8.66272 29.5507 7.54269L29.5493 7.54136Z"
                    fill="#D1D5DB"
                  />
                </svg> */}
              </button>
            </div>
            <div className="flex justify-center items-center rounded-lg">
              <button className="text-white text-2xl hover:text-gray-300 focus:outline-none focus:text-gray-300">
                <FaGitlab height={32} width={32} />
                {/* <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 2.66663C8.63336 2.66663 2.66669 8.63329 2.66669 16C2.66518 18.799 3.54511 21.5274 5.18164 23.7982C6.81818 26.069 9.12822 27.7667 11.784 28.6506C12.4507 28.7666 12.7 28.3666 12.7 28.016C12.7 27.7 12.6827 26.6506 12.6827 25.5333C9.33335 26.1506 8.46669 24.7173 8.20002 23.9666C8.04936 23.5826 7.40002 22.4 6.83336 22.0826C6.36669 21.8333 5.70002 21.216 6.81602 21.2C7.86669 21.1826 8.61602 22.1666 8.86669 22.5666C10.0667 24.5826 11.984 24.016 12.7494 23.6666C12.8667 22.8 13.216 22.2173 13.6 21.884C10.6334 21.5506 7.53336 20.4 7.53336 15.3C7.53336 13.8493 8.04936 12.6506 8.90002 11.716C8.76669 11.3826 8.30002 10.016 9.03336 8.18263C9.03336 8.18263 10.1494 7.83329 12.7 9.55063C13.7854 9.24937 14.9069 9.09775 16.0334 9.09996C17.1667 9.09996 18.3 9.24929 19.3667 9.54929C21.916 7.81596 23.0334 8.18396 23.0334 8.18396C23.7667 10.0173 23.3 11.384 23.1667 11.7173C24.016 12.6506 24.5334 13.8333 24.5334 15.3C24.5334 20.4173 21.4174 21.5506 18.4507 21.884C18.9334 22.3 19.3507 23.1 19.3507 24.3506C19.3507 26.1333 19.3334 27.5666 19.3334 28.0173C19.3334 28.3666 19.584 28.7826 20.2507 28.6493C22.8974 27.7557 25.1972 26.0546 26.8266 23.7855C28.4559 21.5164 29.3326 18.7934 29.3334 16C29.3334 8.63329 23.3667 2.66663 16 2.66663Z"
                    fill="#D1D5DB"
                  />
                </svg> */}
              </button>
            </div>
            <div className="flex justify-center items-center rounded-lg">
              <button className="text-white text-2xl hover:text-gray-300 focus:outline-none focus:text-gray-300">
                <FaLinkedin height={32} width={32} />
                {/* <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24.4467 24.452H20.8933V18.8827C20.8933 17.5547 20.8667 15.8453 19.04 15.8453C17.188 15.8453 16.9053 17.2907 16.9053 18.7853V24.452H13.3507V13H16.764V14.56H16.8107C17.288 13.6613 18.448 12.7107 20.1813 12.7107C23.7813 12.7107 24.448 15.0813 24.448 18.1653V24.452H24.4467ZM9.33733 11.4333C9.06607 11.4337 8.79741 11.3805 8.54675 11.2768C8.29609 11.1731 8.06836 11.021 7.87661 10.8291C7.68486 10.6372 7.53287 10.4094 7.42935 10.1587C7.32582 9.90795 7.27281 9.63926 7.27333 9.368C7.2736 8.95978 7.39491 8.5608 7.62192 8.22153C7.84894 7.88225 8.17146 7.61791 8.54871 7.46194C8.92595 7.30596 9.34098 7.26536 9.74131 7.34525C10.1416 7.42515 10.5093 7.62197 10.7977 7.91081C11.0862 8.19965 11.2826 8.56755 11.3619 8.96798C11.4413 9.3684 11.4002 9.78338 11.2437 10.1604C11.0872 10.5375 10.8225 10.8597 10.4829 11.0862C10.1434 11.3128 9.74422 11.4336 9.336 11.4333H9.33733ZM11.1187 24.452H7.55467V13H11.12V24.452H11.1187ZM26.2267 4H5.772C4.79067 4 4 4.77333 4 5.72933V26.2707C4 27.2267 4.792 28 5.77067 28H26.2213C27.2 28 28 27.2267 28 26.2707V5.72933C28 4.77333 27.2 4 26.2213 4H26.2253H26.2267Z"
                    fill="#D1D5DB"
                  />
                </svg> */}
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
                <SiGmail height={32} width={32} />
                {/* <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M29.5493 7.54136C28.5314 7.99162 27.452 8.28732 26.3467 8.41869C27.5117 7.72194 28.3836 6.62538 28.8 5.33336C27.7067 5.98402 26.508 6.44002 25.2587 6.68669C24.4195 5.7888 23.3072 5.19331 22.0946 4.9928C20.8821 4.7923 19.6373 4.99801 18.5537 5.57796C17.4701 6.15791 16.6085 7.0796 16.1028 8.19975C15.5971 9.31989 15.4757 10.5757 15.7573 11.772C13.5402 11.6609 11.3711 11.0847 9.39106 10.0809C7.411 9.0771 5.66418 7.66809 4.26401 5.94536C3.7684 6.79662 3.50795 7.76433 3.50934 8.74936C3.50934 10.6827 4.49334 12.3907 5.98934 13.3907C5.10402 13.3628 4.23819 13.1237 3.46401 12.6934V12.7627C3.46428 14.0503 3.90983 15.2982 4.72514 16.2948C5.54044 17.2914 6.67532 17.9753 7.93734 18.2307C7.1155 18.4534 6.25375 18.4862 5.41734 18.3267C5.77317 19.435 6.46668 20.4043 7.4008 21.0988C8.33491 21.7934 9.46285 22.1784 10.6267 22.2C9.46998 23.1085 8.14558 23.78 6.72918 24.1763C5.31279 24.5725 3.83218 24.6857 2.37201 24.5094C4.92094 26.1486 7.88814 27.0189 10.9187 27.016C21.176 27.016 26.7853 18.5187 26.7853 11.1494C26.7853 10.9094 26.7787 10.6667 26.768 10.4294C27.8598 9.64025 28.8021 8.66272 29.5507 7.54269L29.5493 7.54136Z"
                    fill="#D1D5DB"
                  />
                </svg> */}
              </button>
            </div>
            <div className="flex justify-center items-center rounded-lg">
              <button className="hover:text-gray-300 focus:outline-none focus:text-gray-300 text-white text-2xl">
                <FaGitlab height={32} width={32} />
                {/* <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 2.66663C8.63336 2.66663 2.66669 8.63329 2.66669 16C2.66518 18.799 3.54511 21.5274 5.18164 23.7982C6.81818 26.069 9.12822 27.7667 11.784 28.6506C12.4507 28.7666 12.7 28.3666 12.7 28.016C12.7 27.7 12.6827 26.6506 12.6827 25.5333C9.33335 26.1506 8.46669 24.7173 8.20002 23.9666C8.04936 23.5826 7.40002 22.4 6.83336 22.0826C6.36669 21.8333 5.70002 21.216 6.81602 21.2C7.86669 21.1826 8.61602 22.1666 8.86669 22.5666C10.0667 24.5826 11.984 24.016 12.7494 23.6666C12.8667 22.8 13.216 22.2173 13.6 21.884C10.6334 21.5506 7.53336 20.4 7.53336 15.3C7.53336 13.8493 8.04936 12.6506 8.90002 11.716C8.76669 11.3826 8.30002 10.016 9.03336 8.18263C9.03336 8.18263 10.1494 7.83329 12.7 9.55063C13.7854 9.24937 14.9069 9.09775 16.0334 9.09996C17.1667 9.09996 18.3 9.24929 19.3667 9.54929C21.916 7.81596 23.0334 8.18396 23.0334 8.18396C23.7667 10.0173 23.3 11.384 23.1667 11.7173C24.016 12.6506 24.5334 13.8333 24.5334 15.3C24.5334 20.4173 21.4174 21.5506 18.4507 21.884C18.9334 22.3 19.3507 23.1 19.3507 24.3506C19.3507 26.1333 19.3334 27.5666 19.3334 28.0173C19.3334 28.3666 19.584 28.7826 20.2507 28.6493C22.8974 27.7557 25.1972 26.0546 26.8266 23.7855C28.4559 21.5164 29.3326 18.7934 29.3334 16C29.3334 8.63329 23.3667 2.66663 16 2.66663Z"
                    fill="#D1D5DB"
                  />
                </svg> */}
              </button>
            </div>
            <div className="flex justify-center items-center rounded-lg">
              <button className="hover:text-gray-300 focus:outline-none focus:text-gray-300 text-white text-2xl">
                <FaLinkedin height={32} width={32} />
                {/* <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24.4467 24.452H20.8933V18.8827C20.8933 17.5547 20.8667 15.8453 19.04 15.8453C17.188 15.8453 16.9053 17.2907 16.9053 18.7853V24.452H13.3507V13H16.764V14.56H16.8107C17.288 13.6613 18.448 12.7107 20.1813 12.7107C23.7813 12.7107 24.448 15.0813 24.448 18.1653V24.452H24.4467ZM9.33733 11.4333C9.06607 11.4337 8.79741 11.3805 8.54675 11.2768C8.29609 11.1731 8.06836 11.021 7.87661 10.8291C7.68486 10.6372 7.53287 10.4094 7.42935 10.1587C7.32582 9.90795 7.27281 9.63926 7.27333 9.368C7.2736 8.95978 7.39491 8.5608 7.62192 8.22153C7.84894 7.88225 8.17146 7.61791 8.54871 7.46194C8.92595 7.30596 9.34098 7.26536 9.74131 7.34525C10.1416 7.42515 10.5093 7.62197 10.7977 7.91081C11.0862 8.19965 11.2826 8.56755 11.3619 8.96798C11.4413 9.3684 11.4002 9.78338 11.2437 10.1604C11.0872 10.5375 10.8225 10.8597 10.4829 11.0862C10.1434 11.3128 9.74422 11.4336 9.336 11.4333H9.33733ZM11.1187 24.452H7.55467V13H11.12V24.452H11.1187ZM26.2267 4H5.772C4.79067 4 4 4.77333 4 5.72933V26.2707C4 27.2267 4.792 28 5.77067 28H26.2213C27.2 28 28 27.2267 28 26.2707V5.72933C28 4.77333 27.2 4 26.2213 4H26.2253H26.2267Z"
                    fill="#D1D5DB"
                  />
                </svg> */}
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
                  <div className="w-10">
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
                              Intro
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
                            <Link href="#client">
                              <a className="focus:outline-none  cursor-pointer ">
                                Clients
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
                          <Link href="#contact">
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
