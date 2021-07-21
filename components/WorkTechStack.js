import { useState } from 'react'
import { FaNodeJs } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { SiCss3 } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiNextDotJs } from 'react-icons/si'
import { SiGatsby } from 'react-icons/si'
import { FaWordpress } from 'react-icons/fa'
import { SiHeroku } from 'react-icons/si'
import { SiNetlify } from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { FaGit } from 'react-icons/fa'
import { FaGitlab } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { SiBitbucket } from 'react-icons/si'
import { SiJest } from 'react-icons/si'
import { FaServer } from 'react-icons/fa'
import { SiGraphql } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { FaNetworkWired } from 'react-icons/fa'

const techStacks = [
  {
    name: 'Node',
    icon: <FaNodeJs />,
    category: 'backend',
    bgColor: 'bg-pink-600',
  },
  {
    name: 'Express',
    icon: <FaServer />,
    category: 'backend',
    bgColor: 'bg-pink-600',
  },
  {
    name: 'GraphQL',
    icon: <SiGraphql />,
    category: 'backend',
    bgColor: 'bg-pink-600',
  },
  {
    name: 'Mongo',
    icon: <SiMongodb />,
    category: 'backend',
    bgColor: 'bg-pink-600',
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql />,
    category: 'backend',
    bgColor: 'bg-pink-600',
  },
  {
    name: 'RestAPI',
    icon: <FaNetworkWired />,
    category: 'backend',
    bgColor: 'bg-pink-600',
  },
  {
    name: 'HTML',
    icon: <FaHtml5 />,
    category: 'frontend',
    bgColor: 'bg-purple-600',
  },
  {
    name: 'CSS',
    icon: <SiCss3 />,
    category: 'frontend',
    bgColor: 'bg-purple-600',
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript />,
    category: 'frontend',
    bgColor: 'bg-purple-600',
  },
  {
    name: 'React',
    icon: <SiReact />,
    category: 'frontend',
    bgColor: 'bg-purple-600',
  },
  {
    name: 'NextJS',
    icon: <SiNextDotJs />,
    category: 'frontend',
    bgColor: 'bg-purple-600',
  },
  {
    name: 'Gatsby',
    icon: <SiGatsby />,
    category: 'frontend',
    bgColor: 'bg-purple-600',
  },
  {
    name: 'WordPress',
    icon: <FaWordpress />,
    category: 'frontend',
    bgColor: 'bg-purple-600',
  },
  {
    name: 'Heroku',
    icon: <SiHeroku />,
    category: 'infrastructure',
    bgColor: 'bg-yellow-600',
  },
  {
    name: 'Netlify',
    icon: <SiNetlify />,
    category: 'infrastructure',
    bgColor: 'bg-yellow-600',
  },
  {
    name: 'AWS',
    icon: <FaAws />,
    category: 'infrastructure',
    bgColor: 'bg-yellow-600',
  },
  {
    name: 'Git',
    icon: <FaGit />,
    category: 'infrastructure',
    bgColor: 'bg-yellow-600',
  },
  {
    name: 'GitLab',
    icon: <FaGitlab />,
    category: 'infrastructure',
    bgColor: 'bg-yellow-600',
  },
  {
    name: 'GitHub',
    icon: <FaGithub />,
    category: 'infrastructure',
    bgColor: 'bg-yellow-600',
  },
  {
    name: 'Bitbucket',
    icon: <SiBitbucket />,
    category: 'infrastructure',
    bgColor: 'bg-yellow-600',
  },
  {
    name: 'Jest',
    icon: <SiJest />,
    category: 'test',
    bgColor: 'bg-green-600',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function WorkTechStck() {
  const [filteredStacks, setfilteredStacks] = useState('')

  var backend = techStacks.filter((e) => e.category === 'backend')
  var frontend = techStacks.filter((e) => e.category === 'frontend')
  var infra = techStacks.filter((e) => e.category === 'infrastructure')
  var test = techStacks.filter((e) => e.category === 'test')

  function showBackend() {
    setfilteredStacks(backend)
  }

  function showFrontend() {
    setfilteredStacks(frontend)
  }

  function showInfra() {
    setfilteredStacks(infra)
  }
  function showTesting() {
    setfilteredStacks(test)
  }

  function removeFiter() {
    setfilteredStacks(techStacks)
  }

  return (
    <section className="mt-24 ">
      <div className="container mx-auto px-6 lg:px-14 xl:px-0">
        <div className="flex justify-start items-start flex-col space-y-14">
          <div className="mx-auto">
            <h1 className="xl:text-6xl md:text-5xl text-4xl font-extrabold text-white">
              Technology stack
            </h1>
          </div>
          <div className="flex flex-col mx-auto space-y-4  md:space-y-14">
            <div>
              <div className=" flex md:justify-start justify-between item-start flex-row space-x-3 xl:space-x-14 md:space-x-4 border-gray-700 border-b w-full h-full">
                <div>
                  <button
                    onClick={() => showBackend()}
                    className=" font-medium lg:leading-6 focus:outline-none  pb-2 md:pb-4 xl:pb-2 text-xs md:text-xl xl:text-2xl pr-2 md:mr-0 border-b-2 xl:border-b-4 border-transparent focus:border-white text-gray-400 hover:text-white focus:text-white">
                    <p>Back-end</p>
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => showFrontend()}
                    className=" font-medium lg:leading-6 focus:outline-none  pb-2 md:pb-4 xl:pb-2 text-xs md:text-xl xl:text-2xl  pr-2 md:mr-0 border-b-2 xl:border-b-4 border-transparent focus:border-white text-gray-400 hover:text-white focus:text-white">
                    <p>Front-end</p>
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => showInfra()}
                    className=" font-medium lg:leading-6 focus:outline-none text-left  pb-2 md:pb-4 xl:pb-2 text-xs md:text-xl xl:text-2xl  pr-2 md:mr-0 border-b-2 xl:border-b-4 border-transparent focus:border-white text-gray-400 hover:text-white focus:text-white">
                    <p>Infrastructure & tools</p>
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => showTesting()}
                    className=" font-medium lg:leading-6 focus:outline-none  pb-2 md:pb-4 xl:pb-2 text-xs md:text-xl xl:text-2xl  pr-2 md:mr-0 border-b-2 xl:border-b-4 border-transparent focus:border-white text-gray-400 hover:text-white focus:text-white">
                    <p>Testing</p>
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => removeFiter()}
                    className=" font-medium lg:leading-6 focus:outline-none  pb-2 md:pb-4 xl:pb-2 text-xs md:text-xl xl:text-2xl  pr-2 md:mr-0 border-b-2 xl:border-b-4 border-transparent focus:border-white text-gray-400 hover:text-white focus:text-white">
                    <p>All</p>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {filteredStacks &&
                  filteredStacks.map((stack) => (
                    <li
                      key={stack.name}
                      className="col-span-1 flex shadow-sm rounded-md">
                      <div
                        className={classNames(
                          stack.bgColor,
                          'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
                        )}>
                        {stack.icon}
                      </div>
                      <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                        <div className="flex-1 px-4 py-2 text-sm truncate text-center">
                          <a className="text-gray-900 font-medium hover:text-gray-600">
                            {stack.name}
                          </a>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
