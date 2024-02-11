import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa';
import './styles.css'

const StarRating = ({noOfStars = 5}) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex){
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex)
    }

    function handleMouseLeave(){
        setHover(rating)
    }

  return (
    <div className='star-rating'>
        {
            [...Array(noOfStars)].map((_,ind) => {
                ind += 1
                return <FaStar 
                className={ind <= (hover || rating) ? 'active' : ''}
                key={ind}
                onClick={() => handleClick(ind)}
                onMouseMove={() => handleMouseEnter(ind)}
                onMouseMoveLeave={() => handleMouseLeave()}/>
            })
        }
    </div>
  )
}

export default StarRating