import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../components/Card'

const ExplorePage = () => {
  const params = useParams()
  const [pageNo, setPageNo] = useState(1) //Page number =1 by default
  const [data, setData] = useState([])
  const [totalPageNo, setTotalPageNo] = useState(0) //why is this here? because we need to know the total number of pages to know when to stop fetching data

  console.log("params",params.explore)

  const fetchData = async () => {
    try{
      //!what is the params? params:{}??
      const response = await axios.get(`/discover/${params.explore}`,{
        params:{
          page : pageNo
        }
      })
      setData((preve)=>{
        return[
          ...preve,
          ...response.data.results
        ]
      })
      setTotalPageNo(response.data.total_pages) // this is because we need to know the total number of pages to know when to stop fetching data
    }
    catch(error){
      console.log("error",error)
    }
  }

  const handleScroll=()=>{
    if((window.innerHeight + window.scrollY)>=document.body.offsetHeight ){
      setPageNo(preve=>preve+1)
    }
    
  }

  useEffect(() => {
    fetchData()
  }, [pageNo]) //ehen pageNo changes, again call the api

  useEffect(() => {
    setPageNo(1);
    setData([]); //clear the data
    fetchData()
  },[params.explore])

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  }, [])

  return (
    <>
      <div className='pt-32'>
        <div className='container mx-auto'>
          <h3 className='capitalize text-lg lg:text-xl font-semibold my-3'>
            Badiya {params.explore} shows
          </h3>
          <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6'>
            {
              data.map((exploreData,index)=>{
                return (
                  <Card data={exploreData} key={exploreData.id+"exploreSection"} media_type={params.explore}/>
                ) 
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ExplorePage