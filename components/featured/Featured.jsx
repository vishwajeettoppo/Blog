import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Featured = () => {
  return (
    <div className='mt-10'>
        <h1 className=' text-6xl'><b>Hey, Vishwajeet here. </b>Discover my stories and creative ideas.</h1>
        <div className="flex mt-10">
            <div className='w-1/2 h-80 min-w-min'>
                <Image className='object-cover aspect-video rounded-xl' src='https://images.unsplash.com/photo-1684138941724-319bb655748c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60' alt="image" width={500} height={500}/>
            </div>
            <div className='flex flex-col w-1/2 px-4'>
                <b className=' text-3xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</b>
                <p className=' text-gray-700 mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos dolorem laudantium, eum assumenda cupiditate quas ea nobis eveniet neque omnis sapiente. Quasi facere aut labore fuga? Labore eaque odio accusantium.</p>
                <Link href={'/'} className='mt-2 text-sm border-b-2 border-red-400 max-w-max px-1 rounded-sm'>Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default Featured