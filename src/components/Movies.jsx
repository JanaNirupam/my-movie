import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

import axios from 'axios'
import Pagenation from './Pagenation'


function Movies({handleAddtoWatchList , handleRemoveFromWatchList , watchlist}) {

  const [movies , setMovies]=useState([])
  const [pageNo , setPageNo]=useState(1)
  
  const handlePrev=()=>{
    if(pageNo===1){
      setPageNo(pageNo)
    }else

    setPageNo(pageNo-1)
  }
  const handleNext=()=>
  {
    setPageNo(pageNo+1)

  }


  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=8d551eb3153fc32da090ea085ca1b73f&language=en-US&page=${pageNo}`).then(function(res){
      console.log(res.data.results)
      setMovies(res.data.results)
      console.log(pageNo)
    })
        
  
  }, [pageNo])

      
  return (
    <div className='p-5' >
        
        <div className='text-2xl m-5 font-bold text-center '>
         Tranding Movies
        </div>
        <div className='flex flex-row flex-wrap  justify-around gap-8 '>
            {movies.map((movieObj)=>{
              return <MovieCard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.original_title} handleAddtoWatchList={handleAddtoWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} watchlist={watchlist}/>
            })}
            
        </div>
        
         <Pagenation pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
        
    </div>
  )
}

export default Movies



//https://api.themoviedb.org/3/movie/popular?api_key=8d551eb3153fc32da090ea085ca1b73f&language=en-US&page=2
// `https://www.themoviedb.org/t/p/${movieObj.poster_path}`