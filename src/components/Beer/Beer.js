import React from 'react';
import classes from './Beer.module.css';
import CardDetail from '../../UI/CardDetail/CardDetail';
const Beer = (props) => {
  const { image_url, name, tagline, description, contributed_by, attenuation_level, first_brewed
  } = props
  console.log('props: ', props)
  return (
    <CardDetail className="rounded border-gray-200 m-4">
      <div className={classes.beer}>
        <img src={image_url} alt="#" className={classes.img} />
        <div className="flex items-center justify-between py-1">
          <h2 className={`text-zinc-600 ${classes.name}`}>{name}</h2>
          <span className="text-xl font-semibold text-gray-300">{attenuation_level}</span>
        </div>
        
        <div className="flex items-center justify-between py-1">
          <h3 className={`font-semibold text-gray-400 ${classes.tagline}`}>{tagline}</h3>
          <span className="text-sm font-semibold">{first_brewed}</span>
        </div>
        <p className={`text-left leading-4 py-2 ${classes.description}`}>{description}</p>
        <p className={`text-left font-semibold text-gray-500 py-1 ${classes.contributed}`}>{contributed_by}</p>
      </div>
    </CardDetail>
  )
}

export default Beer