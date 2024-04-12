import React, { useState } from 'react'

import genreid from '../Utility/genre'

function WatchList({watchlist, setWatchList}) {
 

  const [search ,setSearch]=useState('')
  let handleSearch=(e)=>{
        setSearch(e.target.value)
  }

  let sortIncreasing=(()=>{
     let sortedIncrasing=watchlist.sort((movieA , movieB)=>{
      return movieA.vote_average - movieB.vote_average

     })
     setWatchList([...sortedIncrasing])
  })


  let sortDecreasing=(()=>{
    let sortedDecrasing=watchlist.sort((movieA , movieB)=>{
      return movieB.vote_average - movieA.vote_average

     })
     setWatchList([...sortedDecrasing])

  })

  return (
    <div>
        <>
        <div className='justify-center flex font-bold m-4'>
          <div  className='h-[3rem] w-[9rem] px-4 bg-gray-900/20  text-white rounded-xl flex justify-center items-center mx-4'>Action</div>
          <div className='h-[3rem] w-[9rem] px-4 bg-gray-900/20  text-white rounded-xl flex justify-center items-center mx-4'>Drama</div>
          <div className='h-[3rem] w-[9rem] px-4 bg-gray-900/20  text-white rounded-xl flex justify-center items-center mx-4'>Comedy</div>
        </div>
        <div className=' justify-center flex m-4 text-white'>
          <input onChange={handleSearch} value={search} type="text"placeholder='Search Movies ' className='h-[3rem] w-[18rem] px-4 bg-gray-900/20 outline-none text-white rounded-xl' />
        </div>
        <div className='border m-8'>
          <table className='w-full  text-center'>
            <thead className='border-b-2'>
        
              <tr>
              <th>Name</th>
              <div className='flex justify-center'>
              <div onClick={sortIncreasing} className='m-2'><i class="fa-solid fa-arrow-up"></i></div>
              <th className='m-2'>Rating</th>
              <div onClick={sortDecreasing} className='m-2'><i class="fa-solid fa-arrow-down"></i></div>
              </div>
              <th>Rating</th>
              <th>Popularity</th>
              <th>Genre</th>
              </tr>
            </thead>
            <tbody>
            
             {watchlist.filter((movieObj)=>{
              return movieObj.original_title.toLowerCase().includes(search.toLocaleLowerCase())
             }).map((movieObj)=>{
              
              
               return  <tr className='border-b-2'>
               <td className='flex items-center px-6 p-4'>
                 <img className='h-[4rem] w-[8rem]' src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movieObj.poster_path}`} alt="" />
                 <div className='mx-10'>
                   {movieObj.title}
                 </div>
               </td>
               <td>{movieObj.vote_average}</td>
               <td>{movieObj.popularity}</td>
               <td>{genreid[movieObj.genre_ids[0]]}</td>
               
               <td className='text-red-800'>&#10060;</td>
                
               
               
               
             </tr>
               
              
  
               
             })}

           
             
  
              
              

            </tbody>
          </table>
        </div>
        </>
    </div>
  )
}

export default WatchList