import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className='p-5 lg:p-0'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
