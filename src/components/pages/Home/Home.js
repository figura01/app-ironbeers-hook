import React from 'react';
import Page from '../../../UI/Page';
import HomeItem from './HomeItem';

import classes from './Home.module.css';
import beers from '../../../assets/beers.png';
import newBeer from '../../../assets/new-beer.png';
import randomBeer from '../../../assets/random-beer.png';

const Home = props => {
  const items = [
    {id: 'id1', label: 'All Beers', url: '/beers', img: beers, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facilis doloribus mollitia eligendi ea quod dignissimos est pariatur aut possimus!' },
    {id: 'id2', label: 'New beer', url: '/new-beer', img: newBeer, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facilis doloribus mollitia eligendi ea quod dignissimos est pariatur aut possimus!' },
    {id: 'id3', label: 'Random Beer', url: '/random-beer', img: randomBeer, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facilis doloribus mollitia eligendi ea quod dignissimos est pariatur aut possimus!' }
  ]
  
  return(
    <Page>
      <ul className={classes.home}>
        {items.map(i => (<HomeItem key={i.id} img={i.img} label={i.label} url={i.url} description={i.description} /> ))}
      </ul>
    </Page>
  )
}

export default Home;