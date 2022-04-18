import Footer from './footer'
import Navbar from './navbar'
import { FC } from 'react'

const Layout: FC = (props) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
