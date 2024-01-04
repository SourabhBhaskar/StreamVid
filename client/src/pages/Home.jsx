import React from 'react';
import Nav from '../components/Home/Nav/Nav';
import Header from '../components/Home/Header/Header';
import CardSlider from '../components/Home/Cards/CardSlider';
import BigCard from '../components/Home/Cards/BigCard';



function Home() {

  return (
    <div className='w-full h-full'>
      <Header>
        <Nav />
      </Header>
      <div className='w-full h-auto px-2 lg:px-16 overflow-hidden'>
        <CardSlider name={'Trending Movies'}>
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
        </CardSlider>
      </div>
      <div className='w-full h-auto px-2 lg:px-16 overflow-hidden'>
        <CardSlider name={'New Release'}>
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
        </CardSlider>
      </div>
    </div>
  )
}

export default Home;
