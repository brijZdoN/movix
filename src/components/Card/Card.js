import './style.css'
function Card() {
  return (
    <div className='card-container'>
      <div>
        <img
          src='https://picsum.photos/100/100'
          alt='image'
          className='image'
        />
      </div>
      <div className='card-info'>
        <p className='movie-info'>Movie</p>
        <p className='description-info'>Description</p>
      </div>
    </div>
  )
}
export default Card
