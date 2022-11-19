import React, { useState, useEffect } from 'react';
import api from '../../../api/beerApi';
import CustomLoader from '../../CustomLoader';
import BeerItem from './BeerItem';
import classes from './Beers.module.css';
import { Outlet } from 'react-router-dom';

const Beers = (props) => {
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let res = await api.getBeers()
      console.log(res)
      setBeers(res.data)
      setIsLoading(false)
    }
    fetchData()
  }, [isLoading])

  return (
    
    <div>
      
      {isLoading && <CustomLoader />}
      { !isLoading && beers && (
        <React.Fragment>
          <ul className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${classes['beers-list']}`}>
            {beers.map((beer) => {
              return <BeerItem key={beer._id} img={beer.image_url} description={beer.description} name={beer.name} tagline={beer.tagline} id={beer._id} />
            })}
          </ul>
          <Outlet />
        </React.Fragment>
      )}

    </div>
  )
}

export default Beers;