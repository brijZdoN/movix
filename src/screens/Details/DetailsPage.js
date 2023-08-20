import './style.css'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function getCardId() {
  return window.location.href.split('=')[1]
}

function DetailsPage(props) {
  const navigate = useNavigate()
  const cardId = getCardId()
  const [data, setData] = useState({})
  const [director, setDirector] = useState('')

  const TOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzE2MmU5MjZjMWYyNzJjNzU4YTJmNDIwMDg0MGI4YyIsInN1YiI6IjY0YmJiNTA3YWM2Yzc5MDhkZTVlZDc0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tVJ9km9vnZheNxiV0MnigAPa4dyrAV_eEibcioSmVzI'

  const headers = {
    Authorization: 'Bearer ' + TOKEN,
    Accept: 'application/json',
  }

  let img_path = 'https://image.tmdb.org/t/p/original'
  // let img =
  // data && data.poster_path
  //   ? img_path + data.poster_path
  //   : 'https://picsum.photos/150/150'

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${cardId}`, { headers })
      .then((res) => res.data)
      .then((result) => {
        
        result.poster_path =
          'https://image.tmdb.org/t/p/original' + result.poster_path
        setData(result)
        setDirector(result.production_companies[0].name)
        // console.log("resr",result)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <div className='header-container'>
        <p id='detail-header'>Movie Details</p>
        <button className='back-button' onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>

      <div className='detail-container'>
        <div className='detail-image'>
          <img
             src={data ? data.poster_path : 'https://picsum.photos/80/100'}
             alt='movie_img'
            id='movie_img'
          />
        </div>

        <div className='detail-info'>
          <p id='title'>
            {data && data.original_title}
            <span id='rating'>{` ( ${data.vote_average} )`}</span>
          </p>
          <p id='movie-details'>
            {data &&
              `${data.release_date?.slice(0, 4)} | ${data.runtime} min | ${director}`}
          </p>
          <p><span>Card:</span></p>
          <p><span>Description:</span>{data && ` ${data.overview}`}</p>
          
        </div>
      </div>
    </>
  )
}
export default DetailsPage
