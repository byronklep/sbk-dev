import React from 'react'
import Image from 'next/image'

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1)
  return (
    <>
      <div className="flex flex-wrap md:p-5">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist">
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 1
                    ? 'text-white bg-' + color + '-600'
                    : 'text-' + color + '-600 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(1)
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist">
                Bio
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 2
                    ? 'text-white bg-' + color + '-600'
                    : 'text-' + color + '-600 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(2)
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist">
                Education
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 3
                    ? 'text-white bg-' + color + '-600'
                    : 'text-' + color + '-600 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(3)
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist">
                Interest
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <div className="mx-auto p-5 md:p-2">
                      <p>
                        I was born in Houston, TX and have lived here for most
                        of my life. As a kid, I developed a fascination for
                        technology and an undying curiosity about how it worked.
                        Of course, there were other interests, like creating art
                        and reading Spider-Man comic books, that would also help
                        foster the creative spirit I now use to create websites.
                        <br />
                        <br />
                        Upon taking a <strong>WebMastering I</strong> class in
                        High School, I fell in love with the art of writing code
                        and programming instructions into a machine. That
                        combined with creatively styling websites really allowed
                        me to express myself in a way I did not know was
                        possible. Soon after, I started using my little bit of
                        knowledge to help a local non-profit manage their
                        website.
                      </p>
                    </div>
                    <div className="m-auto ">
                      <Image
                        className="items-center"
                        src="https://via.placeholder.com/150"
                        height={400}
                        width={500}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <div className="grid md:grid-cols-3 gap-2">
                    <div className="mx-auto p-5 md:p-2">
                      <p>
                        After High School, I started attending HCC and
                        eventually graduated with an Associates in Graphic
                        Design. Though, I did not do much professionally with
                        that degree, the skill has shown to be an invaluable
                        asset in my arsenal of web development tools.
                        <br />
                        <br />
                        Eventually, after life had taken me down its own path, I
                        arrived at a place where I felt like I wanted more
                        professionally. By this time, I was working as an
                        Administrative Clerk but wanted to do something more
                        creative and intellectually stimulating.
                      </p>
                    </div>
                    <div className="m-auto">
                      <Image
                        src="https://via.placeholder.com/150"
                        height={400}
                        width={500}
                        alt=""
                      />
                    </div>
                    <div className="mx-auto p-5 md:p-2">
                      <p>
                        So I enrolled in Digital Crafts coding bootcamp and have
                        not looked back since! After a rigorous six week long
                        curriculum of the journey from HTML to React, and
                        everything in between— I came out the other side
                        prepared and able to build whatever the client may need
                        and up to par with industry standards. Soon enough, I
                        was offering my skills freelance and even worked a brief
                        amount of time as a Lead Frontend Developer at Edge196.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="m-auto">
                    <Image
                      src="https://via.placeholder.com/150"
                      height={400}
                      width={500}
                      alt=""
                    />
                  </div>
                  <div className="mx-auto p-5 md:p-2">
                    <p>
                      I have always been fond of creativity in general, so
                      naturally, I gravitated towards science-fiction novels,
                      space, art and comic books. These have been life-long
                      creative catalysts that have only blossomed more as I’ve
                      aged. Wether it be a break from the seriousness of reality
                      or an unexpected inspiration, reading stories and creating
                      art will always be a proper release for me. Also, taking
                      brief trips into nature with my Rottweiler has become an
                      important part of rest & relaxation too. Something I try
                      to do often.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function TabsRender() {
  return (
    <>
      <Tabs color="gray" />
    </>
  )
}
