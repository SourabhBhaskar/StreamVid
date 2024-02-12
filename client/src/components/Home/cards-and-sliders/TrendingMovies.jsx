import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import { icons } from '../../../utils/icons';
import CardSlider from './CardSlider';
import PlayCard from './PlayCard';




function TrendingMovies() {
  return (
    <CardSlider title="Trending Movies">
        <PlayCard />
        <PlayCard />
        <PlayCard />
        <PlayCard />
        <PlayCard />
        <PlayCard />
        <PlayCard />
        <PlayCard />
        <PlayCard />
        <PlayCard />
        <PlayCard />
        <PlayCard />
        <PlayCard />
        <PlayCard />
        <PlayCard />
        <PlayCard />
        <PlayCard />
    </CardSlider>
  )
}


export default TrendingMovies;