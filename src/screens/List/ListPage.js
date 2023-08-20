import React, { useEffect, useState, createRef } from 'react'
import './style.css'
import Card from '../../components/Card/Card'
import axios from 'axios'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ListPage(params) {
  // const API_KEY = 'fc162e926c1f272c758a2f4200840b8c'
  const TOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzE2MmU5MjZjMWYyNzJjNzU4YTJmNDIwMDg0MGI4YyIsInN1YiI6IjY0YmJiNTA3YWM2Yzc5MDhkZTVlZDc0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tVJ9km9vnZheNxiV0MnigAPa4dyrAV_eEibcioSmVzI'
  const headers = {
    Authorization: 'Bearer ' + TOKEN,
    Accept: 'application/json',
  }
  const [movieList, setMovieList] = useState([])
  const [home,setHome]=useState(false)
  const search = createRef()

  const searchMovie = async () => {
    let ip_value = search.current.value.trim()
    if(ip_value){
    let searchList =  await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${ip_value}`,
      {headers}
    ).then(res => res.data.results)
    setMovieList(searchList.length && searchList)
    search.current.value=''
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

  return (
    <>
      <div className='search-container'>
        <input type='text' ref={search} className='search-input' placeholder='🔍  Search' />
        <span onClick={() => searchMovie()}>Search</span>
        <FontAwesomeIcon icon={faHome} className='homebutton' onClick={()=>{ setHome(!home)}}/>
        
      </div>
      <div className='container'>
        {
          
          movieList &&
          movieList.map((item) => {
            return <Card key={item.id} data={item} />
          })
          }
      </div>
    </>
  )
}

export default ListPage
