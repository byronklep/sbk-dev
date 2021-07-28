import Stats from '../../components/Stats'
import Link from 'next/link'
import Image from 'next/image'
import { getProjects, getLanguages } from '../../lib/data'
import Truncate from 'react-truncate'

import Layout from '../../components/Layout'
import WorkTechStack from '../../components/WorkTechStack'
import ContactForm from '../../components/ContactForm'

export const getStaticProps = async () => {
  const data = await getProjects()
  const dataT = await getLanguages()
  return {
    props: {
      projects: data.projects,
      languages: dataT.languages,
    },
  }
}

const Work = ({ projects, languages }) => {
  console.log(languages)

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
                    When we needed a website fast, SbK dev delivered what we
                    needed in the time we needed it.
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
                      Xavier
                      <br />
                      Ultra Demolition
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-8 py-10 mt-4 bg-gray-800 flex  justify-start items-start flex-col rounded">
                <div className="">
                  <p className="text-xs font-medium leading-3 text-white">
                    BRANDING
                  </p>
                </div>
                <div className="md:mt-2">
                  <p className="text-2xl md:text-3xl font-semibold lg:leading-7  text-white">
                    Building a Brand
                  </p>
                </div>
                <div className="mt-2 md:mt-4 ">
                  <p className="text-base leading-normal text-gray-300 ">
                    I approached SbK dev with only a rough idea in mind and they
                    helped me bring my idea to life with a logo and a unique
                    design.
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
                      Martha DeLeon <br />
                      DSS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto container mt-36 px-6 lg:px-14 xl:px-0 ">
        <div className="flex justify-start items-start">
          <h1 className="xl:text-6xl md:text-5xl text-4xl font-extrabold lg:mb-8  text-white">
            Projects
          </h1>
        </div>
        <div className="flex flex-col  justify-center items-center">
          <div className="w-full items-center grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 xl:gap-x-6 gap-x-4 md:gap-x-6 mt-8 xl:mt-0 gap-y-4 md:gap-y-0">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="w-full xl:w-72 flex flex-col justify-between items-start p-3 md:p-6 bg-gray-800 rounded mt-5">
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
          </div>
        </div>
      </section>

      <WorkTechStack languages={languages} />

      <section id="contact" className="mt-36 md:mb-12 mb-10">
        <div className="mx-auto container px-6 lg:px-14 xl:px-0">
          <div className="flex xl:flex-row flex-col justify-between item-start">
            <div className="flex justify-center item-start flex-col">
              <div>
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
export default Work
