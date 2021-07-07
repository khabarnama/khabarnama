import HeaderClassic from './HeaderClassic'
export default function Layout({ children }) {
  return (
    <>
      <HeaderClassic />
      {children}
    </>
  )
}
