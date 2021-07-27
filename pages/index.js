import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { getProjectsHome } from '../lib/data'
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'
import PartnerSlider from '../components/PartnerSlider'
import Link from 'next/link'
import Truncate from 'react-truncate'

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
                  <Link href="/about" passHref>
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Learn More
                    </button>
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

            <PartnerSlider />

            {/* <div className="grid md:grid-cols-3 grid-cols-2 justify-around w-full items-center gap-x-4 md:gap-x-36 gap-y-10 md:gap-y-0 ">
              <div className="w-48 flex flex-col justify-start items-start ">
                <div className="flex  justify-start items-start flex-col">
                  <div className="md:w-32 w-16">
                    <Image
                      src="/images/partners/deleon-logo-white.png"
                      alt="DeLeon Safety Solutions"
                      height={100}
                      width={100}
                    />
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
            </div> */}
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
                  <Link href={`/work/${project.slug}`}>
                    <a className="cursor-pointer focus:outline-none focus:underline text-xs leading-3 hover:underline focus:underline text-gray-300">
                      <p className="">Go to project</p>
                    </a>
                  </Link>
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

      <section id="contact" className="mt-36 md:mb-12 mb-10">
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

            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  )
}
