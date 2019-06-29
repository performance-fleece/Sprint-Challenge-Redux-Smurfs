import React from 'react';
import Smurf from './Smurf';

const SmurfList = props => {
  return (
    <div className='smurf-list'>
      {props.smurfs.map(smurf => {
        return <Smurf smurf={smurf} key={smurf.id} delSmurf={props.delSmurf} />;
      })}
    </div>
  );
};

export default SmurfList;
