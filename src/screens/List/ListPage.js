import React, { useEffect, useState, createRef } from 'react'
import axios from 'axios'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.css'
import Card from '../../components/Card/Card'

function ListPage() {
  // const API_KEY = 'fc162e926c1f272c758a2f4200840b8c'
  const TOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzE2MmU5MjZjMWYyNzJjNzU4YTJmNDIwMDg0MGI4YyIsInN1YiI6IjY0YmJiNTA3YWM2Yzc5MDhkZTVlZDc0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tVJ9km9vnZheNxiV0MnigAPa4dyrAV_eEibcioSmVzI'
  const headers = {
    Authorization: 'Bearer ' + TOKEN,
    Accept: 'application/json',
  }
  const [movieList, setMovieList] = useState([])
  const [home, setHome] = useState(false)
  const [inputvalue, setInputValue] = useState('')
  // const search = createRef()

  const searchMovie = async () => {
    // let ip_value = search.current.value.trim()
    let value = inputvalue.trim()
    if (value) {
      let searchList = await axios
        .get(`https://api.themoviedb.org/3/search/movie?query=${inputvalue}`, {
          headers,
        })
        .then((res) => res.data.results)
      setMovieList(searchList.length && searchList)
      // search.current.value = ''
      setInputValue('')
    }
  }

  useEffect(() => {
    async function fetchUpcomingMovie() {
      const res = await axios.get(
        'https://api.themoviedb.org/3/movie/upcoming',
        { headers }
      )
      const result = res.data.results
      const sortedBydate = result.sort(
        (a, b) => new Date(a.release_date) - new Date(b.release_date)
      )
      setMovieList(sortedBydate)
    }
    fetchUpcomingMovie()
  }, [home])

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchMovie()
    }
  }
  return (
    <>
      <div className='search-container'>
        <input
          type='text'
          //  ref={search}
          className='search-input'
          placeholder='🔍  Search'
          value={inputvalue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {/* <span onClick={() => searchMovie()} style={{ cursor: 'pointer' }}>
          Search
        </span> */}
        <FontAwesomeIcon
          icon={faHome}
          className='homebutton'
          onClick={() => setHome(!home)}
        />
      </div>
      <div className='container'>
        {movieList &&
          movieList.map((item) => {
            return <Card key={item.id} data={item} />
          })}
      </div>
    </>
  )
}

export default ListPage
