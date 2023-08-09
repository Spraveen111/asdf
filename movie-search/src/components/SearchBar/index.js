import {Component} from 'react'
import MoviesDetailsCard from '../MoviesDetailsCard'
import './index.css'
const API_KEY='f2cd9e1edcbbfce90f8abc43f603dd99'

const BASE_URL='https://api.themoviedb.org/3'


class SearchBar extends Component{
    state={searchInput:'',moviesDetails:[]}
    onSubmitSearchInput=()=>{
        this.getJobsData()
    }

    onChangeInput=(event)=>{
        this.setState({searchInput:event.target.value})
    }

    
    getJobsData=async()=>{
        const {searchInput}=this.state
        const response= await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchInput}`)
        const data=await response.json()
        console.log(data)
        const MoviesData=data.results.map((each)=>({
            id:each.id,
            logo:each.poster_path,
            title:each.title,
            releaseDate:each.release_date,
            rating:each.vote_average,
            description:each.overview,
            logo2:each.backdrop_path

        }))
        this.setState({moviesDetails:MoviesData})
    }
    render(){
        const{searchInput,moviesDetails}=this.state
        console.log(moviesDetails)

        return(
        <div className='mainContainer '>
        <div className='container'>

            
            <label htmlFor='movie' className='para'>MOVIE NAME</label   >
            < input id='movie' type='search' className='w' value={searchInput} onChange={this.onChangeInput}/>
            <button className='para1' type='button' onClick={this.onSubmitSearchInput}>Search</button>
            </div>
            <div className='ulList'>
            <ul >
  {moviesDetails.map((each) => (
    <MoviesDetailsCard key={each.id} item={each} />
  ))}
</ul>

            </div>
        
        </div>)
    }
}
export default SearchBar