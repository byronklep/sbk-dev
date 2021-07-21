import { DotsVerticalIcon } from '@heroicons/react/solid'
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

const projects = [
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
  return (
    <div>
      <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <li
            key={project.name}
            className="col-span-1 flex shadow-sm rounded-md">
            <div
              className={classNames(
                project.bgColor,
                'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
              )}>
              {project.icon}
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <a className="text-gray-900 font-medium hover:text-gray-600">
                  {project.name}
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
