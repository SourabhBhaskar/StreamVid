import React from 'react';
import Nav from '../components/Home/Nav/Nav';
import Header from '../components/Home/Header/Header';


function Home() {
  return (
    <div className='w-full h-full'>
      <Header>
        <Nav />
      </Header>
    </div>
  )
}

export default Home;