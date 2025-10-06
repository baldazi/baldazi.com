import { Footer, Header } from '../components';
import { Outlet } from 'react-router';


function Root() {
  return (
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default Root;