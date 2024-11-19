import React, { Fragment } from 'react'
import Header from './Header'
import CategoryCard, { Category } from './CategoryCard'
import Recent from './Recent'
import Recommendation from './Recommendation'

const MainSection: React.FC = () => {
    const categoriesList: Category[] = [
        { title: "Get Lost", description: "in your music.", bgColorClassName: "neuromancer"},
        { title: "Mellow", description: "beats.", bgColorClassName: "blue-raspberry"}
    ]
  return (
    <div className='w-full'>
        <Header/>
        <div className='overflow-hidden mx-auto grid grid-cols-2 gap-10 p-5'>
            {
                categoriesList.map(cat=>(
                    <Fragment key={cat.title}>
                        <CategoryCard category={cat}/>
                    </Fragment>
                ))
            }
        </div>
        {/* recent and recommendation sections */}
        <div className='flex gap-16 px-5'>
            <Recent/>
            <Recommendation/>
        </div>
    </div>
  )
}

export default MainSection