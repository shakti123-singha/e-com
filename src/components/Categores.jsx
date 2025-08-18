import React from 'react'
import kids2 from '../assets/images/kids2.jpg'
import men from '../assets/images/men.jpg'
import women from '../assets/images/women.jpg'

const category = [
  {
    title: 'men',
    imageUrl: men
  },
  {
    title: 'women',
    imageUrl: women
  },
  {
    title: 'kids',
    imageUrl: kids2
  }
]

function Categores() {
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 '>
      {category.map((catego, index) => (
        <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer '>
          <img src={catego.imageUrl} alt="" className='w-full h-full object-cover rounded-lg shadow-md'/>
          <div className='absolute top-20 left-12'>
            <p className='text-xl font-bold'>{catego.title}</p>
            <p className='text bg-gray-500'>view all</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Categores