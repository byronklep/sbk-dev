import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import FourSlider from '../../components/FourSlider'
import { getProject, getProjectSlugs, getProjectsWork } from '../../lib/data'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FaGitlab } from 'react-icons/fa'

import he from 'he'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

export const getStaticPaths = async () => {
  const slugRes = await getProjectSlugs()
  const slugs = slugRes.projects

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const project = await getProject(params.slug)
  const fourProjects = await getProjectsWork()

  return {
    props: {
      project: project.projects[0],
      summary: await serialize(he.decode(project.projects[0].summary)),
      fourProjects,
    },
  }
}

export default function ProjectPage({ project, summary, fourProjects }) {
  // console.log(project)
  // console.log(fourProjects)

  return (
    <Layout title={project.title}>
      <div>
        <section className="bg-indigo-900">
          <div className="mx-auto container px-12 lg:px-12 ">
            <div className="flex xl:flex-row flex-col justify-between items-start pt-16">
              <div className="flex justify-center items-center xl:w-7/12">
                <h1 className="xl:text-5xl text-4xl font-extrabold xl:leading-tight text-white xl:mt-8">
                  {project.title}
                </h1>
              </div>
              <div className="w-full xl:-mr-8 xl:w-3/4 flex justify-end items-end xl:mt-6 mt-10 ">
                <img
                  className="w-full"
                  src={project.image.url}
                  alt="Dashboard"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-800">
          <div className="mx-auto container px-6 lg:px-12 ">
            <div className="grid xl:grid-cols-3 grid-cols-1 xl:justify-items-center py-12 gap-y-10 xl:gap-y-0">
              <div className="flex justify-start items-start flex-col  ">
                <div>
                  <p className="text-2xl font-bold lg:leading-6 text-white">
                    Description
                  </p>
                </div>
                <div className="mt-6">
                  <p className="text-base leading-normal text-gray-400">
                    {project.description}
                  </p>
                </div>
                <div className="mt-12 border-b border-transparent ">
                  <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 md:flex-row">
                    <Link href={`${project.links[0]}`} passHref>
                      <a target="_blank" rel="noreferrer">
                        <button className="bg-green-500 hover:text-gray-200 hover:bg-green-400 focus:outline-none focus:ring-2  focus:ring-gray-400 text-gray-900 border-indigo-900 rounded px-4 py-3 space-x-2 flex items-center justify-center flex-row ">
                          <div>
                            <FaExternalLinkAlt />
                          </div>

                          <p className="text-base font-medium leading-none ">
                            Visit Site
                          </p>
                        </button>
                      </a>
                    </Link>
                    <Link href={`${project.links[1]}`} passHref>
                      <a target="_blank" rel="noreferrer">
                        <button className="bg-blue-500 hover:text-gray-50 hover:bg-blue-400 focus:outline-none focus:ring-2  focus:ring-gray-400 text-gray-900 border-blue-500 rounded px-4 py-3 space-x-2 flex items-center lg:ml-3 justify-center flex-row ">
                          <div>
                            <FaGitlab />
                          </div>

                          <p className="text-base font-medium leading-none ">
                            Visit Repo
                          </p>
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-col ">
                <div>
                  <p className="text-2xl font-bold lg:leading-6 text-white">
                    Client
                  </p>
                </div>
                <div className="mt-6">
                  <p className="text-base leading-none text-white capitalize">
                    {project.client}
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start flex-col ">
                <div>
                  <p className="text-2xl font-bold lg:leading-6 text-white">
                    Year
                  </p>
                </div>
                <div className="mt-6">
                  <p className="text-base leading-none text-white capitalize">
                    {project.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto container py-16 border-b border-gray-800 px-6 lg:px-14 xl:px-0">
            <div className="flex justify-evenly items-start md:flex-row flex-col gap-y-5 xl:gap-y-0">
              <div className="flex justify-start items-start flex-col">
                <div>
                  <p className="text-2xl font-bold lg:leading-6 text-white">
                    Technology stack
                  </p>
                </div>
                <div className="grid grid-cols-2 mt-6 gap-x-6 gap-y-6">
                  {project.techStack.map((tech, id) => (
                    <div key={id}>
                      <span
                        key={id}
                        className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-purple-400 text-gray-900">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-start items-start flex-col">
                <div>
                  <p className="text-2xl font-bold lg:leading-6 text-white">
                    Infrastructure
                  </p>
                </div>
                <div className="grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-6 gap-x-6 lg:gap-x-24 gap-y-6">
                  {project.infrastructure.map((i, id) => (
                    <div key={id}>
                      <span
                        key={id}
                        className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-yellow-400 text-gray-5a0">
                        {i}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className=" container py-16 px-6 lg:px-14  ">
          <div className="flex justify-start items-start flex-col ">
            <div>
              <p className="text-2xl font-bold lg:leading-6 text-white">
                Summary
              </p>
            </div>
            <div className="ml-4 mt-8 w-3/4 md:w-full">
              <div className="md:text-base text-white list-disc xl:space-y-6 space-y-4 text-sm overflow-scroll">
                {<MDXRemote {...summary} />}
              </div>
            </div>
          </div>
        </div>

        <section className=" bg-gray-800 py-10">
          <div className="mx-auto container px-6 lg:px-14 xl:px-0">
            <div className="flex justify-center items-start flex-col ">
              <div className="flex justify-start items-start pl-2 md:pl-6">
                <h1 className="text-2xl font-extrabold leading-normal text-white">
                  More Work
                </h1>
              </div>
              <div className="w-full items-center grid   grid-cols-1 xl:gap-x-6 xl:gap-y-6 gap-x-4 md:gap-x-6 mt-0 xl:mt-0 gap-y-4 md:gap-y-6">
                <FourSlider
                  fourProjects={fourProjects}
                  key={fourProjects.slug}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
