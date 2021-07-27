import { useState } from 'react'
import Image from 'next/image'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const WorkTechStack = ({ languages }) => {
  const [filteredLangs, setfilteredLangs] = useState('')

  console.log(languages)

  const backend = languages.filter((e) => e.category === 'backend')
  const frontend = languages.filter((e) => e.category === 'frontend')
  const infra = languages.filter((e) => e.category === 'infrastructure')
  const test = languages.filter((e) => e.category === 'test')
  const uiux = languages.filter((e) => e.category === 'uiux')

  function showBackend() {
    setfilteredLangs(backend)
  }

  function showFrontend() {
    setfilteredLangs(frontend)
  }

  function showInfra() {
    setfilteredLangs(infra)
  }
  function showTesting() {
    setfilteredLangs(test)
  }
  function showUiUx() {
    setfilteredLangs(uiux)
  }

  function removeFiter() {
    setfilteredLangs(languages)
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
          <div className="flex flex-col mx-auto space-y-4 h-3/5 md:space-y-14 md:min-h-full">
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
                    onClick={() => showUiUx()}
                    className=" font-medium lg:leading-6 focus:outline-none text-left  pb-2 md:pb-4 xl:pb-2 text-xs md:text-xl xl:text-2xl  pr-2 md:mr-0 border-b-2 xl:border-b-4 border-transparent focus:border-white text-gray-400 hover:text-white focus:text-white">
                    <p>UI/UX</p>
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
                {filteredLangs &&
                  filteredLangs.map((lang) => (
                    <li
                      key={lang.name}
                      className="col-span-1 flex shadow-sm rounded-md">
                      <div
                        className={classNames(
                          lang.bgColor,
                          'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
                        )}>
                        <Image
                          src={lang.icon.url}
                          alt={lang.name}
                          height={lang.icon.height}
                          width={lang.icon.width}
                        />
                      </div>
                      <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                        <div className="flex-1 px-4 py-2 text-sm truncate text-center">
                          <a className="text-gray-900 font-medium hover:text-gray-600">
                            {lang.name}
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

export default WorkTechStack
