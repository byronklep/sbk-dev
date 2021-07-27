import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import usePortal from '../utils/usePortal'
import Image from 'next/image'

import { useForm, ValidationError } from '@formspree/react'

export default function ContactForm({ id }) {
  const [state, handleSubmit] = useForm('contactForm')

  const form = useRef(null)

  useEffect(() => {
    if (state.succeeded) {
      form.current.reset()
    }
  }, [state])

  return (
    <div className="min-h-screen md:w-1/2 bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-50 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="flex flex-col">
              <Image
                className="h-12 w-auto rounded-xl "
                src="/images/sbk-logo.svg"
                alt="SbK Logo"
                height={90}
                width={90}
              />
              <h2 className="mt-6 mb-4 text-3xl font-extrabold text-gray-900 text-center">
                Let&apos;s get in touch!
              </h2>
            </div>
          </div>

          {state.succeeded ? (
            <Modal id={id}>
              <motion.div
                initial="pageInitial"
                animate="pageAnimate"
                variants={{
                  pageInitial: {
                    opacity: 0,
                    translateY: '-35rem',
                  },
                  pageAnimate: {
                    opacity: 1,
                    translateY: '-38rem',
                  },
                }}
                transition={{ duration: 0.7 }}
                className="flex justify-center w-full md:max-w-xl">
                <p className="text-center text-gray-700 bg-green-300 font-bold shadow-xl rounded-xl w-40 h-14 p-4">
                  Sent!{' '}
                  <span role="img" aria-label="thumb">
                    👍 &nbsp;
                  </span>
                  <span role="img" aria-label="party">
                    🎉
                  </span>
                </p>
              </motion.div>
            </Modal>
          ) : (
            <></>
          )}

          <div id="grid-parent">
            <form
              ref={form}
              action="#"
              method="POST"
              className="space-y-6"
              onSubmit={handleSubmit}>
              <div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 px-4 rounded-full"
                    placeholder="Enter name"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 px-4 rounded-full"
                    placeholder="Enter email"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>
              <label htmlFor="phone" className="px-4 py-2">
                <input
                  name="Phone"
                  id="phone"
                  type="text"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 px-4 rounded-full"
                  placeholder="Phone Number"
                />
              </label>
              <div>
                <textarea
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  rows="4"
                  id="message"
                  name="message"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

const Modal = ({ id, children }) => {
  const target = usePortal(id)

  return createPortal(children, target)
}
