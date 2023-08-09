
import './index.css'
const MoviesDetailsCard=(props)=>{
    const{item}=props
    const {description,logo,releaseDate,title}=item
    console.log(releaseDate)
    return(
      <li className="unList">
        <div className="listContainer">
          <div className="listContainer2">

          <img src={`https://image.tmdb.org/t/p/original${logo}`} className='imageContainer' alt='image1'/>
        </div>
        <div className="listContainer3">
        <h1 className='title'>{title}</h1>
      <p>RELEASE DATE: {releaseDate}</p> 
      <p>{description}</p>
      
      </div>
        </div>
    </li>)
}
export default MoviesDetailsCard