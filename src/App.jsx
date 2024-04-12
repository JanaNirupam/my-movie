import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import WatchList from './components/WatchList'
import {BrowserRouter, Routes ,Route } from 'react-router-dom'
import Banner from './components/Banner'

function App() {

  let [watchlist , setWatchList]=useState([])

  let handleAddtoWathList=(movieObj)=>{
        let newWatchList=[...watchlist , movieObj]
        localStorage.setItem('moviesApp',JSON.stringify(newWatchList))
        setWatchList(newWatchList)
        console.log(newWatchList)
  }
  
  let handleRemoveFromWatchList=(movieObj)=>{
    let filteredWatchList=watchlist.filter((movie)=>{
      return movie.id !=movieObj.id

    })
    localStorage.setItem('moviesApp',JSON.stringify(filteredWatchList))
    setWatchList(filteredWatchList)
    console.log(filteredWatchList)
    
  }
  
  useEffect(()=>{
    let moviesFromLocalStorage=localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage){
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
  },[])

  return (
    <>
      <div>
        <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path='/' element={
        <>
        <Banner/><Movies watchlist={watchlist} handleAddtoWatchList={handleAddtoWathList} handleRemoveFromWatchList={handleRemoveFromWatchList}/></>}/>

        <Route path='/WatchList' element={<WatchList watchlist={watchlist} setWatchList={setWatchList}/>}/>

       
       

       </Routes>

       </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
