import './style.css'
function Card(props) {
  const { data } = props
  let img_path = 'https://image.tmdb.org/t/p/original'
  let img = data.poster_path
    ? img_path + data.poster_path
    : 'https://picsum.photos/100/100'

    console.log(data)

  return (
    <div className='card-container'>
      <div>
        <img src={img} alt='image' className='image' />
      </div>
      <div className='card-info'>
        <p className='title-info'>{data.original_title}</p>
        <p className='description-info'>{data.overview ? data.overview:'By default overview'}</p>
      </div>
    </div>
  )
}
export default Card
