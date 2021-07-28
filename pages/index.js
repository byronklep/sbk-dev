import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { getProjectsHome } from '../lib/data'
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'
import PartnerSlider from '../components/PartnerSlider'
import Link from 'next/link'
import Truncate from 'react-truncate'
import Stats from '../components/Stats'

export const getStaticProps = async () => {
  const data = await getProjectsHome()
  return {
    props: {
      data,
    },
  }
}

export default function Home({ props, data }) {
  // console.log(data)

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
                src="/images/sam-home.jpg"
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
              <div className="">
                <p className="md:text-6xl text-4xl font-extrabold text-white text-center md:text-left">
                  By the numbers
                </p>
              </div>

              <div className="grid grid-cols-1 md:mt-12 mt-6 gap-y-8 mx-auto">
                <Stats />
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  )
}
