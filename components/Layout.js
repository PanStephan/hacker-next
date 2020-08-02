import Router from 'next/router'

const Layout = ({ backButton, children }) => (
  <>
    { backButton && <span onClick={() => Router.back()}>&#x2b05;</span> }
    {children}
  </>  
)

export default Layout