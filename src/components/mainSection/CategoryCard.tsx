import { PlayCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

export interface Category{
    title: string
    description: string
    bgColorClassName: string
}

interface Props{
    category: Category
}

const CategoryCard: React.FC<Props> = ({ category }) => {
  return (
    <div className={`hover:scale-105 transition-all duration-75 w-full h-[250px] ${category.bgColorClassName} rounded-3xl flex flex-col justify-between hover:shadow-lg`}>
        <div className='p-7'>
            <h1 className='font-bold text-white text-6xl'>{category.title}</h1>
            <p className='text-2xl text-gray-light opacity-45'>{category.description}</p>
        </div>
        <PlayCircleIcon className='text-white w-8 h-8 m-3'/>
    </div>
  )
}

export default CategoryCard