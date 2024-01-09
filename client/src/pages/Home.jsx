import React from 'react';
import Nav from '../components/Home/Nav/Nav';
import Header from '../components/Home/Header/Header';
import CardSlider from '../components/Home/Cards/CardSlider';
import Card1 from '../components/Home/Cards/Card1';
import ShutterCard from '../components/Home/Cards/ShutterCard';
import AdultBanner from '../components/Home/Banners/AdultBanner';
import WatchTrailerBanner from '../components/Home/Banners/WatchTrailerBanner';
import CirlceCard from '../components/Home/Cards/CirlceCard';
import NewsCard from '../components/Home/Cards/NewsCard';
import Footer from '../components/Home/Footer/Footer';
import SubFooter from '../components/Home/Footer/SubFooter';



function Home() {

  return (
    <div className='w-full h-full border-2'>
      <Header>
        <Nav />
      </Header>
      <Footer>
        <SubFooter />
      </Footer>
    </div>
  )
}

export default Home;

