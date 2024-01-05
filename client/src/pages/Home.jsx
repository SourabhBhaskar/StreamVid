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



function Home() {

  return (
    <div className='w-full h-full'>
      <Header>
        <Nav />
      </Header>
      <CardSlider name={'Trending Movies'}>
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </CardSlider>
      <CardSlider name={'New Release'}>
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </CardSlider>
      <AdultBanner />
      <CardSlider name={'Deals of the Week'}>
        <ShutterCard />
        <ShutterCard />
        <ShutterCard />
        <ShutterCard />
        <ShutterCard />
        <ShutterCard />
        <ShutterCard />
        <ShutterCard />
        <ShutterCard />
        <ShutterCard />
        <ShutterCard />
        <ShutterCard />
        <ShutterCard />
        <ShutterCard />
        <ShutterCard />
        <ShutterCard />
        <ShutterCard />
        <ShutterCard />
        <ShutterCard />
        <ShutterCard />
        <ShutterCard />
        <ShutterCard />
        <ShutterCard />
        <ShutterCard />
        <ShutterCard />
        <ShutterCard />
      </CardSlider>
      <WatchTrailerBanner />
      <CardSlider name={'Top Artist'}>
        <CirlceCard />
        <CirlceCard />
        <CirlceCard />
        <CirlceCard />
        <CirlceCard />
        <CirlceCard />
        <CirlceCard />
        <CirlceCard />
        <CirlceCard />
        <CirlceCard />
        <CirlceCard />
        <CirlceCard />
        <CirlceCard />
        <CirlceCard />
        <CirlceCard />
        <CirlceCard />
        <CirlceCard />
        <CirlceCard />
        <CirlceCard />
      </CardSlider>
      <CardSlider name={'Top News'}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </CardSlider>
    </div>
  )
}

export default Home;

