import React, { Fragment } from 'react';
import Header from './Header';
import CategoryCard, { Category } from './CategoryCard';
import Recent from './Recent';
import Recommendation from './Recommendation';

const MainSection: React.FC = () => {
  const categoriesList: Category[] = [
    { title: 'Get Lost', description: 'in your music.', bgColorClassName: 'neuromancer' },
    { title: 'Mellow', description: 'beats.', bgColorClassName: 'blue-raspberry' },
  ];

  return (
    <div className="w-full">
      {/* header */}
      <Header />
      <div className="overflow-hidden mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 p-5">
        {categoriesList.map((cat) => (
          <Fragment key={cat.title}>
            <CategoryCard category={cat} />
          </Fragment>
        ))}
      </div>

      {/* Recent and Recommendation Sections */}
      <div className="flex flex-col lg:flex-row gap-10 px-5">
        <Recent />
        <Recommendation />
      </div>
    </div>
  );
};

export default MainSection;
