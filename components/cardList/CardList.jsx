import React from 'react'
import Card from '../card/Card'

const getData= async(cat)=>{
  const res=await fetch(`http://localhost:3000/api/posts?cat=${cat || ""}`,{
    cache:'no-store'
  }); 
  if(!res.ok){
    throw new Error('Something went wrong!')
  }
  return res.json()
}

const CardList = async({cat}) => {
  
  const data=await getData(cat);
  
  return (
    <div className='mt-8'>
      <p className='text-3xl text-gray-700'>Recent Posts</p>
        {data?.map((item)=>(
          <Card item={item} key={item._id} />
        ))}
    </div>
  )
}

export default CardList