import React, { Fragment, useEffect, useState} from 'react';
import Beer from '../../Beer/Beer';

import classes from './SingleBeer.module.css';
import { useParams } from 'react-router-dom';
import api from '../../../api/beerApi';

const SingleBeer = props => {
  const { beerId } = useParams();
  console.log(beerId)
  //const []
  const [beerData, setBeerData] = useState(null)

  useEffect(() => {
    const loadBeer = async () => {
      const beer = await api.getOne(beerId);
      console.log(beer.data)
      setBeerData(beer.data)
    }
    loadBeer()
  },[beerId])

  return (
    <Fragment>

      <div className={classes.beer}>
        <Beer {...beerData} />
        
      </div>
    </Fragment>
  )
}

export default SingleBeer;