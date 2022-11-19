import React, { Fragment, useState, useEffect } from 'react';
import CustomLoader from '../../CustomLoader';
import beerApi from '../../../api/beerApi';
import Beer from '../../Beer/Beer';
const RandomBeer = (props) => {
  const [beer, setBeer] = useState(null)

  useEffect(() => {
   
    const fetchBeer =  async () => {
      const randomBeer = await beerApi.getRandomBeer();
      console.log(randomBeer.data)
      setBeer(randomBeer.data);
    }
    fetchBeer()
  }, [])
  return (
    <Fragment>

      {!beer && <CustomLoader/>}
      {beer && (
        <div className="flex flex-col w-full items-center pt-4">
          <Beer {...beer}/>
        </div>
      )}
      

      
    </Fragment>
  )
}

export default RandomBeer;