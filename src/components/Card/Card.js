import React, { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './style.css'

function Card(props) {
  const { data } = props
  const history = useNavigate()
  const [isImgLoaded, setImgLoaded] = useState(false)
  const [loading, setLoading] = useState('')
  let img_path = 'https://image.tmdb.org/t/p/original'
  let img = data.poster_path
    ? img_path + data.poster_path
    : 'https://picsum.photos/100/100'

  let handleClick = () => {
    history(`/details/card=${data.id}`)
  }
  useEffect(()=>{
   isImgLoaded?setLoading('none'):setLoading('block')
  },[isImgLoaded])

  return (
    <>
      <div className='card-container' onClick={() => handleClick()}>
        <div>
          <Skeleton style={{ borderRadius: '10px 10px 0 0', height: '8em' , display: loading}} />
          <img
            src={img}
            alt='image'
            className='image'
            style={{display: isImgLoaded ? "block" : "none"}}
            onLoad={() => setImgLoaded(true)}
          />
          
        
        </div>

        <div className='card-info'>
          <p className='title-info'>
            {data.original_title} 
          </p>
          <p className='rating'>Rating: {data.vote_average}</p>
          <p className='description-info'>
            {data.overview ? data.overview : 'By default overview'}
          </p>
        </div>
      </div>
    </>
  )
}

export default Card
