import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'
import { useForm, ValidationError } from '@formspree/react'

export default function Contact() {
  const [state, handleSubmit] = useForm('contactForm')
  const form = useRef(null)

  useEffect(() => {
    if (state.succeeded) {
      form.current.reset()
    }
  }, [state])

  return (
    <Layout title="Contact Sam Klepper">
      <div className="min-h-screen bg-gray-50 flex rounded-xl md:my-28 my-12">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="flex flex-col">
              <Image
                className="h-12 w-auto rounded-xl "
                src="/images/sbk-logo.svg"
                alt="SbK Logo"
                height={90}
                width={90}
              />
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900 text-center">
                Let&apos;s get in touch!
              </h2>
            </div>

            {/*  */}

            <div className="mt-8">
              <div className="mt-6">
                <form
                  action="#"
                  method="POST"
                  className="space-y-6"
                  onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="ml-px pl-4 block text-sm font-medium text-gray-700">
                      Name
                    </label>
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
                    <label
                      htmlFor="email"
                      className="ml-px pl-4 block text-sm font-medium text-gray-700">
                      Email
                    </label>
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
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=937&q=80"
            alt="Technology"
          />
        </div>
      </div>
    </Layout>
  )
}
