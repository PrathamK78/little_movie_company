import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaArrowRight,FaArrowLeft } from "react-icons/fa6";


const BannerHome = () => {

    const bannerData = useSelector(state=>state.lmcData.bannerData)
    const imageURL = useSelector(state=>state.lmcData.imageURL)
    const [currentImage,setCurrentImage] = useState(0)
    // console.log("banner",bannerData)
    const handleNext = ()=>{
        if(currentImage<bannerData.length-1){
            setCurrentImage(prev=>prev+1)
        }
    }

    const handlePrevious = ()=>{
        if(currentImage>0){
            setCurrentImage(prev=>prev-1)
        }
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(currentImage<bannerData.length-1){
                handleNext()
            }else{
                setCurrentImage(0)
            }
        },3000)

        return ()=>clearInterval(interval)

    },[bannerData,imageURL])

  return (
    <>
    <section className='w-full h-full'>
        <div className='flex min-h-full max-h-[97vh] overflow-hidden'>
            {
                bannerData.map((data,index)=>{
                    return (
                        <div key={data.id+"bannerHome"+index} className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all' style={{transform:`translateX(-${currentImage*100}%)`}}>
                            <div className='w-full h-full'>
                                <img
                                    src={imageURL+data.backdrop_path}
                                    className='h-full w-full object-cover'
                                />
                            </div>

                            {/* scroll button*/}
                            <div className='absolute top-0 w-full h-full hidden items-center justify-between px-4 group-hover:lg:flex'>
                                <button onClick={handlePrevious} className='bg-white p-2 rounded-full text-lg z-10 text-black hover:bg-white hover:scale-105 transition-all'>
                                    <FaArrowLeft/>
                                </button>
                                <button onClick={handleNext} className='bg-white p-2 rounded-full text-lg z-10 text-black hover:bg-white hover:scale-105 transition-all'>
                                    <FaArrowRight/>
                                </button>
                            </div>

                            <div className='absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent'>
                            </div>
                            <div className='container mx-auto'>
                                <div className=' w-full absolute bottom-0 max-w-md px-3'>
                                    <h2 className='font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl'>{data?.title || data?.name}</h2>
                                    <p className='text-ellipsis line-clamp-3 my-5'>{data.overview}</p>
                                    <div className='flex items-center gap-4 my-3'>
                                        <p>Rating: {Number(data.vote_average).toFixed(1)}</p>
                                        <span>|</span>
                                        <p>Genre: {(data.genre_ids)}</p>
                                    </div>
                                    <button className='bg-white my-2 px-4 py-2 text-black font-bold rounded-full mt-4 hover:bg-blue-700 hover:text-white transition-all hover:scale-110 shadow-md'>
                                        Play Now 
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
    </section>
    </>
  )
}

export default BannerHome