import { FC } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

const Navbar: FC = () => {
  const { data: session } = useSession()

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
        {session ? (
          <div className="flex items-center">
            {session.user?.image && (
              <img
                src={session.user.image}
                className="mr-2 mt-4 h-10 rounded-full md:ml-10 md:mt-0"
              />
            )}
            <button
              onClick={() => signOut()}
              className="mt-4 inline-flex items-center rounded border-0 bg-gray-100 py-1 px-3 text-base hover:bg-gray-200 focus:outline-none md:mt-0"
            >
              Log out
            </button>
          </div>
        ) : (
          <button
            onClick={() => signIn()}
            className="mt-4 inline-flex items-center rounded border-0 bg-gray-100 py-1 px-3 text-base hover:bg-gray-200 focus:outline-none md:mt-0"
          >
            Log in
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar
