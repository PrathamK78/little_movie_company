import React, {  } from 'react'
import BannerHome from '../components/BannerHome'
import { useSelector } from 'react-redux'
//import Card from '../components/Card'
import HorizontalScrollCard from '../components/HorizontalScrollCard'
// import axios from 'axios'
import useFetch from '../hooks/useFetch'

const Home = () => {
  const trendingData = useSelector(state=>state.lmcData.bannerData)
  const {data: nowPlayingData} = useFetch('/movie/now_playing')
  const {data: topRatedData} = useFetch('/movie/top_rated')
  const {data: upcomingData} = useFetch('/movie/upcoming')
  const {data: tvPopData} = useFetch('/tv/popular')
  // const {data: tvAiringData} = useFetch('/tv/airing_today') 


  return (
    <>
      <BannerHome/>
      <HorizontalScrollCard data={trendingData} heading={"Tabahi Movies and Shows"} trending={true}/>
      <HorizontalScrollCard data={nowPlayingData} heading={"Now in Cinemas"} media_type={'movie'}/>
      <HorizontalScrollCard data={topRatedData} heading={"Top ki Movies"} media_type={'movie'}/>
      <HorizontalScrollCard data={upcomingData} heading={"Aane Vali Hai"} media_type={'movie'}/>
      <HorizontalScrollCard data={tvPopData} heading={"Mast TV Shows"} media_type={'tv'}/>
      {/* <HorizontalScrollCard data={tvAiringData} heading={"Aaj TV Par"}/> */}
    </>
  )
}

export default Home