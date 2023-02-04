import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import path from 'src/constants/path'

export default function NotFound() {
  return (
    <div className='bg-white dark:bg-gray-900'>
      <Helmet>
        <title>Not found</title>
      </Helmet>
      <div className='mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <h1 className='text-orabg-orange dark:text-orabg-orange mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl'>
            404
          </h1>
          <p className='mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl'>Something is missing.</p>
          <p className='mb-4 text-lg font-light text-gray-500 dark:text-gray-400'>
            Sorry, we can not find that page. You will find lots to explore on the home page.
          </p>
          <Link
            to={path.home}
            className='my-4 inline-flex rounded-lg bg-orange px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-orange/90 focus:outline-none focus:ring-4 focus:ring-orange'
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
