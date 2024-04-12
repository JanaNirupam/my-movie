import React from 'react'
import WatchList from './WatchList'

function MovieCard({movieObj, poster_path, name, handleAddtoWatchList, handleRemoveFromWatchList, watchlist}) {

       function doesContain(movieObj){
        for(let i=0;i<watchlist.length;i++){
          if(watchlist[i].id==movieObj.id)
          {
            return true;
          }
        }
        return false;
       }

  return (
    <div className='h-[40vh] w-[180px] bg-cover bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end ' 
    style={{backgroundImage : `url(https://media.themoviedb.org/t/p/w220_and_h330_face/${poster_path})`}}>

      {doesContain(movieObj)? 
      (
      <div onClick={()=>(handleRemoveFromWatchList(movieObj))}  className='m-4 flex bg-gray-900/60 h-8 w-8 justify-center items-center rounded-lg'>
        &#10060;

      </div>
      ):(
      <div onClick={()=>(handleAddtoWatchList(movieObj))}  className='m-4 flex bg-gray-900/60 h-8 w-8 justify-center items-center rounded-lg'>
       &#128155;
      </div >
    )}
      

      <div className=' text-white text-xl w-full  p-2 text-center bg-gray-900/60  '>
        {name}
      </div>
    </div>
    
  )
}

export default MovieCard

//`https://www.themoviedb.org/t/p/${movieObj.poster_path}`