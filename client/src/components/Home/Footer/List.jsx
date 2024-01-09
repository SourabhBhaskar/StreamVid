// List.js
import React from 'react';

function List({ listOfLinks }) {
  return (
    <div>
      <h1 className='font-semibold'>Must Watch Movies</h1>
      <ul>
        {listOfLinks.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
