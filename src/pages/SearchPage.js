import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Card from '../components/Card';

const SearchPage = () => {
  const location = useLocation();
  const [data,setData] = useState([])
  const [page,setPage] = useState(1)

  const fetchData = async () => {
    try{
      //!what is the params? params:{}??
      const response = await axios.get(`/search/collection`,{
        params:{
          query: location?.search?.slice(3),
          page : page
        }
      })
      setData((preve)=>{
        return[
          ...preve,
          ...response.data.results
        ]
      })
      //setTotalPageNo(response.data.total_pages) // this is because we need to know the total number of pages to know when to stop fetching data
    }
    catch(error){
      console.log("error",error)
    }
  }

  useEffect(() => {
    setPage(1);
    setData([]); //clear the data
    fetchData()
  }, [location?.search]) //when location changes, again call the api

  const handleScroll=()=>{
    if((window.innerHeight + window.scrollY)>=document.body.offsetHeight ){
      setPage(preve=>preve+1)
    } 
  }

  useEffect(() => {
    fetchData()
  },[page])

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  }, [])

  // console.log("location,)

  return (
    <>
    <div className='pt-32 py-16'>
      <div>
        <input
        type='text'
        placeholder='Search here...'
        onChange={(e)=>{
           
        }}/>
      </div>
      <div className='container mx-auto'>
        <h3 className='capitalize text-lg lg:text-xl font-semibold my-3'>
              Search Results 
        </h3>

        <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'>
            {
              data.map((searchData,index)=>{
                return (
                  <Card data={searchData} key={searchData.id+"search"} media_type={searchData.media_type}/>
                ) 
              })
            }
        </div>
      </div>
    </div>
    </>
  )
}

export default SearchPage