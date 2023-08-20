import './style.css'
import React  from 'react'
import {useNavigate,Link} from 'react-router-dom'
function Card(props) {
  const { data,key } = props
  const history = useNavigate();
  let img_path = 'https://image.tmdb.org/t/p/original'
  let img = data.poster_path
    ? img_path + data.poster_path
    : 'https://picsum.photos/100/100'

     

    let handleClick=()=>{
    console.log(key,data._id)
      history(`/details/card=${data.id}`)
      
    }

  return (
    // <Link to={`/details/${data._id}`}>
      <div className='card-container' onClick={()=>handleClick()}>
        
          <div>
            <img src={img} alt='image' className='image' />
          </div>
          <div className='card-info'>
            <p className='title-info'>{data.original_title} ( {data.vote_average} )</p>
            <p className='description-info'>{data.overview ? data.overview:'By default overview'}</p>
          </div> 
      </div>
    
  )
}
export default Card
