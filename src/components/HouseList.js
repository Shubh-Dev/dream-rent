import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr';
import { fetchHouses } from '../redux/house/houses';
import House from './House';

const scroll = (element, speed, distance, step) => {
  let scrollAmount = 0;
  const slideTimer = setInterval(() => {
    element.scrollLeft += step; // eslint-disable-line no-param-reassign
    scrollAmount += Math.abs(step);
    if (scrollAmount >= distance) {
      clearInterval(slideTimer);
    }
  }, speed);
};

const HouseList = () => {
  const contentWrapper = useRef(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);
  const houses = useSelector((state) => state.houses);
  return (
    <div className="homepage-container">
      {(() => {
        if (houses.length > 3) {
          return (
            <div className="pre-next-buttons">
              <button className="btn btn-prev" type="button" onClick={() => scroll(contentWrapper.current, 25, 100, -1000)}>
                <GrCaretPrevious size={25} />
              </button>
              <button className="btn btn-next" type="button" onClick={() => scroll(contentWrapper.current, 25, 100, 1000)}>
                <GrCaretNext size={25} />
              </button>
            </div>
          );
        }
        return null;
      })()}
      <div className="homepage-main-titles d-flex flex-column text-center">
        <h1>LATEST HOUSES</h1>
        <h2 className="dgrey-text">Please select a house model</h2>
        <div className="mt-3 d-flex justify-content-center">
          <div className="bottom-border" />
        </div>
      </div>
      <div className="main-list" ref={contentWrapper}>
        {houses.map((house) => (
          <House
            key={house.id}
            index={house.id}
            image={house.image_path}
            type={house.house_type}
            address={house.address}

          />
        ))}
      </div>
    </div>
  );
};

export default HouseList;
