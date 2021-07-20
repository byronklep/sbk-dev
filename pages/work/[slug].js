import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { getProject, getProjectSlugs, getProjectsWork } from '../../lib/data'

import he from 'he'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

export const getStaticPaths = async () => {
  const slugRes = await getProjectSlugs()
  const slugs = slugRes.projects

  // console.log(slugs)
  // console.log(fourProjects)

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
                        <button className="bg-white hover:text-gray-50 hover:bg-gray-800 focus:outline-none focus:ring-2  focus:ring-gray-400 text-gray-900 border rounded px-4 py-3 space-x-2 flex items-center justify-center flex-row ">
                          <div>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M12 2C6.475 2 2 6.475 2 12C1.99887 14.0993 2.65881 16.1456 3.88622 17.8487C5.11362 19.5517 6.84615 20.8251 8.838 21.488C9.338 21.575 9.525 21.275 9.525 21.012C9.525 20.775 9.512 19.988 9.512 19.15C7 19.613 6.35 18.538 6.15 17.975C6.037 17.687 5.55 16.8 5.125 16.562C4.775 16.375 4.275 15.912 5.112 15.9C5.9 15.887 6.462 16.625 6.65 16.925C7.55 18.437 8.988 18.012 9.562 17.75C9.65 17.1 9.912 16.663 10.2 16.413C7.975 16.163 5.65 15.3 5.65 11.475C5.65 10.387 6.037 9.488 6.675 8.787C6.575 8.537 6.225 7.512 6.775 6.137C6.775 6.137 7.612 5.875 9.525 7.163C10.3391 6.93706 11.1802 6.82334 12.025 6.825C12.875 6.825 13.725 6.937 14.525 7.162C16.437 5.862 17.275 6.138 17.275 6.138C17.825 7.513 17.475 8.538 17.375 8.788C18.012 9.488 18.4 10.375 18.4 11.475C18.4 15.313 16.063 16.163 13.838 16.413C14.2 16.725 14.513 17.325 14.513 18.263C14.513 19.6 14.5 20.675 14.5 21.013C14.5 21.275 14.688 21.587 15.188 21.487C17.173 20.8168 18.8979 19.541 20.1199 17.8391C21.3419 16.1373 21.9994 14.0951 22 12C22 6.475 17.525 2 12 2Z"
                                fill="#111827"
                              />
                            </svg>
                          </div>

                          <p className="text-base font-medium leading-none ">
                            Go to Site
                          </p>
                        </button>
                      </a>
                    </Link>
                    <Link href={`${project.links[1]}`} passHref>
                      <a target="_blank" rel="noreferrer">
                        <button className="bg-white hover:text-gray-50 hover:bg-gray-800 focus:outline-none focus:ring-2  focus:ring-gray-400 text-gray-900 border rounded px-4 py-3 space-x-2 flex items-center lg:ml-3 justify-center flex-row ">
                          <div>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M12 2C6.475 2 2 6.475 2 12C1.99887 14.0993 2.65881 16.1456 3.88622 17.8487C5.11362 19.5517 6.84615 20.8251 8.838 21.488C9.338 21.575 9.525 21.275 9.525 21.012C9.525 20.775 9.512 19.988 9.512 19.15C7 19.613 6.35 18.538 6.15 17.975C6.037 17.687 5.55 16.8 5.125 16.562C4.775 16.375 4.275 15.912 5.112 15.9C5.9 15.887 6.462 16.625 6.65 16.925C7.55 18.437 8.988 18.012 9.562 17.75C9.65 17.1 9.912 16.663 10.2 16.413C7.975 16.163 5.65 15.3 5.65 11.475C5.65 10.387 6.037 9.488 6.675 8.787C6.575 8.537 6.225 7.512 6.775 6.137C6.775 6.137 7.612 5.875 9.525 7.163C10.3391 6.93706 11.1802 6.82334 12.025 6.825C12.875 6.825 13.725 6.937 14.525 7.162C16.437 5.862 17.275 6.138 17.275 6.138C17.825 7.513 17.475 8.538 17.375 8.788C18.012 9.488 18.4 10.375 18.4 11.475C18.4 15.313 16.063 16.163 13.838 16.413C14.2 16.725 14.513 17.325 14.513 18.263C14.513 19.6 14.5 20.675 14.5 21.013C14.5 21.275 14.688 21.587 15.188 21.487C17.173 20.8168 18.8979 19.541 20.1199 17.8391C21.3419 16.1373 21.9994 14.0951 22 12C22 6.475 17.525 2 12 2Z"
                                fill="#111827"
                              />
                            </svg>
                          </div>

                          <p className="text-base font-medium leading-none ">
                            Go to Repo
                          </p>
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>

                {/* <div className="mt-8">
                  <button className="bg-white hover:text-gray-50 hover:bg-gray-800 focus:outline-none focus:ring-2  focus:ring-gray-400 text-gray-900 border rounded px-4 py-3 space-x-2 flex items-center justify-center flex-row ">
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 2C6.475 2 2 6.475 2 12C1.99887 14.0993 2.65881 16.1456 3.88622 17.8487C5.11362 19.5517 6.84615 20.8251 8.838 21.488C9.338 21.575 9.525 21.275 9.525 21.012C9.525 20.775 9.512 19.988 9.512 19.15C7 19.613 6.35 18.538 6.15 17.975C6.037 17.687 5.55 16.8 5.125 16.562C4.775 16.375 4.275 15.912 5.112 15.9C5.9 15.887 6.462 16.625 6.65 16.925C7.55 18.437 8.988 18.012 9.562 17.75C9.65 17.1 9.912 16.663 10.2 16.413C7.975 16.163 5.65 15.3 5.65 11.475C5.65 10.387 6.037 9.488 6.675 8.787C6.575 8.537 6.225 7.512 6.775 6.137C6.775 6.137 7.612 5.875 9.525 7.163C10.3391 6.93706 11.1802 6.82334 12.025 6.825C12.875 6.825 13.725 6.937 14.525 7.162C16.437 5.862 17.275 6.138 17.275 6.138C17.825 7.513 17.475 8.538 17.375 8.788C18.012 9.488 18.4 10.375 18.4 11.475C18.4 15.313 16.063 16.163 13.838 16.413C14.2 16.725 14.513 17.325 14.513 18.263C14.513 19.6 14.5 20.675 14.5 21.013C14.5 21.275 14.688 21.587 15.188 21.487C17.173 20.8168 18.8979 19.541 20.1199 17.8391C21.3419 16.1373 21.9994 14.0951 22 12C22 6.475 17.525 2 12 2Z"
                          fill="#111827"
                        />
                      </svg>
                    </div>
                    
                    <p className="text-base font-medium leading-none ">
                      Go to Site
                    </p>
                  </button>
                  <button className="bg-white hover:text-gray-50 hover:bg-gray-800 focus:outline-none focus:ring-2  focus:ring-gray-400 text-gray-900 border rounded px-4 py-3 space-x-2 flex items-center justify-center flex-row ">
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 2C6.475 2 2 6.475 2 12C1.99887 14.0993 2.65881 16.1456 3.88622 17.8487C5.11362 19.5517 6.84615 20.8251 8.838 21.488C9.338 21.575 9.525 21.275 9.525 21.012C9.525 20.775 9.512 19.988 9.512 19.15C7 19.613 6.35 18.538 6.15 17.975C6.037 17.687 5.55 16.8 5.125 16.562C4.775 16.375 4.275 15.912 5.112 15.9C5.9 15.887 6.462 16.625 6.65 16.925C7.55 18.437 8.988 18.012 9.562 17.75C9.65 17.1 9.912 16.663 10.2 16.413C7.975 16.163 5.65 15.3 5.65 11.475C5.65 10.387 6.037 9.488 6.675 8.787C6.575 8.537 6.225 7.512 6.775 6.137C6.775 6.137 7.612 5.875 9.525 7.163C10.3391 6.93706 11.1802 6.82334 12.025 6.825C12.875 6.825 13.725 6.937 14.525 7.162C16.437 5.862 17.275 6.138 17.275 6.138C17.825 7.513 17.475 8.538 17.375 8.788C18.012 9.488 18.4 10.375 18.4 11.475C18.4 15.313 16.063 16.163 13.838 16.413C14.2 16.725 14.513 17.325 14.513 18.263C14.513 19.6 14.5 20.675 14.5 21.013C14.5 21.275 14.688 21.587 15.188 21.487C17.173 20.8168 18.8979 19.541 20.1199 17.8391C21.3419 16.1373 21.9994 14.0951 22 12C22 6.475 17.525 2 12 2Z"
                          fill="#111827"
                        />
                      </svg>
                    </div>
                    <p className="text-base font-medium leading-none ">
                      Go to Repo
                    </p>
                  </button>
                </div> */}
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
            <div className="flex justify-between items-start md:flex-row flex-col gap-y-10 xl:gap-y-0">
              <div className="flex justify-start items-start flex-col">
                <div>
                  <p className="text-2xl font-bold lg:leading-6 text-white">
                    Technology stack
                  </p>
                </div>
                <div className="grid grid-cols-2 mt-6 gap-x-6 gap-y-6">
                  {project.techStack.map((tech, id) => (
                    <div key={id}>
                      <p
                        key={id}
                        className="text-base leading-none text-white capitalize">
                        {tech}
                      </p>
                    </div>
                  ))}
                  {/* <div>
                    <p className="text-base leading-none text-white capitalize">
                      HTML
                    </p>
                  </div>
                  <div>
                    <p className="text-base leading-none text-white capitalize">
                      CSS
                    </p>
                  </div>
                  <div>
                    <p className="text-base leading-none text-white capitalize">
                      Javascript
                    </p>
                  </div>
                  <div>
                    <p className="text-base leading-none text-white capitalize">
                      React
                    </p>
                  </div>
                  <div>
                    <p className="text-base leading-none text-white capitalize">
                      MongoDB
                    </p>
                  </div>
                  <div>
                    <p className="text-base leading-none text-white capitalize">
                      NodeJs
                    </p>
                  </div> */}
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
                      <p
                        key={id}
                        className="text-base leading-none text-white capitalize">
                        {i}
                      </p>
                    </div>
                  ))}

                  {/* <div>
                    <p className="text-base leading-none text-white capitalize">
                      AWS Elastic Beanstalk
                    </p>
                  </div>
                  <div>
                    <p className="text-base leading-none text-white capitalize">
                      AWS SQS
                    </p>
                  </div>
                  <div>
                    <p className="text-base leading-none text-white capitalize">
                      AWS SQS
                    </p>
                  </div>
                  <div>
                    <p className="text-base leading-none text-white capitalize">
                      AWS Cloudfront
                    </p>
                  </div>
                  <div>
                    <p className="text-base leading-none text-white capitalize">
                      AWS Lambda
                    </p>
                  </div>
                  <div>
                    <p className="text-base leading-none text-white capitalize">
                      AWS DynamonDB
                    </p>
                  </div>
                  <div>
                    <p className="text-base leading-none text-white capitalize">
                      AWS DynamonDB
                    </p>
                  </div>
                  <div>
                    <p className="text-base leading-none text-white capitalize">
                      AWS CloufFormation
                    </p>
                  </div>
                  <div>
                    <p className="text-base leading-none text-white capitalize">
                      AWS API Gateway
                    </p>
                  </div>
                  <div>
                    <p className="text-base leading-none text-white capitalize">
                      AWS RDS
                    </p>
                  </div>
                  <div>
                    <p className="text-base leading-none text-white capitalize">
                      Route53
                    </p>
                  </div>
                  <div>
                    <p className="text-base leading-none text-white capitalize">
                      AWS Elasticsearch
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mx-auto container py-16 px-6 lg:px-14 xl:px-0">
          <div className="flex justify-start items-start flex-col">
            <div>
              <p className="text-2xl font-bold lg:leading-6 text-white">
                Summary
              </p>
            </div>
            <div className="ml-4 mt-8 xl:w-3/5">
              <div className="text-base text-white list-disc xl:space-y-6 space-y-4">
                {<MDXRemote {...summary} />}
              </div>

              {/* <ul className="text-base text-white list-disc xl:space-y-6 space-y-4"> */}
              {/* <li>
                  Used the strangler pattern to carry out the digital
                  transformation of the legacy software system.
                </li>
                <li>
                  Successfully achieved the performance elevation of 70% on the
                  front-end website.
                </li>
                <li>
                  Leveraged the client-side rendering (CSR) capabilities for
                  ReactJS coupled with AWS Cloudfront distributions to ensure
                  minimum latency at the client end.
                </li>
                <li>
                  Developed a custom CMS solution tailored for company needs
                  including a highly interactive page builder.
                </li>
                <li>
                  Wrote serverless functions to keep the legacy/core database in
                  sync with the cloud database while reducing the costs of
                  renting and managing bare metal servers.
                </li>
                <li>
                  Leveraged messaging queues to distribute a workload of over 15
                  million database operations across a batch of serverless
                  instances to ensure minimal data loss and reduced cost in
                  terms of execution time per instance.
                </li>
                <li>
                  Set up CI/CD pipelines to ensure seamless deployments inside a
                  Virtual Private Cloud (VPC).
                </li>
                <li>
                  Wrote 150 tests and implemented test automation using Jest and
                  Puppeteer.
                </li>
                <li>
                  Reduced infrastructure deployment and maintenance costs by
                  70x.
                </li> */}
              {/* </ul> */}
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
              <div className="w-full items-center grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 xl:gap-x-6 xl:gap-y-6 gap-x-4 md:gap-x-6 mt-0 xl:mt-0 gap-y-4 md:gap-y-6">
                {fourProjects.projects.map((project) => (
                  <div
                    key={project.slug}
                    className=" flex flex-col justify-between items-start p-3 md:p-6 bg-gray-800 rounded">
                    <div className="w-full">
                      <div className="flex justify-center items-center w-full">
                        <img
                          className="w-full"
                          src={project.image.url}
                          alt="spider-web"
                        />
                      </div>
                      <div className="md:mt-6 mt-4">
                        <p className="text-xs font-medium leading-3 text-white">
                          {project.category}
                        </p>
                      </div>
                      <div className="md:mt-4 mt-2">
                        <p className=" text-base md:text-2xl font-semibold text-white">
                          {project.title}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link href={`/work/${project.slug}`}>
                        <a className="cursor-pointer focus:outline-none focus:text-green-400 text-xs leading-3 hover:underline focus:underline text-gray-300">
                          <p>Go to project</p>
                        </a>
                      </Link>
                    </div>
                  </div>
                ))}

                {/* <div className=" flex flex-col justify-between items-start h-full p-3 md:p-6 bg-gray-800 rounded">
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
                      <p className=" text-base md:text-2xl font-semibold text-white">
                        In Defense of Utility-First CSS
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a
                      onClick={() => router.push('/projectInner')}
                      className="cursor-pointer focus:outline-none focus:text-green-400 text-xs leading-3 hover:underline focus:underline text-gray-300">
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
                      <p className=" text-base md:text-2xl font-semibold text-white">
                        Why Javascript Numbers Are Weird (And How to Fix It)
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a
                      onClick={() => router.push('/projectInner')}
                      className="cursor-pointer focus:outline-none focus:text-green-400 text-xs leading-3 hover:underline focus:underline text-gray-300">
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
                      <p className="xl:w-60 text-base md:text-2xl font-semibold text-white">
                        Scalable Responsive Systems
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a
                      onClick={() => router.push('/projectInner')}
                      className="cursor-pointer focus:outline-none focus:text-green-400 text-xs leading-3 hover:underline focus:underline text-gray-300">
                      <p>Go to project</p>
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
