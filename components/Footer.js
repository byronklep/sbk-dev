import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <div className=" bg-linear-pink-invert pb-0">
        <div className="mx-auto container pt-20 lg:pt-10 flex flex-col items-center justify-center">
          <div>
            <Link href="/">
              <a className="text-xl font-bold text-gray-300 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                <img
                  src="/images/sbk-logo-white.svg"
                  alt="SbK Logo"
                  width={80}
                />
              </a>
            </Link>
          </div>
          <div className="text-white flex flex-col md:items-center f-f-l pt-3">
            <h1 className="text-2xl font-black">Build. Review. Ship.</h1>

            <div className="my-6 text-base text-color f-f-l">
              <ul className="md:flex items-center">
                <Link href="/" passHref>
                  <li className=" md:mr-6 cursor-pointer text-base hover:text-gray-300 focus:outline-none focus:text-gray-300 font-semibold leading-none text-white text-center">
                    Home
                  </li>
                </Link>
                <Link href="/about" passHref>
                  <li className="pt-3 md:pt-0 md:mr-6 cursor-pointer text-base hover:text-gray-300 focus:outline-none focus:text-gray-300 font-semibold leading-none text-white text-center">
                    About
                  </li>
                </Link>
                <Link href="/work" passHref>
                  <li className="pt-3 md:pt-0 md:mr-6 cursor-pointer text-base hover:text-gray-300 focus:outline-none focus:text-gray-300 font-semibold leading-none text-white text-center">
                    Work
                  </li>
                </Link>
                <Link href="/contact" passHref>
                  <li className="pt-3 md:pt-0 md:mr-6 cursor-pointer text-base hover:text-gray-300 focus:outline-none focus:text-gray-300 font-semibold leading-none text-white text-center">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
            <div className="text-sm text-color mb-10 f-f-l text-center">
              <p> © 2021 SbK</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
