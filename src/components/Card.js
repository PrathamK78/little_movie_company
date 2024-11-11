import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'
import DetailsPage from '../pages/DetailsPage'

const Card = ({data,trending,index,media_type}) => {

    const imageURL = useSelector(state=>state.lmcData.imageURL)
    const mediaType = data.media_type ?? media_type

  return (
    <Link to={"/"+mediaType+"/"+data.id} className='w-full min-w-[230px] max-w-[230px] h-80 block overflow-hidden rounded relative hover:scale-105 transition-all'>

        {
          data?.poster_path ? (
            <img
                src={imageURL+data?.poster_path}
                // className='w-full h-full object-cover'
            />
          )
          : (
            <div className='bg-slate-800 w-full h-full flex justify-center items-center'>
              Rendering image
            </div>
          )
        }
        <img
            src={imageURL+data?.poster_path}
        />
        <div className='absolute top-4'>
        {
          trending&&(
            <div className='py-1 px-4 bg-black/50 backdrop:blur-3xl rounded-r-full'>
              #{index} Trending
            </div>
          )
        }
        </div>
        <div className='absolute bottom-0 h-15 backdrop:blur-3xl w-full bg-black/60 p-2'>
          <h2 className='text-ellipsis line-clamp-1 text-lg font-semibold'>{data.title || data?.name}</h2>
          <div className='text-sm text-neutral-400 flex justify-between items-center'>
            <p>{moment(data.release_date).format("LL")}</p>
            <p className='bg-black rounded-sm text-green-400 px-1'>{Number(data.vote_average).toFixed(1)}</p>
          </div>
        </div>
    </Link>
  )
}

export default Card