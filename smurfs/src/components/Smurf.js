import React from 'react';

const Smurf = props => {
  return (
    <div className='smurf-wrapper'>
      <h3>{props.smurf.name}</h3>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
      <div className='smurf-buttons'>
        <button
          onClick={() => {
            props.delSmurf(props.smurf.id);
          }}
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export default Smurf;
