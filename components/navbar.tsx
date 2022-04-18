import { FC } from 'react'

const Navbar: FC = () => {
  return (
    <div className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0 md:mr-20">
          <img
            src="https://ik.imagekit.io/manuelalferez/one-question/logo_98HCCkHRg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649859323346"
            className="h-10 w-10"
            alt="logo_header"
          />
          <span className="ml-3 text-xl">One Question</span>
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          <a className="mr-5 hover:cursor-pointer hover:text-gray-900">
            First Link
          </a>
          <a className="mr-5 hover:cursor-pointer hover:text-gray-900">
            Second Link
          </a>
          <a className="mr-5 hover:cursor-pointer hover:text-gray-900">
            Third Link
          </a>
        </nav>
        <button className="mt-4 inline-flex items-center rounded border-0 bg-gray-100 py-1 px-3 text-base hover:bg-gray-200 focus:outline-none md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="ml-1 h-4 w-4"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Navbar
