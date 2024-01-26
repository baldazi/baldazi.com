import React from 'react';
import { Footer, Header } from '../components';
import { Outlet } from 'react-router-dom/dist';


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