import React from 'react';
import Nav from '../components/Home/Nav/Nav';
import Header from '../components/Home/Header/Header';
import TrendingMovies from '../components/Home/cards-and-sliders/TrendingMovies';
import NewReleases from '../components/Home/cards-and-sliders/NewReleases';
import AdultBanner from '../components/Home/Banners/AdultBanner';
import WatchTrailerBanner from '../components/Home/Banners/WatchTrailerBanner';
import DealsOfTheDay from '../components/Home/cards-and-sliders/DealsOfTheDay';
import TvSeries from '../components/Home/cards-and-sliders/TvSeries';
import TopArtists from '../components/Home/cards-and-sliders/TopArtists';
import TopNews from '../components/Home/cards-and-sliders/TopNews';
import Footer from '../components/Home/Footer/Footer';
import SubFooter from '../components/Home/Footer/SubFooter';


function Home() {

  return (
    <div className='w-full h-auto'>
      <Nav />
      <Header />
      <TrendingMovies />
      <NewReleases />
      <AdultBanner/>
      <DealsOfTheDay />
      <TvSeries />
      <WatchTrailerBanner />
      <TopArtists />
      <TopNews />
      <Footer>
        <SubFooter/>
      </Footer>
    </div>
  )
}

export default Home;

