import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>House Details</h1>
      ID:
      {id}
    </div>
  );
};

export default Details;
